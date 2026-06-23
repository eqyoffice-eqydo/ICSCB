import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-5">
              <span className="text-2xl font-bold tracking-tight">ICSCB</span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-cobalt-light mt-1">
                Cercetare & Biometrie
              </span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              Comportamentul uman nu se ghicește. Se măsoară. Cercetare bazată pe semnale latente, biometrie aplicată și observație directă.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:contact@icscb.org" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <Mail size={13} className="shrink-0" />
                contact@icscb.org
              </a>
              <span className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                București, România
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">Servicii</h3>
            <ul className="space-y-3">
              {[
                { href: "/servicii#sondaje", label: "Sondaje & Opinie Publică" },
                { href: "/servicii#biometrie", label: "Biometrie & Neuromarketing" },
                { href: "/servicii#ux", label: "UX Research & Testare" },
                { href: "/servicii#semnale", label: "Analiză Semnale Comportamentale" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">Institut</h3>
            <ul className="space-y-3">
              {[
                { href: "/cercetare", label: "Cercetare & Publicații" },
                { href: "/oglinda", label: "Oglinda Comportamentală" },
                { href: "/metodologie", label: "Metodologie" },
                { href: "/despre", label: "Despre ICSCB" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">Platformă</h3>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-5">
              <div className="inline-flex items-center gap-1.5 bg-cobalt/20 text-cobalt-light rounded-full px-3 py-1 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                În dezvoltare
              </div>
              <p className="text-sm font-semibold text-white mb-1.5">Public Opinion Intelligence</p>
              <p className="text-xs text-white/45 leading-relaxed">Monitorizare și analiză a opiniei publice în timp real prin semnale comportamentale latente.</p>
              <p className="text-xs text-cobalt-light mt-4 font-semibold tracking-wide">app.icscb.org — Q3 2026</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-white/60 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                Disponibil
              </div>
              <p className="text-sm font-semibold text-white mb-1.5">Oglinda Comportamentală</p>
              <p className="text-xs text-white/45 leading-relaxed">Instrument gratuit de auto-cunoaștere prin observarea structurii faciale.</p>
              <Link href="/oglinda" className="text-xs text-cobalt-light mt-3 font-semibold tracking-wide block hover:text-white transition-colors">
                Încearcă acum →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ICSCB. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/confidentialitate", label: "Confidențialitate" },
              { href: "/termeni", label: "Termeni și condiții" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/35 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
