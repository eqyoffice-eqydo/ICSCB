import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ICSCB — Behavioral Research & Biometrics",
    template: "%s | ICSCB",
  },
  description:
    "Institute for Behavioral Studies & Biometrics Research. Surveys, biometrics, neuromarketing, UX research, and the Behavioral Mirror.",
  openGraph: {
    title: "ICSCB — Human behavior isn't guessed. It's measured.",
    url: "https://icscb.org",
    siteName: "ICSCB",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://icscb.org",
    languages: {
      ro: "https://icscb.org",
      en: "https://icscb.org/en",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
