import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Eye,
  MonitorSmartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Sondaje & opinie publică, biometrie & neuromarketing, UX research și analiză semnale comportamentale — patru domenii integrate de cercetare aplicată.",
};

const services = [
  {
    id: "sondaje",
    icon: BarChart3,
    tag: "01",
    title: "Sondaje & Opinie Publică",
    headline: "Înțelegem ce cred oamenii, nu ce ar trebui să creadă",
    description:
      "Studii cantitative reprezentative prin metode CAWI (online) și CATI (telefonic). Eșantioane dimensionate corect, ponderate demografic, cu analiză statistică completă și raport de interpretare aplicat.",
    features: [
      "Eșantioane 1.050–1.500 respondenți (marja ±3%)",
      "Ponderi demografice: vârstă, sex, mediu, regiune",
      "Testare mesaje politice, comerciale sau de comunicare",
      "Barometru periodic de urmărire a tendințelor",
      "Analiză comparativă față de valuri anterioare",
      "Raport narativ + tabele de frecvențe + baza de date SPSS",
    ],
    useCases: ["Partide & campanii", "Companii de comunicare", "Organizații publice", "Media & think tanks"],
    cta: "Solicită o ofertă personalizată",
  },
  {
    id: "biometrie",
    icon: Eye,
    tag: "02",
    title: "Biometrie & Neuromarketing",
    headline: "Măsurăm ce nu poate fi raportat verbal",
    description:
      "Eye-tracking, GSR (răspuns electrodermal), analiza expresiei faciale video și hărți de atenție vizuală. Metode care accesează răspunsul emoțional și atențional real, eliminând bias-ul de dezirabilitate socială.",
    features: [
      "Eye-tracking cu echipamente Tobii Pro (fixații, saccade, heatmap-uri)",
      "GSR/EDA pentru măsurarea intensității emoționale",
      "Analiză expresii faciale prin action units (FACS)",
      "Testare publicitate TV, digitală, OOH și print",
      "Testare packaging și shelf impact",
      "Testare interfețe și prototipuri digitale",
    ],
    useCases: ["Agenții de publicitate", "FMCG & retail", "Producători media", "Cercetare academică"],
    cta: "Planifică un studiu biometric",
  },
  {
    id: "ux",
    icon: MonitorSmartphone,
    tag: "03",
    title: "UX Research & Testare",
    headline: "Produsul tău văzut prin ochii utilizatorului real",
    description:
      "Evaluăm experiența utilizatorilor cu produse digitale sau fizice — de la prototipuri timpurii la produse live. Identificăm fricțiunile, blocajele cognitive și oportunitățile de îmbunătățire înainte ca ele să coste.",
    features: [
      "Testare utilizabilitate moderată (in-person sau remote)",
      "Analiză funnel & drop-off cu sesiuni înregistrate",
      "Card sorting și tree testing pentru arhitectura informației",
      "Evaluări de comprehensiune și recall al mesajelor",
      "First-click testing și preference testing",
      "Raport cu recomandări prioritizate prin impact/efort",
    ],
    useCases: ["Startupuri & scale-upuri", "Bănci & fintech", "eCommerce", "Aplicații SaaS"],
    cta: "Discută proiectul tău UX",
  },
  {
    id: "semnale",
    icon: Brain,
    tag: "04",
    title: "Analiză Semnale Comportamentale",
    headline: "Ce spune publicul fără să știe că spune ceva",
    description:
      "Monitorizăm și analizăm corpusuri de discurs digital pentru a detecta semnale latente: pattern-uri de limbaj care revelează frici, nevoi, frustrări și intenții înainte ca acestea să devină vizibile în sondaje convenționale.",
    features: [
      "Detectare semnale latente prin NLP și pattern recognition",
      "Analiză de sentiment la nivel de sub-semnal (nu doar pozitiv/negativ)",
      "Identificare nevoie umană fundamentală din corpus",
      "Content Direction Brief pentru editorial și comunicare",
      "Monitorizare continuă și alertă la schimbare de semnal",
      "Raport de interpretare comportamentală (nu lingvistică)",
    ],
    useCases: ["Redacții & publisheri", "Agenții PR & comunicare", "Branduri cu audiențe largi", "Consultanți politici"],
    cta: "Solicită o demonstrație",
  },
];

const process = [
  { step: "01", title: "Briefing", desc: "Înțelegem obiectivele, audiența și deciziile care urmează să fie luate pe baza studiului." },
  { step: "02", title: "Design", desc: "Proiectăm metodologia, instrumentele și eșantionul adaptat la obiectivele specifice." },
  { step: "03", title: "Colectare", desc: "Culegem datele prin metodele agreate, cu control de calitate pe parcurs." },
  { step: "04", title: "Analiză", desc: "Analizăm datele dincolo de frecvențe — interpretăm pattern-uri, corelații și implicații." },
  { step: "05", title: "Raport", desc: "Livrăm un raport narativ + date brute + prezentare executivă cu recomandări acționabile." },
];

export default function ServiciiPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cobalt opacity-10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Portofoliu de servicii
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl leading-tight">
            Patru domenii integrate de cercetare comportamentală aplicată
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            De la sondaje clasice la neuromarketing, de la UX research la analiza semnalelor latente din
            discursul public — fiecare serviciu este proiectat să răspundă la o întrebare de decizie reală.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 bg-white">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              id={s.id}
              className={`py-20 ${idx % 2 === 1 ? "bg-surface" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-midnight flex items-center justify-center">
                        <Icon size={22} className="text-cobalt-light" />
                      </div>
                      <span className="text-[11px] font-bold text-cobalt/50 uppercase tracking-widest">{s.tag}</span>
                    </div>
                    <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">
                      {s.title}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-midnight mb-4 leading-tight">
                      {s.headline}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8">{s.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {s.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm"
                    >
                      {s.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
                      <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-5">
                        Ce include
                      </p>
                      <ul className="space-y-3">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-cobalt shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-3">
              Cum lucrăm
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              De la brief la decizie
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="bg-white/6 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="text-3xl font-bold text-cobalt/30 mb-4">{p.step}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-cobalt/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-4">
            Să discutăm
          </p>
          <h2 className="text-3xl font-bold text-midnight mb-4">
            Nu ești sigur de ce ai nevoie?
          </h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Spune-ne care este întrebarea de decizie sau problema cu care te confrunți și îți
            recomandăm abordarea potrivită — fără presiune de vânzare.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-bold rounded-xl hover:bg-midnight-dark transition-colors"
          >
            Discută cu un cercetător
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
