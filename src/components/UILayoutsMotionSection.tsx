import { ImageReveal2 } from "@/components/vendor/ui-layouts/image-reveal";
import { StickyHeroScroll } from "@/components/vendor/ui-layouts/sticky-hero-scroll";

export function UILayoutsMotionSection() {
  return (
    <>
      <StickyHeroScroll />
      <section
        aria-labelledby="sample-states-title"
        className="border-t border-[#292929] bg-[#050505] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#858585]">
              UI Layouts · interacción por cursor
            </p>
            <h2
              id="sample-states-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              El contexto aparece al acercarte.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A3A3A3]">
              Explorá estados ficticios y sus detalles. En pantallas táctiles,
              las filas siguen siendo legibles sin depender del efecto.
            </p>
          </div>
          <ImageReveal2 />
        </div>
        <p className="mx-auto mt-8 max-w-7xl text-[10px] leading-relaxed text-[#737373]">
          Ejemplos visuales con importes inventados; no son información de
          clientes ni una funcionalidad financiera activa.
        </p>
      </section>
    </>
  );
}
