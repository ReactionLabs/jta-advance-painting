import React from "react";
import { cn } from "@/lib/utils";

// Multi-layered horizontal paint drips in logo colors
interface PaintDripsProps extends React.HTMLAttributes<HTMLDivElement> {
  flipped?: boolean; // If true, drips go upward instead of downward
}

export function PaintDrips({ flipped = false, className, ...props }: PaintDripsProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden pointer-events-none select-none leading-[0]",
        flipped ? "rotate-180" : "",
        className
      )}
      {...props}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[40px] md:min-h-[80px]"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Yellow Splats & Drips (Background) */}
        <path
          d="M0,0 L0,45 Q60,105 120,45 T240,35 T360,95 T480,25 T600,85 T720,40 T840,55 T960,105 T1080,45 T1200,35 T1320,90 T1400,40 T1440,50 L1440,0 Z"
          className="fill-logo-yellow/70"
        />

        {/* Layer 2: Orange Splats & Drips */}
        <path
          d="M0,0 L0,30 Q80,90 160,30 T320,80 T480,20 T640,70 T800,30 T960,90 T1120,25 T1280,75 T1440,40 L1440,0 Z"
          className="fill-logo-orange/80"
        />

        {/* Layer 3: Green Splats & Drips */}
        <path
          d="M0,0 L0,20 Q100,85 200,20 T400,65 T600,15 T800,75 T1000,25 T1200,80 T1400,30 T1440,35 L1440,0 Z"
          className="fill-logo-green/75"
        />

        {/* Layer 4: Purple Splats & Drips */}
        <path
          d="M0,0 L0,15 Q120,70 240,15 T480,60 T720,10 T960,70 T1200,15 T1440,45 L1440,0 Z"
          className="fill-logo-purple/90"
        />

        {/* Layer 5: Crimson Red Splats & Drips (Foreground) */}
        <path
          d="M0,0 L0,10 Q140,85 280,10 T560,50 T840,15 T1120,80 T1400,10 T1440,25 L1440,0 Z"
          className="fill-logo-red"
        />
      </svg>
    </div>
  );
}

// Organic paintbrush stroke for highlighting headings
interface PaintBrushStrokeProps extends React.SVGProps<SVGSVGElement> {
  color?: "yellow" | "red" | "purple" | "green" | "orange" | "gold";
}

export function PaintBrushStroke({ color = "gold", className, ...props }: PaintBrushStrokeProps) {
  const colorMap = {
    yellow: "fill-logo-yellow",
    red: "fill-logo-red",
    purple: "fill-logo-purple",
    green: "fill-logo-green",
    orange: "fill-logo-orange",
    gold: "fill-logo-gold",
  };

  return (
    <svg
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", colorMap[color], className)}
      preserveAspectRatio="none"
      {...props}
    >
      {/* Hand-drawn style brush stroke path */}
      <path d="M5,14 C25,7 50,19 75,11 C100,3 125,17 150,8 C175,0 200,13 225,10 C240,8 255,14 270,9 C285,4 292,10 295,12 C295,12 280,19 260,16 C235,13 210,21 185,15 C160,8 135,19 110,13 C85,6 60,17 35,12 C20,8 10,14 5,14 Z" />
    </svg>
  );
}

// Individual vector paint splatters for card or section backgrounds
interface PaintSplatterProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "yellow" | "red" | "purple" | "green" | "orange" | "gold";
  variant?: 1 | 2 | 3;
  size?: number; // size in px
}

export function PaintSplatter({
  color = "yellow",
  variant = 1,
  size = 100,
  className,
  style,
  ...props
}: PaintSplatterProps) {
  const colorMap = {
    yellow: "text-logo-yellow",
    red: "text-logo-red",
    purple: "text-logo-purple",
    green: "text-logo-green",
    orange: "text-logo-orange",
    gold: "text-logo-gold",
  };

  return (
    <div
      className={cn("pointer-events-none select-none opacity-20", colorMap[color], className)}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {variant === 1 && (
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Splash shape 1 */}
          <path d="M50,28 C62,17 76,21 72,38 C68,54 88,52 78,68 C68,84 56,73 40,79 C24,85 28,63 24,53 C20,43 36,33 50,28 Z" />
          {/* Droplets */}
          <circle cx="18" cy="22" r="3" />
          <circle cx="86" cy="33" r="2.5" />
          <circle cx="28" cy="87" r="2" />
          <circle cx="78" cy="82" r="4" />
          <circle cx="12" cy="62" r="1.5" />
          <circle cx="62" cy="12" r="3" />
        </svg>
      )}

      {variant === 2 && (
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Splash shape 2 */}
          <path d="M48,22 C68,12 62,38 78,48 C94,58 68,68 58,83 C48,98 32,78 18,73 C4,68 18,48 12,33 C6,18 28,32 48,22 Z" />
          {/* Droplets */}
          <circle cx="8" cy="12" r="2" />
          <circle cx="92" cy="18" r="3.5" />
          <circle cx="43" cy="97" r="1.5" />
          <circle cx="87" cy="87" r="2.5" />
          <circle cx="6" cy="52" r="3" />
        </svg>
      )}

      {variant === 3 && (
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Splash shape 3 - more dispersed */}
          <path d="M52,35 C60,25 72,30 80,25 C75,40 85,55 70,62 C55,70 65,85 50,80 C35,75 25,82 20,70 C15,58 30,50 32,38 C35,26 44,45 52,35 Z" />
          {/* Droplets */}
          <circle cx="95" cy="45" r="2" />
          <circle cx="5" cy="38" r="3" />
          <circle cx="58" cy="95" r="2" />
          <circle cx="18" cy="90" r="1.5" />
          <circle cx="88" cy="72" r="2.5" />
          <circle cx="45" cy="5" r="4" />
        </svg>
      )}
    </div>
  );
}
