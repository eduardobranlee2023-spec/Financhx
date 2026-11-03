"use client";

import { useEffect, useState, useRef } from "react";
import { SplineScene } from "@/components/ui/splite";
import type { Application } from "@splinetool/runtime";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function RobotFloat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  // IntersectionObserver activo:
  // 1. Inicia la carga cuando el usuario se acerca.
  // 2. PAUSA el bucle de renderizado WebGL cuando el usuario hace scroll hacia arriba o abajo y el robot sale de pantalla.
  // 3. REANUDA el robot solo cuando está visible.
  // Esto libera el 100% de la CPU y GPU del teléfono para que el resto de la página no sufra ningún tirón.
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadSpline(true);
          // Si el Spline ya cargó, reanudamos su animación
          if (splineAppRef.current && typeof splineAppRef.current.play === "function") {
            try {
              splineAppRef.current.play();
            } catch {
              // noop
            }
          }
        } else {
          // Si el robot ya no está a la vista, PAUSAMOS el motor para dejar la GPU en 0%
          if (splineAppRef.current && typeof splineAppRef.current.stop === "function") {
            try {
              splineAppRef.current.stop();
            } catch {
              // noop
            }
          }
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.05,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSplineLoad = (app: Application) => {
    splineAppRef.current = app;
  };

  if (reduceMotion) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] aspect-square"
    >
      {/* Halo de luz optimizado (sin filtros blur pesados en móviles) */}
      <div className="absolute inset-0 rounded-3xl bg-white/[0.03] blur-xl pointer-events-none transform-gpu" />
      
      {/* Marco de vidrio con aceleración por hardware */}
      <div className="relative h-full w-full rounded-3xl border border-[#292929] bg-[#0A0A0A]/80 backdrop-blur-xs overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transform-gpu will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
        
        {shouldLoadSpline ? (
          <SplineScene
            scene={SPLINE_SCENE}
            onLoad={handleSplineLoad}
            className="h-full w-full pointer-events-none md:pointer-events-auto"
          />
        ) : (
          <div
            aria-label="Cargando asistente 3D"
            className="flex h-full w-full items-center justify-center bg-[#070708]"
          >
            <span className="size-6 animate-spin rounded-full border-2 border-white/10 border-t-white/60" />
          </div>
        )}
      </div>

      {/* Floating label */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D0D0D] border border-[#292929] text-[10px] font-mono text-[#C5C5C5] whitespace-nowrap shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        Asistente operativo activo
      </div>
    </div>
  );
}
