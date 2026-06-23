import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Search, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Rapoarte",
  description:
    "Rapoarte de cercetare publice ale ICSCB: sondaje de opinie, studii biometrice, analize UX.",
};

const categories = ["Toate", "Opinie Publică", "Neuromarketing", "UX Research", "Analiză Sector"];

const comingSoonReports = [
  {
    category: "Opinie Publică",
    title: "Barometrul Încrederii Publice — T1 2026",
    description:
      "Analiza nivelului de încredere al românilor în instituțiile publice, media și sistemul de sănătate. Eșantion național reprezentativ, 1.200 respondenți.",
    tags: ["CAWI", "național", "Q1 2026"],
  },
  {
    category: "Neuromarketing",
    title: "Eye-Tracking în Publicitate — Raport Sectorial",
    description:
      "Cum procesează consumatorii reclamele digitale vs. offline. Studiu comparativ cross-media cu 35 de participanți.",
    tags: ["Eye-tracking", "publicitate", "cross-media"],
  },
  {
    category: "UX Research",
    title: "Usability în Servicii Bancare Digitale",
    description:
      "Evaluarea experienței utilizatorilor în aplicațiile de mobile banking din România. Testare moderată cu 12 utilizatori.",
    tags: ["mobile banking", "think-aloud", "usability"],
  },
  {
    category: "Opinie Publică",
    title: "Agenda Publică & Priorități Cetățenești — 2026",
    description:
      "Ce consideră românii ca fiind cele mai urgente probleme ale societății. Monitorizare trimestrială ICSCB.",
    tags: ["CATI", "național", "Q2 2026"],
  },
  {
    category: "Analiză Sector",
    title: "Digitalizarea Serviciilor Publice — Percepție & Bariere",
    description:
      "Studiu mixt (cantitativ + calitativ) despre nivelul de adopție și barierele față de serviciile publice digitale.",
    tags: ["mixed methods", "servicii publice", "digital"],
  },
  {
    category: "Neuromarketing",
    title: "Emoții & Decizie de Cumpărare — FMCG",
    description:
      "Analiza biometrică a procesului decizional în raft: ce captează atenția, ce generează intenție de cumpărare.",
    tags: ["GSR", "retail", "FMCG"],
  },
];

export default function RapoartePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cobalt opacity-10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Publicații
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Rapoarte & date deschise
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Publicăm periodic rezultate de cercetare pentru a contribui la cunoașterea publică și la dezbaterea informată.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Caută rapoarte..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all"
              />
            </div>
            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    i === 0
                      ? "bg-cobalt text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming soon notice */}
          <div className="flex items-start gap-4 bg-cobalt-50 border border-cobalt/20 rounded-2xl p-5 mb-10">
            <div className="w-8 h-8 rounded-lg bg-cobalt flex items-center justify-center shrink-0 mt-0.5">
              <FileText size={15} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-midnight mb-1">
                Primele rapoarte publice — lansare 2026
              </p>
              <p className="text-sm text-slate-600">
                Biblioteca noastră de rapoarte se deschide în cursul anului 2026. Mai jos poți vedea publicațiile pregătite. Abonează-te la newsletter pentru a fi notificat la lansare.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt mt-3 hover:text-cobalt-dark transition-colors"
              >
                Notifică-mă la lansare
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonReports.map((report) => (
              <div
                key={report.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 flex flex-col hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-cobalt bg-cobalt-50 rounded-full px-3 py-1">
                    {report.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                    În pregătire
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center mb-4">
                  <FileText size={18} className="text-slate-300" />
                </div>

                <h3 className="text-sm font-bold text-midnight mb-2 leading-snug flex-1">
                  {report.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">{report.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {report.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-2 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-50">
                  <button
                    disabled
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-not-allowed"
                  >
                    <Download size={13} />
                    Disponibil în curând
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom research CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-midnight rounded-3xl p-10 lg:p-14 relative overflow-hidden">
            <div className="dot-grid absolute inset-0 opacity-40" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-lg">
                <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-3">
                  Cercetare la comandă
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ai nevoie de un studiu specific?
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Pe lângă rapoartele publice, realizăm cercetare dedicată — sondaje, studii biometrice sau UX research — personalizate pentru obiectivele tale.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm shrink-0"
              >
                Discutăm proiectul tău
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
