import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CookieBanner } from "@/components/CookieBanner";

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

export const metadata: Metadata = {
  title: "Financhx — Financial Operating System",
  description:
    "Plataforma empresarial de software para centralizar, automatizar y auditar operaciones financieras. Reducí procesos manuales y conectá extractos bancarios con facturación en tiempo real.",
  keywords: [
    "Financhx",
    "Financial OS",
    "Conciliación bancaria",
    "SaaS financiero",
    "Facturación y extractos",
    "Fintech B2B Argentina",
    "Software a medida empresarial",
    "Trazabilidad contable",
  ],
  authors: [{ name: "Financhx Technologies" }],
  creator: "Financhx",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://financhx.com",
    title: "Financhx — Financial Operating System",
    description:
      "Una nueva forma de gestionar las finanzas de tu empresa. Conectá información, simplificá conciliaciones y transformá procesos manuales en operaciones claras.",
    siteName: "Financhx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financhx — Financial Operating System",
    description:
      "Una nueva forma de gestionar las finanzas de tu empresa. Centralización, conciliación y control financiero.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="relative min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-[#E5E5E5]/30 selection:text-white">
        <AnimatedBackground />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
