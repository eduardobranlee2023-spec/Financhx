"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FinanchxLogo } from "./FinanchxLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Reconcile", href: "#reconcile" },
    { label: "Problema", href: "#problema" },
    { label: "Software a Medida", href: "#software-a-medida" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#acceso-anticipado" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#292929]/80 shadow-[0_1px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <a href="#" aria-label="Financhx" className="flex items-center">
              <FinanchxLogo size="md" />
            </a>

            {/* Desktop nav pill */}
            <nav className="hidden md:flex items-center gap-0.5 bg-[#0D0D0D]/90 px-3 py-1.5 rounded-full border border-[#292929]">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-[#C5C5C5] hover:text-[#FFFFFF] hover:bg-[#171717] transition-all rounded-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA row */}
            <div className="hidden md:flex items-center gap-3">
              <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C5C5C5] bg-[#0D0D0D] border border-[#292929] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A5] animate-pulse" />
                Validación privada
              </span>
              <a
                href="#acceso-anticipado"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#050505] bg-white hover:bg-[#D1D1D1] rounded-lg transition-all active:scale-[0.97]"
              >
                Acceso anticipado
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#C5C5C5] hover:text-white transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden border-t border-[#292929] bg-[#050505]/98"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-[#C5C5C5] hover:text-white hover:bg-[#0D0D0D] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-[#292929] mt-3">
                  <a
                    href="#acceso-anticipado"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#050505] bg-white hover:bg-[#D1D1D1] rounded-xl transition-colors"
                  >
                    Solicitar acceso anticipado
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
