"use client";

import { useState } from "react";
import {
  AnimatedToastStack,
  useAnimatedToastStack,
} from "@/components/vendor/spectrum-ui/animated-toast-stack";
import {
  DynamicIsland,
  DynamicIslandView,
} from "@/components/vendor/spectrum-ui/dynamic-island";
import { NotificationBell } from "@/components/vendor/spectrum-ui/notification-bell";
import { QuantityStepper } from "@/components/vendor/spectrum-ui/quantity-stepper";
import { TaskCheckbox } from "@/components/vendor/spectrum-ui/task-checkbox";
import {
  LiveActivity,
  type Activity,
} from "@/components/vendor/interior/live-activity";
import { SkeletonSwap } from "@/components/vendor/interior/skeleton-swap";
import { TaskSteps } from "@/components/vendor/interior/task-steps";
import { TextReveal } from "@/components/vendor/interior/text-reveal";
import {
  WizardSteps,
  type WizardStep,
} from "@/components/vendor/interior/wizard-steps";

const taskSteps = [
  { id: "ingest", label: "Archivo de ejemplo identificado", meta: "00:02" },
  { id: "normalize", label: "Referencias normalizadas", meta: "00:04" },
  { id: "review", label: "Revisión de diferencias", meta: "En curso" },
  { id: "approval", label: "Validación humana", meta: "Pendiente" },
];

const sampleActivity: Activity = {
  id: "sample-review",
  title: "Revisión del lote",
  detail: "3 movimientos · datos de muestra",
  progress: 0.62,
  phase: "running",
};

const wizardSteps: WizardStep[] = [
  {
    id: "source",
    label: "Origen",
    content: (
      <div>
        <p className="font-medium">01 / Fuente ilustrativa</p>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          La maqueta muestra cómo podría identificarse un origen de datos, sin
          conectarse a una entidad.
        </p>
      </div>
    ),
  },
  {
    id: "match",
    label: "Coincidencia",
    content: (
      <div>
        <p className="font-medium">02 / Lectura del movimiento</p>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          Una referencia y un importe de ejemplo se presentan juntos para
          facilitar su revisión visual.
        </p>
      </div>
    ),
  },
  {
    id: "review",
    label: "Revisión",
    content: (
      <div>
        <p className="font-medium">03 / Revisión humana</p>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          Los casos ambiguos se ilustran como pendientes de revisión, no como
          decisiones automáticas.
        </p>
      </div>
    ),
  },
];

export function MotionLabSection() {
  const [unread, setUnread] = useState(2);
  const [sampleRows, setSampleRows] = useState(3);
  const [islandOpen, setIslandOpen] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [wizardIndex, setWizardIndex] = useState(0);
  const [wizardComplete, setWizardComplete] = useState(false);
  const toastStack = useAnimatedToastStack({ limit: 2, defaultDuration: 5000 });

  return (
    <section
      aria-labelledby="motion-lab-title"
      className="border-t border-[#292929] bg-[#080808] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#C5C5C5]">
              Centro de operaciones · prototipo visual
            </p>
            <h2
              id="motion-lab-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              <TextReveal
                text="Cada movimiento, con contexto."
                className="!text-white"
                maxDuration={1.2}
              />
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-[#A3A3A3] lg:justify-self-end">
            Una muestra de patrones de interfaz: estados, revisión y microdetalles
            en movimiento. Todo el contenido de este bloque es ficticio y no
            representa un proceso financiero activo.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="rounded-3xl border border-[#292929] bg-[#101010] p-5 sm:p-7 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#858585]">
                  Lote de demostración
                </p>
                <h3 className="mt-2 text-xl font-medium text-white">
                  Revisión de movimientos
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-[#C5C5C5]">
                Datos ilustrativos
              </span>
            </div>

            <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#858585]">
                  Actividad de ejemplo
                </p>
                <LiveActivity
                  label="Actividad ilustrativa"
                  activity={sampleActivity}
                  className="justify-start"
                />
                <p className="pt-2 text-xs font-mono uppercase tracking-[0.12em] text-[#858585]">
                  Secuencia ilustrativa
                </p>
                <TaskSteps
                  steps={taskSteps}
                  current={2}
                  label="Etapas ficticias de revisión"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080808] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Interacciones de muestra
                    </p>
                    <p className="mt-1 text-xs text-[#858585]">
                      Sin datos conectados
                    </p>
                  </div>
                  <NotificationBell
                    count={unread}
                    size="sm"
                    onClick={() => setUnread((count) => (count > 0 ? 0 : 2))}
                    className="border-white/10 bg-[#111111] text-white hover:bg-[#202020]"
                  />
                </div>

                <div className="space-y-3">
                  <TaskCheckbox
                    label="Referencia identificada"
                    description="Etiqueta de demostración"
                    defaultChecked
                  />
                  <TaskCheckbox
                    label="Diferencia para revisar"
                    description="La selección solo cambia esta interfaz"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-[#C5C5C5]">
                      Filas visibles de ejemplo
                    </p>
                    <p className="mt-1 text-[10px] text-[#737373]">
                      No modifica ni procesa datos
                    </p>
                  </div>
                  <QuantityStepper
                    value={sampleRows}
                    min={1}
                    max={8}
                    size="sm"
                    onValueChange={setSampleRows}
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-[#292929] bg-white p-6 text-center text-neutral-950 sm:p-8 lg:col-span-5">
            <div className="max-w-sm">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-500">
                Estado expandible
              </p>
              <h3 className="mt-2 text-xl font-medium">
                Un detalle que se despliega cuando hace falta.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Una isla dinámica convierte una señal compacta en contexto
                ampliado, sin salir de la vista.
              </p>
            </div>

            <button
              type="button"
              aria-expanded={islandOpen}
              onClick={() => setIslandOpen((open) => !open)}
              className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
            >
              {islandOpen ? "Contraer vista" : "Expandir vista"}
            </button>

            <DynamicIsland
              view={islandOpen ? "details" : null}
              compact={
                <>
                  <span className="size-1.5 rounded-full bg-white" />
                  <span>Financhx · vista conceptual</span>
                </>
              }
              className="bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white"
            >
              <DynamicIslandView id="details" className="min-w-[220px]">
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                    Estado de la experiencia
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Recorrido ilustrativo
                  </p>
                  <p className="mt-1 text-xs text-neutral-400">
                    Sin conexiones ni operaciones reales
                  </p>
                </div>
              </DynamicIslandView>
            </DynamicIsland>
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#292929] bg-[#101010] p-5 sm:p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#858585]">
              Recorrido interactivo
            </p>
            <h3 className="mb-5 mt-2 text-lg font-medium text-white">
              Del origen a la revisión
            </h3>
            <WizardSteps
              steps={wizardSteps}
              index={wizardIndex}
              complete={wizardComplete}
              onIndexChange={(index) => {
                setWizardIndex(index);
                setWizardComplete(false);
              }}
              onComplete={() => setWizardComplete(true)}
              label="Recorrido ilustrativo del producto"
              backLabel="Atrás"
              nextLabel="Siguiente"
              finishLabel="Completar recorrido"
              completeLabel="Recorrido de interfaz completo"
              completeHint="Podés volver a explorar cada etapa"
              className="[&_button]:cursor-pointer"
            />
          </article>

          <article className="rounded-3xl border border-[#292929] bg-[#101010] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#858585]">
                  Cambio de estado
                </p>
                <h3 className="mt-2 text-lg font-medium text-white">
                  Carga y resultado
                </h3>
              </div>
              <button
                type="button"
                aria-pressed={!loadingPreview}
                onClick={() => setLoadingPreview((loading) => !loading)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-[#E5E5E5] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {loadingPreview ? "Ver resultado" : "Ver skeleton"}
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#080808] p-4">
              <SkeletonSwap
                ready={!loadingPreview}
                label="Vista demostrativa de movimientos"
                lines={3}
                lineHeight={24}
                reserve={88}
                className="text-white"
              >
                <div className="flex h-[88px] flex-col justify-center">
                  <p className="text-sm font-medium text-white">
                    Resumen ilustrativo
                  </p>
                  <p className="mt-1 text-xs text-[#A3A3A3]">
                    3 filas · 1 pendiente de revisión
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#737373]">
                    Información ficticia
                  </p>
                </div>
              </SkeletonSwap>
            </div>
          </article>

          <article className="rounded-3xl border border-[#292929] bg-[#101010] p-5 sm:p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#858585]">
              Confirmación visual
            </p>
            <h3 className="mt-2 text-lg font-medium text-white">
              Notificaciones sin ruido
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">
              Dispará un aviso de muestra y observá cómo entra y sale de la pila.
            </p>
            <button
              type="button"
              onClick={() =>
                toastStack.showToast({
                  title: "Vista de ejemplo actualizada",
                  description: "La interacción ocurre solo en esta página.",
                  status: "info",
                })
              }
              className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Mostrar aviso de ejemplo
            </button>
            <AnimatedToastStack
              toasts={toastStack.toasts}
              onDismiss={toastStack.dismissToast}
              placement="static"
              position="bottom-left"
              maxVisible={2}
              classNames={{
                root: "mt-4 w-full max-w-none",
                surface: "border-[#292929] bg-[#171717] text-white",
                title: "!text-white",
                description: "!text-[#A3A3A3]",
                iconWrap: "bg-white/[0.08] !text-white",
                close: "!text-[#A3A3A3] hover:!bg-white/10 hover:!text-white",
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
