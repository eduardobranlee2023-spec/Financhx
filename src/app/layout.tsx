// Root layout is intentionally minimal.
// All page rendering goes through app/[lang]/layout.tsx which provides <html> and <body>.
// This file satisfies Next.js App Router's requirement for a root layout.
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financhx — Financial Operating System",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
