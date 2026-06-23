"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import { analyzeMirrorSessionV2 } from "@/lib/mirror/engine";
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

function CharacterCard({ char, variant = "predominant", labels }: {
  char: CharacterResult; variant?: "predominant" | "structural" | "expression"; labels: Record<string, string>;
}) {
  const styles = { predominant: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200", structural: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200", expression: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200" };
  const tagStyles = { predominant: "bg-amber-100 text-amber-700", structural: "bg-violet-100 text-violet-700", expression: "bg-blue-100 text-blue-700" };
  return (
    <div className={`rounded-2xl border p-7 ${styles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 ${tagStyles[variant]}`}>{labels[variant]}</span>
        <span className="text-xs font-semibold text-slate-400">{char.confidence}%</span>
      </div>
      <h3 className="text-2xl font-bold text-midnight mb-1">{char.title}</h3>
      {char.subtitle && <p className="text-sm text-slate-500 mb-4">{char.subtitle}</p>}
      {char.observedText && <p className="text-sm text-slate-600 leading-relaxed mb-5">{char.observedText}</p>}
      {variant === "predominant" && (
        <div className="space-y-4 mt-5 pt-5 border-t border-amber-200/60">
          {char.gift && <div><p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1.5">{labels.gift}</p><p className="text-xs text-slate-600 leading-relaxed">{char.gift}</p></div>}
          {char.shadow && <div><p className="text-[10px] font-bold text-orange-700 uppercase tracking-widest mb-1.5">{labels.shadow}</p><p className="text-xs text-slate-600 leading-relaxed">{char.shadow}</p></div>}
          {char.innerNeed && <div><p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{labels.need}</p><p className="text-xs text-slate-600 leading-relaxed">{char.innerNeed}</p></div>}
          {char.introspectionQuestion && (
            <div className="bg-amber-100/60 rounded-xl p-4 mt-4">
              <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">{labels.question}</p>
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
  const t = useTranslations("reading");
  const locale = useLocale();
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
      setResult(analyzeMirrorSessionV2({ blendshapes: capture.blendshapes, landmarks: capture.landmarks }));
    } catch { router.push("/oglinda"); }
    finally { setLoading(false); }
  }, [router]);

  const handleChooseDirection = useCallback((direction: Direction) => {
    if (!result) return;
    setChosenDirection(direction);
    setRecommendation(buildAlignedRecommendation({ observedCharacter: result.predominantCharacter, feltCharacter: null, chosenDirection: direction, expressiveNuance: result.expressiveNuance }));
    setStep("direction");
  }, [result]);

  const intensityLabels = { calm: t("intensity_calm"), mild: t("intensity_mild"), moderate: t("intensity_moderate") } as const;
  const charLabels = { predominant: t("char_predominant"), structural: t("char_structural"), expression: t("char_expression"), gift: t("gift_label"), shadow: t("shadow_label"), need: t("need_label"), question: t("question_label") };

  if (loading) return (
    <div className="min-h-screen bg-midnight flex items-center justify-center">
      <div className="text-center"><div className="w-12 h-12 border-2 border-cobalt border-t-transparent rounded-full animate-spin mx-auto mb-4" /><p className="text-white/50 text-sm">{t("loading")}</p></div>
    </div>
  );
  if (!result) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-midnight border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/oglinda" className="flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"><ArrowLeft size={14} />{t("back")}</Link>
        <p className="text-xs font-bold text-cobalt-light uppercase tracking-widest">{t("label")}</p>
        <Link href="/oglinda/sesiune" className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"><RefreshCw size={13} />{t("repeat")}</Link>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-midnight rounded-2xl p-7 text-center">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-3">{result.overallTitle}</p>
          <p className="text-white/65 text-sm leading-relaxed">{result.overallText}</p>
        </div>

        {result.predominantCharacter && <CharacterCard char={result.predominantCharacter} variant="predominant" labels={charLabels} />}

        {result.faceShapeReading && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t("face_shape_label")}</p>
            <h4 className="text-lg font-bold text-midnight mb-2">{result.faceShapeReading.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{result.faceShapeReading.text}</p>
          </div>
        )}

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t("zones_label")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.zones.map((zone) => (
              <div key={zone.key} className={`rounded-xl border p-5 ${INTENSITY_COLORS[zone.intensity]}`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest">{zone.name}</p>
                  <span className="text-[10px] font-semibold">{intensityLabels[zone.intensity]}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">{zone.reading}</p>
                {zone.introspectionQuestion && <p className="text-[11px] font-medium mt-3 opacity-70 italic">{zone.introspectionQuestion}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {result.structuralCharacter && <CharacterCard char={result.structuralCharacter} variant="structural" labels={charLabels} />}
          {result.expressionProfile && <CharacterCard char={result.expressionProfile} variant="expression" labels={charLabels} />}
        </div>

        {step === "results" && (
          <div className="bg-white rounded-2xl border border-slate-100 p-7">
            <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">{t("direction_tag")}</p>
            <h3 className="text-lg font-bold text-midnight mb-2">{t("direction_title")}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{t("direction_sub")}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {DIRECTION_LIST.map((d) => {
                const title = locale === "en" ? (d.title_en ?? d.title) : d.title;
                const short = locale === "en" ? (d.shortText_en ?? d.shortText) : d.shortText;
                return (
                  <button key={d.key} onClick={() => handleChooseDirection(d)} className="text-left rounded-xl border border-slate-100 bg-surface p-3.5 hover:border-cobalt/30 hover:bg-cobalt-50 transition-all group">
                    <p className="text-sm font-bold text-midnight group-hover:text-cobalt transition-colors">{title}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-2">{short}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === "direction" && recommendation && chosenDirection && (
          <div className="bg-cobalt-50 rounded-2xl border border-cobalt/20 p-7">
            <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-1">{t("toward")} {locale === "en" ? (chosenDirection.title_en ?? chosenDirection.title) : chosenDirection.title}</p>
            <h3 className="text-xl font-bold text-midnight mb-4">{recommendation.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{recommendation.text}</p>
            {recommendation.recommendedPractice && (
              <div className="bg-white rounded-xl p-5 border border-cobalt/10 mb-4">
                <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">{t("practice_label")}</p>
                <p className="text-sm font-semibold text-midnight mb-2">{recommendation.recommendedPractice}</p>
                {recommendation.practiceText && <p className="text-xs text-slate-500 leading-relaxed">{recommendation.practiceText}</p>}
              </div>
            )}
            {recommendation.introspectionQuestion && (
              <div className="bg-cobalt/8 rounded-xl p-4">
                <p className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">{t("question_label")}</p>
                <p className="text-sm font-medium text-midnight leading-relaxed">{recommendation.introspectionQuestion}</p>
              </div>
            )}
            <button onClick={() => { setStep("results"); setChosenDirection(null); setRecommendation(null); }} className="mt-5 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors">
              {t("change_direction")}
            </button>
          </div>
        )}

        <div className="pb-6 text-center">
          <p className="text-xs text-slate-400 leading-relaxed mb-4">{t("disclaimer")}</p>
          <Link href="/oglinda/sesiune" className="inline-flex items-center gap-2 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors"><RefreshCw size={13} />{t("retry")}</Link>
          <span className="mx-3 text-slate-300">·</span>
          <Link href="/oglinda" className="text-xs font-semibold text-slate-400 hover:text-midnight transition-colors">{t("back_mirror")}</Link>
          <span className="mx-3 text-slate-300">·</span>
          <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-cobalt hover:text-cobalt-dark transition-colors">{t("contact_cta")} <ArrowRight size={11} /></Link>
        </div>
      </div>
    </div>
  );
}
