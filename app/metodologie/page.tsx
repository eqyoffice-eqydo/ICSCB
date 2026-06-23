import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Eye, MonitorSmartphone, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Metodologie",
  description:
    "Cum realizăm studiile noastre: sondaje CAWI/CATI, biometrie cu eye-tracking și GSR, UX research cu testare de prototipuri.",
};

const methods = [
  {
    id: "sondaje",
    icon: BarChart3,
    label: "Sondaje & Opinie Publică",
    tagline: "Date care reflectă realitatea",
    description:
      "Realizăm sondaje reprezentative la nivel național sau regional, folosind metodologie validată internațional. Fiecare studiu este proiectat pentru a asigura precizie statistică și relevanță practică.",
    process: [
      { step: "01", title: "Briefing & Design", desc: "Definim obiectivele, publicul țintă și variabilele cheie împreună cu clientul." },
      { step: "02", title: "Chestionar", desc: "Construim instrumentul de colectare cu întrebări validate, testate cognitiv." },
      { step: "03", title: "Colectare date", desc: "Operăm CAWI (online) și CATI (telefon) cu operatori instruiți." },
      { step: "04", title: "Procesare & Ponderare", desc: "Curățăm datele și aplicăm ponderi demografice pentru reprezentativitate." },
      { step: "05", title: "Analiză & Raport", desc: "Livrăm raport complet cu tabele, infografice și recomandări acționabile." },
    ],
    specs: [
      "Eșantioane: 1.050 – 1.500 respondenți",
      "Eroare de eșantionare: ±2,8 – 3,1%",
      "Metodă: CAWI / CATI",
      "Durată: 10–14 zile lucrătoare",
      "Conformitate ESOMAR",
    ],
    tools: ["SPSS", "STATA", "R", "MAXQDA", "Tableau"],
  },
  {
    id: "biometrie",
    icon: Eye,
    label: "Biometrie & Neuromarketing",
    tagline: "Dincolo de ce spun, ce simt cu adevărat",
    description:
      "Măsurăm răspunsurile fiziologice și comportamentale pentru a înțelege procesele subconștiente care influențează deciziile. Biometria elimină bias-ul de dezirabilitate socială din cercetare.",
    process: [
      { step: "01", title: "Design studiu", desc: "Stabilim stimulii (materiale publicitare, produse, UI) și ipotezele de testat." },
      { step: "02", title: "Recrutare participanți", desc: "Selectăm participanți din publicul țintă al clientului (n=20-40 per studiu)." },
      { step: "03", title: "Sesiuni de testare", desc: "Participanții interacționează cu stimulii în timp ce echipamentele înregistrează date." },
      { step: "04", title: "Procesare biometrică", desc: "Analizăm tiparele de fixare vizuală, răspunsul electrodermal și micro-expresiile." },
      { step: "05", title: "Raport integrat", desc: "Combinăm datele biometrice cu datele declarative pentru o imagine completă." },
    ],
    specs: [
      "Eye-tracking: Tobii Pro (120Hz)",
      "GSR/EDA: Shimmer3",
      "Expresii faciale: FaceReader 9",
      "Participanți: 20–40 per studiu",
      "Durata sesiune: 60–90 min",
    ],
    tools: ["Tobii Pro Lab", "iMotions", "FaceReader", "BIOPAC"],
  },
  {
    id: "ux",
    icon: MonitorSmartphone,
    label: "UX Research & Testare",
    tagline: "Produse care funcționează pentru oameni reali",
    description:
      "Evaluăm produse digitale și fizice prin metode calitative și cantitative, de la primele prototipuri până la produse mature în producție. Descoperim problemele înainte ca ele să coste.",
    process: [
      { step: "01", title: "Audit UX inițial", desc: "Analizăm produsul existent prin heuristica Nielsen și revizuim analytics-ul disponibil." },
      { step: "02", title: "Recrutare utilizatori", desc: "Selectăm participanți care reprezintă persona-urile produsului." },
      { step: "03", title: "Sesiuni de testare", desc: "Think-aloud protocol, task-based testing, card sorting sau tree testing, după caz." },
      { step: "04", title: "Analiză calitativă", desc: "Identificăm pattern-uri, pain points și oportunități din sesiunile înregistrate." },
      { step: "05", title: "Recomandări prioritizate", desc: "Livrăm un backlog de îmbunătățiri cu prioritate și efort estimat." },
    ],
    specs: [
      "Metode: Think-aloud, Card sorting, Tree testing",
      "Participanți: 5–12 per rundă",
      "Moderat sau nemoderat",
      "Remote sau față-în-față",
      "Livrabil: Video highlights + raport",
    ],
    tools: ["Maze", "Lookback", "Optimal Workshop", "Figma", "Hotjar"],
  },
  {
    id: "semnale",
    icon: Brain,
    label: "Analiză Semnale Comportamentale",
    tagline: "Ce spune discursul public fără să o știe",
    description:
      "Monitorizăm corpusuri mari de comunicare publică (discursuri, interviuri, texte media, social media) pentru a extrage semnale latente de comportament: tensiune, evitare, urgență, reframing și alte pattern-uri care nu apar în declarații explicite.",
    process: [
      { step: "01", title: "Definirea corpusului", desc: "Stabilim surse, intervalul temporal și vocabularul de referință pentru semnalele de interes." },
      { step: "02", title: "Colectare & preprocesare", desc: "Platforma Calypso colectează și normalizează conținutul din sursele selectate." },
      { step: "03", title: "Detectare semnale", desc: "Algoritmii identifică pattern-uri lexicale și comportamentale specifice — nu sentimentul general, ci semnale precise." },
      { step: "04", title: "Validare cercetător", desc: "Fiecare semnal este validat manual de un cercetător înainte de raportare. Reducem false positives la sub 5%." },
      { step: "05", title: "Raport + context", desc: "Livrăm semnalele detectate cu contextul lingvistic complet, frecvența, evoluția temporală și interpretarea comportamentală." },
    ],
    specs: [
      "Corpus: 1.000 – 500.000+ documente",
      "Actualizare: zilnică sau la cerere",
      "Semnale disponibile: 40+ tipuri",
      "Platforma: Calypso (ICSCB intern)",
      "Output: JSON structurat + raport PDF",
    ],
    tools: ["Calypso", "Python NLP", "spaCy", "Hugging Face", "Grafana"],
  },
];

export default function MetodologiePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt opacity-10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Cum lucrăm
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Metodologie transparentă, rezultate verificabile
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Fiecare studiu ICSCB urmează protocoale clare, instrumente validate și standarde internaționale de cercetare.
          </p>
        </div>
      </section>

      {/* Methods */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {methods.map((method, idx) => {
            const Icon = method.icon;
            const isEven = idx % 2 === 1;
            return (
              <div
                key={method.id}
                id={method.id}
                className={`py-16 ${idx < methods.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left: info */}
                  <div>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-midnight flex items-center justify-center">
                        <Icon size={18} className="text-cobalt-light" />
                      </div>
                      <span className="text-xs font-semibold text-cobalt uppercase tracking-widest">
                        {method.label}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-midnight mb-4">
                      {method.tagline}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8">{method.description}</p>

                    {/* Specs */}
                    <div className="bg-surface rounded-2xl p-5">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                        Specificații tehnice
                      </p>
                      <ul className="space-y-2.5">
                        {method.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <CheckCircle2 size={15} className="text-cobalt shrink-0 mt-0.5" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                          Instrumente
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {method.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs font-medium bg-white border border-slate-200 text-slate-600 rounded-lg px-3 py-1.5"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: process */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                      Procesul nostru
                    </p>
                    <div className="space-y-0">
                      {method.process.map((step, si) => (
                        <div key={step.step} className="flex gap-5">
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full bg-cobalt-50 border border-cobalt/20 flex items-center justify-center shrink-0">
                              <span className="text-xs font-bold text-cobalt">{step.step}</span>
                            </div>
                            {si < method.process.length - 1 && (
                              <div className="w-px flex-1 bg-slate-100 my-2" />
                            )}
                          </div>
                          <div className={`pb-6 ${si < method.process.length - 1 ? "" : ""}`}>
                            <h4 className="text-sm font-bold text-midnight mb-1 mt-1.5">{step.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">
            Standarde
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-midnight mb-4">
            Conformitate cu standardele internaționale
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            Cercetarea ICSCB respectă codurile de etică și standardele de calitate ale principalelor organizații internaționale de profil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ESOMAR", "ICC/ESOMAR", "ISO 20252", "GDPR", "ANPDCA"].map((standard) => (
              <div
                key={standard}
                className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-midnight"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-midnight mb-1">
              Ai o întrebare despre metodologie?
            </h3>
            <p className="text-slate-500 text-sm">
              Echipa noastră de cercetare îți răspunde în detaliu.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm shrink-0"
          >
            Contactează-ne
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
