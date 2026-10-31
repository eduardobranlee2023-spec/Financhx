"use client";

import { useEffect, useState } from "react";
import { SplineScene } from "@/components/ui/splite";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function RobotFloat() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="relative w-full max-w-[320px] aspect-square">
      {/* Glow halo behind robot */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E5E5E5]/10 via-transparent to-transparent blur-2xl" />
      {/* Glass frame */}
      <div className="relative h-full w-full rounded-3xl border border-[#292929] bg-[#0A0A0A]/60 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5E5E5]/[0.04] to-transparent pointer-events-none" />
        <SplineScene scene={SPLINE_SCENE} className="h-full w-full" />
      </div>
      {/* Floating label */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D0D0D] border border-[#292929] text-[10px] font-mono text-[#C5C5C5] whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A5] animate-pulse" />
        Asistente operativo activo
      </div>
    </div>
  );
}