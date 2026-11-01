"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Spotlight card — elevated container with glow on hover.
 * Uses CSS gradient border + motion scale.
 */
export function SpotlightCard({
  title,
  description,
  icon,
  className,
  children,
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-6 transition-all duration-300",
        "border border-white/10 hover:border-white/20",
        "bg-linear-to-b from-[#111111] via-[#0D0D0D] to-[#050505]",
        className,
      )}
      style={{
        boxShadow: isHovered
          ? "0 0 40px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
          "bg-linear-to-r from-transparent via-white/10 to-transparent",
          "pointer-events-none transition-opacity duration-300",
        )}
      />

      <div className="relative z-10">
        {icon && <div className="mb-4 text-white/70">{icon}</div>}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-[#C5C5C5] leading-relaxed">{description}</p>
      </div>
      {children}
    </div>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

/**
 * Bento grid layout — responsive card containers with spotlight effect.
 */
export function BentoGrid({
  children,
  className,
  columns = 3,
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}