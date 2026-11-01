"use client";

import { useEffect, useRef, useCallback } from "react";

interface WavyCanvasProps {
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  lineOpacity?: number;
  animationSpeed?: number;
}

/**
 * Smooth wavy canvas background — interactive lines react to mouse.
 * Sourced from cursify-main smooth-wavy-canvas (MIT). Zero deps.
 */
export function WavyCanvas({
  backgroundColor = "rgba(5,5,5,0)",
  primaryColor = "34, 211, 165",
  secondaryColor = "255, 255, 255",
  accentColor = "100, 200, 160",
  lineOpacity = 1,
  animationSpeed = 0.003,
}: WavyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const getMouseInfluence = (x: number, y: number) => {
    const dx = x - mouseRef.current.x;
    const dy = y - mouseRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return Math.max(0, 1 - dist / 220);
  };

  const resize = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += animationSpeed;
    const t = timeRef.current;
    const { width: W, height: H } = canvas;

    ctx.clearRect(0, 0, W, H);

    // Primary horizontal lines
    for (let i = 0; i < 28; i++) {
      const yBase = (i / 28) * H;
      const mi = getMouseInfluence(W / 2, yBase);
      const amp = 35 + 18 * Math.sin(t * 0.3 + i * 0.18) + mi * 22;
      const freq = 0.005 + 0.002 * Math.sin(t * 0.1 + i * 0.08) + mi * 0.001;
      const spd = t * (0.55 + 0.25 * Math.sin(i * 0.14)) + mi * t * 0.3;
      const lw = 0.5 + 0.35 * Math.sin(t + i * 0.28) + mi * 0.7;
      const op = (0.09 + 0.06 * Math.abs(Math.sin(t * 0.28 + i * 0.2)) + mi * 0.12) * lineOpacity;

      ctx.beginPath();
      ctx.lineWidth = lw;
      ctx.strokeStyle = `rgba(${primaryColor}, ${op})`;

      for (let x = 0; x < W; x += 2) {
        const lmi = getMouseInfluence(x, yBase);
        const y = yBase + amp * Math.sin(x * freq + spd) + lmi * Math.sin(t * 2 + x * 0.008) * 12;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Secondary vertical lines
    for (let i = 0; i < 18; i++) {
      const xBase = (i / 18) * W;
      const mi = getMouseInfluence(xBase, H / 2);
      const amp = 30 + 15 * Math.sin(t * 0.2 + i * 0.15) + mi * 18;
      const freq = 0.006 + 0.002 * Math.cos(t * 0.12 + i * 0.09) + mi * 0.002;
      const spd = t * (0.45 + 0.2 * Math.cos(i * 0.17)) + mi * t * 0.22;
      const lw = 0.4 + 0.25 * Math.sin(t + i * 0.38) + mi * 0.6;
      const op = (0.05 + 0.04 * Math.abs(Math.sin(t * 0.24 + i * 0.22)) + mi * 0.09) * lineOpacity;

      ctx.beginPath();
      ctx.lineWidth = lw;
      ctx.strokeStyle = `rgba(${secondaryColor}, ${op})`;

      for (let y = 0; y < H; y += 2) {
        const lmi = getMouseInfluence(xBase, y);
        const x = xBase + amp * Math.sin(y * freq + spd) + lmi * Math.sin(t * 2 + y * 0.008) * 10;
        y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [animationSpeed, lineOpacity, primaryColor, secondaryColor, accentColor]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      timeRef.current = 0;
    };
  }, [animate, resize, onMouseMove]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full opacity-40" />
    </div>
  );
}

// Backward-compat alias (used by HeroEnhanced from Hermes)
export { WavyCanvas as WavyBackground };
