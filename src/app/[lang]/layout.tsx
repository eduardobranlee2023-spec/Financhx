import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CookieBanner } from "@/components/CookieBanner";
import { getDictionaryByLocale, hasLocale } from "@/dictionaries/dictionaries";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionaryByLocale(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      "Financhx",
      "Financial OS",
      lang === "es" ? "Conciliación bancaria" : "Bank reconciliation",
      "SaaS",
      "Fintech B2B",
      lang === "es" ? "Software financiero" : "Financial software",
    ],
    authors: [{ name: "Financhx Technologies" }],
    creator: "Financhx",
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
      url: "https://financhx.com",
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Financhx",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="relative min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-[#E5E5E5]/30 selection:text-white">
        <AnimatedBackground />
        {children}
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}

