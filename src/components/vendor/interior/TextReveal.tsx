"use client";

import { useEffect, useRef, useState, ReactNode, useMemo, Fragment } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const EASE = [0.23, 1, 0.32, 1] as const;
const DURATION = 0.6;

interface TextRevealProps {
  text: string;
  by?: "word" | "char";
  stagger?: number;
  maxDuration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: number;
  children?: ReactNode;
}

/**
 * Premium text reveal — words/chars cascade in with blur + offset.
 * Adapted from Interior (MIT), enhanced for Financhx hero.
 */
export function TextReveal({
  text,
  by = "word",
  stagger = 0.05,
  maxDuration = 1.4,
  className = "",
  once = true,
  amount = 0.3,
  direction = "up",
  blur = 8,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount });
  const reduced = useReducedMotion();

  const { units, step } = useMemo(() => {
    const words = text.trim().length ? text.trim().split(/\s+/) : [];
    const allUnits: { key: string; text: string; index: number }[] = [];
    let idx = 0;
    words.forEach((word, w) => {
      if (by === "char") {
        Array.from(word).forEach((char, c) => {
          allUnits.push({ key: `w${w}c${c}`, text: char, index: idx++ });
        });
      } else {
        allUnits.push({ key: `w${w}`, text: word, index: idx++ });
      }
    });
    const total = allUnits.length;
    const span = Math.max(0, maxDuration - DURATION);
    return { units: allUnits, step: total > 1 ? Math.min(stagger, span / (total - 1)) : 0 };
  }, [text, by, stagger, maxDuration]);

  const hidden = useMemo(() => {
    const base = { opacity: 0, filter: `blur(${blur}px)` };
    if (direction === "up") return { ...base, y: 14 };
    if (direction === "down") return { ...base, y: -14 };
    if (direction === "left") return { ...base, x: 14 };
    return { ...base, x: -14 };
  }, [direction, blur]);

  const shown = { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>
        {units.map((unit, i) => (
          <Fragment key={unit.key}>
            {i > 0 && by === "word" ? " " : ""}
            <motion.span
              className="inline-block"
              initial={reduced ? false : hidden}
              animate={inView ? shown : hidden}
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: DURATION,
                      ease: EASE,
                      delay: inView ? unit.index * step : 0,
                    }
              }
            >
              {unit.text}
            </motion.span>
          </Fragment>
        ))}
      </span>
    </span>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "span";
}

export function GradientText({ children, className = "", as = "h1" }: GradientTextProps) {
  const Tag = as;
  return (
    <Tag
      className={`bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #FFFFFF 0%, #E5E5E5 30%, #C5C5C5 60%, #FFFFFF 100%)",
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </Tag>
  );
}