"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, AlertTriangle, Clock, RefreshCw, Cpu, ShieldCheck, Layers, Building2 } from "lucide-react";
import SmoothFollower from "./vendor/cursify/SmoothFollower";
import { Spotlight, SpotLightItem } from "./vendor/cursify/spotlight";
import { Blocks } from "./vendor/ui-layouts/blocks";
import { GapPattern } from "./vendor/ui-layouts/gap-pattern";
import { TextReveal } from "./vendor/interior/TextReveal";
import { TiltCard, TiltCardItem } from "./vendor/spectrum-ui/tilt-card";

const ledgerItems = [
  {
    id: "REC-8041",
    banco: "Banco Galicia CC$ 4012-8",
    tipo: "Transferencia Recibida",
    montoBanco: "$4.850.000,00",
    comprobante: "FC-A 0004-00018942",
    contraparte: "TechCorp Soluciones S.A.",
    cuit: "30-71458921-9",
    montoFactura: "$4.850.000,00",
    estado: "matched",
    detalle: "100% Coincidencia CUIT + Monto",
    diferencia: null,
    tiempo: "12 min",
  },
  {
    id: "REC-8042",
    banco: "Santander Río CC$ 1198-2",
    tipo: "Cobro Pasarela / Tarjeta",
    montoBanco: "$1.212.500,00",
    comprobante: "FC-B 0001-00005411",
    contraparte: "Distribuidora Andina SRL",
    cuit: "30-68912304-4",
    montoFactura: "$1.250.000,00",
    estado: "diff",
    detalle: "Ret. IIBB 3.0% (-$37.500)",
    diferencia: "-$37.500",
    tiempo: "28 min",
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "matched" | "diff">("all");

  const filtered = ledgerItems.filter((item) => {
    if (activeTab === "matched") return item.estado === "matched";
    if (activeTab === "diff") return item.estado === "diff";
    return true;
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050505] text-white flex flex-col justify-center"
    >
      {/* 1. CURSOR LIMPIO Y ELEGANTE DE CURSIFY (SmoothFollower) */}
      <SmoothFollower />

      {/* 2. FONDO DE BLOQUES Y GRID ARQUITECTÓNICA DE UILAYOUTS (blocks.tsx) */}
      <Blocks
        containerRef={containerRef}
        activeDivs={{
          0: new Set([1, 4]),
          2: new Set([3]),
          4: new Set([2, 5]),
          6: new Set([1]),
          8: new Set([4]),
          10: new Set([2]),
          12: new Set([5]),
          14: new Set([3]),
        }}
        activeDivsClass="bg-white/[0.03]"
        divClass="border-white/[0.02]"
      />

      {/* Gradientes sutiles monocromáticos (Negro y Blanco puro) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_120%,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* TEXTO Y TITULARES */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          
          {/* Eyebrow badge oficial con estilo exacto de los repos */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300">
            <span className="tracking-wider uppercase font-semibold text-white">Financial Operating System</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">Acceso Privado</span>
          </div>

          {/* Headline animado palabra por palabra con TextReveal (de interior-main) */}
          <div className="relative">
            <TextReveal
              text="Una nueva forma de gestionar las finanzas de tu empresa."
              by="word"
              stagger={0.06}
              maxDuration={1.4}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] inline-block"
            />
          </div>

          {/* Subtitle en escala de grises refinada */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Financhx conecta tus fuentes financieras, automatiza conciliaciones y centraliza el control contable en una sola plataforma trazable.
          </p>

          {/* BOTONES INTERACTIVOS - DIRECTOS DE UILAYOUTS (btn-creative-right & btn-hover-outline) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Botón principal: Adaptación limpia sin artefactos en blanco y negro */}
            <a
              href="#acceso-anticipado"
              className="group relative cursor-pointer px-7 py-3.5 w-full sm:w-auto border border-white bg-white hover:bg-neutral-200 text-black rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              <span>Solicitar acceso anticipado</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Botón secundario: ButtonHoverOutLine */}
            <a
              href="#reconcile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/20 hover:border-white hover:bg-white hover:text-black rounded-full transition-all duration-300"
            >
              <span>Ver Financhx Reconcile</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Micro badges de confianza */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-200" />
              Control Contable Riguroso
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-200" />
              Arquitectura Modular B2B
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-neutral-200" />
              Enterprise Ready
            </span>
          </div>
        </div>

        {/* 3. PATRÓN DE RUPTURA ARQUITECTÓNICA (GapPattern de uilayouts) */}
        <div className="max-w-5xl mx-auto my-6">
          <GapPattern />
        </div>

        {/* 4. TARJETA PERSPECTIVA 3D TILT DE SPECTRUM-UI CON SPOTLIGHT DE CURSIFY */}
        <div className="max-w-5xl mx-auto">
          <TiltCard
            maxTilt={6}
            perspective={1400}
            scale={1.01}
            glare={true}
            glareColor="rgba(255, 255, 255, 0.08)"
            className="border border-white/10 bg-transparent shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
          >
            <TiltCardItem depth={20}>
              <Spotlight ProximitySpotlight={true} HoverFocusSpotlight={true} CursorFlowGradient={true}>
                <SpotLightItem className="rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A]">
                    
                    {/* Topbar del browser */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="h-4 w-px bg-white/10" />
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-white tracking-wide">
                            Financhx Reconcile
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            v0.1 · Producción
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full">
                          96.8% Conciliado
                        </span>
                      </div>
                    </div>

                    {/* Ribbon de métricas clave con efecto 3D Lift */}
                    <TiltCardItem depth={30}>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-b border-white/10">
                        {[
                          { label: "Volumen Procesado", value: "$48.25M", sub: "1.445 movimientos" },
                          { label: "Conciliadas", value: "1.428", sub: "96.8% automatizado" },
                          { label: "Diferencias", value: "3 partidas", sub: "Retenciones / Comisiones" },
                          { label: "En Revisión", value: "14 ops.", sub: "Asignación asistida" },
                        ].map((m) => (
                          <div key={m.label} className="p-4 bg-[#0D0D0D]">
                            <div className="text-[11px] text-neutral-400 font-mono">{m.label}</div>
                            <div className="text-lg font-bold font-mono text-white mt-1">{m.value}</div>
                            <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{m.sub}</div>
                          </div>
                        ))}
                      </div>
                    </TiltCardItem>

                    {/* Filtros de estado */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        {(["all", "matched", "diff"] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 text-xs rounded-md font-mono transition-colors ${
                              activeTab === tab
                                ? "bg-white text-black font-semibold"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            {tab === "all"
                              ? `Todas (${ledgerItems.length})`
                              : tab === "matched"
                              ? "Conciliadas"
                              : "Con Diferencias"}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                        <RefreshCw className="w-3 h-3 text-neutral-400" />
                        <span>3 bancos + AFIP sincronizados</span>
                      </div>
                    </div>

                    {/* Tabla de operaciones */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#0A0A0A] text-neutral-400 border-b border-white/10 font-mono">
                            {["Movimiento Bancario", "Monto Banco", "Comprobante / Contraparte", "Monto Factura", "Estado"].map((h) => (
                              <th key={h} className="py-2.5 px-4 font-medium text-[10px] uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.06] bg-[#0D0D0D]">
                          {filtered.map((item) => (
                            <tr key={item.id} className="hover:bg-white/[0.02] transition-colors font-mono">
                              <td className="py-3 px-4">
                                <div className="font-medium text-white text-xs">{item.tipo}</div>
                                <div className="text-[10px] text-neutral-400 mt-0.5">{item.banco}</div>
                                <div className="text-[9px] text-neutral-500 mt-0.5">
                                  {item.id} · Hace {item.tiempo}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="font-semibold text-white">{item.montoBanco}</span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="text-white font-medium text-xs">{item.comprobante}</div>
                                <div className="text-[10px] text-neutral-400">{item.contraparte}</div>
                                <div className="text-[9px] text-neutral-500 mt-0.5">CUIT: {item.cuit}</div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="text-neutral-300">{item.montoFactura}</span>
                                {item.diferencia && (
                                  <div className="text-[10px] text-neutral-400 font-semibold mt-0.5">
                                    Dif: {item.diferencia}
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/20 bg-white/5 text-[11px] font-medium text-white">
                                  {item.estado === "matched" ? (
                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                  ) : (
                                    <AlertTriangle className="w-3 h-3 text-neutral-300" />
                                  )}
                                  <span>{item.estado === "matched" ? "Conciliado" : "Diferencia"}</span>
                                </div>
                                <div className="text-[9px] text-neutral-400 mt-1 max-w-[180px] truncate">
                                  {item.detalle}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Footer bar */}
                    <div className="px-4 py-2.5 bg-[#0A0A0A] border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-neutral-400 gap-2">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                        Motor de normalización y matching inteligente
                      </span>
                      <span>Ambiente de validación activo</span>
                    </div>

                  </div>
                </SpotLightItem>
              </Spotlight>
            </TiltCardItem>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
