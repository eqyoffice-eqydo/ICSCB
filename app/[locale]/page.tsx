import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, BarChart3, Eye, MonitorSmartphone, Brain } from "lucide-react";
import { ARTICLE_LIST } from "@/data/articles";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: t("meta_title"), description: t("meta_desc") };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const featuredArticle = ARTICLE_LIST[0];
  const sideArticle = ARTICLE_LIST[1];

  const services = [
    { icon: BarChart3, titleKey: "service1_title" as const, descKey: "service1_desc" as const },
    { icon: Eye, titleKey: "service2_title" as const, descKey: "service2_desc" as const },
    { icon: MonitorSmartphone, titleKey: "service3_title" as const, descKey: "service3_desc" as const },
    { icon: Brain, titleKey: "service4_title" as const, descKey: "service4_desc" as const },
  ];

  const stats = [
    { numKey: "stat1_num" as const, labelKey: "stat1_label" as const },
    { numKey: "stat2_num" as const, labelKey: "stat2_label" as const },
    { numKey: "stat3_num" as const, labelKey: "stat3_label" as const },
    { numKey: "stat4_num" as const, labelKey: "stat4_label" as const },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-midnight overflow-hidden pt-20">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cobalt opacity-10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-cobalt-light opacity-6 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-6">
                {t("hero_tag")}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t("hero_title")}{" "}
                <span className="text-cobalt-light">{t("hero_accent")}</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">{t("hero_sub")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors"
                >
                  {t("hero_cta1")} <ArrowRight size={16} />
                </Link>
                <Link
                  href="/oglinda"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-semibold rounded-xl hover:bg-white/12 transition-colors border border-white/15"
                >
                  {t("hero_cta2")}
                </Link>
              </div>
            </div>
            {/* Signal card */}
            <div className="animate-fade-up delay-200 hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono text-cobalt-light bg-cobalt/15 rounded px-2 py-1">
                    CSIG_0028
                  </span>
                  <span className="text-[10px] text-white/30 font-mono">punishment_language</span>
                </div>
                <div className="space-y-3 mb-5">
                  {[85, 62, 91].map((v, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[10px] text-white/40">
                        <span>{["intensity", "frequency", "certainty"][i]}</span>
                        <span>{v}%</span>
                      </div>
                      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                        <div className="h-full bg-cobalt-light rounded-full" style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 leading-relaxed">
                  {locale === "en"
                    ? "The signal indicates latent moral framework activation — demand for order through punishment rather than correction."
                    : "Semnalul indică activare a cadrului moral latent — cererea de ordine prin pedeapsă mai degrabă decât corectare."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-12 text-center">
            {t("pillars_tag")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { titleKey: "pillar1_title" as const, descKey: "pillar1_desc" as const, num: "01" },
              { titleKey: "pillar2_title" as const, descKey: "pillar2_desc" as const, num: "02" },
              { titleKey: "pillar3_title" as const, descKey: "pillar3_desc" as const, num: "03", link: true },
            ].map((p) => (
              <div key={p.num} className="bg-surface rounded-2xl p-8 border border-slate-100 hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5 transition-all">
                <span className="text-4xl font-bold text-cobalt/12 block mb-6">{p.num}</span>
                <h3 className="text-xl font-bold text-midnight mb-3">{t(p.titleKey)}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{t(p.descKey)}</p>
                {p.link && (
                  <Link href="/oglinda" className="text-xs font-bold text-cobalt hover:text-cobalt-dark transition-colors">
                    {t("pillar3_link")}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-2">{t("research_tag")}</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-midnight">{t("research_title")}</h2>
            </div>
            <Link href="/cercetare" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors">
              {t("research_all")}
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {featuredArticle && (
              <Link href={`/cercetare/${featuredArticle.slug}`} className="lg:col-span-3 group">
                <div className="bg-midnight rounded-2xl p-8 h-full border border-white/10 hover:border-cobalt/30 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold text-cobalt-light uppercase tracking-widest bg-cobalt/20 rounded-full px-3 py-1">
                      {featuredArticle.category}
                    </span>
                    <span className="text-[10px] font-semibold text-white/25 bg-white/8 border border-white/10 rounded px-2 py-0.5 font-mono">
                      {featuredArticle.signalType}
                    </span>
                    <span className="text-[10px] font-bold text-cobalt-light bg-cobalt/25 rounded-full px-2.5 py-0.5">
                      {t("research_new")}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-cobalt-light transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">{featuredArticle.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt-light group-hover:gap-3 transition-all">
                    {t("research_read")} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {sideArticle && (
                <Link href={`/cercetare/${sideArticle.slug}`} className="group flex-1">
                  <div className="bg-white rounded-2xl p-6 h-full border border-slate-100 hover:border-cobalt/25 hover:shadow-lg transition-all flex flex-col">
                    <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-3">
                      {sideArticle.category}
                    </span>
                    <h3 className="text-base font-bold text-midnight mb-2 leading-snug flex-1 group-hover:text-cobalt transition-colors">
                      {sideArticle.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt mt-3 group-hover:gap-2.5 transition-all">
                      {t("research_read")} <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              )}
              <div className="bg-cobalt-50 rounded-2xl p-6 border border-cobalt/15">
                <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-3 block">
                  {t("research_upcoming")}
                </span>
                <h3 className="text-sm font-bold text-midnight mb-2">{t("research_upcoming_title")}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{t("research_upcoming_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mirror promo */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-end pr-0 pointer-events-none">
          <div className="w-[500px] h-[500px] relative opacity-20">
            {[500, 380, 260, 150].map((s, i) => (
              <div key={s} className="absolute inset-0 flex items-center justify-center">
                <div className="border border-cobalt-light/40 rounded-full animate-pulse" style={{ width: s, height: s, animationDelay: `${i * 0.5}s` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">{t("mirror_tag")}</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t("mirror_title")}</h2>
            <p className="text-white/60 leading-relaxed mb-8 text-lg">{t("mirror_sub")}</p>
            <div className="flex gap-8 mb-10">
              {[
                { numKey: "mirror_stat1_num" as const, labelKey: "mirror_stat1_label" as const },
                { numKey: "mirror_stat2_num" as const, labelKey: "mirror_stat2_label" as const },
                { numKey: "mirror_stat3_num" as const, labelKey: "mirror_stat3_label" as const },
              ].map((s) => (
                <div key={s.numKey}>
                  <span className="text-3xl font-bold text-white block">{t(s.numKey)}</span>
                  <span className="text-xs text-white/45 font-medium">{t(s.labelKey)}</span>
                </div>
              ))}
            </div>
            <Link href="/oglinda" className="inline-flex items-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors">
              {t("mirror_cta")} <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-white/30 mt-4">{t("mirror_disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{t("services_tag")}</p>
            <h2 className="text-3xl font-bold text-midnight">{t("services_title")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.titleKey} className="rounded-2xl border border-slate-100 p-7 hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-midnight flex items-center justify-center mb-5">
                    <Icon size={20} className="text-cobalt-light" />
                  </div>
                  <h3 className="text-base font-bold text-midnight mb-2">{t(s.titleKey)}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t(s.descKey)}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/servicii" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors">
              {t("services_cta")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold text-cobalt uppercase tracking-widest text-center mb-10">{t("stats_tag")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.numKey} className="text-center">
                <span className="text-4xl font-bold text-midnight block mb-1">{t(s.numKey)}</span>
                <span className="text-xs text-slate-500 font-medium">{t(s.labelKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cobalt opacity-10 blur-[100px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">{t("cta_title")}</h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">{t("cta_sub")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors">
              {t("cta_contact")} <ArrowRight size={16} />
            </Link>
            <Link href="/metodologie" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-semibold rounded-xl hover:bg-white/12 transition-colors border border-white/15">
              {t("cta_methodology")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
