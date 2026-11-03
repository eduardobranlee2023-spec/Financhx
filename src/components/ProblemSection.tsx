"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Network, FileSpreadsheet, SearchX, History, RotateCcw,
  AlertCircle, ArrowRight, ShieldAlert
} from "lucide-react";
import { RobotFloat } from "./RobotFloat";

const problems = [
  {
    id: "01", icon: Network,
    title: "Fuentes financieras dispersas",
    description: "Bancos, billeteras corporativas, pasarelas de pago y sistemas de facturación operan de manera aislada. Los equipos descargan extractos manualmente cada mes.",
    consequence: "Sin fuente unificada de verdad financiera.",
  },
  {
    id: "02", icon: FileSpreadsheet,
    title: "Conciliaciones manuales en planillas",
    description: "La dependencia de hojas de cálculo con macros frágiles genera cuellos de botella y error humano exponencial. Cientos de horas al mes perdidas.",
    consequence: "Operaciones de bajo valor consumen equipos calificados.",
  },
  {
    id: "03", icon: SearchX,
    title: "Errores y desfasajes difíciles de detectar",
    description: "Comisiones bancarias, retenciones IIBB o cobros duplicados pasan inadvertidos hasta el cierre de balance, cuando el daño ya es difícil de revertir.",
    consequence: "Inconsistencias que impactan directamente la rentabilidad.",
  },
  {
    id: "04", icon: History,
    title: "Trazabilidad y auditoría inexistente",
    description: "Reconstruir quién autorizó una imputación, qué comprobante la respaldó o en qué fecha ocurrió requiere largas cadenas de mails y archivos desactualizados.",
    consequence: "Imposible superar auditorías sin fricción y demora.",
  },
  {
    id: "05", icon: RotateCcw,
    title: "Procesos repetitivos que desgastan",
    description: "Equipos contables calificados dedican la mayor parte de su jornada a tareas mecánicas de copiado y comparación en lugar de análisis estratégico.",
    consequence: "Desgaste del equipo y postergación financiera crónica.",
  },
];

function ProblemCard({ p, index, inView }: { p: typeof problems[0]; index: number; inView: boolean }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }}
      className="group relative"
    >
      <div className="h-full p-6 rounded-2xl bg-[#0D0D0D] border border-[#292929] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#E5E5E5]/[0.03] to-transparent pointer-events-none" />

        <div className="relative">
          <div className="flex items-start justify-between mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#171717] border border-[#292929] flex items-center justify-center group-hover:border-[#E5E5E5]/30 transition-colors">
              <Icon className="w-5 h-5 text-[#C5C5C5] group-hover:text-[#E5E5E5] transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-[#858585] font-semibold tracking-widest">PROBLEMA {p.id}</span>
          </div>

          <h3 className="text-sm font-semibold text-[#FFFFFF] mb-2.5 leading-snug">{p.title}</h3>
          <p className="text-xs text-[#C5C5C5] leading-relaxed">{p.description}</p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#292929] flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-[#F59E0B]/70 shrink-0 mt-0.5" />
          <span className="text-[11px] text-[#C5C5C5] font-mono">{p.consequence}</span>
        </div>
      </div>
    </motion.div>
  );
}

function AIExplanationCard() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#111111] rounded-2xl p-6 border border-[#292929] shadow-[0_0_30px_rgba(255,255,255,0.08)]">
      <div className="text-[10px] font-mono text-[#E5E5E5] font-semibold uppercase tracking-wider mb-3">
        La IA de Financhx
      </div>
      <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 leading-snug">
        Tu asistente operativo financiero 24/7.
      </h3>
      <p className="text-sm text-[#C5C5C5] leading-relaxed mb-4">
        Financhx Reconcile usa IA para detectar automáticamente coincidencias entre movimientos bancarios y facturas, identificar diferencias y retenciones, y mantener una trazabilidad completa de cada operación.
      </p>
      <div className="space-y-2 text-xs text-[#858585] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>96.8% de conciliación automática</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>Detección instantánea de diferencias</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>Trazabilidad audit-ready</span>
        </div>
      </div>
    </div>
  );
}

export function ProblemSection({ lang = 'es' }: { lang?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="problema" ref={ref} className="scroll-mt-24 py-28 bg-[#050505] relative border-t border-[#292929]/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#292929] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#C5C5C5] mb-5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>EL DIAGNÓSTICO OPERATIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            El desafío del control financiero<br className="hidden sm:block" /> en empresas en crecimiento.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C5C5C5] leading-relaxed">
            A medida que las operaciones crecen, la gestión financiera se convierte en un laberinto de comprobantes y extractos que nunca fueron diseñados para comunicarse entre sí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <ProblemCard key={p.id} p={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Solution + Robot - horizontal layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-end">
          {/* Left side: AI Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 5 * 0.08 }}
          >
            <AIExplanationCard />
          </motion.div>

          {/* Right side: Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 5 * 0.08 + 0.1 }}
            className="flex justify-center"
          >
            <RobotFloat />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

