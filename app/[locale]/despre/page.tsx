import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Microscope, Shield, Target, Globe, Brain, Activity } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "en"
    ? { title: "About ICSCB", description: "The Institute for Behavioral Studies & Biometry Research — mission, methodology, values, and our perspective on applied behavioral research." }
    : { title: "Despre ICSCB", description: "Institutul de Cercetare Studii Comportamentale & Biometrie — misiune, metodologie, valori și perspectiva noastră despre cercetarea comportamentală aplicată." };
}

export default async function DesprePage() {
  const locale = await getLocale();
  const en = locale === "en";

  const values = en
    ? [
        { icon: Microscope, title: "Methodological rigor", description: "Every study follows validated protocols and complete traceability. We don't sacrifice correctness for client comfort." },
        { icon: Shield, title: "Editorial independence", description: "Conclusions follow the data, not the agenda. Independence from clients on interpretation is non-negotiable." },
        { icon: Target, title: "Practical relevance", description: "We research to inform decisions, not for research's sake. Every deliverable contains actionable recommendations." },
        { icon: Globe, title: "Radical transparency", description: "We publish methodology, sampling errors, and limitations. We say when we don't know — it's more valuable than false certainty." },
        { icon: Brain, title: "Layered reading", description: "We combine quantitative data, latent signals, and biometric observation. None alone tells the full story." },
        { icon: Activity, title: "Ethics of tools", description: "Tools like the Behavioral Mirror are orientational — not diagnoses. We build them with care for the user." },
      ]
    : [
        { icon: Microscope, title: "Rigoare metodologică", description: "Fiecare studiu respectă protocoale validate și trasabilitate completă. Nu sacrificăm corectitudinea pentru confortul clientului." },
        { icon: Shield, title: "Independență editorială", description: "Concluziile urmează datele, nu agenda. Independența față de client pe interpretare este non-negociabilă." },
        { icon: Target, title: "Relevanță practică", description: "Cercetăm pentru a informa decizii, nu de dragul cercetării. Fiecare livrabil conține recomandări acționabile." },
        { icon: Globe, title: "Transparență radicală", description: "Publicăm metodologia, erorile de eșantionare și limitele. Spunem când nu știm — e mai valoros decât o certitudine falsă." },
        { icon: Brain, title: "Lectură stratificată", description: "Combinăm date cantitative, semnale latente și observație biometrică. Niciuna singură nu spune tot." },
        { icon: Activity, title: "Etică a instrumentelor", description: "Instrumente ca Oglinda Comportamentală sunt orientative — nu diagnostice. Le construim cu grijă față de utilizator." },
      ];

  const timeline = en
    ? [
        { year: "2018", title: "ICSCB Founded", desc: "The Institute is founded with focus on public opinion surveys and applied behavioral research in electoral and civic context." },
        { year: "2020", title: "Biometrics Laboratory", desc: "We launch the first eye-tracking and neuromarketing laboratory with Tobii Pro equipment. We expand the portfolio with advertising and packaging testing." },
        { year: "2022", title: "UX Research & Testing", desc: "We introduce UX research services and prototype testing for companies in the digital sector. First internal certification in user research." },
        { year: "2024", title: "Behavioral Signal Analysis", desc: "We launch the internal Calypso platform for monitoring public discourse corpora. First clients on the latent signal analysis service." },
        { year: "2026", title: "Mirror & POIP", desc: "We launch the Behavioral Mirror as a free self-knowledge tool and the POIP platform for real-time public opinion intelligence." },
      ]
    : [
        { year: "2018", title: "Înființare ICSCB", desc: "Institutul este fondat cu focus pe sondaje de opinie publică și cercetare comportamentală aplicată în context electoral și civic." },
        { year: "2020", title: "Laborator de biometrie", desc: "Lansăm primul laborator de eye-tracking și neuromarketing cu echipamente Tobii Pro. Extindem portofoliul cu testare publicitate și packaginguri." },
        { year: "2022", title: "UX Research & Testare", desc: "Introducem servicii de UX research și testare de prototipuri pentru companii din sectorul digital. Prima certificare internă în cercetare utilizatori." },
        { year: "2024", title: "Analiza semnalelor comportamentale", desc: "Lansăm platforma internă Calypso pentru monitorizarea corpusurilor de discurs public. Primii clienți pe serviciul de analiză semnale latente." },
        { year: "2026", title: "Oglinda & POIP", desc: "Lansăm Oglinda Comportamentală ca instrument gratuit de auto-cunoaștere și platforma POIP de inteligență a opiniei publice în timp real." },
      ];

  const stats = en
    ? [{ num: "200+", label: "Studies completed" }, { num: "15k+", label: "Respondents annually" }, { num: "8 yrs", label: "Of activity" }, { num: "50+", label: "Partner organizations" }]
    : [{ num: "200+", label: "Studii finalizate" }, { num: "15k+", label: "Respondenți anual" }, { num: "8 ani", label: "De activitate" }, { num: "50+", label: "Organizații partenere" }];

  return (
    <>
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cobalt opacity-10 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">{en ? "Who we are" : "Cine suntem"}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            {en ? "Institute for Behavioral Studies & Biometry Research" : "Institutul de Cercetare Studii Comportamentale & Biometrie"}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {en
              ? "ICSCB is an applied research institute specializing in understanding human behavior — through latent signals from public discourse, applied biometrics, direct observation, and self-knowledge tools."
              : "ICSCB este un institut de cercetare aplicată specializat în înțelegerea comportamentului uman — prin semnale latente din discursul public, biometrie aplicată, observație directă și instrumente de auto-cunoaștere."}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-4">{en ? "Our mission" : "Misiunea noastră"}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-6 leading-tight">
                {en ? "To make decisions better through a deeper understanding of people" : "Să facem deciziile mai bune printr-o înțelegere mai profundă a oamenilor"}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {en ? (
                  <>
                    <p>We live in an age of data, but data without context is noise. ICSCB exists to transform raw data into authentic understanding of human behavior — what people think, feel, do, and why.</p>
                    <p>We work with organizations in the public and private sector, communication agencies, product companies, and researchers — wherever there's a need to better understand an audience. And we offer individual tools, like the Behavioral Mirror, for anyone who wants to better understand themselves.</p>
                    <p>We believe that good research is not a luxury, but a condition of responsible decisions. We believe that self-knowledge tools, when built ethically, can contribute to a more conscious life.</p>
                  </>
                ) : (
                  <>
                    <p>Trăim într-o epocă a datelor, dar datele fără context sunt zgomot. ICSCB există pentru a transforma datele brute în înțelegere autentică a comportamentului uman — ce cred oamenii, ce simt, ce fac și de ce.</p>
                    <p>Lucrăm cu organizații din sectorul public și privat, cu agenții de comunicare, cu companii de produs și cu cercetători — oriunde există nevoia de a înțelege mai bine un public. Și oferim instrumente individuale, ca Oglinda Comportamentală, pentru oricine vrea să se înțeleagă mai bine pe sine.</p>
                    <p>Credem că cercetarea bună nu este un lux, ci o condiție a deciziilor responsabile. Credem că instrumentele de auto-cunoaștere, când sunt construite cu etică, pot contribui la o viață mai conștientă.</p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 text-center border border-slate-100">
                    <span className="text-2xl font-bold text-midnight block mb-1">{s.num}</span>
                    <span className="text-xs text-slate-500 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "What guides us" : "Ce ne ghidează"}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight">{en ? "ICSCB Values" : "Valorile ICSCB"}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-midnight flex items-center justify-center mb-5"><Icon size={20} className="text-cobalt-light" /></div>
                  <h3 className="text-base font-bold text-midnight mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "Our history" : "Istoria noastră"}</p>
            <h2 className="text-3xl font-bold text-midnight">{en ? "How we got here" : "Cum am ajuns aici"}</h2>
          </div>
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${idx === timeline.length - 1 ? "bg-cobalt text-white ring-4 ring-cobalt/20" : "bg-cobalt-50 text-cobalt border border-cobalt/20"}`}>
                    {item.year.slice(2)}
                  </div>
                  {idx < timeline.length - 1 && <div className="w-px flex-1 bg-slate-100 my-2" />}
                </div>
                <div className={`pb-10 ${idx === timeline.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-3 mb-2 mt-2">
                    <span className="text-xs font-semibold text-cobalt">{item.year}</span>
                    {idx === timeline.length - 1 && (
                      <span className="text-[11px] font-semibold bg-cobalt/10 text-cobalt rounded-full px-2.5 py-0.5">{en ? "Ongoing" : "În curs"}</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-midnight mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "Team" : "Echipa"}</p>
          <h2 className="text-2xl font-bold text-midnight mb-4">{en ? "Researchers with applied expertise" : "Cercetători cu experiență aplicată"}</h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            {en
              ? "The ICSCB team combines expertise in cognitive psychology, sociology, computational neuroscience, and research design. Individual profiles are in preparation."
              : "Echipa ICSCB combină expertiză în psihologie cognitivă, sociologie, neuroștiințe computaționale și design de cercetare. Profilurile individuale sunt în pregătire."}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-midnight text-white font-semibold rounded-xl hover:bg-midnight-dark transition-colors text-sm">
            {en ? "Talk to the team" : "Discută cu echipa"}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
