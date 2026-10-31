"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FileCheck2, TrendingUp, ShieldCheck, ArrowRight,
  CheckCircle, Clock, Database, GitCompare,
} from "lucide-react";
import { FinanchxLogo } from "./FinanchxLogo";

const pipelineSteps = [
  { num: "1", title: "Ingesta Multi-Origen", desc: "Conexión a extractos bancarios (XLSX, CSV, PDF) y comprobantes AFIP.", status: "completado", statusColor: "text-[#22D3A5]" },
  { num: "2", title: "Normalización de CUITs y Conceptos", desc: "Estandarización de referencias bancarias, alícuotas y fechas operativas.", status: "completado", statusColor: "text-[#22D3A5]" },
  { num: "3", title: "Motor de Emparejamiento Inteligente", desc: "Cruce automático de partidas por CUIT, número de factura e importes.", status: "activo", statusColor: "text-[#E5E5E5]" },
  { num: "4", title: "Supervisión y Pista de Auditoría", desc: "Revisión humana en casos ambiguos. Registro inmutable para auditoría.", status: "supervisado", statusColor: "text-[#F59E0B]" },
];

const reconcileFeatures = [
  "Importación de extractos y facturas",
  "Normalización de movimientos",
  "Emparejamiento por CUIT y referencia",
  "Detección de diferencias (IIBB/Comisiones)",
  "Aprobación manual y trazabilidad",
  "Asistencia en casos ambiguos",
];

export function PlatformModules() {
  const [activeStep, setActiveStep] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="plataforma" ref={ref} className="scroll-mt-24 py-28 bg-[#050505] relative border-t border-[#292929]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#C5C5C5] mb-5">
            <Database className="w-3.5 h-3.5 text-[#E5E5E5]" />
            <span>ARQUITECTURA DEL SISTEMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            Financhx OS: Tres módulos<br className="hidden sm:block" /> diseñados para operar en armonía.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C5C5C5] leading-relaxed">
            Una plataforma modular donde cada componente resuelve un pilar específico de las operaciones financieras empresariales.
          </p>
        </motion.div>

        <div className="space-y-6">

          {/* ── MODULE 01: RECONCILE ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-[#292929] bg-[#0D0D0D] p-6 sm:p-10"
          >
            {/* Animated border beam */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
              <motion.div
                className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent top-0 left-0"
                animate={{ x: ["0%", "calc(100vw)"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white text-[#050505] text-xs font-mono font-bold">MÓDULO 01 — PRODUCTO NÚCLEO</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#22D3A5]/10 text-[#22D3A5] border border-[#22D3A5]/20 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A5] animate-pulse" />
                    En desarrollo activo
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <FinanchxLogo size="sm" showText={false} />
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">Financhx Reconcile</h3>
                  </div>
                  <p className="text-sm font-mono text-[#C5C5C5]">Conciliación Bancaria y Facturación Inteligente</p>
                </div>

                <p className="text-sm text-[#C5C5C5] leading-relaxed">
                  Importá extractos bancarios y registros de facturación, identificá coincidencias automáticas, detectá desfasajes y retenciones, y gestioná revisiones pendientes con trazabilidad auditable completa.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {reconcileFeatures.map(feat => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-[#C5C5C5]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#22D3A5] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#reconcile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#D1D1D1] text-[#050505] text-xs font-bold transition-all active:scale-[0.97]"
                >
                  <span>Ver demostración interactiva</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: pipeline */}
              <div className="lg:col-span-6 bg-[#050505] p-5 rounded-2xl border border-[#292929]">
                <div className="flex items-center justify-between text-xs font-mono text-[#C5C5C5] mb-4">
                  <span>FLUJO DE CONCILIACIÓN CONTINUA</span>
                  <span className="bg-[#171717] border border-[#292929] px-2 py-0.5 rounded text-[10px] text-[#E5E5E5]">ARQUITECTURA MODULAR</span>
                </div>
                <div className="space-y-2.5">
                  {pipelineSteps.map((step, idx) => (
                    <button
                      key={step.num}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all font-mono text-xs ${
                        activeStep === idx
                          ? "bg-[#111111] border-[#E5E5E5]/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                          : "bg-[#0D0D0D] border-[#292929] hover:border-[#383838]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#FFFFFF] font-semibold">{step.num}. {step.title}</span>
                        <span className={`text-[10px] uppercase px-2 py-0.5 rounded bg-[#171717] ${step.statusColor}`}>{step.status}</span>
                      </div>
                      <p className="text-[11px] text-[#C5C5C5] mt-1 font-sans">{step.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── MODULES 02 & 03 ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "02", name: "Financhx Optimize", sub: "Optimización de Costos y Flujo de Caja",
                icon: TrendingUp, color: "text-[#22D3A5]", borderColor: "border-[#22D3A5]/10",
                desc: "Análisis predictivo de gastos, identificación de ineficiencias recurrentes, proyecciones de tesorería y recomendaciones de ajuste presupuestario.",
                preview: (
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#292929] space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-[#C5C5C5]">
                      <span>Proyección Flujo (90 días)</span>
                      <span className="text-[#22D3A5] font-semibold">+18.4% margen</span>
                    </div>
                    <div className="w-full bg-[#292929] h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-[#E5E5E5] to-[#22D3A5] h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "72%" } : {}}
                        transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-[#858585]">
                      <span>Análisis de proveedores</span>
                      <span>3 sugerencias activas</span>
                    </div>
                  </div>
                ),
                footer: "Desarrollo programado post-validación de Reconcile."
              },
              {
                num: "03", name: "Financhx Compliance", sub: "Auditoría de Riesgos y Cumplimiento",
                icon: ShieldCheck, color: "text-[#F59E0B]", borderColor: "border-[#F59E0B]/10",
                desc: "Controles preventivos, detección de anomalías en comprobantes, alertas tempranas y asistencia en auditorías internas y normativas.",
                preview: (
                  <div className="p-4 rounded-xl bg-[#050505] border border-[#292929] space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#FFFFFF] font-semibold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                      Matriz de control interno
                    </div>
                    {["Segregación de aprobaciones", "Detección de desvíos", "Pistas de auditoría exportables"].map(item => (
                      <div key={item} className="flex items-center gap-2 text-[10px] text-[#C5C5C5]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60" />
                        {item}
                      </div>
                    ))}
                  </div>
                ),
                footer: "Módulo de asistencia operativa — no garantía legal."
              }
            ].map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 + i * 0.1 }}
                  className={`p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border ${mod.borderColor} flex flex-col gap-5`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-2.5 py-1 rounded bg-[#171717] text-[#C5C5C5] text-xs font-mono border border-[#292929] font-bold">MÓDULO {mod.num}</span>
                    </div>
                    <span className="text-xs font-mono text-[#858585] flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> Planificado
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-0.5">{mod.name}</h3>
                    <p className={`text-xs font-mono ${mod.color}`}>{mod.sub}</p>
                  </div>
                  <p className="text-xs text-[#C5C5C5] leading-relaxed">{mod.desc}</p>
                  {mod.preview}
                  <p className="text-[10px] text-[#858585] font-mono border-t border-[#292929] pt-3">{mod.footer}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
