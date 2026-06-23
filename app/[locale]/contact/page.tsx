"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ContactPage() {
  const locale = useLocale();
  const en = locale === "en";
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const studyTypes = en
    ? ["Public opinion survey", "Biometric / neuromarketing study", "UX research & user testing", "Behavioral signal analysis", "Mixed-methods research", "Other / Not sure yet"]
    : ["Sondaj de opinie publică", "Studiu biometric / neuromarketing", "UX research & testare utilizatori", "Analiză semnale comportamentale", "Cercetare mixed-methods", "Altele / Nu știu încă"];

  const budgetRanges = en
    ? ["Under €5,000", "€5,000 – €15,000", "€15,000 – €50,000", "Over €50,000", "Let's discuss"]
    : ["Sub 5.000 EUR", "5.000 – 15.000 EUR", "15.000 – 50.000 EUR", "Peste 50.000 EUR", "Să discutăm"];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cobalt opacity-10 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            {en ? "Let's talk about your project" : "Hai să discutăm despre proiectul tău"}
          </h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">
            {en ? "Fill in the form and we'll respond within 48 hours with an initial proposal." : "Completează formularul și îți răspundem în maxim 48 de ore cu o propunere inițială."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-surface rounded-3xl border border-cobalt/10">
                  <div className="w-16 h-16 rounded-full bg-cobalt flex items-center justify-center mb-6"><Send size={24} className="text-white" /></div>
                  <h3 className="text-xl font-bold text-midnight mb-3">{en ? "Message sent successfully!" : "Mesaj trimis cu succes!"}</h3>
                  <p className="text-slate-500 max-w-sm">
                    {en ? "Thank you for your message. Our team will respond within 48 business hours." : "Mulțumim pentru mesaj. Echipa noastră îți va răspunde în maxim 48 de ore lucrătoare."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        {en ? "Full name" : "Nume complet"} <span className="text-cobalt">*</span>
                      </label>
                      <input type="text" required placeholder={en ? "e.g. John Smith" : "ex. Ion Popescu"} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        Email <span className="text-cobalt">*</span>
                      </label>
                      <input type="email" required placeholder={en ? "john@organization.com" : "ion@organizatie.ro"} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">{en ? "Organization / Company" : "Organizație / Companie"}</label>
                      <input type="text" placeholder={en ? "e.g. Ministry of Health" : "ex. Ministerul Sănătății"} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">{en ? "Phone" : "Telefon"}</label>
                      <input type="tel" placeholder="+40 7XX XXX XXX" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">
                      {en ? "Study type" : "Tip de studiu"} <span className="text-cobalt">*</span>
                    </label>
                    <select required defaultValue="" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50 appearance-none">
                      <option value="" disabled>{en ? "Select the type of research..." : "Selectează tipul de cercetare..."}</option>
                      {studyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-3">{en ? "Estimated budget" : "Buget estimat"}</label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgetRanges.map((b) => (
                        <label key={b} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 cursor-pointer hover:border-cobalt/30 hover:bg-cobalt-50 transition-colors has-[:checked]:border-cobalt has-[:checked]:bg-cobalt-50 has-[:checked]:text-cobalt">
                          <input type="radio" name="budget" value={b} className="sr-only" />{b}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">{en ? "Approximate timeline" : "Termen aproximativ"}</label>
                    <input type="text" placeholder={en ? "e.g. Q3 2026, urgent — 3 weeks, flexible" : "ex. Q3 2026, urgent — 3 săptămâni, flexibil"} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">
                      {en ? "Describe the project" : "Descrie proiectul"} <span className="text-cobalt">*</span>
                    </label>
                    <textarea required rows={5} placeholder={en ? "Tell us the study objective, target audience, context, and any other relevant details..." : "Spune-ne care este obiectivul studiului, publicul țintă, contextul și orice alte detalii relevante..."} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50 resize-none" />
                  </div>

                  <button type="submit" disabled={loading} className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{en ? "Sending..." : "Se trimite..."}</>
                    ) : (
                      <><Send size={15} />{en ? "Send request" : "Trimite solicitarea"}</>
                    )}
                  </button>

                  <p className="text-xs text-slate-400">
                    {en ? "By submitting the form you agree with our " : "Prin trimiterea formularului ești de acord cu "}
                    <Link href="/confidentialitate" className="underline hover:text-cobalt transition-colors">
                      {en ? "privacy policy" : "politica noastră de confidențialitate"}
                    </Link>.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="text-sm font-bold text-midnight mb-5">{en ? "Contact details" : "Date de contact"}</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@icscb.org" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0"><Mail size={15} className="text-cobalt" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-midnight group-hover:text-cobalt transition-colors">contact@icscb.org</p>
                    </div>
                  </a>
                  <a href="tel:+40000000000" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0"><Phone size={15} className="text-cobalt" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{en ? "Phone" : "Telefon"}</p>
                      <p className="text-sm font-semibold text-midnight group-hover:text-cobalt transition-colors">+40 XXX XXX XXX</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0"><MapPin size={15} className="text-cobalt" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{en ? "Address" : "Adresă"}</p>
                      <p className="text-sm font-semibold text-midnight">{en ? "Bucharest, Romania" : "București, România"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0"><Clock size={15} className="text-cobalt" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{en ? "Hours" : "Program"}</p>
                      <p className="text-sm font-semibold text-midnight">{en ? "Mon – Fri, 09:00–18:00" : "Luni – Vineri, 09:00–18:00"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-midnight rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
                  <span className="text-xs font-semibold text-cobalt-light uppercase tracking-wider">{en ? "Response time" : "Timp de răspuns"}</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {en
                    ? <>We respond to all requests within <span className="text-white font-semibold">48 business hours</span> with an initial proposal or clarifying questions.</>
                    : <>Răspundem la toate solicitările în maxim <span className="text-white font-semibold">48 de ore lucrătoare</span> cu o propunere inițială sau cu întrebări clarificatoare.</>}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6">
                <h4 className="text-sm font-bold text-midnight mb-3">{en ? "Prefer to talk directly?" : "Preferi să discutăm direct?"}</h4>
                <p className="text-xs text-slate-500 mb-4">
                  {en
                    ? "Schedule a 30-minute call with our team to discuss project requirements."
                    : "Programează un apel de 30 de minute cu echipa noastră pentru a discuta cerințele proiectului."}
                </p>
                <button className="w-full py-2.5 text-sm font-semibold text-cobalt border border-cobalt/30 rounded-xl hover:bg-cobalt-50 transition-colors">
                  {en ? "Schedule a call" : "Programează un apel"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
