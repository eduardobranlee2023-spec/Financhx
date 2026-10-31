"use client";

import React, { useState } from "react";
import {
  FileText,
  Landmark,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Layers,
  HelpCircle,
  Eye,
  FileCheck,
  Building,
  Calendar,
  Hash,
  Sparkles,
} from "lucide-react";
import { FileUpload21st } from "./FileUpload21st";
import { ProgressBar } from "@/components/vendor/interior/progress-bar";
import { TransactionTableDemo } from "@/components/TransactionTableDemo";
import { PressDepth } from "@/components/vendor/interior/press-depth";
import { ValueFlash } from "@/components/vendor/interior/value-flash";

interface TransactionCase {
  id: string;
  title: string;
  category: "match" | "diff" | "pending";
  banco: {
    nombre: string;
    cuenta: string;
    fecha: string;
    concepto: string;
    monto: string;
    referencia: string;
    cuitOrigen: string;
  };
  factura: {
    tipo: string;
    numero: string;
    fechaEmision: string;
    razonSocial: string;
    cuitEmisor: string;
    montoTotal: string;
    condicion: string;
  };
  diagnostico: {
    estadoBadge: string;
    coincidenciaPorcentaje: number;
    motivo: string;
    explicacionTecnica: string;
    accionSugerida: string;
  };
}

export function ReconcileDemo() {
  const cases: TransactionCase[] = [
    {
      id: "caso-1",
      title: "Coincidencia Exacta (100% Match)",
      category: "match",
      banco: {
        nombre: "Banco Galicia",
        cuenta: "C/C ARS 4012-882-1",
        fecha: "28/10/2026 14:32",
        concepto: "TRANSF BANCARIA DE TECHCORP SOLUTIONS SA",
        monto: "$ 4.850.000,00",
        referencia: "GAL-992104-B",
        cuitOrigen: "30-71458921-9",
      },
      factura: {
        tipo: "Factura Electrónica A",
        numero: "0004-00018942",
        fechaEmision: "28/10/2026",
        razonSocial: "TechCorp Soluciones S.A.",
        cuitEmisor: "30-71458921-9",
        montoTotal: "$ 4.850.000,00",
        condicion: "Transferencia 30 días",
      },
      diagnostico: {
        estadoBadge: "Conciliación Automática Exitosa",
        coincidenciaPorcentaje: 100,
        motivo: "Coincidencia idéntica en CUIT emisor, importe bruto y fecha de vencimiento.",
        explicacionTecnica: "El motor vinculó la clave compuesta CUIT + MONTO exacto sin desviaciones ni deducciones bancarias.",
        accionSugerida: "Partida imputada automáticamente en el libro banco contable.",
      },
    },
    {
      id: "caso-2",
      title: "Diferencia por Retención IIBB (Deducción 3.0%)",
      category: "diff",
      banco: {
        nombre: "Banco Santander",
        cuenta: "C/C ARS 1198-443-2",
        fecha: "27/10/2026 11:15",
        concepto: "ACREDITACION COBRO DISTRIB ANDINA SRL",
        monto: "$ 1.212.500,00",
        referencia: "SNT-441092-D",
        cuitOrigen: "30-68912304-4",
      },
      factura: {
        tipo: "Factura Electrónica A",
        numero: "0001-00005411",
        fechaEmision: "25/10/2026",
        razonSocial: "Distribuidora Andina S.R.L.",
        cuitEmisor: "30-68912304-4",
        montoTotal: "$ 1.250.000,00",
        condicion: "Contado / Transferencia",
      },
      diagnostico: {
        estadoBadge: "Diferencia Impositiva Detectada (-$37.500)",
        coincidenciaPorcentaje: 97,
        motivo: "El importe acreditado en banco es inferior al total facturado en exactamente el 3.0%.",
        explicacionTecnica: "Financhx aisló la alícuota de Retención Ingresos Brutos de ARBA/AGIP (-$37.500,00), evitando un desfasaje contable.",
        accionSugerida: "Solicitar certificado de retención fiscal para compensar la diferencia contra saldo deudor.",
      },
    },
    {
      id: "caso-3",
      title: "Imputación Ambigua (Requiere Revisión Manual)",
      category: "pending",
      banco: {
        nombre: "BBVA Francés",
        cuenta: "C/C ARS 0524-192-8",
        fecha: "26/10/2026 18:40",
        concepto: "TRANSFERENCIA DE F. GOMEZ - SIN CUIT EN EXTRACTO",
        monto: "$ 340.000,00",
        referencia: "BBV-781290-X",
        cuitOrigen: "No informado por la red",
      },
      factura: {
        tipo: "Comprobante Pendiente",
        numero: "No vinculado",
        fechaEmision: "—",
        razonSocial: "Posible cliente minorista o anticipo",
        cuitEmisor: "Sin asignar",
        montoTotal: "—",
        condicion: "Pendiente de documentación",
      },
      diagnostico: {
        estadoBadge: "En Espera de Revisión Contable",
        coincidenciaPorcentaje: 45,
        motivo: "Movimiento entrante en banco sin metadatos suficientes para emparejamiento automático.",
        explicacionTecnica: "El sistema no fuerza coincidencias dudosas: preserva la integridad del balance aislando la operación en la bandeja de revisión.",
        accionSugerida: "Asignación manual con un clic desde el explorador de comprobantes pendientes.",
      },
    },
  ];

  const [selectedCaseId, setSelectedCaseId] = useState<string>("caso-1");
  const currentCase = cases.find((c) => c.id === selectedCaseId) || cases[0];

  return (
    <section id="reconcile" className="scroll-mt-24 py-24 bg-[#0A0A0A] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#303030] text-xs font-mono text-[#E5E5E5] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#E5E5E5]" />
            <span>FINANCHX RECONCILE EN ACCIÓN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
            De la ambigüedad de los extractos a la certeza contable.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#D0D0D0] leading-relaxed">
            Experimentá cómo el motor de Financhx Reconcile procesa extractos bancarios y registros de facturación,
            desglosando diferencias de retenciones impositivas y manteniendo el control total de tu equipo.
          </p>
        </div>

        {/* Step 1: Ingesta de Datos con Componente 21st.dev File Upload */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#101010] border border-[#303030]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-mono text-[#E5E5E5] uppercase font-semibold">
                FASE 01 · INGESTA MULTI-FORMATO
              </span>
              <h3 className="text-lg font-bold text-[#FFFFFF] mt-0.5">
                Cargador Inteligente de Extractos y Comprobantes
              </h3>
            </div>
            <span className="text-xs font-mono text-[#D0D0D0] bg-[#0A0A0A] px-3 py-1 rounded-full border border-[#303030]">
              Componente adaptado de 21st.dev
            </span>
          </div>

          <FileUpload21st />
        </div>

        {/* Step 2: Casos de Diagnóstico y Comparativa */}
        <div className="mb-4">
          <span className="text-xs font-mono text-[#E5E5E5] uppercase font-semibold">
            FASE 02 · MOTOR DE EMPAREJAMIENTO Y TRAZABILIDAD
          </span>
          <h3 className="text-lg font-bold text-[#FFFFFF] mt-0.5">
            Inspección de Casos Reales de Conciliación
          </h3>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {cases.map((c) => {
            const isSelected = c.id === selectedCaseId;
            return (
              <PressDepth
                key={c.id}
                type="button"
                onClick={() => setSelectedCaseId(c.id)}
                aria-pressed={isSelected}
                className={`h-auto min-h-9 rounded-xl px-4 py-2.5 text-xs font-mono ${
                  isSelected
                    ? "!border-white !bg-[#303030] !text-white"
                    : "!border-[#303030] !bg-[#101010] !text-[#D0D0D0] hover:!bg-[#1B1B1B] hover:!text-white"
                }`}
              >
                {c.category === "match" && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                )}
                {c.category === "diff" && (
                  <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
                )}
                {c.category === "pending" && (
                  <Clock className="w-3.5 h-3.5 text-[#E5E5E5]" />
                )}
                <span className="font-medium">{c.title}</span>
              </PressDepth>
            );
          })}
        </div>

        {/* Interactive Comparison Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card A: Extracto Bancario */}
          <div className="lg:col-span-4 rounded-2xl bg-[#101010] border border-[#303030] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#303030]/70">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF] font-semibold">
                  <Landmark className="w-4 h-4 text-[#E5E5E5]" />
                  <span>EXTRACTO BANCARIO</span>
                </div>
                <span className="text-[10px] text-[#D0D0D0] font-mono">Entrada de fondos</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">Entidad Bancaria</span>
                  <span className="text-[#FFFFFF] font-medium">{currentCase.banco.nombre}</span>
                  <span className="text-[#D0D0D0] block text-[11px]">{currentCase.banco.cuenta}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">Concepto en Resumen</span>
                  <span className="text-[#E2E2E2] text-[11px] break-words">
                    {currentCase.banco.concepto}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[10px] text-[#8F8F8F] uppercase block">Fecha y Hora</span>
                    <span className="text-[#D0D0D0] text-[11px]">{currentCase.banco.fecha}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8F8F8F] uppercase block">Referencia</span>
                    <span className="text-[#D0D0D0] text-[11px]">{currentCase.banco.referencia}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">CUIT / Identificador Origen</span>
                  <span className="text-[#E5E5E5] text-[11px] font-semibold">{currentCase.banco.cuitOrigen}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#303030] flex items-baseline justify-between font-mono">
              <span className="text-xs text-[#D0D0D0]">Monto Acreditado:</span>
              <span className="text-lg font-bold text-[#FFFFFF]">{currentCase.banco.monto}</span>
            </div>
          </div>

          {/* Center Column: Engine Logic & Diagnosis */}
          <div className="lg:col-span-4 rounded-2xl bg-[#141414] border-2 border-[#E5E5E5]/40 p-5 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5E5E5]/10 blur-xl pointer-events-none rounded-full" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#303030]">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFFFFF] font-bold">
                  <Sparkles className="w-4 h-4 text-[#E5E5E5]" />
                  <span>DIAGNÓSTICO DEL MOTOR</span>
                </div>
                <ValueFlash
                  value={currentCase.diagnostico.coincidenciaPorcentaje}
                  label="Porcentaje orientativo de coincidencia"
                  format={(value) => `${value}%`}
                  className="font-mono font-bold text-[#FFFFFF]"
                />
              </div>
              <ProgressBar
                value={currentCase.diagnostico.coincidenciaPorcentaje}
                label="Coincidencia orientativa"
                pendingLabel="Pendiente"
                completeLabel="Coincidencia total"
                className="mb-4"
              />

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-mono font-semibold ${
                    currentCase.category === "match"
                      ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30"
                      : currentCase.category === "diff"
                      ? "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30"
                      : "bg-[#E5E5E5]/15 text-[#E5E5E5] border border-[#E5E5E5]/30"
                  }`}
                >
                  {currentCase.diagnostico.estadoBadge}
                </span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-[10px] text-[#D0D0D0] uppercase font-mono block mb-1">
                    Análisis de Coincidencia
                  </span>
                  <p className="text-[#FFFFFF] font-medium">
                    {currentCase.diagnostico.motivo}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#303030]/70 text-[#D0D0D0] font-mono text-[11px] leading-normal">
                  {currentCase.diagnostico.explicacionTecnica}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#303030] space-y-2">
              <span className="text-[10px] text-[#8F8F8F] font-mono uppercase block">Acción Operativa Sugerida</span>
              <div className="text-xs text-[#FFFFFF] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E5E5E5]" />
                <span>{currentCase.diagnostico.accionSugerida}</span>
              </div>
            </div>
          </div>

          {/* Card B: Factura / ERP Comprobante */}
          <div className="lg:col-span-4 rounded-2xl bg-[#101010] border border-[#303030] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#303030]/70">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF] font-semibold">
                  <FileText className="w-4 h-4 text-[#E5E5E5]" />
                  <span>REGISTRO DE FACTURACIÓN</span>
                </div>
                <span className="text-[10px] text-[#D0D0D0] font-mono">AFIP / ERP / Contabilidad</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">Razón Social / Cliente</span>
                  <span className="text-[#FFFFFF] font-medium">{currentCase.factura.razonSocial}</span>
                  <span className="text-[#D0D0D0] block text-[11px]">{currentCase.factura.tipo}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] text-[#8F8F8F] uppercase block">N° Comprobante</span>
                    <span className="text-[#E2E2E2] text-[11px]">{currentCase.factura.numero}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8F8F8F] uppercase block">Fecha Emisión</span>
                    <span className="text-[#D0D0D0] text-[11px]">{currentCase.factura.fechaEmision}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">CUIT Contraparte</span>
                  <span className="text-[#E5E5E5] text-[11px] font-semibold">{currentCase.factura.cuitEmisor}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#8F8F8F] uppercase block">Condición Comercial</span>
                  <span className="text-[#D0D0D0] text-[11px]">{currentCase.factura.condicion}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#303030] flex items-baseline justify-between font-mono">
              <span className="text-xs text-[#D0D0D0]">Total Facturado:</span>
              <span className="text-lg font-bold text-[#FFFFFF]">{currentCase.factura.montoTotal}</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#101010] border border-[#303030]/60">
            <span className="text-[#E5E5E5] font-bold block mb-1">01. Ingesta Flexible</span>
            <p className="text-[#D0D0D0] text-[11px]">Carga masiva de extractos bancarios en CSV, Excel o APIs bancarias.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-[#303030]/60">
            <span className="text-[#E5E5E5] font-bold block mb-1">02. Reglas Contables</span>
            <p className="text-[#D0D0D0] text-[11px]">Mapeo estricto por CUIT, montos de tolerancia y referencias bancarias.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-[#303030]/60">
            <span className="text-[#E5E5E5] font-bold block mb-1">03. Detección Tributaria</span>
            <p className="text-[#D0D0D0] text-[11px]">Identificación automática de deducciones por retenciones de IIBB o comisiones.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-[#303030]/60">
            <span className="text-[#E5E5E5] font-bold block mb-1">04. Pista Inmutable</span>
            <p className="text-[#D0D0D0] text-[11px]">Historial de quién aprobó cada registro y fecha exacta para auditorías.</p>
          </div>
        </div>

        <TransactionTableDemo />
      </div>
    </section>
  );
}
