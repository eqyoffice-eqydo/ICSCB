"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

const studyTypes = [
  "Sondaj de opinie publică",
  "Studiu biometric / neuromarketing",
  "UX research & testare utilizatori",
  "Analiză semnale comportamentale",
  "Cercetare mixed-methods",
  "Altele / Nu știu încă",
];

const budgetRanges = [
  "Sub 5.000 EUR",
  "5.000 – 15.000 EUR",
  "15.000 – 50.000 EUR",
  "Peste 50.000 EUR",
  "Să discutăm",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-midnight relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cobalt opacity-10 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cobalt-light uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Hai să discutăm despre proiectul tău
          </h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">
            Completează formularul și îți răspundem în maxim 48 de ore cu o propunere inițială.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-surface rounded-3xl border border-cobalt/10">
                  <div className="w-16 h-16 rounded-full bg-cobalt flex items-center justify-center mb-6">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-midnight mb-3">Mesaj trimis cu succes!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Mulțumim pentru mesaj. Echipa noastră îți va răspunde în maxim 48 de ore lucrătoare.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Nume + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        Nume complet <span className="text-cobalt">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex. Ion Popescu"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        Email <span className="text-cobalt">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ion@organizatie.ro"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organizatie + Telefon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        Organizație / Companie
                      </label>
                      <input
                        type="text"
                        placeholder="ex. Ministerul Sănătății"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="+40 7XX XXX XXX"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Tip studiu */}
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">
                      Tip de studiu <span className="text-cobalt">*</span>
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50 appearance-none"
                    >
                      <option value="" disabled>
                        Selectează tipul de cercetare...
                      </option>
                      {studyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Buget */}
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-3">
                      Buget estimat
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgetRanges.map((b) => (
                        <label
                          key={b}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 cursor-pointer hover:border-cobalt/30 hover:bg-cobalt-50 transition-colors has-[:checked]:border-cobalt has-[:checked]:bg-cobalt-50 has-[:checked]:text-cobalt"
                        >
                          <input type="radio" name="budget" value={b} className="sr-only" />
                          {b}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Termen */}
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">
                      Termen aproximativ
                    </label>
                    <input
                      type="text"
                      placeholder="ex. Q3 2026, urgent — 3 săptămâni, flexibil"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label className="block text-sm font-semibold text-midnight mb-2">
                      Descrie proiectul <span className="text-cobalt">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Spune-ne care este obiectivul studiului, publicul țintă, contextul și orice alte detalii relevante..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cobalt/20 focus:border-cobalt/40 transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-cobalt text-white font-semibold rounded-xl hover:bg-cobalt-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Trimite solicitarea
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400">
                    Prin trimiterea formularului ești de acord cu{" "}
                    <a href="/confidentialitate" className="underline hover:text-cobalt transition-colors">
                      politica noastră de confidențialitate
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="text-sm font-bold text-midnight mb-5">Date de contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@icscb.org"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-cobalt" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-midnight group-hover:text-cobalt transition-colors">
                        contact@icscb.org
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+40000000000"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-cobalt" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Telefon</p>
                      <p className="text-sm font-semibold text-midnight group-hover:text-cobalt transition-colors">
                        +40 XXX XXX XXX
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-cobalt" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Adresă</p>
                      <p className="text-sm font-semibold text-midnight">București, România</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-50 flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-cobalt" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Program</p>
                      <p className="text-sm font-semibold text-midnight">Luni – Vineri, 09:00–18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-midnight rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
                  <span className="text-xs font-semibold text-cobalt-light uppercase tracking-wider">
                    Timp de răspuns
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Răspundem la toate solicitările în maxim{" "}
                  <span className="text-white font-semibold">48 de ore lucrătoare</span>{" "}
                  cu o propunere inițială sau cu întrebări clarificatoare.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6">
                <h4 className="text-sm font-bold text-midnight mb-3">
                  Preferi să discutăm direct?
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Programează un apel de 30 de minute cu echipa noastră pentru a discuta cerințele proiectului.
                </p>
                <button className="w-full py-2.5 text-sm font-semibold text-cobalt border border-cobalt/30 rounded-xl hover:bg-cobalt-50 transition-colors">
                  Programează un apel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
