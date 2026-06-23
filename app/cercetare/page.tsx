import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLE_LIST } from "@/data/articles";

export const metadata: Metadata = {
  title: "Cercetare & Publicații",
  description:
    "Analize comportamentale, metodologii și rapoarte de la ICSCB — cercetare bazată pe semnale latente din discursul public și observație biometrică directă.",
};

const categoryColors: Record<string, string> = {
  "Semnale comportamentale": "bg-cobalt/10 text-cobalt",
  "Metodologie": "bg-indigo-100 text-indigo-700",
  "Opinie Publică": "bg-emerald-100 text-emerald-700",
  "Neuromarketing": "bg-violet-100 text-violet-700",
  "UX Research": "bg-amber-100 text-amber-700",
};

function getCategoryStyle(category: string) {
  return categoryColors[category] ?? "bg-slate-100 text-slate-600";
}

export default function CercetarePage() {
  const [featured, ...rest] = ARTICLE_LIST;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cobalt opacity-10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Publicații ICSCB
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Cercetare & Analize Comportamentale
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Analize tehnice derivate din corpusul de semnale comportamentale Calypso, studii de
            metodologie biometrică și rapoarte de cercetare aplicată — pentru practicieni care
            au nevoie să înțeleagă datele, nu să le consume.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-8">
            Articol recomandat
          </p>
          <Link href={`/cercetare/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-cobalt/25 hover:shadow-xl hover:shadow-cobalt/5 transition-all duration-300">
              <div className="lg:col-span-3 bg-midnight p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 bg-cobalt/20 text-cobalt-light`}>
                    {featured.category}
                  </span>
                  {featured.signalType && (
                    <span className="text-[10px] font-mono text-white/35 bg-white/8 rounded px-2 py-0.5 border border-white/10">
                      {featured.signalType}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight flex-1 group-hover:text-cobalt-light transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {featured.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/35">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <Clock size={11} />
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="text-xs font-semibold text-cobalt-light flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Citește analiza <ArrowRight size={12} />
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2 p-10 flex flex-col justify-center">
                <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-4">
                  Subiect
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {featured.subtitle}
                </p>
                {featured.signalType && (
                  <div className="bg-surface rounded-xl p-4 border border-slate-100">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
                      Semnal analizat
                    </p>
                    <p className="text-sm font-bold text-midnight">{featured.signalLabel}</p>
                    <p className="text-xs font-mono text-slate-400 mt-1">{featured.signalType}</p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All articles */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rest.length > 0 && (
            <>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-8">
                Mai multe publicații
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article) => (
                  <Link key={article.slug} href={`/cercetare/${article.slug}`} className="group">
                    <div className="h-full flex flex-col rounded-2xl border border-slate-100 bg-white p-7 hover:border-cobalt/25 hover:shadow-lg hover:shadow-cobalt/5 transition-all duration-300">
                      <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 self-start mb-5 ${getCategoryStyle(article.category)}`}>
                        {article.category}
                      </span>
                      <h3 className="text-base font-bold text-midnight mb-2 leading-snug flex-1 group-hover:text-cobalt transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-5">
                        {article.summary.slice(0, 120)}…
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{article.date}</span>
                          <span>·</span>
                          <Clock size={10} />
                          <span>{article.readTime}</span>
                        </div>
                        <span className="text-xs font-semibold text-cobalt flex items-center gap-1 group-hover:gap-2 transition-all">
                          Citește <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Coming soon card */}
                <div className="h-full flex flex-col rounded-2xl border border-dashed border-slate-200 bg-surface p-7">
                  <span className="text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 self-start mb-5 bg-slate-100 text-slate-400">
                    Urmează
                  </span>
                  <h3 className="text-base font-bold text-slate-400 mb-2 leading-snug flex-1">
                    Barometru Social Q2 2026 — nivelul de anxietate economică în corpus
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    Analiza semnalelor de teamă economică, supraviețuire practică și fatalism civic în corpusul de discurs din Q2 2026.
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400">
                      În pregătire · iulie 2026
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
