"use client";

// Adapted from Spectrum UI. Financhx modifications: localized, factual default
// content and pressed-state semantics for the category controls.
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqTab {
  label: string;
  faqs: FaqItem[];
}

export interface FAQTabsCardProps {
  tabs?: FaqTab[];
  /** Index of the tab selected initially. */
  defaultTab?: number;
  /** Index of the FAQ expanded initially (-1 for none). */
  defaultOpenIndex?: number;
  footerLabel?: string;
  onFooterClick?: () => void;
  className?: string;
}

const DEFAULT_TABS: FaqTab[] = [
  {
    label: "Demo",
    faqs: [
      {
        question: "¿La demostración procesa conciliaciones reales?",
        answer:
          "No. La demostración presenta escenarios ilustrativos para explicar un flujo; el producto está en desarrollo y todavía no procesa operaciones reales.",
      },
      {
        question: "¿Qué ocurre con los importes mostrados?",
        answer:
          "Son datos de ejemplo para ilustrar la interfaz; no representan operaciones de clientes ni resultados reales.",
      },
    ],
  },
  {
    label: "Financhx",
    faqs: [
      {
        question: "¿Financhx es un banco o brinda asesoramiento financiero?",
        answer:
          "No. Financhx desarrolla software para operaciones empresariales; no es una entidad bancaria, no custodia fondos ni ofrece asesoramiento financiero o impositivo.",
      },
      {
        question: "¿Pueden desarrollar software a medida?",
        answer:
          "Sí. La división de ingeniería digital recibe consultas para aplicaciones web, sistemas internos, automatización e integraciones empresariales.",
      },
    ],
  },
  {
    label: "Datos",
    faqs: [
      {
        question: "¿La demo lee o envía los archivos seleccionados?",
        answer:
          "No. El cargador actual solo muestra el nombre y tamaño del archivo seleccionado. No lee su contenido ni lo envía a un servidor.",
      },
      {
        question: "¿Las métricas de la página son resultados de clientes?",
        answer:
          "No. Las cifras del prototipo son datos ilustrativos; no representan resultados reales ni garantizan desempeño.",
      },
    ],
  },
];

export function FAQTabsCard({
  tabs: tabsProp = DEFAULT_TABS,
  defaultTab = 0,
  defaultOpenIndex = 0,
  footerLabel = "Contact Support",
  onFooterClick,
  className,
}: FAQTabsCardProps) {
  // Explicit `tabs={[]}` bypasses the default param — fall back so we never
  // read `.faqs` off undefined.
  const tabs = tabsProp.length > 0 ? tabsProp : DEFAULT_TABS;
  const clampedDefaultTab = Math.min(
    Math.max(defaultTab, 0),
    tabs.length - 1,
  );

  const [activeTab, setActiveTab] = React.useState(clampedDefaultTab);
  const [openIndex, setOpenIndex] = React.useState(defaultOpenIndex);

  const safeActiveTab = Math.min(Math.max(activeTab, 0), tabs.length - 1);
  const currentTab = tabs[safeActiveTab] ?? tabs[0];

  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-[26px] bg-white p-6 font-inter",
        "shadow-[0_0_0_1px_rgba(10,10,10,0.05),0_2px_4px_0_rgba(0,0,0,0.1)]",
        "dark:bg-neutral-950 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_2px_4px_0_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {/* Tabs */}
      <div className="flex h-9 items-center rounded-full bg-neutral-100 p-1 dark:bg-neutral-900">
        {tabs.map((tab, index) => {
          const active = index === safeActiveTab;
          return (
            <button
              key={tab.label}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setActiveTab(index);
                setOpenIndex(defaultOpenIndex);
              }}
              className="relative h-[27px] flex-1 rounded-full outline-hidden"
            >
              {active ? (
                <motion.span
                  layoutId="faq-tab-pill"
                  className="absolute inset-0 rounded-full bg-white dark:bg-neutral-950"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              ) : null}
              <span
                className={cn(
                  "relative z-10 text-sm font-medium leading-5 transition-colors duration-200",
                  active
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground/80",
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accordion */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={safeActiveTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="mt-2 flex-1 overflow-hidden rounded-[18px] border border-border"
        >
          {currentTab.faqs.map((faq, index) => {
            const open = index === openIndex;
            return (
              <div
                key={faq.question}
                className={cn(
                  "transition-colors duration-300",
                  index > 0 && "border-t border-border",
                  open && "bg-neutral-100/50 dark:bg-neutral-900/50",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                  className="flex min-h-[56px] w-full items-start justify-between gap-4 p-4 text-left"
                >
                  <span className="max-w-[248px] text-sm font-medium leading-5 text-foreground">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex shrink-0"
                  >
                    <ChevronDown className="h-4 w-4 text-foreground" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-[19px] text-sm leading-5 text-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <motion.button
        type="button"
        onClick={onFooterClick}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.35 }}
        className="mt-[25px] flex h-[34px] w-full shrink-0 items-center justify-center rounded-[26px] border border-border bg-white text-sm font-medium leading-5 text-foreground transition-colors hover:bg-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      >
        {footerLabel}
      </motion.button>
    </div>
  );
}
