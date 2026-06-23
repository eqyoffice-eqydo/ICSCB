import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

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
            <p className="text-sm text-white/55 leading-relaxed mb-6">{t("tagline")}</p>
            <div className="space-y-2.5">
              <a
                href="mailto:contact@icscb.org"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
              >
                <Mail size={13} className="shrink-0" />
                contact@icscb.org
              </a>
              <span className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                {t("address")}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t("services_heading")}
            </h3>
            <ul className="space-y-3">
              {(["sondaje", "biometrie", "ux", "semnale"] as const).map((id) => {
                const labels: Record<string, string> = {
                  sondaje: "Sondaje & Opinie Publică",
                  biometrie: "Biometrie & Neuromarketing",
                  ux: "UX Research & Testare",
                  semnale: "Analiză Semnale Comportamentale",
                };
                return (
                  <li key={id}>
                    <Link
                      href={`/servicii#${id}`}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {labels[id]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t("institute_heading")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/cercetare", key: "link_research" },
                { href: "/oglinda", key: "link_mirror" },
                { href: "/metodologie", key: "link_methodology" },
                { href: "/despre", key: "link_about" },
                { href: "/contact", key: "link_contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {t(link.key as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-5">
              {t("platform_heading")}
            </h3>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-5">
              <div className="inline-flex items-center gap-1.5 bg-cobalt/20 text-cobalt-light rounded-full px-3 py-1 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                {t("poip_status")}
              </div>
              <p className="text-sm font-semibold text-white mb-1.5">{t("poip_title")}</p>
              <p className="text-xs text-white/45 leading-relaxed">{t("poip_desc")}</p>
              <p className="text-xs text-cobalt-light mt-4 font-semibold tracking-wide">
                {t("poip_eta")}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-white/60 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                {t("mirror_status")}
              </div>
              <p className="text-sm font-semibold text-white mb-1.5">{t("mirror_title")}</p>
              <p className="text-xs text-white/45 leading-relaxed">{t("mirror_desc")}</p>
              <Link
                href="/oglinda"
                className="text-xs text-cobalt-light mt-3 font-semibold tracking-wide block hover:text-white transition-colors"
              >
                {t("mirror_cta")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ICSCB. {t("copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/confidentialitate"
              className="text-xs text-white/35 hover:text-white/70 transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/termeni"
              className="text-xs text-white/35 hover:text-white/70 transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
