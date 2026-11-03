// Root layout is intentionally minimal.
// All page rendering goes through app/[lang]/layout.tsx which provides <html> and <body>.
// This file satisfies Next.js App Router's requirement for a root layout.
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financhx — Financial Operating System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
