"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/servicii", label: "Servicii" },
  { href: "/cercetare", label: "Cercetare" },
  { href: "/oglinda", label: "Oglinda", highlight: true },
  { href: "/despre", label: "Despre" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col leading-none group">
            <span className={`text-xl font-bold tracking-tight transition-colors ${isTransparent ? "text-white" : "text-midnight"}`}>
              ICSCB
            </span>
            <span className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${isTransparent ? "text-cobalt-light" : "text-cobalt"}`}>
              Cercetare & Biometrie
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-cobalt"
                    : isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-midnight"
                } ${link.highlight ? "flex items-center gap-1.5" : ""}`}
              >
                {link.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />
                )}
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-1 px-5 py-2.5 bg-cobalt text-white text-sm font-semibold rounded-lg hover:bg-cobalt-dark transition-colors"
            >
              Solicită o ofertă
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${isTransparent ? "text-white" : "text-midnight"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-cobalt bg-cobalt-50"
                    : "text-slate-700 hover:text-midnight hover:bg-slate-50"
                }`}
              >
                {link.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light animate-pulse" />}
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center px-5 py-3 bg-cobalt text-white text-sm font-semibold rounded-lg hover:bg-cobalt-dark transition-colors"
            >
              Solicită o ofertă
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
