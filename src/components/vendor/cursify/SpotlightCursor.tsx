"use client";

import { useEffect, useRef } from "react";

interface SpotlightCursorProps {
  spotlightSize?: number;
  spotlightIntensity?: number;
  fadeSpeed?: number;
  glowColor?: string;
  pulseSpeed?: number;
}

/**
 * Spotlight cursor — smooth radial glow that follows mouse.
 * Sourced from cursify-main (MIT). No external deps.
 */
export function SpotlightCursor({
  spotlightSize = 280,
  spotlightIntensity = 0.12,
  fadeSpeed = 0.08,
  glowColor = "34, 211, 165",
  pulseSpeed = 3000,
}: SpotlightCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spotlightPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const targetPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animFrame: number;
    let active = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
      active = true;
    };

    const render = () => {
      spotlightPos.x = lerp(spotlightPos.x, targetPos.x, fadeSpeed);
      spotlightPos.y = lerp(spotlightPos.y, targetPos.y, fadeSpeed);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!active) {
        animFrame = requestAnimationFrame(render);
        return;
      }

      const pulse = 1 + 0.06 * Math.sin((Date.now() / pulseSpeed) * Math.PI * 2);
      const sz = spotlightSize * pulse;

      // Outer glow layer
      const glow = ctx.createRadialGradient(
        spotlightPos.x, spotlightPos.y, 0,
        spotlightPos.x, spotlightPos.y, sz * 1.8
      );
      glow.addColorStop(0, `rgba(${glowColor}, ${spotlightIntensity * 0.5})`);
      glow.addColorStop(0.4, `rgba(${glowColor}, ${spotlightIntensity * 0.2})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Inner tight glow
      const inner = ctx.createRadialGradient(
        spotlightPos.x, spotlightPos.y, 0,
        spotlightPos.x, spotlightPos.y, sz * 0.5
      );
      inner.addColorStop(0, `rgba(${glowColor}, ${spotlightIntensity * 1.5})`);
      inner.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = inner;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animFrame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, [spotlightSize, spotlightIntensity, fadeSpeed, glowColor, pulseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998] w-full h-full"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

