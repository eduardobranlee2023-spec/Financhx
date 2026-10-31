"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Upload, Cpu, GitCompare, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01", icon: Upload,
    title: "Importación de Fuentes",
    desc: "Conectás tus extractos bancarios (XLSX, CSV, PDF), comprobantes AFIP/ARCA y registros ERP en un solo punto de ingesta. Financhx normaliza los formatos dispares automáticamente.",
    tag: "Ingesta Multi-Origen",
    detail: "Bancos ARS/USD · AFIP · ERP · Pasarelas",
  },
  {
    num: "02", icon: Cpu,
    title: "Normalización Automática",
    desc: "El motor estandariza CUITs, conceptos, alícuotas y fechas operativas. Cada movimiento queda identificado con su referencia contable correspondiente.",
    tag: "Motor de Normalización",
    detail: "CUITs · Retenciones IIBB · Comisiones · Fechas",
  },
  {
    num: "03", icon: GitCompare,
    title: "Emparejamiento Inteligente",
    desc: "Cruzamos automáticamente movimientos bancarios contra facturas y comprobantes. Las coincidencias se confirman al instante; diferencias y retenciones se detectan y clasifican.",
    tag: "Matching Engine",
    detail: "96.8% conciliación automática promedio",
  },
  {
    num: "04", icon: ShieldCheck,
    title: "Supervisión y Auditoría",
    desc: "Los casos ambiguos pasan a revisión humana asistida. Cada aprobación queda registrada en una pista de auditoría inmutable, lista para auditorías internas y fiscales.",
    tag: "Control Humano + Trazabilidad",
    detail: "Pista inmutable · Aprobaciones registradas",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="como-funciona" ref={ref} className="py-28 bg-[#050505] relative border-t border-[#292929]/60 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E5E5E5]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#C5C5C5] mb-5">
            <span>FLUJO DE OPERACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            Cómo funciona Financhx Reconcile.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C5C5C5] leading-relaxed">
            Cuatro etapas que transforman el caos de extractos y facturas dispersas en un libro contable auditado y trazable.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[26px] left-[13%] right-[13%] h-px bg-gradient-to-r from-[#292929] via-[#E5E5E5]/30 to-[#292929]" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: idx * 0.12 }}
                  className="group"
                >
                  {/* Icon circle */}
                  <div className="relative w-[52px] h-[52px] rounded-xl bg-[#0D0D0D] border border-[#292929] group-hover:border-[#E5E5E5]/50 flex items-center justify-center mb-6 transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Icon className="w-5 h-5 text-[#C5C5C5] group-hover:text-[#E5E5E5] transition-colors" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#050505] border border-[#292929] flex items-center justify-center text-[9px] font-mono font-bold text-[#E5E5E5]">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#292929] text-[10px] font-mono text-[#C5C5C5] mb-3">
                    {step.tag}
                  </div>

                  <h3 className="text-sm font-bold text-[#FFFFFF] mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#C5C5C5] leading-relaxed mb-4">{step.desc}</p>

                  <div className="pt-3 border-t border-[#292929] flex items-center gap-1.5 text-[10px] font-mono text-[#858585]">
                    <CheckCircle2 className="w-3 h-3 text-[#22D3A5]/60 shrink-0" />
                    <span>{step.detail}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 pt-10 border-t border-[#292929] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm font-semibold text-[#FFFFFF]">¿Querés ver el sistema en acción?</p>
            <p className="text-xs text-[#C5C5C5] mt-0.5">Explorá la demostración conceptual del módulo Reconcile.</p>
          </div>
          <a
            href="#reconcile"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D0D0D] hover:bg-[#171717] text-[#FFFFFF] text-xs font-semibold border border-[#292929] hover:border-[#383838] transition-all shrink-0"
          >
            <span>Ver Reconcile Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
