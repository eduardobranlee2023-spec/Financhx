"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { Application } from "@splinetool/runtime";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div
      aria-label="Cargando escena 3D"
      className="flex h-full w-full items-center justify-center bg-[#070708]"
      role="status"
    >
      <span className="size-6 animate-spin rounded-full border-2 border-white/10 border-t-white/60" />
    </div>
  ),
});

type SplineSceneProps = {
  scene: string;
  className?: string;
  onLoad?: (splineApp: Application) => void;
};

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const handleLoad = (splineApp: Application) => {
    try {
      // Optimizamos el pixel ratio en dispositivos de alta densidad (móviles)
      // En vez de renderizar a 3x o 4x (lo que satura la GPU móvil y genera tirones),
      // lo limitamos a máximo 1.25x en pantallas táctiles y 1.5x en escritorio.
      const isMobile =
        typeof window !== "undefined" &&
        (window.innerWidth < 768 || "ontouchstart" in window);

      const targetPixelRatio = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

      // Si el renderer interno de Three.js está disponible en Spline:
      // @ts-expect-error internal Spline renderer access
      if (splineApp._renderer?.setPixelRatio) {
        // @ts-expect-error internal Spline renderer access
        splineApp._renderer.setPixelRatio(targetPixelRatio);
      }
    } catch {
      // Fallback seguro si cambian las internas de Spline
    }

    if (onLoad) {
      onLoad(splineApp);
    }
  };

  return (
    <Spline
      scene={scene}
      onLoad={handleLoad}
      className={cn("h-full w-full", className)}
    />
  );
}
