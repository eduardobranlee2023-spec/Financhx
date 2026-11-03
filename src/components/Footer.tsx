import React from "react";
import Link from "next/link";
import { FinanchxLogo } from "./FinanchxLogo";
import { FileCheck } from "lucide-react";
import type { Dictionary } from "@/dictionaries/dictionaries";

// Simple Instagram SVG icon (lucide-react doesn't have one)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface FooterProps {
  dict: Dictionary["footer"];
  lang: string;
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-[#05070A] text-[#D0D0D0] border-t border-[#303030] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <FinanchxLogo size="md" />
            <p className="text-xs sm:text-sm text-[#D0D0D0] max-w-sm leading-relaxed">
              {dict.tagline}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#8F8F8F]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                {dict.badge}
              </span>
              <span>·</span>
              <span>{dict.country}</span>
            </div>

            {/* Social Media */}
            <div className="pt-3">
              <span className="text-[10px] font-mono text-[#8F8F8F] block mb-2 uppercase tracking-wider">
                {dict.social}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/financhx.company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#101010] border border-[#303030] text-[11px] font-mono text-[#D0D0D0] hover:text-white hover:border-[#505050] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              {dict.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.salesLabel}</span>
                <a href="mailto:ventas@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  ventas@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.supportLabel}</span>
                <a href="mailto:soporte@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  soporte@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.infoLabel}</span>
                <a href="mailto:info@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  info@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.legalLabel}</span>
                <a href="mailto:legal@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  legal@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.employmentLabel}</span>
                <a href="mailto:empleo@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  empleo@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">{dict.contact.marketingLabel}</span>
                <a href="mailto:marketing@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  marketing@financhx.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Plataforma */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
                {dict.platformTitle}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#reconcile" className="text-[#D0D0D0] hover:text-[#E5E5E5] transition-colors flex items-center gap-1.5">
                    <span>{dict.links.reconcile}</span>
                    <span className="text-[9px] px-1.5 rounded bg-[#E5E5E5]/20 text-[#FFFFFF] font-mono">
                      {lang === "en" ? "In Dev" : "En desarrollo"}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#plataforma" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.optimize}
                  </a>
                </li>
                <li>
                  <a href="#seguridad" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.audit}
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.demo}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
                {dict.legalTitle}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href={`/${lang}/aviso-legal`} className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.legal}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/privacidad`} className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.privacy}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/cookies`} className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.cookies}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/terminos`} className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    {dict.links.terms}
                  </Link>
                </li>
              </ul>

              {/* Compliance Badge */}
              <div className="pt-3">
                <div className="p-2.5 rounded-lg bg-[#0C0D10] border border-[#22242A] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-[#18191E] border border-[#2A2B32] flex items-center justify-center shrink-0">
                    <FileCheck className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono font-medium text-white">Data Fiscal</span>
                      <span className="text-[9px] px-1 rounded bg-zinc-800 text-zinc-300 font-mono">F. 960/D</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 block leading-tight">
                      AFIP · República Argentina
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#303030]/80 text-[11px] text-[#8F8F8F] space-y-2">
          <p className="leading-relaxed">
            <strong className="text-[#D0D0D0]">{lang === "en" ? "Institutional notice:" : "Aviso institucional:"}</strong>{" "}
            {dict.disclaimer}
          </p>

          <div className="flex flex-wrap items-center justify-between pt-4 gap-4 text-[#D0D0D0]">
            <p className="font-mono text-[11px]">
              {dict.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
              <Link href={`/${lang}/privacidad`} className="hover:text-white transition-colors">{dict.privacyLink}</Link>
              <span>·</span>
              <Link href={`/${lang}/terminos`} className="hover:text-white transition-colors">{dict.termsLink}</Link>
              <span>·</span>
              <Link href={`/${lang}/cookies`} className="hover:text-white transition-colors">{dict.cookiesLink}</Link>
              <span>·</span>
              <Link href={`/${lang}/aviso-legal`} className="hover:text-white transition-colors">{dict.legalLink}</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
