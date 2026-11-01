import React from "react";
import { FinanchxLogo } from "./FinanchxLogo";

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
                  href="#plataforma"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Compliance (Planificado)
                </a>
              </li>
              <li>
                <a
                  href="#problema"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  El Desafío Financiero
                </a>
              </li>
              <li>
                <a
                  href="#preguntas"
                  className="text-[#D0D0D0] hover:text-white transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Servicios Digitales
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#software-a-medida"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Software a Medida
                </a>
              </li>
              <li>
                <a
                  href="#software-a-medida"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Desarrollo de Aplicaciones Web
                </a>
              </li>
              <li>
                <a
                  href="#software-a-medida"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Sistemas de Gestión Internos
                </a>
              </li>
              <li>
                <a
                  href="#software-a-medida"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Automatización de Procesos
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional / Contact Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-[#FFFFFF] uppercase font-semibold tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#acceso-anticipado"
                  className="text-[#E5E5E5] hover:text-[#FFFFFF] transition-colors font-medium"
                >
                  Solicitar Acceso Anticipado
                </a>
              </li>
              <li>
                <a
                  href="#software-a-medida"
                  className="text-[#D0D0D0] hover:text-[#FFFFFF] transition-colors"
                >
                  Consultar Proyecto
                </a>
              </li>
            </ul>

            {/* Social Placeholders without fake URLs */}
            <div className="pt-3">
              <span className="text-[10px] font-mono text-[#8F8F8F] block mb-2">
                Canales institucionales
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#D0D0D0]">
                <span className="px-2 py-1 rounded bg-[#101010] border border-[#303030] text-[11px] font-mono cursor-default hover:text-white transition-colors">
                  LinkedIn
                </span>
                <span className="px-2 py-1 rounded bg-[#101010] border border-[#303030] text-[11px] font-mono cursor-default hover:text-white transition-colors">
                  X (Twitter)
                </span>
                <span className="px-2 py-1 rounded bg-[#101010] border border-[#303030] text-[11px] font-mono cursor-default hover:text-white transition-colors">
                  GitHub
                </span>
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
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacidad
              </span>
              <span>·</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Términos
              </span>
              <span>·</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Seguridad
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
