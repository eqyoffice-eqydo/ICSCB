"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: "/servicii", label: t("services") },
    { href: "/cercetare", label: t("research") },
    { href: "/oglinda", label: t("mirror"), pulse: true },
    { href: "/despre", label: t("about") },
  ];

  const otherLocale = locale === "ro" ? "en" : "ro";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-bold text-white tracking-tight">ICSCB</span>
            <span className="text-[10px] font-semibold text-cobalt-light uppercase tracking-widest">
              Cercetare & Biometrie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white transition-colors"
              >
                {link.pulse && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cobalt-light opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cobalt-light" />
                  </span>
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={pathname}
              locale={otherLocale}
              className="flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-white/90 transition-colors border border-white/15 rounded-lg px-3 py-1.5 hover:border-white/30"
            >
              <Globe size={12} />
              {t("lang_switch")}
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 bg-cobalt text-white text-sm font-semibold rounded-xl hover:bg-cobalt-dark transition-colors"
            >
              {t("contact_cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={pathname}
              locale={otherLocale}
              className="flex items-center gap-1 text-xs font-bold text-white/50 hover:text-white/90 transition-colors px-2 py-1"
            >
              <Globe size={12} />
              {t("lang_switch")}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-midnight border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-3 text-base font-semibold text-white/70 hover:text-white transition-colors border-b border-white/6 last:border-0"
              >
                {link.pulse && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light" />
                )}
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center py-3 bg-cobalt text-white font-semibold rounded-xl text-sm"
            >
              {t("contact_cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
