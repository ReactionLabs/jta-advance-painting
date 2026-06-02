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
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[50px] md:min-h-[90px]"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Yellow Splats & Drips (Background) */}
        <path
          d="M0,0 L0,30 Q160,40 320,25 T640,35 T960,20 T1280,30 T1440,25 L1440,0 Z M 24,0 L 24,80 A 6,6 0 1 0 36,80 L 36,0 Z M 176,0 L 176,61 A 4,4 0 1 0 184,61 L 184,0 Z M 305,0 L 305,75 A 5,5 0 1 0 315,75 L 315,0 Z M 494,0 L 494,94 A 6,6 0 1 0 506,94 L 506,0 Z M 676,0 L 676,71 A 4,4 0 1 0 684,71 L 684,0 Z M 855,0 L 855,85 A 5,5 0 1 0 865,85 L 865,0 Z M 1046,0 L 1046,66 A 4,4 0 1 0 1054,66 L 1054,0 Z M 1244,0 L 1244,99 A 6,6 0 1 0 1256,99 L 1256,0 Z"
          className="fill-logo-yellow/70"
        />
        <circle cx="30" cy="100" r="4" className="fill-logo-yellow/70" />
        <circle cx="500" cy="115" r="4.5" className="fill-logo-yellow/70" />
        <circle cx="860" cy="108" r="4" className="fill-logo-yellow/70" />
        <circle cx="1250" cy="120" r="4.5" className="fill-logo-yellow/70" />

        {/* Layer 2: Orange Splats & Drips */}
        <path
          d="M0,0 L0,25 Q180,35 360,20 T720,30 T1080,15 T1440,25 L1440,0 Z M 86,0 L 86,56 A 4,4 0 1 0 94,56 L 94,0 Z M 255,0 L 255,70 A 5,5 0 1 0 265,70 L 265,0 Z M 444,0 L 444,85 A 6,6 0 1 0 456,85 L 456,0 Z M 586,0 L 586,66 A 4,4 0 1 0 594,66 L 594,0 Z M 745,0 L 745,80 A 5,5 0 1 0 755,80 L 755,0 Z M 956,0 L 956,61 A 4,4 0 1 0 964,61 L 964,0 Z M 1124,0 L 1124,90 A 6,6 0 1 0 1136,90 L 1136,0 Z M 1305,0 L 1305,75 A 5,5 0 1 0 1315,75 L 1315,0 Z"
          className="fill-logo-orange/80"
        />
        <circle cx="260" cy="90" r="3" className="fill-logo-orange/80" />
        <circle cx="450" cy="105" r="4" className="fill-logo-orange/80" />
        <circle cx="750" cy="98" r="3.5" className="fill-logo-orange/80" />
        <circle cx="1130" cy="110" r="4.5" className="fill-logo-orange/80" />

        {/* Layer 3: Green Splats & Drips */}
        <path
          d="M0,0 L0,20 Q200,30 400,15 T800,25 T1200,10 T1440,20 L1440,0 Z M 145,0 L 145,75 A 5,5 0 1 0 155,75 L 155,0 Z M 324,0 L 324,90 A 6,6 0 1 0 336,90 L 336,0 Z M 486,0 L 486,66 A 4,4 0 1 0 494,66 L 494,0 Z M 655,0 L 655,80 A 5,5 0 1 0 665,80 L 665,0 Z M 826,0 L 826,71 A 4,4 0 1 0 834,71 L 834,0 Z M 1015,0 L 1015,85 A 5,5 0 1 0 1025,85 L 1025,0 Z M 1205,0 L 1205,75 A 5,5 0 1 0 1215,75 L 1215,0 Z M 1394,0 L 1394,90 A 6,6 0 1 0 1406,90 L 1406,0 Z"
          className="fill-logo-green/75"
        />
        <circle cx="150" cy="95" r="3.5" className="fill-logo-green/75" />
        <circle cx="330" cy="110" r="4.5" className="fill-logo-green/75" />
        <circle cx="660" cy="100" r="4" className="fill-logo-green/75" />
        <circle cx="1020" cy="105" r="3.5" className="fill-logo-green/75" />
        <circle cx="1400" cy="110" r="4" className="fill-logo-green/75" />

        {/* Layer 4: Purple Splats & Drips */}
        <path
          d="M0,0 L0,15 Q220,25 440,10 T880,20 T1320,15 T1440,10 L1440,0 Z M 46,0 L 46,65 A 4,4 0 1 0 54,65 L 54,0 Z M 215,0 L 215,85 A 5,5 0 1 0 225,85 L 225,0 Z M 366,0 L 366,70 A 4,4 0 1 0 374,70 L 374,0 Z M 515,0 L 515,90 A 5,5 0 1 0 525,90 L 525,0 Z M 695,0 L 695,75 A 5,5 0 1 0 705,75 L 705,0 Z M 905,0 L 905,80 A 5,5 0 1 0 915,80 L 915,0 Z M 1074,0 L 1074,95 A 6,6 0 1 0 1086,95 L 1086,0 Z M 1276,0 L 1276,66 A 4,4 0 1 0 1284,66 L 1284,0 Z"
          className="fill-logo-purple/90"
        />
        <circle cx="50" cy="85" r="3" className="fill-logo-purple/90" />
        <circle cx="220" cy="108" r="4" className="fill-logo-purple/90" />
        <circle cx="520" cy="112" r="4.5" className="fill-logo-purple/90" />
        <circle cx="1080" cy="116" r="4" className="fill-logo-purple/90" />

        {/* Layer 5: Crimson Red Splats & Drips (Foreground) */}
        <path
          d="M0,0 L0,10 Q240,20 480,5 T960,15 T1440,10 L1440,0 Z M 95,0 L 95,90 A 6,6 0 1 0 107,90 L 107,0 Z M 275,0 L 275,75 A 5,5 0 1 0 285,75 L 285,0 Z M 414,0 L 414,100 A 6,6 0 1 0 426,100 L 426,0 Z M 615,0 L 615,80 A 5,5 0 1 0 625,80 L 625,0 Z M 774,0 L 774,95 A 6,6 0 1 0 786,95 L 786,0 Z M 975,0 L 975,70 A 5,5 0 1 0 985,70 L 985,0 Z M 1144,0 L 1144,104 A 6,6 0 1 0 1156,104 L 1156,0 Z M 1345,0 L 1345,85 A 5,5 0 1 0 1355,85 L 1355,0 Z"
          className="fill-logo-red"
        />
        <circle cx="101" cy="115" r="4.5" className="fill-logo-red" />
        <circle cx="280" cy="100" r="3.5" className="fill-logo-red" />
        <circle cx="420" cy="125" r="5" className="fill-logo-red" />
        <circle cx="780" cy="118" r="4" className="fill-logo-red" />
        <circle cx="1150" cy="130" r="4.5" className="fill-logo-red" />
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
