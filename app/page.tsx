import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  Eye,
  MonitorSmartphone,
  Brain,
  Activity,
  Scan,
} from "lucide-react";
import { ARTICLE_LIST } from "@/data/articles";

const pillars = [
  {
    icon: Activity,
    tag: "Corpus & Semnale",
    title: "Semnale latente din discursul public",
    body: "Analizăm ce spune publicul fără să știe că spune ceva. Prin monitorizarea continuă a discursului digital, detectăm semnale comportamentale — frici, nevoi, frustrări, speranțe — înainte ca acestea să devină tendințe vizibile.",
    detail: "Corpus POIP · Analiză semantică · Pattern detection",
  },
  {
    icon: Eye,
    tag: "Biometrie aplicată",
    title: "Măsurăm ce nu poate fi raportat verbal",
    body: "Eye-tracking, GSR (răspuns electrodermal) și analiza expresiei faciale — instrumentele care citesc atenția, emoția și răspunsul subliminal al consumatorilor sau publicului. Date obiective acolo unde chestionarele produc răspunsuri sociale.",
    detail: "Eye-tracking Tobii Pro · GSR/EDA · Analiză facială video",
  },
  {
    icon: Scan,
    tag: "Observație directă",
    title: "Oglinda: instrumentul individual",
    body: "Completa cercetarea de grup cu observația individuală. Oglinda Comportamentală oferă fiecărui utilizator un punct de plecare pentru auto-cunoaștere — bazat pe structura și expresia facială, fără diagnostic, fără date stocate.",
    detail: "MediaPipe FaceLandmarker · 12 arhetipuri · 100% local",
    href: "/oglinda",
  },
];

const services = [
  {
    icon: BarChart3,
    title: "Sondaje & Opinie Publică",
    description:
      "Studii reprezentative CAWI/CATI, eșantioane 1.050–1.500 respondenți, ponderi demografice și raport complet de analiză.",
    href: "/servicii#sondaje",
  },
  {
    icon: Eye,
    title: "Biometrie & Neuromarketing",
    description:
      "Eye-tracking, GSR și hărți de atenție vizuală pentru reclame, packagings, UI și testarea mesajelor de comunicare.",
    href: "/servicii#biometrie",
  },
  {
    icon: MonitorSmartphone,
    title: "UX Research & Testare",
    description:
      "Testare prototipuri, analiză funnel & drop-off, card sorting și evaluări de comprehensiune pentru produse digitale.",
    href: "/servicii#ux",
  },
  {
    icon: Brain,
    title: "Analiză Semnale Comportamentale",
    description:
      "Detectăm semnale latente în corpus de discurs public sau de brand. Util pentru poziționare editorială, comunicare de criză și audit de percepție.",
    href: "/servicii#semnale",
  },
];

const stats = [
  { value: "200+", label: "Studii realizate" },
  { value: "15k+", label: "Respondenți anual" },
  { value: "8 ani", label: "De expertiză" },
  { value: "50+", label: "Organizații partenere" },
];

const featuredArticle = ARTICLE_LIST[0];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-midnight overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-dark via-midnight to-midnight-light opacity-90" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-cobalt opacity-8 blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cobalt-light opacity-5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
              <span className="text-xs font-medium text-white/75 tracking-wide">
                Institutul de Cercetare Studii Comportamentale & Biometrie
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-7">
              Comportamentul uman{" "}
              <span className="block text-cobalt-light">nu se ghicește.</span>
              <span className="block">Se măsoară.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Cercetare bazată pe semnale latente din discursul public, biometrie aplicată și
              observație directă — pentru organizații care vor să înțeleagă cu adevărat
              publicul lor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicii"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm"
              >
                Serviciile noastre
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/oglinda"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-colors text-sm border border-white/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                Oglinda Comportamentală
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Signal card floating */}
          <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-80 animate-fade-up delay-300">
            <div className="bg-white/6 border border-white/12 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold text-cobalt-light uppercase tracking-widest">
                  Semnal activ
                </span>
                <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
              </div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                punishment_language
              </p>
              <p className="text-base font-bold text-white mb-3 leading-snug">
                Nevoia de ordine morală funcțională
              </p>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Interes latent: restabilirea consecinței reale în sisteme opace. Intensitate: ridicată, persistentă.
              </p>
              <Link
                href="/cercetare/limbajul-pedepsei-nevoia-de-ordine-morala"
                className="text-xs font-semibold text-cobalt-light hover:text-white transition-colors flex items-center gap-1"
              >
                Citește analiza <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Three pillars ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">
              Metodologie
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4 leading-tight">
              Trei niveluri de înțelegere. Un singur obiectiv.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Comportamentul uman nu se epuizează într-o singură metodă. ICSCB combină
              cercetarea corpusurilor de discurs, biometria aplicată și observația individuală
              pentru o imagine completă.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              const cardContent = (
                <div
                  key={p.tag}
                  className={`group relative flex flex-col rounded-2xl border bg-white p-8 transition-all duration-300 ${
                    p.href
                      ? "border-cobalt/20 hover:shadow-xl hover:shadow-cobalt/8 cursor-pointer hover:border-cobalt/40"
                      : "border-slate-100 hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-midnight flex items-center justify-center">
                      <Icon size={22} className="text-cobalt-light" />
                    </div>
                    <span className="text-[11px] font-semibold text-cobalt uppercase tracking-widest mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-cobalt/60 uppercase tracking-widest mb-2">
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-bold text-midnight mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{p.body}</p>
                  <div className="text-[11px] text-slate-400 font-mono leading-relaxed">{p.detail}</div>
                  {p.href && (
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-cobalt group-hover:gap-2.5 transition-all">
                      Explorează instrumentul <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );
              return p.href ? (
                <Link key={p.tag} href={p.href} className="contents">
                  {cardContent}
                </Link>
              ) : (
                cardContent
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured research ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">
                Din cercetare
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-midnight">
                Analize & publicații
              </h2>
            </div>
            <Link
              href="/cercetare"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors shrink-0"
            >
              Toate publicațiile
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Featured */}
            <Link href={`/cercetare/${featuredArticle.slug}`} className="lg:col-span-3 group">
              <div className="bg-midnight rounded-2xl p-8 h-full flex flex-col hover:shadow-xl hover:shadow-midnight/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold text-cobalt-light uppercase tracking-widest bg-cobalt/20 rounded-full px-3 py-1">
                    {featuredArticle.category}
                  </span>
                  {featuredArticle.signalType && (
                    <span className="text-[10px] font-mono text-white/35 bg-white/5 rounded px-2 py-0.5">
                      {featuredArticle.signalType}
                    </span>
                  )}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight flex-1 group-hover:text-cobalt-light transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/35">
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime} citire</span>
                  </div>
                  <span className="text-xs font-semibold text-cobalt-light flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Citește <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Side articles */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {ARTICLE_LIST.slice(1).map((article) => (
                <Link key={article.slug} href={`/cercetare/${article.slug}`} className="group">
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full flex flex-col hover:border-cobalt/25 hover:shadow-lg hover:shadow-cobalt/5 transition-all duration-300">
                    <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest bg-cobalt-50 rounded-full px-3 py-1 self-start mb-4">
                      {article.category}
                    </span>
                    <h3 className="text-sm font-bold text-midnight mb-2 leading-snug flex-1 group-hover:text-cobalt transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} citire</span>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="bg-cobalt-50 rounded-2xl border border-cobalt/15 p-6 flex flex-col">
                <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-2">
                  Urmează
                </p>
                <p className="text-sm font-bold text-midnight mb-2 leading-snug">
                  Raport Barometru Social — Q2 2026
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Analiză comparativă a nivelului de încredere și a semnalelor de anxietate economică.
                </p>
                <span className="text-[11px] font-semibold text-cobalt mt-4">
                  În pregătire · iulie 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mirror promo ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cobalt opacity-12 blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cobalt-light opacity-8 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                <span className="text-xs font-medium text-white/70 tracking-wide">
                  Instrument gratuit · fără cont · fără date stocate
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Oglinda{" "}
                <span className="text-cobalt-light">Comportamentală</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-5">
                Un instrument de auto-cunoaștere bazat pe observarea structurii și expresiei
                faciale. Camera ta, analiza locală, zero date trimise pe server.
              </p>
              <p className="text-base text-white/45 leading-relaxed mb-9">
                Oglinda identifică tendințe de caracter din geometria feței (structura) și din
                mișcarea musculară (expresia), oferind un punct de pornire pentru practică
                personală — nu un diagnostic, ci o invitație la observare.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-9">
                {[
                  { num: "12", label: "Arhetipuri de caracter" },
                  { num: "4", label: "Zone de observat" },
                  { num: "10", label: "Direcții de practică" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.num}</div>
                    <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/oglinda"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors text-sm"
              >
                Încearcă Oglinda
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual representation */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border border-white/8 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border border-cobalt/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-12 rounded-full border border-cobalt/30" />

                {/* Center face oval */}
                <div className="absolute inset-16 rounded-full bg-cobalt/10 border-2 border-cobalt/25 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">◯</div>
                    <div className="text-[10px] text-white/40 font-semibold tracking-widest uppercase">Observare</div>
                  </div>
                </div>

                {/* Floating labels */}
                {[
                  { label: "Structură", angle: -60, r: 140 },
                  { label: "Expresie", angle: 60, r: 140 },
                  { label: "Caracter", angle: 180, r: 140 },
                ].map((item) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const x = 50 + (item.r / 2.88) * Math.cos(rad);
                  const y = 50 + (item.r / 2.88) * Math.sin(rad);
                  return (
                    <div
                      key={item.label}
                      className="absolute text-[11px] font-semibold text-cobalt-light/70 tracking-wide"
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">
                Ce facem
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-midnight">
                Patru domenii, un singur obiectiv
              </h2>
            </div>
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-dark transition-colors shrink-0"
            >
              Toate serviciile
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.title} href={s.href} className="group">
                  <div className="h-full flex flex-col rounded-2xl border border-slate-100 bg-white p-7 hover:border-cobalt/25 hover:shadow-xl hover:shadow-cobalt/5 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-midnight flex items-center justify-center mb-5">
                      <Icon size={20} className="text-cobalt-light" />
                    </div>
                    <h3 className="text-sm font-bold text-midnight mb-2 leading-snug">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-5">{s.description}</p>
                    <span className="text-xs font-semibold text-cobalt flex items-center gap-1 group-hover:gap-2 transition-all">
                      Detalii <ChevronRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-7 text-center border border-slate-100">
                <span className="text-3xl lg:text-4xl font-bold text-midnight block mb-1.5">{stat.value}</span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cobalt opacity-10 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-5">
            Hai să colaborăm
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
            Ai un proiect de cercetare?
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Spune-ne despre ce ai nevoie și pregătim o propunere personalizată în 48 de ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors"
            >
              Solicită o propunere
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/metodologie"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-semibold rounded-xl hover:bg-white/12 transition-colors border border-white/15"
            >
              Metodologia noastră
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
