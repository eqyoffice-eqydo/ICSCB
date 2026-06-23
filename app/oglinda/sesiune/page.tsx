"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Scan, AlertCircle, Loader2 } from "lucide-react";
import { useFaceSession } from "@/lib/mirror/useFaceSession";

const CAPTURE_STORAGE_KEY = "icscb_mirror_capture";

export default function OglindaSesiunePage() {
  const router = useRouter();
  const {
    videoRef,
    canvasRef,
    status,
    error,
    isFaceDetected,
    qualityHints,
    isReadyToCapture,
    startCamera,
    stopCamera,
    captureReading,
  } = useFaceSession();

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const handleCapture = useCallback(() => {
    const data = captureReading();
    if (!data) return;
    try {
      sessionStorage.setItem(CAPTURE_STORAGE_KEY, JSON.stringify(data));
      stopCamera();
      router.push("/oglinda/reading");
    } catch {
      /* sessionStorage not available */
    }
  }, [captureReading, stopCamera, router]);

  const statusLabel = {
    idle: "Se pregătește camera…",
    initializing: "Se încarcă modelul facial…",
    detecting: isFaceDetected ? "Față detectată" : "Caută față…",
    error: "Eroare",
  }[status];

  return (
    <div className="min-h-screen bg-midnight flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
        <Link
          href="/oglinda"
          onClick={() => stopCamera()}
          className="flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
        >
          <ArrowLeft size={14} />
          Oglinda
        </Link>
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status === "detecting" && isFaceDetected
                ? "bg-emerald-400 animate-pulse"
                : status === "detecting"
                ? "bg-amber-400 animate-pulse"
                : status === "error"
                ? "bg-red-400"
                : "bg-white/20 animate-pulse"
            }`}
          />
          <span className="text-xs text-white/50 font-medium">{statusLabel}</span>
        </div>
        <div className="w-20" />
      </div>

      {/* Camera view */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 gap-6">
        {status === "error" ? (
          <div className="max-w-sm text-center">
            <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-5">
              <AlertCircle size={26} className="text-red-400" />
            </div>
            <h3 className="text-white font-bold mb-3">Camera nu este disponibilă</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{error}</p>
            <button
              onClick={() => startCamera()}
              className="px-6 py-3 bg-cobalt text-white text-sm font-semibold rounded-xl hover:bg-cobalt-dark transition-colors"
            >
              Încearcă din nou
            </button>
          </div>
        ) : (
          <>
            {/* Camera canvas */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden bg-midnight-dark border border-white/10">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                playsInline
                muted
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />

              {/* Face oval guide */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`border-2 rounded-full transition-colors duration-300 ${
                    isFaceDetected && isReadyToCapture
                      ? "border-cobalt-light/70"
                      : isFaceDetected
                      ? "border-amber-400/50"
                      : "border-white/20"
                  }`}
                  style={{ width: "55%", height: "75%" }}
                />
              </div>

              {/* Loading overlay */}
              {(status === "idle" || status === "initializing") && (
                <div className="absolute inset-0 bg-midnight-dark/80 flex flex-col items-center justify-center">
                  <Loader2 size={32} className="text-cobalt-light animate-spin mb-3" />
                  <p className="text-white/60 text-sm">
                    {status === "idle" ? "Inițializare…" : "Se încarcă modelul facial (5–10s)…"}
                  </p>
                </div>
              )}
            </div>

            {/* Quality hints */}
            <div className="h-8 flex items-center justify-center">
              {qualityHints.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {qualityHints.map((hint) => (
                    <span
                      key={hint}
                      className="text-xs font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/25 rounded-full px-3 py-1"
                    >
                      {hint}
                    </span>
                  ))}
                </div>
              ) : isReadyToCapture ? (
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 rounded-full px-3 py-1">
                  Gata pentru analiză
                </span>
              ) : null}
            </div>

            {/* Capture button */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleCapture}
                disabled={!isReadyToCapture}
                className={`flex items-center gap-3 px-10 py-4 font-bold rounded-xl transition-all duration-200 text-sm ${
                  isReadyToCapture
                    ? "bg-cobalt text-white hover:bg-cobalt-dark shadow-lg shadow-cobalt/30 scale-100 hover:scale-105"
                    : "bg-white/8 text-white/30 cursor-not-allowed"
                }`}
              >
                <Scan size={18} />
                Analizează
              </button>
              <p className="text-xs text-white/30 text-center max-w-xs">
                Privește natural spre cameră, cu fața centrată în oval.
                Instrumentul captează 60 de cadre înainte de analiză.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
