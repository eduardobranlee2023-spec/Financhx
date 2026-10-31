"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div
      aria-label="Cargando escena 3D"
      className="flex h-full w-full items-center justify-center"
      role="status"
    >
      <span className="size-7 animate-spin rounded-full border-2 border-white/15 border-t-white/70" />
    </div>
  ),
});

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export function SplineScene({ scene, className }: SplineSceneProps) {
  return <Spline scene={scene} className={cn("h-full w-full", className)} />;
}
