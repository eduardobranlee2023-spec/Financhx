"use client";

// Adapted from UI Layouts' sticky hero scroll example (MIT).
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function StickyHeroScroll() {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const firstScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 0.86],
  );
  const firstRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -3],
  );
  const secondScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0.86, 1],
  );
  const secondRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [3, 0],
  );

  return (
    <div
      ref={container}
      className="relative h-[200vh] overflow-clip bg-[#050505]"
    >
      <motion.section
        style={{ scale: firstScale, rotate: firstRotate }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[#F4F4F2] px-5 text-neutral-950 sm:px-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            Una operación, muchas fuentes
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            De los datos dispersos
            <br className="hidden sm:block" /> a una lectura común.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Deslizá para recorrer el concepto de conciliación. Este recorrido
            visual es ilustrativo; no conecta cuentas ni procesa transacciones.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-xs text-neutral-600">
            <span className="size-1.5 rounded-full bg-neutral-900" />
            Extracto · Facturación · Referencias
          </div>
        </div>
      </motion.section>

      <motion.section
        style={{ scale: secondScale, rotate: secondRotate }}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_82%)]"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
              Una vista, más contexto
            </p>
            <h3 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Encontrar la diferencia.
              <br />
              Entender el porqué.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
              La interfaz agrupa movimientos, coincidencias y casos para revisar
              en una misma lectura, con espacio para el criterio humano.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-neutral-300">
                  Lote de conciliación
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-neutral-400">
                  Ejemplo
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["1445", "Movimientos"],
                  ["17", "Para revisar"],
                  ["3", "Diferencias"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-l border-white/15 pl-3 sm:pl-4"
                  >
                    <p className="font-mono text-2xl text-white sm:text-3xl">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {[
              ["01", "Coincidencia", "Referencia e importe alineados"],
              ["02", "Diferencia", "Variación lista para revisar"],
            ].map(([number, title, detail]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#111111] p-5"
              >
                <span className="font-mono text-xs text-neutral-500">
                  {number} / MUESTRA
                </span>
                <p className="mt-5 text-lg font-medium text-white">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  {detail}
                </p>
              </div>
            ))}
            <p className="text-[10px] leading-relaxed text-neutral-600 sm:col-span-2">
              Cifras ficticias para mostrar la composición de una interfaz. No
              representan datos de clientes ni desempeño del producto.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
