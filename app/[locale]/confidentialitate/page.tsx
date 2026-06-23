import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "en"
    ? { title: "Privacy Policy", description: "ICSCB privacy policy — how we collect, process, and protect your personal data." }
    : { title: "Politica de confidențialitate", description: "Politica de confidențialitate ICSCB — cum colectăm, procesăm și protejăm datele dumneavoastră personale." };
}

export default async function ConfidentialitatePage() {
  const locale = await getLocale();
  const en = locale === "en";

  const sections = en
    ? [
        {
          title: "1. Who we are",
          content: `The Institute for Behavioral Studies & Biometry Research (ICSCB) is a research organization headquartered in Bucharest, Romania. You can contact us at contact@icscb.org.

This privacy policy applies to the icscb.org website and all services offered through it.`,
        },
        {
          title: "2. What data we collect and why",
          content: `**Contact form:** When you fill out the contact form, we collect the name, email address, organization, and project details you voluntarily provide. This data is used exclusively to respond to your request.

**Navigation data:** Like any website, our servers may automatically record your IP address, browser type, pages visited, and access time. This data is used strictly for technical and security purposes.

**Behavioral Mirror:** The facial reading tool processes camera imagery exclusively locally, in your browser. No image, no video recording, and no biometric data is sent to our servers. All processing takes place on your device via WebAssembly.`,
        },
        {
          title: "3. Legal basis for processing",
          content: `We process your data based on:
— Your **consent**, when you voluntarily complete the contact form
— The **legitimate interest** of ICSCB in operating and securing the site
— **Legal obligations** applicable under Romanian and European law`,
        },
        {
          title: "4. How long we retain data",
          content: `Contact form data is retained for a maximum of 24 months from the last interaction or until deletion is requested by you.

Technical server data (logs) is retained for a maximum of 90 days.`,
        },
        {
          title: "5. Who we share data with",
          content: `We do not sell, rent, or transfer your personal data to third parties for commercial purposes.

Data may be accessed by technical service providers (hosting, email) acting as joint or sub-processors under GDPR, who have contractual confidentiality obligations to ICSCB.`,
        },
        {
          title: "6. Cookies",
          content: `The icscb.org website does not use tracking or advertising cookies. Strictly necessary technical cookies may be used for website functionality (session, preferences). We do not use Google Analytics or other third-party tracking platforms.`,
        },
        {
          title: "7. Your rights (GDPR)",
          content: `In accordance with Regulation (EU) 2016/679, you have the right to:
— **Access** — request a copy of the data we hold about you
— **Rectification** — correct inaccurate data
— **Erasure** — request data deletion ("right to be forgotten")
— **Restriction** — limit how we process your data
— **Portability** — receive data in a structured, commonly used format
— **Objection** — object to processing based on legitimate interest

To exercise these rights, contact us at: contact@icscb.org

You also have the right to lodge a complaint with the National Supervisory Authority for Personal Data Processing (ANSPDCP): www.dataprotection.ro`,
        },
        {
          title: "8. Data security",
          content: `We apply appropriate technical and organizational measures to protect your data, including HTTPS transmission, restricted data access, and periodic security reviews.`,
        },
        {
          title: "9. Changes to this policy",
          content: `We may periodically update this privacy policy. The updated version will be published on this page with the date of last revision. We recommend consulting it periodically.`,
        },
      ]
    : [
        {
          title: "1. Cine suntem",
          content: `Institutul de Cercetare Studii Comportamentale & Biometrie (ICSCB) este o organizație de cercetare cu sediul în București, România. Puteți lua legătura cu noi la adresa contact@icscb.org.

Această politică de confidențialitate se aplică site-ului icscb.org și tuturor serviciilor oferite prin intermediul acestuia.`,
        },
        {
          title: "2. Ce date colectăm și de ce",
          content: `**Formular de contact:** Când completați formularul de contact, colectăm numele, adresa de email, organizația și detaliile proiectului pe care le furnizați voluntar. Aceste date sunt utilizate exclusiv pentru a răspunde solicitării dumneavoastră.

**Date de navigare:** Ca orice site web, serverele noastre pot înregistra automat adresa IP, tipul de browser, paginile vizitate și ora accesului. Aceste date sunt folosite strict în scop tehnic și de securitate.

**Oglinda Comportamentală:** Instrumentul de citire facială procesează imaginea camerei exclusiv local, în browser-ul dumneavoastră. Nicio imagine, nicio înregistrare video și niciun date biometrice nu sunt trimise pe serverele noastre. Tot procesarea are loc pe dispozitivul dumneavoastră prin WebAssembly.`,
        },
        {
          title: "3. Temeiul legal al prelucrării",
          content: `Prelucrăm datele dumneavoastră în baza:
— **Consimțământului** dumneavoastră, atunci când completați voluntar formularul de contact
— **Interesului legitim** al ICSCB în operarea și securizarea site-ului
— **Obligațiilor legale** care ne revin conform legislației române și europene`,
        },
        {
          title: "4. Cât timp păstrăm datele",
          content: `Datele din formularul de contact sunt păstrate pe o perioadă de maximum 24 de luni de la ultima interacțiune sau până la solicitarea ștergerii de către dumneavoastră.

Datele tehnice de server (log-uri) sunt păstrate maximum 90 de zile.`,
        },
        {
          title: "5. Cu cine împărtășim datele",
          content: `Nu vindem, nu închiriem și nu cedăm datele dumneavoastră personale unor terți în scopuri comerciale.

Datele pot fi accesate de furnizori de servicii tehnice (hosting, email) care acționează ca operatori asociați sau împuterniciți conform GDPR și care au obligații contractuale de confidențialitate față de ICSCB.`,
        },
        {
          title: "6. Cookie-uri",
          content: `Site-ul icscb.org nu folosește cookie-uri de tracking sau publicitate. Pot fi utilizate cookie-uri tehnice strict necesare pentru funcționarea site-ului (sesiune, preferințe). Nu folosim Google Analytics sau alte platforme de tracking de terță parte.`,
        },
        {
          title: "7. Drepturile dumneavoastră (GDPR)",
          content: `În conformitate cu Regulamentul (UE) 2016/679, aveți dreptul la:
— **Acces** — să solicitați o copie a datelor pe care le deținem despre dumneavoastră
— **Rectificare** — să corectați datele inexacte
— **Ștergere** — să solicitați ștergerea datelor („dreptul de a fi uitat")
— **Restricționare** — să limitați modul în care prelucrăm datele dumneavoastră
— **Portabilitate** — să primiți datele într-un format structurat, utilizat în mod curent
— **Opoziție** — să vă opuneți prelucrării bazate pe interes legitim

Pentru exercitarea acestor drepturi, contactați-ne la: contact@icscb.org

Aveți de asemenea dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): www.dataprotection.ro`,
        },
        {
          title: "8. Securitatea datelor",
          content: `Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dumneavoastră, incluzând transmisia prin HTTPS, accesul restricționat la date și revizuiri periodice de securitate.`,
        },
        {
          title: "9. Modificări ale acestei politici",
          content: `Putem actualiza această politică de confidențialitate periodic. Versiunea actualizată va fi publicată pe această pagină cu data ultimei revizuiri. Vă recomandăm să o consultați periodic.`,
        },
      ];

  return (
    <>
      <section className="pt-32 pb-12 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {en ? "Privacy Policy" : "Politica de confidențialitate"}
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
              {en ? "For any questions regarding the processing of personal data, contact us at " : "Pentru orice întrebare legată de prelucrarea datelor cu caracter personal, contactați-ne la "}
              <a href="mailto:contact@icscb.org" className="text-cobalt hover:underline">contact@icscb.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
