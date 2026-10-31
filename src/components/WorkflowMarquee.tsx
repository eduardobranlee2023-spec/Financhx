"use client";

import { LogoMarquee } from "@/components/vendor/interior/logo-marquee";

const workflowItems = [
  { id: "ingesta", label: "Ingesta de datos" },
  { id: "normalizacion", label: "Normalización" },
  { id: "conciliacion", label: "Conciliación" },
  { id: "revision", label: "Revisión humana" },
  { id: "auditoria", label: "Trazabilidad" },
  { id: "integraciones", label: "Sistemas empresariales" },
];

export function WorkflowMarquee() {
  return (
    <section
      aria-label="Etapas del flujo de trabajo de Financhx"
      className="border-b border-[#292929] bg-[#050505] py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-[10px] font-mono uppercase tracking-[0.18em] text-[#858585]">
          Un flujo de trabajo, de la ingesta a la revisión
        </p>
        <LogoMarquee
          items={workflowItems}
          label="Etapas del recorrido demostrativo de Financhx"
          speed={32}
          gap={20}
          className="border-[#292929] bg-[#0D0D0D] dark:bg-[#0D0D0D]"
        />
      </div>
    </section>
  );
}
