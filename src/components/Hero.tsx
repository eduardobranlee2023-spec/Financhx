"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FinanchxLogo } from "./FinanchxLogo";
import { HeroSplineBackground } from "./HeroSplineBackground";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  Cpu,
  RefreshCw,
} from "lucide-react";

/* ─── TextReveal primitive (from interior-main / text-reveal.tsx) ─── */
import { Fragment, useMemo } from "react";

function useTextReveal(text: string, stagger = 0.06) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  return { ref, words, started: inView, stagger };
}

function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const { ref, words, started, stagger } = useTextReveal(text);
  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>
        {words.map((word, i) => (
          <Fragment key={i}>
            {i > 0 ? " " : ""}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={started ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: i * stagger }}
            >
              {word}
            </motion.span>
          </Fragment>
        ))}
      </span>
    </span>
  );
}

const ledgerItems = [
  {
    id: "REC-8041", banco: "Banco Galicia · CC$ 4012-8",
    tipo: "Transferencia Recibida", montoBanco: "$4.850.000,00",
    comprobante: "FC-A 0004-00018942", contraparte: "TechCorp Soluciones S.A.",
    cuit: "30-71458921-9", montoFactura: "$4.850.000,00",
    estado: "matched", detalle: "100% Coincidencia CUIT + Monto", diferencia: null, tiempo: "12 min",
  },
  {
    id: "REC-8042", banco: "Santander Río · CC$ 1198-2",
    tipo: "Cobro Pasarela / Tarjeta", montoBanco: "$1.212.500,00",
    comprobante: "FC-B 0001-00005411", contraparte: "Distribuidora Andina SRL",
    cuit: "30-68912304-4", montoFactura: "$1.250.000,00",
    estado: "diff", detalle: "Ret. IIBB 3.0% (-$37.500)", diferencia: "-$37.500", tiempo: "28 min",
  },
  {
    id: "REC-8043", banco: "BBVA Francés · CC$ 0524-1",
    tipo: "Débito Automático Prov.", montoBanco: "$892.400,00",
    comprobante: "FC-A 0012-00034109", contraparte: "Logística Austral S.R.L.",
    cuit: "33-70984512-9", montoFactura: "$892.400,00",
    estado: "matched", detalle: "Emparejado por referencia", diferencia: null, tiempo: "1 h",
  },
  {
    id: "REC-8044", banco: "Banco Galicia · CC$ 4012-8",
    tipo: "Transferencia no identificada", montoBanco: "$340.000,00",
    comprobante: "Pendiente de imputar", contraparte: "Sin CUIT mapeado",
    cuit: "—", montoFactura: "—",
    estado: "pending", detalle: "Requiere verificación contable", diferencia: "Sin comprobante", tiempo: "2 h",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<"all" | "matched" | "diff">("all");
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered = ledgerItems.filter(item => {
    if (activeTab === "matched") return item.estado === "matched";
    if (activeTab === "diff") return item.estado === "diff";
    return true;
  });

  const statusColor = {
    matched: "text-[#22D3A5] bg-[#22D3A5]/10 border-[#22D3A5]/25",
    diff: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/25",
    pending: "text-[#E5E5E5] bg-[#E5E5E5]/10 border-[#E5E5E5]/25",
  };
  const statusIcon = {
    matched: <CheckCircle2 className="w-3 h-3 shrink-0" />,
    diff: <AlertTriangle className="w-3 h-3 shrink-0" />,
    pending: <Clock className="w-3 h-3 shrink-0" />,
  };
  const statusLabel = { matched: "Conciliado", diff: "Diferencia", pending: "Revisión" };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#050505] flex flex-col justify-center"
    >
      {/* ── Background: 21st.dev Spline scene + spotlight ── */}
      <HeroSplineBackground />
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Hero text block ── */}
        <div className="max-w-3xl mx-auto text-center space-y-7 mb-14">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#292929] bg-[#0D0D0D]/80 text-xs font-mono text-[#C5C5C5] shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3A5] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3A5]" />
            </span>
            <span className="text-[#FFFFFF] font-semibold tracking-wider">FINANCIAL OPERATING SYSTEM</span>
            <span className="text-[#858585]">·</span>
            <span>Validación privada activa</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.1]">
            <TextReveal text="Una nueva forma de gestionar las finanzas de tu empresa." />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#C5C5C5] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Financhx conecta tus fuentes financieras, automatiza conciliaciones y centraliza el control contable en una sola plataforma trazable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#acceso-anticipado"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#050505] bg-white hover:bg-[#D1D1D1] rounded-xl transition-all duration-200 active:scale-[0.97]"
            >
              <span>Solicitar acceso anticipado</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#reconcile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#FFFFFF] bg-[#0D0D0D] hover:bg-[#171717] rounded-xl transition-colors border border-[#292929] hover:border-[#383838]"
            >
              <span>Ver Financhx Reconcile</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#C5C5C5] font-mono pt-1"
          >
            {
              [
                { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Control Contable Riguroso" },
                { icon: <Layers className="w-3.5 h-3.5" />, text: "Arquitectura Modular B2B" },
                { icon: <Building2 className="w-3.5 h-3.5" />, text: "Equipos Financieros Enterprise" },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-[#C5C5C5] hover:text-[#FFFFFF] transition-colors">
                  <span className="text-[#E5E5E5]">{icon}</span>
                  {text}
                </span>
              ))}
          </motion.div>
        </div>

        {/* ── Product mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#E5E5E5]/[0.08] to-transparent blur-2xl rounded-3xl pointer-events-none" />

          {/* Browser chrome */}
          <div className="relative rounded-2xl overflow-hidden border border-[#292929] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] bg-[#050505]">

            {/* Topbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] border-b border-[#292929]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#F87171]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#22D3A5]/50" />
                </div>
                <div className="h-4 w-px bg-[#292929]" />
                <div className="flex items-center gap-2">
                  <FinanchxLogo size="sm" showText={false} />
                  <span className="text-xs font-mono font-bold text-[#FFFFFF]">Financhx Reconcile</span>
                  <span className="text-[10px] text-[#C5C5C5] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#292929]">v0.1 — Demo</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#22D3A5] bg-[#22D3A5]/10 border border-[#22D3A5]/20 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A5] animate-pulse" />
                  96.8% Conciliado
                </span>
              </div>
            </div>

            {/* Metrics ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#292929]/40 border-b border-[#292929]">
              {
              [
                { label: "Volumen Procesado", value: "$48.25M", sub: "1.445 movimientos", color: "text-[#FFFFFF]", icon: <TrendingUp className="w-3 h-3" /> },
                { label: "Conciliadas", value: "1.428", sub: "96.8% tasa auto", color: "text-[#22D3A5]", icon: <CheckCircle2 className="w-3 h-3" /> },
                { label: "Diferencias", value: "3 partidas", sub: "Ret. / Comisiones", color: "text-[#F59E0B]", icon: <AlertTriangle className="w-3 h-3" /> },
                { label: "En Revisión", value: "14 ops.", sub: "Asign. manual asist.", color: "text-[#E5E5E5]", icon: <Clock className="w-3 h-3" /> },
              ].map(m => (
                <div key={m.label} className="px-4 py-3 bg-[#050505]">
                  <div className="text-[10px] text-[#C5C5C5] font-mono mb-1">{m.label}</div>
                  <div className={`text-sm font-bold font-mono ${m.color}`}>{m.value}</div>
                  <div className={`text-[10px] mt-0.5 flex items-center gap-1 font-mono ${m.color} opacity-70`}>
                    {m.icon} {m.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Filter tabs */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0D0D] border-b border-[#292929]">
              <div className="flex items-center gap-1">
                {(["all", "matched", "diff"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-xs rounded-md font-mono transition-colors ${
                      activeTab === tab
                        ? tab === "matched" ? "bg-[#22D3A5]/15 text-[#22D3A5] border border-[#22D3A5]/25"
                        : tab === "diff" ? "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/25"
                        : "bg-[#171717] text-[#FFFFFF] border border-[#292929]"
                        : "text-[#C5C5C5] hover:text-[#FFFFFF]"}
                    }`}
                  >
                    {tab === "all" ? `Todas (${ledgerItems.length})` : tab === "matched" ? "Conciliadas" : "Con Diferencias"}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#C5C5C5]">
                <RefreshCw className="w-3 h-3 text-[#E5E5E5]" />
                <span>3 bancos + AFIP/ERP conectados</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0D0D0D] text-[#C5C5C5] border-b border-[#292929] font-mono">
                    {["Movimiento Bancario", "Monto Banco", "Comprobante / Contraparte", "Monto Factura", "Estado"].map(h => (
                      <th key={h} className="py-2.5 px-4 font-medium text-[10px] uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#292929]/60">
                  {filtered.map((item, i) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-[#0D0D0D]/80 transition-colors font-mono"
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-[#FFFFFF] text-xs">{item.tipo}</div>
                        <div className="text-[10px] text-[#C5C5C5] mt-0.5">{item.banco}</div>
                        <div className="text-[9px] text-[#858585] mt-0.5">{item.id} · Hace {item.tiempo}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-[#FFFFFF]">{item.montoBanco}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-[#FFFFFF] font-medium text-xs">{item.comprobante}</div>
                        <div className="text-[10px] text-[#C5C5C5]">{item.contraparte}</div>
                        <div className="text-[9px] text-[#858585] mt-0.5">CUIT: {item.cuit}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[#C5C5C5]">{item.montoFactura}</span>
                        {item.diferencia && (
                          <div className="text-[10px] text-[#F59E0B] font-semibold mt-0.5">Δ {item.diferencia}</div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-[11px] font-medium ${statusColor[item.estado as keyof typeof statusColor]}`}>
                          {statusIcon[item.estado as keyof typeof statusIcon]}
                          {statusLabel[item.estado as keyof typeof statusLabel]}
                        </div>
                        <div className="text-[9px] text-[#C5C5C5] mt-1 max-w-[180px] truncate">{item.detalle}</div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer bar */}
            <div className="px-4 py-2.5 bg-[#050505] border-t border-[#292929] flex flex-wrap items-center justify-between text-[10px] font-mono text-[#858585] gap-2">
              <span className="flex items-center gap-1.5 text-[#C5C5C5]">
                <Cpu className="w-3.5 h-3.5 text-[#E5E5E5]" />
                Motor de normalización y matching inteligente · En desarrollo activo
              </span>
              <span>Datos ilustrativos — arquitectura conceptual</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}