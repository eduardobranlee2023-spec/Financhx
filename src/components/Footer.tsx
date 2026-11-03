import React from "react";
import Link from "next/link";
import { FinanchxLogo } from "./FinanchxLogo";
import { ShieldCheck, FileCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070A] text-[#D0D0D0] border-t border-[#303030] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <FinanchxLogo size="md" />

            <p className="text-xs sm:text-sm text-[#D0D0D0] max-w-sm leading-relaxed">
              Software para simplificar, centralizar y automatizar operaciones financieras empresariales.
              Reduciendo procesos manuales y otorgando trazabilidad contable integral.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#8F8F8F]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Hecho para empresas en crecimiento
              </span>
              <span>·</span>
              <span>Argentina</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Financhx OS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#reconcile"
                  className="text-[#D0D0D0] hover:text-[#E5E5E5] transition-colors flex items-center gap-1.5"
                >
                  <span>Reconcile</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#E5E5E5]/20 text-[#FFFFFF] font-mono">
                    En desarrollo
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#plataforma"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Optimize (Planificado)
                </a>
              </li>
              <li>
                <a
                  href="#seguridad"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Auditoría & Trazabilidad
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Video Demostración
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Legal & Cumplimiento
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Aviso Legal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Política de Cookies</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Contacto Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-[#8F8F8F] block text-[11px]">Acceso Anticipado / Demos:</span>
                <a
                  href="mailto:hola@financhx.com"
                  className="text-[#D0D0D0] hover:text-white transition-colors font-mono"
                >
                  hola@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[11px]">Legales & Privacidad:</span>
                <a
                  href="mailto:legal@financhx.com"
                  className="text-[#D0D0D0] hover:text-white transition-colors font-mono"
                >
                  legal@financhx.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/5491171829402?text=Hola%20Financhx,%20quisiera%20consultar%20sobre%20el%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#A0A0A0] hover:text-white transition-colors font-mono underline underline-offset-4"
                >
                  Consultar Proyecto
                </a>
              </li>
            </ul>

            {/* Compliance Badge / Data Fiscal AFIP Placeholder */}
            <div className="pt-2">
              <div className="p-2.5 rounded-lg bg-[#0C0D10] border border-[#22242A] flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#18191E] border border-[#2A2B32] flex items-center justify-center shrink-0 text-zinc-300">
                  <FileCheck className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-medium text-white">Data Fiscal</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-zinc-800 text-zinc-300 font-mono">F. 960/D</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 block leading-tight">
                    CUIT: 30-71829402-9 · AFIP República Argentina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Transparency Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#303030]/80 text-[11px] text-[#8F8F8F] space-y-2">
          <p className="leading-relaxed">
            <strong className="text-[#D0D0D0]">Aviso institucional:</strong> Financhx es una plataforma de software en desarrollo diseñada para la gestión operativa, conciliación de movimientos y control administrativo de empresas. Financhx no es una entidad bancaria, compañía financiera regulada, billetera virtual ni plataforma de inversión o custodia de fondos.
          </p>

          <div className="flex flex-wrap items-center justify-between pt-4 gap-4 text-[#D0D0D0]">
            <p className="font-mono text-[11px]">
              © 2026 Financhx Technologies. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <span>·</span>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <span>·</span>
              <Link href="/aviso-legal" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
