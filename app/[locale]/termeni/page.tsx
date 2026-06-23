import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "en"
    ? { title: "Terms and Conditions", description: "Terms and conditions for using the icscb.org website and ICSCB tools." }
    : { title: "Termeni și condiții", description: "Termenii și condițiile de utilizare a site-ului icscb.org și a instrumentelor ICSCB." };
}

export default async function TermeniPage() {
  const locale = await getLocale();
  const en = locale === "en";

  const sections = en
    ? [
        {
          title: "1. Acceptance of terms",
          content: `By accessing and using the icscb.org website, you implicitly accept these terms and conditions of use. If you do not agree with them, please do not use the website.

The Institute for Behavioral Studies & Biometry Research (ICSCB) reserves the right to modify these terms at any time. Changes take effect upon publication on the website.`,
        },
        {
          title: "2. Use of the website",
          content: `The icscb.org website is intended to inform the public about ICSCB research activities and to provide educational and self-knowledge tools.

The following uses of the website are prohibited:
— Illegal or fraudulent activities
— Automated data collection (scraping) without ICSCB's written consent
— Distribution of harmful or misleading content
— Any activity that could affect the website's functioning or security`,
        },
        {
          title: "3. Behavioral Mirror — specific conditions",
          content: `The Behavioral Mirror is a free self-knowledge tool with an orientational character. By using it, you confirm that:

— You understand that results are informational and do not constitute medical, psychological, or psychiatric diagnosis
— You will not use the results as a basis for medical or psychological decisions
— You agree that analysis is performed locally in the browser and that no images or biometric data are stored or transmitted
— You are of legal age or have the consent of a legal guardian

ICSCB is not responsible for incorrect interpretations of results or for decisions made based on them.`,
        },
        {
          title: "4. Intellectual property",
          content: `All content on icscb.org — texts, articles, graphics, code, methodologies — is the property of ICSCB and is protected by copyright legislation.

You may cite ICSCB articles with correct attribution (author name, article title, source icscb.org). You do not have the right to reproduce, distribute, or commercialize the content without prior written consent from ICSCB.`,
        },
        {
          title: "5. Articles and research content",
          content: `Articles published on the site reflect the opinions of the ICSCB research team at the date of publication. They do not constitute legal, medical, financial, or political advice.

ICSCB makes reasonable efforts for content accuracy but does not guarantee that all information is complete, current, or error-free.`,
        },
        {
          title: "6. External links",
          content: `The website may contain links to external resources. ICSCB is not responsible for the content, privacy policies, or practices of third-party websites. Accessing them is done at your own risk.`,
        },
        {
          title: "7. Limitation of liability",
          content: `ICSCB cannot be held liable for direct or indirect damages resulting from:
— Use or inability to use the website
— Errors or omissions in content
— Technical service interruptions
— Decisions made based on content published on the website

The website is provided "as is," without express or implied warranties of uninterrupted operation or absence of errors.`,
        },
        {
          title: "8. Applicable law",
          content: `These terms are governed by Romanian law. Any dispute arising from or in connection with the use of the website will be subject to the exclusive jurisdiction of the competent courts in Bucharest, Romania.`,
        },
        {
          title: "9. Contact",
          content: `For any questions related to these terms, you can contact us at contact@icscb.org.`,
        },
      ]
    : [
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

  return (
    <>
      <section className="pt-32 pb-12 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {en ? "Terms and Conditions" : "Termeni și condiții"}
          </h1>
          <p className="text-white/50 text-sm">{en ? "Last updated: June 2026" : "Ultima actualizare: iunie 2026"}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-midnight mb-4">{section.title}</h2>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
              </div>
            ))}
          </div>
          <div className="mt-14 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400">
              {en ? "For questions, contact us at " : "Pentru întrebări, contactați-ne la "}
              <a href="mailto:contact@icscb.org" className="text-cobalt hover:underline">contact@icscb.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
