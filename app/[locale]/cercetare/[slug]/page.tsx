import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { getArticleBySlug, ARTICLE_LIST, type ArticleSection } from "@/data/articles";
import { routing } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLE_LIST.map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "intro":
      return <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">{section.text}</p>;
    case "heading":
      return <h2 className="text-xl font-bold text-midnight mt-10 mb-4">{section.text}</h2>;
    case "body":
      return <p className="text-slate-600 leading-relaxed mb-5">{section.text}</p>;
    case "quote":
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-cobalt/40 bg-cobalt-50 rounded-r-xl py-5 pr-6">
          <p className="text-midnight font-semibold leading-relaxed mb-2">&ldquo;{section.text}&rdquo;</p>
          {section.author && <cite className="text-xs text-slate-500 not-italic font-medium">{section.author}</cite>}
        </blockquote>
      );
    case "signal-box":
      return (
        <div className="my-7 bg-midnight rounded-xl p-6 border border-white/10">
          <p className="text-[10px] font-bold text-cobalt-light uppercase tracking-widest mb-3">{section.label ?? "Date semnal"}</p>
          <p className="text-sm text-white/70 leading-relaxed">{section.text}</p>
        </div>
      );
    case "list":
      return (
        <ul className="my-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "conclusion":
      return (
        <div className="mt-10 bg-surface rounded-xl p-7 border border-cobalt/10">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">Concluzie</p>
          <p className="text-slate-700 leading-relaxed">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const en = locale === "en";
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = ARTICLE_LIST.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pt-28 pb-14 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-cobalt opacity-10 blur-[100px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cercetare" className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={13} />
            {en ? "Research & Publications" : "Cercetare & Publicații"}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold text-cobalt-light uppercase tracking-widest bg-cobalt/20 rounded-full px-3 py-1">{article.category}</span>
            {article.signalType && (
              <span className="text-[10px] font-mono text-white/35 bg-white/8 rounded px-2 py-0.5 border border-white/10">{article.signalType}</span>
            )}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
          <p className="text-white/55 text-base leading-relaxed mb-8">{article.subtitle}</p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <span>{article.date}</span>
            <span>·</span>
            <Clock size={11} />
            <span>{article.readTime} {en ? "read" : "citire"}</span>
            <span>·</span>
            <span>ICSCB</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.content.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}
          <div className="mt-14 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 leading-relaxed">
              {en
                ? "This material is published by ICSCB for informational and research purposes. Analyses are based on behavioral data from the monitoring corpus and do not constitute political, legal, or medical advice. Opinions belong to the research team."
                : "Acest material este publicat de ICSCB în scop informativ și de cercetare. Analizele se bazează pe date comportamentale din corpusul de monitorizare și nu constituie consultanță politică, juridică sau medicală. Opiniile aparțin echipei de cercetare."}
            </p>
          </div>
        </div>
      </section>

      {otherArticles.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-8">{en ? "More publications" : "Mai multe publicații"}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/cercetare/${a.slug}`} className="group">
                  <div className="bg-white rounded-xl border border-slate-100 p-6 h-full flex flex-col hover:border-cobalt/25 hover:shadow-md transition-all">
                    <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-3">{a.category}</span>
                    <h3 className="text-sm font-bold text-midnight mb-2 leading-snug flex-1 group-hover:text-cobalt transition-colors">{a.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-cobalt mt-3 font-semibold group-hover:gap-2.5 transition-all">
                      {en ? "Read" : "Citește"} <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
