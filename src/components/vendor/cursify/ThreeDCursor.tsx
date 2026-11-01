"use client";

import { useEffect, useRef, useState } from "react";

interface ThreeDCursorProps {
  color?: string;
  size?: number;
  sensitivity?: number;
}

/**
 * 3D CSS cursor — a rotating cube that tilts with mouse position.
 * Pure CSS transforms, zero dependencies. Disabled on touch devices.
 */
export function ThreeDCursor({
  color = "#E5E5E5",
  size = 12,
  sensitivity = 30,
}: ThreeDCursorProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Don't run on touch devices
    if ("ontouchstart" in window) return;
    setIsTouch(false);

    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setRotation({
        x: ((e.clientY - cy) / cy) * sensitivity,
        y: ((e.clientX - cx) / cx) * sensitivity,
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target?.closest("[data-cursor-hover], button, a, [role='button']"),
      );
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [sensitivity]);

  if (isTouch) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        left: mouse.x,
        top: mouse.y,
        transform: `translate(-50%, -50%) perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      <div className="relative" style={{ width: size * 4, height: size * 4 }}>
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-lg mix-blend-screen"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}88)`,
            transform: `translateZ(${size * 0.5}px)`,
            boxShadow: `0 0 ${size * 3}px ${color}66`,
          }}
        />
        {/* Back face */}
        <div
          className="absolute inset-0 rounded-lg mix-blend-screen opacity-80"
          style={{
            background: `linear-gradient(135deg, ${color}44, ${color}22)`,
            transform: `translateZ(-${size * 0.5}px)`,
          }}
        />
        {/* Side faces */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg mix-blend-screen opacity-70"
            style={{
              background: `linear-gradient(135deg, ${color}66, ${color}33)`,
              transform: `rotateY(${i * 90}deg) translateZ(${size * 0.5}px)`,
              width: `${size * 0.5}px`,
              left: i % 2 === 0 ? 0 : "auto",
              right: i % 2 === 1 ? 0 : "auto",
            }}
          />
        ))}
        {/* Shadow */}
        <div
          className="absolute rounded-full blur-md"
          style={{
            background: `${color}40`,
            width: size * 4,
            height: size,
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -2px) rotateX(90deg)",
          }}
        />
      </div>
    </div>
  );
}