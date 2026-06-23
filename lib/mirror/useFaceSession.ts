"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MirrorCapture, LandmarkMap, Blendshapes } from "./types";

const WASM_CDN = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

const STRUCTURE_BUFFER = 60;
const EXPRESSION_BUFFER = 30;

const KEY_LM_INDICES = [
  10, 152, 234, 454, 1, 6, 61, 291, 33, 133, 362, 263,
  55, 107, 336, 285, 172, 397, 116, 345, 21, 251,
];

function medianOfArr(arr: number[]): number {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

type LandmarkFrame = Record<number, { x: number; y: number; z: number }>;

export type FaceSessionStatus = "idle" | "initializing" | "detecting" | "error";

export interface UseFaceSessionReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  status: FaceSessionStatus;
  error: string | null;
  isFaceDetected: boolean;
  qualityHints: string[];
  isReadyToCapture: boolean;
  startCamera: () => Promise<void>;
  stopCamera: () => void;
  captureReading: () => MirrorCapture | null;
}

export function useFaceSession(): UseFaceSessionReturn {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const landmarkerRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const activeRef = useRef(false);
  const blendshapesBufferRef = useRef<Blendshapes[]>([]);
  const landmarksBufferRef = useRef<LandmarkFrame[]>([]);
  const callIdRef = useRef(0);
  const prevHintsKeyRef = useRef("");
  const prevReadyRef = useRef<boolean | null>(null);

  const [status, setStatus] = useState<FaceSessionStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const [qualityHints, setQualityHints] = useState<string[]>([]);
  const [isReadyToCapture, setIsReadyToCapture] = useState(false);

  const runDetectionLoop = useCallback(() => {
    function tick() {
      if (!activeRef.current) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const landmarker = landmarkerRef.current;

      if (!video || !canvas || !landmarker || video.readyState < 2 || !video.videoWidth || !video.videoHeight) {
        requestAnimationFrame(tick);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const displayW = rect.width;
      const displayH = rect.height;
      if (!displayW || !displayH) { requestAnimationFrame(tick); return; }

      const targetW = Math.round(displayW * dpr);
      const targetH = Math.round(displayH * dpr);
      if (canvas.width !== targetW) canvas.width = targetW;
      if (canvas.height !== targetH) canvas.height = targetH;

      const ctx = canvas.getContext("2d");
      if (!ctx) { requestAnimationFrame(tick); return; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      let srcX = 0, srcY = 0, srcW = vw, srcH = vh;
      if (vw / vh > displayW / displayH) {
        srcW = vh * (displayW / displayH);
        srcX = (vw - srcW) / 2;
      } else {
        srcH = vw * (displayH / displayW);
        srcY = (vh - srcH) / 2;
      }

      ctx.save();
      ctx.translate(displayW, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, srcX, srcY, srcW, srcH, 0, 0, displayW, displayH);
      ctx.restore();

      try {
        const result = landmarker.detectForVideo(video, performance.now());
        const hasFace = (result.faceLandmarks?.length ?? 0) > 0;
        setIsFaceDetected(hasFace);

        if (hasFace) {
          const lms = result.faceLandmarks[0];
          const keyLmFrame: LandmarkFrame = {};
          KEY_LM_INDICES.forEach((idx) => {
            const p = lms[idx];
            if (p) keyLmFrame[idx] = { x: p.x, y: p.y, z: p.z };
          });

          let frameAccepted = true;
          const lm234 = keyLmFrame[234], lm454 = keyLmFrame[454];
          const lm33 = keyLmFrame[33], lm263 = keyLmFrame[263];
          if (lm234 && lm454 && lm33 && lm263) {
            const dx = lm234.x - lm454.x;
            const dy = lm234.y - lm454.y;
            const faceWidth = Math.sqrt(dx * dx + dy * dy);
            const tilt = Math.abs(lm33.y - lm263.y) / (faceWidth || 0.001);
            if (tilt > 0.06) frameAccepted = false;
            if (frameAccepted) {
              const lmBuf = landmarksBufferRef.current;
              if (lmBuf.length >= 5) {
                const recentWidths = lmBuf.slice(-5).map((f) => {
                  const ddx = (f[234]?.x ?? 0) - (f[454]?.x ?? 0);
                  const ddy = (f[234]?.y ?? 0) - (f[454]?.y ?? 0);
                  return Math.sqrt(ddx * ddx + ddy * ddy);
                });
                const meanW = recentWidths.reduce((a, b) => a + b, 0) / recentWidths.length;
                if (Math.abs(faceWidth - meanW) / (meanW || 0.001) > 0.2) frameAccepted = false;
              }
            }
          }

          if (frameAccepted) {
            landmarksBufferRef.current.push(keyLmFrame);
            if (landmarksBufferRef.current.length > STRUCTURE_BUFFER)
              landmarksBufferRef.current.shift();

            if (result.faceBlendshapes?.length > 0) {
              const bs: Blendshapes = {};
              result.faceBlendshapes[0].categories.forEach(
                (c: { categoryName: string; score: number }) => { bs[c.categoryName] = c.score; }
              );
              blendshapesBufferRef.current.push(bs);
              if (blendshapesBufferRef.current.length > EXPRESSION_BUFFER)
                blendshapesBufferRef.current.shift();
            }
          }

          ctx.fillStyle = "rgba(107, 138, 255, 0.45)";
          lms.forEach((lm: { x: number; y: number }) => {
            const px = (1 - (lm.x * vw - srcX) / srcW) * displayW;
            const py = ((lm.y * vh - srcY) / srcH) * displayH;
            ctx.beginPath();
            ctx.arc(px, py, 1.2, 0, 2 * Math.PI);
            ctx.fill();
          });

          {
            const lm10 = lms[10]; const lm152 = lms[152];
            const lm234b = lms[234]; const lm454b = lms[454];
            const lm33b = lms[33]; const lm263b = lms[263];
            const faceH = lm10 && lm152 ? lm152.y - lm10.y : 0;
            const faceW = lm234b && lm454b ? Math.abs(lm234b.x - lm454b.x) : 0;
            const cX = lm234b && lm454b ? (lm234b.x + lm454b.x) / 2 : 0.5;
            const cY = lm10 && lm152 ? (lm10.y + lm152.y) / 2 : 0.5;
            const tilt = lm33b && lm263b && faceW > 0 ? Math.abs(lm33b.y - lm263b.y) / faceW : 0;

            const rawHints: string[] = [];
            if (faceH > 0.70) rawHints.push("Depărtează-te puțin");
            else if (faceH > 0 && faceH < 0.45) rawHints.push("Apropie-te puțin");
            if (Math.abs(cX - 0.5) > 0.15 || Math.abs(cY - 0.5) > 0.20) rawHints.push("Centrează fața în oval");
            if (tilt > 0.06) rawHints.push("Ține capul drept");

            const hasMinFrames = landmarksBufferRef.current.length >= 15;
            const qualityOk = rawHints.length === 0;
            const displayHints = qualityOk && !hasMinFrames ? ["Privește natural spre cameră"] : rawHints;
            const hintsKey = displayHints.join("|");
            const ready = qualityOk && hasMinFrames;

            if (hintsKey !== prevHintsKeyRef.current) { prevHintsKeyRef.current = hintsKey; setQualityHints(displayHints); }
            if (ready !== prevReadyRef.current) { prevReadyRef.current = ready; setIsReadyToCapture(ready); }
          }
        } else {
          if (prevHintsKeyRef.current !== "") { prevHintsKeyRef.current = ""; setQualityHints([]); }
          if (prevReadyRef.current !== false) { prevReadyRef.current = false; setIsReadyToCapture(false); }
        }
      } catch { /* transient detection error — skip frame */ }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, []);

  const stopCamera = useCallback(() => {
    callIdRef.current += 1;
    activeRef.current = false;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    blendshapesBufferRef.current = [];
    landmarksBufferRef.current = [];
    setIsFaceDetected(false);
    setStatus("idle");
    setError(null);
  }, []);

  const startCamera = useCallback(async () => {
    callIdRef.current += 1;
    const myCallId = callIdRef.current;
    const isCancelled = () => callIdRef.current !== myCallId;

    try {
      setStatus("initializing");
      setError(null);
      blendshapesBufferRef.current = [];
      landmarksBufferRef.current = [];

      if (!navigator.mediaDevices?.getUserMedia) {
        const isSecure = typeof window !== "undefined" && window.isSecureContext;
        throw Object.assign(
          new Error(
            isSecure
              ? "Acest browser nu suportă accesul la cameră."
              : "Camera necesită HTTPS. Accesează site-ul prin https://icscb.org"
          ),
          { name: "NotSupportedError" }
        );
      }

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });
      } catch (err) {
        const constraintErr = err as { name?: string };
        if (constraintErr?.name === "OverconstrainedError" || constraintErr?.name === "ConstraintNotSatisfiedError") {
          stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        } else throw err;
      }

      if (isCancelled()) { stream.getTracks().forEach((t) => t.stop()); return; }
      streamRef.current = stream;

      const video = videoRef.current;
      if (!video) throw new Error("Video element not mounted");
      video.srcObject = stream;

      await new Promise<void>((resolve, reject) => {
        const onMeta = () => { video.removeEventListener("loadedmetadata", onMeta); video.removeEventListener("error", onErr); resolve(); };
        const onErr = (e: Event) => { video.removeEventListener("loadedmetadata", onMeta); video.removeEventListener("error", onErr); reject(e); };
        video.addEventListener("loadedmetadata", onMeta);
        video.addEventListener("error", onErr);
        setTimeout(() => reject(new Error("Timeout")), 10000);
      });

      if (isCancelled()) return;
      await video.play();
      if (isCancelled()) return;

      if (!landmarkerRef.current) {
        const { FaceLandmarker, FilesetResolver } = await import("@mediapipe/tasks-vision");
        if (isCancelled()) return;
        const vision = await FilesetResolver.forVisionTasks(WASM_CDN);
        if (isCancelled()) return;

        const sharedOpts = { runningMode: "VIDEO" as const, numFaces: 1, outputFaceBlendshapes: true };
        let landmarker;
        try {
          landmarker = await FaceLandmarker.createFromOptions(vision, { baseOptions: { modelAssetPath: MODEL_URL, delegate: "GPU" }, ...sharedOpts });
        } catch {
          landmarker = await FaceLandmarker.createFromOptions(vision, { baseOptions: { modelAssetPath: MODEL_URL, delegate: "CPU" }, ...sharedOpts });
        }

        if (isCancelled()) { try { landmarker.close(); } catch { /* ignore */ } return; }
        landmarkerRef.current = landmarker;
      }

      if (isCancelled()) return;
      setStatus("detecting");
      activeRef.current = true;
      runDetectionLoop();
    } catch (err) {
      if (isCancelled()) return;
      const e = err as { name?: string; message?: string };
      const msg =
        e?.name === "NotAllowedError" ? "Accesul la cameră a fost refuzat. Activează camera în setările browser-ului." :
        e?.name === "NotFoundError" ? "Camera nu a fost găsită pe acest dispozitiv." :
        e?.name === "NotReadableError" ? "Camera este folosită de o altă aplicație." :
        e?.name === "NotSupportedError" ? (e.message ?? "Camera nu este disponibilă") :
        e?.message || "Camera nu este disponibilă";
      setError(msg);
      setStatus("error");
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, [runDetectionLoop]);

  const captureReading = useCallback((): MirrorCapture | null => {
    const bsBuf = blendshapesBufferRef.current;
    const lmBuf = landmarksBufferRef.current;
    if (!bsBuf.length) return null;

    const bsKeys = Object.keys(bsBuf[0]);
    const blendshapes: Blendshapes = {};
    bsKeys.forEach((k) => {
      blendshapes[k] = bsBuf.reduce((sum, f) => sum + (f[k] || 0), 0) / bsBuf.length;
    });

    let landmarks: LandmarkMap | null = null;
    if (lmBuf.length > 0) {
      landmarks = {};
      KEY_LM_INDICES.forEach((idx) => {
        landmarks![idx] = {
          x: medianOfArr(lmBuf.map((f) => f[idx]?.x ?? 0)),
          y: medianOfArr(lmBuf.map((f) => f[idx]?.y ?? 0)),
          z: medianOfArr(lmBuf.map((f) => f[idx]?.z ?? 0)),
        };
      });
    }

    return { blendshapes, landmarks, captureQuality: null };
  }, []);

  useEffect(() => {
    return () => {
      callIdRef.current += 1;
      activeRef.current = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      if (landmarkerRef.current) {
        try { landmarkerRef.current.close(); } catch { /* ignore */ }
        landmarkerRef.current = null;
      }
    };
  }, []);

  return { videoRef, canvasRef, status, error, isFaceDetected, qualityHints, isReadyToCapture, startCamera, stopCamera, captureReading };
}
