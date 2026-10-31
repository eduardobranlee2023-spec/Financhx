"use client";

import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

const COLORS = {
  color1: "#050505",
  color2: "#0D0D0D",
  color3: "#171717",
  color4: "#1A1A1A",
  color5: "#111111",
  color6: "#1E1E1E",
  color7: "#292929",
  color8: "#383838",
  color9: "#4A4A4A",
  color10: "#303030",
  color11: "#E5E5E5",
  color12: "#C5C5C5",
  color13: "#858585",
  color14: "#D0D0D0",
  color15: "#B0B0B0",
  color16: "#A0A0A0",
  color17: "#FFFFFF",
};

const svgOrder = ["svg1", "svg2", "svg3", "svg4", "svg3", "svg2", "svg1"] as const;

type SvgKey = (typeof svgOrder)[number];

type Stop = {
  offset: number;
  stopColor: string;
};

type SvgState = {
  gradientTransform: string;
  stops: Stop[];
};

type SvgStates = Record<SvgKey, SvgState>;

function createStopsArray(
  svgStates: SvgStates,
  svgOrder: readonly SvgKey[],
  maxStops: number,
): Stop[][] {
  const stopsArray: Stop[][] = [];
  for (let i = 0; i < maxStops; i++) {
    const stopConfigurations = svgOrder.map((svgKey) => {
      const svg = svgStates[svgKey];
      return svg.stops[i] || svg.stops[svg.stops.length - 1];
    });
    stopsArray.push(stopConfigurations);
  }
  return stopsArray;
}

const svgStates: SvgStates = {
  svg1: {
    gradientTransform: "translate(287.5 280) rotate(-29.0546) scale(689.807 1000)",
    stops: [
      { offset: 0, stopColor: COLORS.color1 },
      { offset: 0.188423, stopColor: COLORS.color2 },
      { offset: 0.260417, stopColor: COLORS.color3 },
      { offset: 0.328792, stopColor: COLORS.color4 },
      { offset: 0.328892, stopColor: COLORS.color5 },
      { offset: 0.328992, stopColor: COLORS.color1 },
      { offset: 0.442708, stopColor: COLORS.color6 },
      { offset: 0.537556, stopColor: COLORS.color7 },
      { offset: 0.631738, stopColor: COLORS.color1 },
      { offset: 0.725645, stopColor: COLORS.color8 },
      { offset: 0.817779, stopColor: COLORS.color9 },
      { offset: 0.84375, stopColor: COLORS.color10 },
      { offset: 0.90569, stopColor: COLORS.color1 },
      { offset: 1, stopColor: COLORS.color11 },
    ],
  },
  svg2: {
    gradientTransform: "translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)",
    stops: [
      { offset: 0, stopColor: COLORS.color1 },
      { offset: 0.104167, stopColor: COLORS.color12 },
      { offset: 0.182292, stopColor: COLORS.color13 },
      { offset: 0.28125, stopColor: COLORS.color1 },
      { offset: 0.328792, stopColor: COLORS.color4 },
      { offset: 0.328892, stopColor: COLORS.color5 },
      { offset: 0.453125, stopColor: COLORS.color6 },
      { offset: 0.515625, stopColor: COLORS.color7 },
      { offset: 0.631738, stopColor: COLORS.color1 },
      { offset: 0.692708, stopColor: COLORS.color8 },
      { offset: 0.75, stopColor: COLORS.color14 },
      { offset: 0.817708, stopColor: COLORS.color9 },
      { offset: 0.869792, stopColor: COLORS.color10 },
      { offset: 1, stopColor: COLORS.color1 },
    ],
  },
  svg3: {
    gradientTransform: "translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)",
    stops: [
      { offset: 0, stopColor: COLORS.color1 },
      { offset: 0.188423, stopColor: COLORS.color2 },
      { offset: 0.307292, stopColor: COLORS.color1 },
      { offset: 0.328792, stopColor: COLORS.color4 },
      { offset: 0.328892, stopColor: COLORS.color5 },
      { offset: 0.442708, stopColor: COLORS.color15 },
      { offset: 0.537556, stopColor: COLORS.color16 },
      { offset: 0.631738, stopColor: COLORS.color1 },
      { offset: 0.725645, stopColor: COLORS.color17 },
      { offset: 0.817779, stopColor: COLORS.color9 },
      { offset: 0.84375, stopColor: COLORS.color10 },
      { offset: 0.90569, stopColor: COLORS.color1 },
      { offset: 1, stopColor: COLORS.color11 },
    ],
  },
  svg4: {
    gradientTransform: "translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)",
    stops: [
      { offset: 0.109375, stopColor: COLORS.color11 },
      { offset: 0.171875, stopColor: COLORS.color2 },
      { offset: 0.260417, stopColor: COLORS.color13 },
      { offset: 0.328792, stopColor: COLORS.color4 },
      { offset: 0.328892, stopColor: COLORS.color5 },
      { offset: 0.328992, stopColor: COLORS.color1 },
      { offset: 0.442708, stopColor: COLORS.color6 },
      { offset: 0.515625, stopColor: COLORS.color7 },
      { offset: 0.631738, stopColor: COLORS.color1 },
      { offset: 0.692708, stopColor: COLORS.color8 },
      { offset: 0.817708, stopColor: COLORS.color9 },
      { offset: 0.869792, stopColor: COLORS.color10 },
      { offset: 1, stopColor: COLORS.color11 },
    ],
  },
};

const maxStops = Math.max(...Object.values(svgStates).map((svg) => svg.stops.length));
const stopsAnimationArray = createStopsArray(svgStates, svgOrder, maxStops);
const gradientTransform = svgOrder.map(
  (svgKey) => svgStates[svgKey].gradientTransform,
);

export function AnimatedBackground() {
  const [isHovered, setHovered] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(media.matches);
    const onChange = () => setPrefersReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (prefersReduced) return null;

  const svgWidth = 1030;
  const svgHeight = 280;

  const variants = {
    hovered: {
      gradientTransform,
      transition: { duration: 50, repeat: Infinity, ease: "linear" },
    },
    notHovered: {
      gradientTransform,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={isHovered ? "hovered" : "notHovered"}
        className="absolute inset-0 scale-150"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 1030 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(120px)" }}
          aria-hidden="true"
          focusable="false"
        >
          <rect
            width={svgWidth}
            height={svgHeight}
            rx={140}
            fill="url(#paint0_radial_905_231)"
          />
          <defs>
            <motion.radialGradient
              id="paint0_radial_905_231"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
            >
              {stopsAnimationArray.map((stopConfigs, index) => (
                <motion.stop
                  key={index}
                  initial={{
                    offset: stopConfigs[0].offset,
                    stopColor: stopConfigs[0].stopColor,
                  }}
                  animate={{
                    offset: stopConfigs.map((config) => config.offset),
                    stopColor: stopConfigs.map((config) => config.stopColor),
                  }}
                  transition={{
                    duration: 0,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.radialGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}