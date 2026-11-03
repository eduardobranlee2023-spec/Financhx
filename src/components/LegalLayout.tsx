import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, FileText, Lock, Cookie } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  activeDoc: "aviso-legal" | "privacidad" | "cookies" | "terminos";
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  activeDoc,
  children,
}: LegalLayoutProps) {
  const navItems = [
    { href: "/aviso-legal", label: "Aviso Legal", icon: FileText, key: "aviso-legal" },
    { href: "/privacidad", label: "Política de Privacidad", icon: Lock, key: "privacidad" },
    { href: "/cookies", label: "Política de Cookies", icon: Cookie, key: "cookies" },
    { href: "/terminos", label: "Términos y Condiciones", icon: Shield, key: "terminos" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans antialiased selection:bg-white selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#222222] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver al inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/financhx_horizontal_blanco.png"
              alt="Financhx Logo"
              width={130}
              height={32}
              className="h-6 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <div className="border-b border-[#1E1E1E] bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 mb-4">
            <Shield className="w-3.5 h-3.5 text-zinc-300" />
            Marco Legal Institucional
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {title}
          </h1>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <p className="text-xs font-mono text-zinc-500 mt-6">
            Última actualización: {lastUpdated} · Cumplimiento Ley 25.326 y estándares internacionales
          </p>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="border-b border-[#1E1E1E] bg-[#070708] overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-2 py-2">
          {navItems.map((item) => {
            const isActive = activeDoc === item.key;
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-white text-black font-medium shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <article className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-zinc-400 prose-p:leading-relaxed prose-strong:text-zinc-200 prose-li:text-zinc-400 prose-code:text-zinc-200">
          {children}
        </article>
      </main>

      {/* Minimal Legal Footer */}
      <footer className="border-t border-[#1C1C1E] bg-[#050505] py-8 text-center text-xs text-zinc-600 font-mono">
        <p>© 2026 Financhx Technologies. Todos los derechos reservados.</p>
        <p className="mt-1 text-[11px] text-zinc-600">
          Software B2B de infraestructura financiera y conciliación operativa.
        </p>
      </footer>
    </div>
  );
}

