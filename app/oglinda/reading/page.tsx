"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import { analyzeMirrorSessionV2 } from "@/lib/mirror/engine";
import { CHARACTER_LIST } from "@/lib/mirror/catalog";
import { DIRECTION_LIST } from "@/lib/mirror/directions";
import { buildAlignedRecommendation } from "@/lib/mirror/alignment";
import type { MirrorAnalysisResult, CharacterResult, Direction } from "@/lib/mirror/types";
import type { MirrorCapture } from "@/lib/mirror/types";

const CAPTURE_STORAGE_KEY = "icscb_mirror_capture";

const INTENSITY_COLORS = {
  calm: "text-emerald-600 bg-emerald-50 border-emerald-100",
  mild: "text-amber-600 bg-amber-50 border-amber-100",
  moderate: "text-orange-600 bg-orange-50 border-orange-100",
} as const;

const INTENSITY_LABELS = {
  calm: "Calmă",
  mild: "Ușor activă",
  moderate: "Activă",
} as const;

function CharacterCard({ char, variant = "predominant" }: { char: CharacterResult; variant?: "predominant" | "structural" | "expression" }) {
  const styles = {
    predominant: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200",
    structural: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200",
    expression: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
  };
  const tagStyles = {
    predominant: "bg-amber-100 text-amber-700",
    structural: "bg-violet-100 text-violet-700",
    expression: "bg-blue-100 text-blue-700",
  };
  const tagLabels = {
    predominant: "Caracter predominant",
    structural: "Profil structural",
    expression: "Profil expresiv",
  };

  return (
    <div className={`rounded-2xl border p-7 ${styles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 ${tagStyles[variant]}`}>
          {tagLabels[variant]}
        </span>
        <span className="text-xs font-semibold text-slate-400">{char.confidence}%</span>
      </div>
      <h3 className="text-2xl font-bold text-midnight mb-1">{char.title}</h3>
      {char.subtitle && <p className="text-sm text-slate-500 mb-4">{char.subtitle}</p>}
      {char.observedText && (
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{char.observedText}</p>
      )}
      {variant === "predominant" && (
        <div className="space-y-4 mt-5 pt-5 border-t border-amber-200/60">
          {char.gift && (
            <div>
              <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1.5">Dar</p>
              <p className="text-xs text-slate-600 leading-relaxed">{char.gift}</p>
            </div>
          )}
          {char.shadow && (
            <div>
              <p className="text-[10px] font-bold text-orange-700 uppercase tracking-widest mb-1.5">Umbră</p>
              <p className="text-xs text-slate-600 leading-relaxed">{char.shadow}</p>
            </div>
          )}
          {char.innerNeed && (
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nevoie de profunzime</p>
              <p className="text-xs text-slate-600 leading-relaxed">{char.innerNeed}</p>
            </div>
          )}
          {char.introspectionQuestion && (
            <div className="bg-amber-100/60 rounded-xl p-4 mt-4">
              <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">Întrebare de contemplat</p>
              <p className="text-sm font-medium text-midnight leading-relaxed">{char.introspectionQuestion}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function OglindaReadingPage() {
  const router = useRouter();
  const [result, setResult] = useState<MirrorAnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<"results" | "direction">("results");
  const [chosenDirection, setChosenDirection] = useState<Direction | null>(null);
  const [recommendation, setRecommendation] = useState<ReturnType<typeof buildAlignedRecommendation> | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CAPTURE_STORAGE_KEY);
      if (!raw) { router.push("/oglinda"); return; }
      const capture: MirrorCapture = JSON.parse(raw);
      const analysis = analyzeMirrorSessionV2({
        blendshapes: capture.blendshapes,
        landmarks: capture.landmarks,
      });
      setResult(analysis);
    } catch {
      router.push("/oglinda");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleChooseDirection = useCallback((direction: Direction) => {
    if (!result) return;
    setChosenDirection(direction);
    const rec = buildAlignedRecommendation({
      observedCharacter: result.predominantCharacter,
      feltCharacter: null,
      chosenDirection: direction,
      expressiveNuance: result.expressiveNuance,
    });
    setRecommendation(rec);
    setStep("direction");
  }, [result]);

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cobalt border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/50 text-sm">Se analizează…</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="bg-midnight border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/oglinda" className="flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors">
          <ArrowLeft size={14} />
          Oglinda
        </Link>
        <div className="text-center">
          <p className="text-xs font-bold text-cobalt-light uppercase tracking-widest">Citire</p>
        </div>
        <Link
          href="/oglinda/sesiune"
          className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
        >
          <RefreshCw size={13} />
          Repetă
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">

        {/* Overall */}
        <div className="bg-midnight rounded-2xl p-7 text-center">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-3">
            {result.overallTitle}
          </p>
          <p className="text-white/65 text-sm leading-relaxed">{result.overallText}</p>
        </div>

        {/* Predominant character */}
        {result.predominantCharacter && (
          <CharacterCard char={result.predominantCharacter} variant="predominant" />
        )}

        {/* Face shape */}
        {result.faceShapeReading && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Forma facială</p>
            <h4 className="text-lg font-bold text-midnight mb-2">{result.faceShapeReading.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{result.faceShapeReading.text}</p>
          </div>
        )}

        {/* Zone cards */}
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Cele 4 zone</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.zones.map((zone) => (
              <div key={zone.key} className={`rounded-xl border p-5 ${INTENSITY_COLORS[zone.intensity]}`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest">{zone.name}</p>
                  <span className="text-[10px] font-semibold">{INTENSITY_LABELS[zone.intensity]}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">{zone.reading}</p>
                {zone.introspectionQuestion && (
                  <p className="text-[11px] font-medium mt-3 opacity-70 italic">{zone.introspectionQuestion}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Structural + expression (secondary) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {result.structuralCharacter && (
            <CharacterCard char={result.structuralCharacter} variant="structural" />
          )}
          {result.expressionProfile && (
            <CharacterCard char={result.expressionProfile} variant="expression" />
          )}
        </div>

        {/* Direction picker */}
        {step === "results" && (
          <div className="bg-white rounded-2xl border border-slate-100 p-7">
            <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">
              Recomandare aliniată
            </p>
            <h3 className="text-lg font-bold text-midnight mb-2">Ce vrei să cultivi azi?</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Alege o direcție și vei primi o recomandare de practică adaptată observației de acum.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {DIRECTION_LIST.map((d) => (
                <button
                  key={d.key}
                  onClick={() => handleChooseDirection(d)}
                  className="text-left rounded-xl border border-slate-100 bg-surface p-3.5 hover:border-cobalt/30 hover:bg-cobalt-50 transition-all group"
                >
                  <p className="text-sm font-bold text-midnight group-hover:text-cobalt transition-colors">{d.title}</p>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-2">{d.shortText}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommendation result */}
        {step === "direction" && recommendation && chosenDirection && (
          <div className="bg-cobalt-50 rounded-2xl border border-cobalt/20 p-7">
            <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-1">
              Spre {chosenDirection.title}
            </p>
            <h3 className="text-xl font-bold text-midnight mb-4">{recommendation.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{recommendation.text}</p>

            {recommendation.recommendedPractice && (
              <div className="bg-white rounded-xl p-5 border border-cobalt/10 mb-4">
                <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">Practică</p>
                <p className="text-sm font-semibold text-midnight mb-2">{recommendation.recommendedPractice}</p>
                {recommendation.practiceText && (
                  <p className="text-xs text-slate-500 leading-relaxed">{recommendation.practiceText}</p>
                )}
              </div>
            )}

            {recommendation.introspectionQuestion && (
              <div className="bg-cobalt/8 rounded-xl p-4">
                <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">Întrebare de contemplat</p>
                <p className="text-sm font-medium text-midnight leading-relaxed">
                  {recommendation.introspectionQuestion}
                </p>
              </div>
            )}

            <button
              onClick={() => { setStep("results"); setChosenDirection(null); setRecommendation(null); }}
              className="mt-5 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors flex items-center gap-1"
            >
              ← Alege altă direcție
            </button>
          </div>
        )}

        {/* Footer note */}
        <div className="pb-6 text-center">
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Această observație are caracter orientativ. Nu constituie diagnostic medical sau psihologic.
            Toate datele sunt procesate local și nu sunt stocate sau transmise.
          </p>
          <Link
            href="/oglinda/sesiune"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors"
          >
            <RefreshCw size={13} />
            Repetă observația
          </Link>
          <span className="mx-3 text-slate-300">·</span>
          <Link href="/oglinda" className="text-xs font-semibold text-slate-400 hover:text-midnight transition-colors">
            Înapoi la Oglindă
          </Link>
          <span className="mx-3 text-slate-300">·</span>
          <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors">
            Discută cu un cercetător <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}
