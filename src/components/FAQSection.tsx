"use client";

import {
  FAQTabsCard,
  type FaqTab,
} from "@/components/vendor/spectrum-ui/faq-tabs-card";

const tabs: FaqTab[] = [
  {
    label: "Demo",
    faqs: [
      {
        question: "¿La demostración procesa conciliaciones reales?",
        answer:
          "No. La demostración presenta escenarios ilustrativos para explicar un flujo; el producto está en desarrollo y todavía no procesa operaciones reales.",
      },
      {
        question: "¿Qué representan las cifras que aparecen?",
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
        question: "¿Las métricas son resultados de clientes?",
        answer:
          "No. Las cifras del prototipo son datos ilustrativos; no representan resultados reales ni garantizan desempeño.",
      },
    ],
  },
];

export function FAQSection({ lang = 'es' }: { lang?: string }) {
  return (
    <section
      id="preguntas"
      aria-labelledby="faq-title"
      className="scroll-mt-24 border-t border-[#292929] bg-[#050505] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#C5C5C5]">
            Información clara
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Antes de empezar, lo importante.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C5C5C5]">
            Qué es Financhx hoy, qué es demostrativo y cómo se tratan los datos
            en esta experiencia.
          </p>
        </div>
        <FAQTabsCard
          tabs={tabs}
          footerLabel="Consultar sobre Financhx"
          onFooterClick={() =>
            document
              .getElementById("acceso-anticipado")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#111111]"
        />
      </div>
    </section>
  );
}

