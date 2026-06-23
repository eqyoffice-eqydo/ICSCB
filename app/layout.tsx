import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ICSCB — Institutul de Cercetare Studii Comportamentale & Biometrie",
    template: "%s | ICSCB",
  },
  description:
    "Cercetare comportamentală și biometrică: sondaje, eye-tracking, neuromarketing, UX research și Oglinda Comportamentală — instrumentul de auto-cunoaștere bazat pe observarea structurii faciale.",
  keywords: [
    "cercetare comportamentală",
    "sondaje opinie publică",
    "biometrie",
    "neuromarketing",
    "eye tracking",
    "UX research",
    "oglinda comportamentală",
    "semnale latente",
    "România",
  ],
  openGraph: {
    title: "ICSCB — Comportamentul uman nu se ghicește. Se măsoară.",
    description:
      "Institutul de Cercetare Studii Comportamentale & Biometrie. Sondaje, biometrie, neuromarketing, UX research și Oglinda Comportamentală.",
    url: "https://icscb.org",
    siteName: "ICSCB",
    locale: "ro_RO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
