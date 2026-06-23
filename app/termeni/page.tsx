import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a site-ului icscb.org și a instrumentelor ICSCB.",
};

const sections = [
  {
    title: "1. Acceptarea termenilor",
    content: `Prin accesarea și utilizarea site-ului icscb.org, acceptați în mod implicit prezentii termeni și condiții de utilizare. Dacă nu sunteți de acord cu aceștia, vă rugăm să nu utilizați site-ul.

Institutul de Cercetare Studii Comportamentale & Biometrie (ICSCB) își rezervă dreptul de a modifica acești termeni în orice moment. Modificările intră în vigoare la publicarea pe site.`,
  },
  {
    title: "2. Utilizarea site-ului",
    content: `Site-ul icscb.org este destinat informării publicului despre activitățile de cercetare ale ICSCB și furnizării de instrumente educative și de auto-cunoaștere.

Este interzisă utilizarea site-ului pentru:
— Activități ilegale sau frauduloase
— Colectarea automată de date (scraping) fără acordul scris al ICSCB
— Distribuirea de conținut dăunător sau înșelător
— Orice activitate care ar putea afecta funcționarea sau securitatea site-ului`,
  },
  {
    title: "3. Oglinda Comportamentală — condiții specifice",
    content: `Oglinda Comportamentală este un instrument gratuit de auto-cunoaștere cu caracter orientativ. Prin utilizarea sa, confirmați că:

— Înțelegeți că rezultatele au caracter informativ și nu constituie diagnostic medical, psihologic sau psihiatric
— Nu veți utiliza rezultatele ca bază pentru decizii medicale sau psihologice
— Sunteți de acord că analiza se realizează local, în browser, și că nicio imagine sau date biometrice nu sunt stocate sau transmise
— Sunteți major sau aveți acordul unui tutore legal

ICSCB nu răspunde pentru interpretări eronate ale rezultatelor sau pentru decizii luate pe baza acestora.`,
  },
  {
    title: "4. Proprietate intelectuală",
    content: `Tot conținutul site-ului icscb.org — texte, articole, grafice, cod, metodologii — este proprietatea ICSCB și este protejat de legislația drepturilor de autor.

Puteți cita articolele ICSCB cu atribuire corectă (numele autorului, titlul articolului, sursa icscb.org). Nu aveți dreptul să reproduceți, distribuiți sau comercializați conținutul fără acordul scris prealabil al ICSCB.`,
  },
  {
    title: "5. Articole și conținut de cercetare",
    content: `Articolele publicate pe site reflectă opiniile echipei de cercetare ICSCB la data publicării. Acestea nu constituie consultanță juridică, medicală, financiară sau politică.

ICSCB depune eforturi rezonabile pentru acuratețea conținutului, dar nu garantează că toate informațiile sunt complete, actuale sau lipsite de erori.`,
  },
  {
    title: "6. Linkuri externe",
    content: `Site-ul poate conține linkuri către resurse externe. ICSCB nu este responsabil pentru conținutul, politicile de confidențialitate sau practicile site-urilor terțe. Accesarea acestora se face pe propria răspundere.`,
  },
  {
    title: "7. Limitarea răspunderii",
    content: `ICSCB nu poate fi ținut răspunzător pentru daune directe sau indirecte rezultate din:
— Utilizarea sau imposibilitatea utilizării site-ului
— Erori sau omisiuni în conținut
— Întreruperi tehnice ale serviciului
— Decizii luate pe baza conținutului publicat pe site

Site-ul este furnizat „ca atare", fără garanții exprese sau implicite de funcționare neîntreruptă sau de absență a erorilor.`,
  },
  {
    title: "8. Legea aplicabilă",
    content: `Acești termeni sunt guvernați de legislația română. Orice litigiu apărut din sau în legătură cu utilizarea site-ului va fi supus jurisdicției exclusive a instanțelor competente din București, România.`,
  },
  {
    title: "9. Contact",
    content: `Pentru orice întrebări legate de acești termeni, ne puteți contacta la contact@icscb.org.`,
  },
];

export default function TermeniPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Termeni și condiții
          </h1>
          <p className="text-white/50 text-sm">
            Ultima actualizare: iunie 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-midnight mb-4">{section.title}</h2>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400">
              Pentru întrebări, contactați-ne la{" "}
              <a href="mailto:contact@icscb.org" className="text-cobalt hover:underline">
                contact@icscb.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
