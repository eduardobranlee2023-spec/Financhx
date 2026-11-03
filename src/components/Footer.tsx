import React from "react";
import Link from "next/link";
import { FinanchxLogo } from "./FinanchxLogo";
import { FileCheck, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070A] text-[#D0D0D0] border-t border-[#303030] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
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

            {/* Social Media */}
            <div className="pt-3">
              <span className="text-[10px] font-mono text-[#8F8F8F] block mb-2 uppercase tracking-wider">
                Redes sociales
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/financhx.company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#101010] border border-[#303030] text-[11px] font-mono text-[#D0D0D0] hover:text-white hover:border-[#505050] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Ventas</span>
                <a href="mailto:ventas@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  ventas@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Soporte y ayuda</span>
                <a href="mailto:soporte@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  soporte@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Info general</span>
                <a href="mailto:info@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  info@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Legal</span>
                <a href="mailto:legal@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  legal@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Empleo</span>
                <a href="mailto:empleo@financhx.com" className="text-[#D0D0D0] hover:text-white transition-colors font-mono">
                  empleo@financhx.com
                </a>
              </li>
              <li>
                <span className="text-[#8F8F8F] block text-[10px] uppercase tracking-wider mb-0.5">Marketing</span>
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
                Financhx OS
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#reconcile" className="text-[#D0D0D0] hover:text-[#E5E5E5] transition-colors flex items-center gap-1.5">
                    <span>Reconcile</span>
                    <span className="text-[9px] px-1.5 rounded bg-[#E5E5E5]/20 text-[#FFFFFF] font-mono">
                      En desarrollo
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#plataforma" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Optimize (Planificado)
                  </a>
                </li>
                <li>
                  <a href="#seguridad" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Auditoría & Trazabilidad
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Video Demostración
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/aviso-legal" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors">
                    Términos y Condiciones
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
            <strong className="text-[#D0D0D0]">Aviso institucional:</strong> Financhx es una plataforma de software en desarrollo diseñada para la gestión operativa, conciliación de movimientos y control administrativo de empresas. Financhx no es una entidad bancaria, compañía financiera regulada, billetera virtual ni plataforma de inversión o custodia de fondos.
          </p>

          <div className="flex flex-wrap items-center justify-between pt-4 gap-4 text-[#D0D0D0]">
            <p className="font-mono text-[11px]">
              © 2026 Financhx Technologies. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
              <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <span>·</span>
              <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <span>·</span>
              <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
