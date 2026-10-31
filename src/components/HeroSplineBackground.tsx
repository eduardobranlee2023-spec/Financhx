"use client";

import { useEffect, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function HeroSplineBackground() {
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
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/45 to-[#050505]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-[#050505]/35 to-[#050505]/20" />
    </div>
  );
}
