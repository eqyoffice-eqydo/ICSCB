import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Shield, Cpu, Eye } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "en"
    ? { title: "Behavioral Mirror", description: "A self-knowledge tool based on facial structure and expression observation. Free, no account, no stored data — everything processes locally in the browser." }
    : { title: "Oglinda Comportamentală", description: "Un instrument de auto-cunoaștere bazat pe observarea structurii și expresiei faciale. Gratuit, fără cont, fără date stocate — totul se procesează local în browser." };
}

export default async function OglindaLandingPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const steps = en
    ? [
        { num: "01", icon: Eye, title: "Position", desc: "Place your face in the center of the visual field. The camera automatically detects facial presence and guides you with real-time quality indicators." },
        { num: "02", icon: Cpu, title: "Local Analysis", desc: "Press 'Analyze'. The tool captures 60 reference frames and calculates structural ratios and expressive profile — locally, in your browser." },
        { num: "03", icon: ArrowRight, title: "Reading", desc: "You receive the predominant character profile, active zones, face shape, and a recommendation aligned with the practice direction you choose." },
      ]
    : [
        { num: "01", icon: Eye, title: "Poziționare", desc: "Plasezi fața în centrul câmpului vizual. Camera detectează automat prezența facială și te ghidează cu indicații de calitate în timp real." },
        { num: "02", icon: Cpu, title: "Analiză locală", desc: "Apeși «Analizează». Instrumentul captează 60 de cadre de referință și calculează rapoartele structurale și profilul expresiv — local, în browser-ul tău." },
        { num: "03", icon: ArrowRight, title: "Citire", desc: "Primești profilul de caracter predominant, zonele active, forma feței și o recomandare aliniată cu direcția de practică pe care o alegi." },
      ];

  const privacy = en
    ? ["Camera operates exclusively in the browser — zero video data sent to server", "Analysis runs locally via WebAssembly (MediaPipe)", "No account, no storage, no tracking", "Results disappear when the tab is closed"]
    : ["Camera funcționează exclusiv în browser — zero date video trimise pe server", "Analiza rulează local prin WebAssembly (MediaPipe)", "Nu există cont, nu există stocare, nu există urmărire", "Rezultatele dispar la închiderea tab-ului"];

  const archetypes = en
    ? ["The Observer", "The Leader", "The Protector", "The Seeker", "The Creator", "The Fighter", "The Diplomat", "The Inward One", "The Visionary", "The Caregiver", "The Strategist", "The Sensitive"]
    : ["Observatorul", "Conducătorul", "Protectorul", "Căutătorul", "Creatorul", "Luptătorul", "Diplomatul", "Interiorizatul", "Vizionarul", "Îngrijitorul", "Strategul", "Senzitivul"];

  const profileItems = en
    ? [
        { title: "Predominant Character", desc: "The primary archetype detected from facial structure — with its specific gift, possible shadow, deeper need, and practice path.", color: "bg-amber-400" },
        { title: "The 4 Face Zones", desc: "Forehead, eyes, jaw, and lips — each with its own reading of the present state and a reflection question.", color: "bg-blue-500" },
        { title: "Structural Face Shape", desc: "Basic geometry: oval, round, square, heart, oblong, diamond, triangle, or harmonious — with the associated interpretation.", color: "bg-violet-500" },
        { title: "Aligned Recommendation", desc: "You choose a direction to cultivate (calm, clarity, courage, expression...) and receive a personalized recommendation for today's practice.", color: "bg-cobalt" },
      ]
    : [
        { title: "Caracterul predominant", desc: "Arhetipul principal detectat din structura facială — cu darul specific, umbra posibilă, nevoia de profunzime și calea de practică.", color: "bg-amber-400" },
        { title: "Cele 4 zone ale feței", desc: "Fruntea, ochii, maxilarul și buzele — fiecare cu o lectură proprie a stării de moment și cu o întrebare de reflecție.", color: "bg-blue-500" },
        { title: "Forma structurală a feței", desc: "Geometria de bază: oval, rotund, pătrat, inimă, alungit, diamant, triunghi sau armonios — cu interpretarea asociată.", color: "bg-violet-500" },
        { title: "Recomandare aliniată", desc: "Alegi o direcție de cultivat (calm, claritate, curaj, expresie...) și primești o recomandare personalizată pentru practica de azi.", color: "bg-cobalt" },
      ];

  return (
    <>
      <section className="pt-32 pb-20 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cobalt opacity-10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cobalt-light opacity-6 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
              <span className="text-xs font-medium text-white/70 tracking-wide">
                {en ? "Free · No account · No stored data" : "Gratuit · Fără cont · Fără date stocate"}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {en ? <>Behavioral <span className="text-cobalt-light">Mirror</span></> : <>Oglinda <span className="text-cobalt-light">Comportamentală</span></>}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
              {en
                ? "A self-knowledge tool based on facial structure and expression observation. Not a personality test. Not a diagnosis. An invitation to observe."
                : "Un instrument de auto-cunoaștere bazat pe observarea structurii și expresiei faciale. Nu un test de personalitate. Nu un diagnostic. O invitație la observare."}
            </p>
            <p className="text-base text-white/40 leading-relaxed mb-10 max-w-xl">
              {en
                ? "Using the same facial mapping technology used in applied biometric research, the Mirror identifies character tendencies and offers starting points for personal practice."
                : "Folosind aceeași tehnologie de mapping facial utilizată în cercetarea biometrică aplicată, Oglinda identifică tendințe de caracter și oferă puncte de pornire pentru practica personală."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/oglinda/sesiune" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors">
                {en ? "Begin observation" : "Începe observația"}
                <ArrowRight size={16} />
              </Link>
              <a href="#cum-functioneaza" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 text-white font-semibold rounded-xl hover:bg-white/12 transition-colors border border-white/15">
                {en ? "How it works" : "Cum funcționează"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cobalt-50 border-b border-cobalt/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-cobalt font-medium leading-relaxed">
            <strong className="font-bold">{en ? "Important:" : "Important:"}</strong>{" "}
            {en
              ? "The Mirror is not a personality test, does not make medical or psychological diagnoses, and does not produce certainties. All results are formulated as orientation — a starting point for reflection, not a final conclusion."
              : "Oglinda nu este un test de personalitate, nu face diagnoze medicale sau psihologice și nu produce certitudini. Toate rezultatele sunt formulate orientativ — punct de plecare pentru reflecție, nu concluzie finală."}
          </p>
        </div>
      </section>

      <section id="cum-functioneaza" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "How it works" : "Cum funcționează"}</p>
            <h2 className="text-3xl font-bold text-midnight mb-4">{en ? "Three steps. Three minutes." : "Trei pași. Trei minute."}</h2>
            <p className="text-slate-500 leading-relaxed">
              {en
                ? "No account, no installed app, no special settings. Just a browser, camera, and a few minutes of attention."
                : "Nu ai nevoie de cont, de aplicație instalată sau de setări speciale. Numai browser, cameră și câteva minute de atenție."}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-8 hover:border-cobalt/20 hover:shadow-lg hover:shadow-cobalt/5 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-midnight flex items-center justify-center"><Icon size={22} className="text-cobalt-light" /></div>
                    <span className="text-3xl font-bold text-cobalt/15">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "What you will see" : "Ce vei vedea"}</p>
              <h2 className="text-3xl font-bold text-midnight mb-6 leading-tight">{en ? "A profile with four levels of reading" : "Un profil cu patru niveluri de lectură"}</h2>
              <div className="space-y-5">
                {profileItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color} shrink-0 mt-2`} />
                    <div>
                      <h3 className="text-sm font-bold text-midnight mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {archetypes.map((a) => (
                <div key={a} className="rounded-xl border border-slate-100 bg-white p-4 text-center hover:border-cobalt/20 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-full bg-cobalt-50 flex items-center justify-center mx-auto mb-2">
                    <span className="text-[10px] text-cobalt font-bold">{a[0]}</span>
                  </div>
                  <p className="text-[11px] font-semibold text-midnight leading-tight">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-midnight flex items-center justify-center mx-auto mb-6">
            <Shield size={26} className="text-cobalt-light" />
          </div>
          <p className="text-xs font-semibold text-cobalt uppercase tracking-widest mb-3">{en ? "Privacy" : "Confidențialitate"}</p>
          <h2 className="text-2xl font-bold text-midnight mb-6">{en ? "Your camera stays yours" : "Camera ta rămâne a ta"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
            {privacy.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-slate-100">
                <span className="text-cobalt text-sm font-bold mt-0.5">✓</span>
                <p className="text-sm text-slate-600 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {en
              ? "The camera requires HTTPS for access. icscb.org runs on HTTPS, so the tool works directly in your browser, both on desktop and mobile."
              : "Camera necesită HTTPS pentru acces. icscb.org rulează pe HTTPS, deci instrumentul funcționează direct în browser-ul tău, atât pe desktop cât și pe mobil."}
          </p>
        </div>
      </section>

      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cobalt opacity-12 blur-[100px] rounded-full" />
        <div className="relative max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-5 leading-tight">{en ? "Ready to look?" : "Gata să privești?"}</h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            {en
              ? "The tool loads in the browser. You need a camera and 3-5 minutes of attention. No recording, no account."
              : "Instrumentul se încarcă în browser. Ai nevoie de cameră și de 3-5 minute de atenție. Nicio înregistrare, niciun cont."}
          </p>
          <Link href="/oglinda/sesiune" className="inline-flex items-center gap-2 px-10 py-4 bg-cobalt text-white font-bold rounded-xl hover:bg-cobalt-dark transition-colors">
            {en ? "Open the Mirror" : "Deschide Oglinda"}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
