"use client";

import React, { useState } from "react";
import { Paintbrush, Home, Layout, Undo2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Premium color palettes matching logo colors and home decor trends
const PAINT_COLORS = [
  { name: "Tampa Gold", hex: "#F6B01B", description: "Warm, welcoming, and energetic gold" },
  { name: "Classic Crimson", hex: "#E62325", description: "Bold accent red for doors and details" },
  { name: "Riverview Indigo", hex: "#2563EB", description: "Deep, soothing coastal blue" },
  { name: "Wesley Green", hex: "#00A651", description: "Fresh, earthy natural emerald" },
  { name: "Royal Violet", hex: "#6F2D91", description: "Creative and rich brand plum" },
  { name: "Tampa Bay Teal", hex: "#0D9488", description: "Vibrant beachside teal/cyan" },
  { name: "Modern Charcoal", hex: "#334155", description: "Sleek and modern dark neutral" },
  { name: "Earthy Greige", hex: "#A8A29E", description: "Elegant, soft warm gray" },
  { name: "Alabaster White", hex: "#F8FAFC", description: "Clean, crisp premium off-white" },
];

export default function ColorVisualizer() {
  const [activeScene, setActiveScene] = useState<"interior" | "exterior">("interior");
  const [selectedColor, setSelectedColor] = useState(PAINT_COLORS[6]); // Modern Charcoal default
  const [doorColor, setDoorColor] = useState(PAINT_COLORS[1]); // Crimson default for front door
  const [paintTarget, setPaintTarget] = useState<"walls" | "door">("walls");

  const resetColors = () => {
    setSelectedColor(PAINT_COLORS[6]);
    setDoorColor(PAINT_COLORS[1]);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid lg:grid-cols-12">
        {/* Visualizer Canvas Area (Left) */}
        <div className="lg:col-span-8 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950/50 min-h-[450px]">
          {/* Top Canvas Toolbar */}
          <div className="flex items-center justify-between gap-4 pb-4">
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
              <button
                onClick={() => {
                  setActiveScene("interior");
                  setPaintTarget("walls");
                }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  activeScene === "interior"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Layout className="size-3.5" />
                <span>Living Room</span>
              </button>
              <button
                onClick={() => {
                  setActiveScene("exterior");
                  setPaintTarget("walls");
                }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  activeScene === "exterior"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Home className="size-3.5" />
                <span>House Exterior</span>
              </button>
            </div>

            <button
              onClick={resetColors}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800"
            >
              <Undo2 className="size-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Interactive Room SVG Display */}
          <div className="relative flex-1 w-full max-w-xl mx-auto flex items-center justify-center py-4 select-none">
            {activeScene === "interior" ? (
              /* Scene 1: Modern Living Room SVG */
              <svg viewBox="0 0 400 300" className="w-full h-auto rounded-2xl shadow-inner border border-slate-800 bg-slate-900 overflow-hidden">
                {/* Ceiling */}
                <polygon points="0,0 400,0 330,40 70,40" fill="#1E293B" />
                
                {/* Floor */}
                <polygon points="70,230 330,230 400,300 0,300" fill="#475569" />
                
                {/* Left Wall (Accent Wall) */}
                <polygon
                  points="0,0 70,40 70,230 0,300"
                  fill={selectedColor.hex}
                  className="transition-colors duration-500 cursor-pointer hover:brightness-105"
                  onClick={() => setPaintTarget("walls")}
                />
                
                {/* Back Wall */}
                <polygon
                  points="70,40 330,40 330,230 70,230"
                  fill={selectedColor.hex}
                  filter="brightness(0.92)"
                  className="transition-colors duration-500 cursor-pointer hover:brightness-95"
                  onClick={() => setPaintTarget("walls")}
                />
                
                {/* Right Wall */}
                <polygon points="330,40 400,0 400,300 330,230" fill="#1E293B" filter="brightness(0.85)" />

                {/* Perspective lines for depth */}
                <line x1="0" y1="0" x2="70" y2="40" stroke="#0F172A" strokeWidth="1" />
                <line x1="400" y1="0" x2="330" y2="40" stroke="#0F172A" strokeWidth="1" />
                <line x1="0" y1="300" x2="70" y2="230" stroke="#0F172A" strokeWidth="1" />
                <line x1="400" y1="300" x2="330" y2="230" stroke="#0F172A" strokeWidth="1" />

                {/* Window on Right Wall */}
                <polygon points="350,80 380,60 380,190 350,180" fill="#0F172A" />
                <polygon points="353,84 377,66 377,184 353,176" fill="#64748B" opacity="0.3" />

                {/* Picture Frame on Back Wall */}
                <rect x="160" y="70" width="80" height="50" rx="2" fill="#0F172A" />
                <rect x="164" y="74" width="72" height="42" rx="1" fill="#334155" />
                {/* Graphic in picture */}
                <path d="M170,110 L195,90 L210,102 L225,95 L236,110 Z" fill="#475569" />
                <circle cx="215" cy="85" r="4" fill="#F6B01B" />

                {/* Sofa against back wall */}
                {/* Sofa Shadow */}
                <ellipse cx="200" cy="235" rx="90" ry="8" fill="#0F172A" opacity="0.6" />
                {/* Sofa base */}
                <rect x="115" y="170" width="170" height="55" rx="6" fill="#F8FAFC" />
                {/* Sofa cushions */}
                <rect x="125" y="175" width="72" height="35" rx="3" fill="#E2E8F0" />
                <rect x="203" y="175" width="72" height="35" rx="3" fill="#E2E8F0" />
                {/* Sofa armrests */}
                <rect x="110" y="165" width="15" height="55" rx="4" fill="#CBD5E1" />
                <rect x="275" y="165" width="15" height="55" rx="4" fill="#CBD5E1" />
                {/* Sofa legs */}
                <rect x="120" y="225" width="8" height="8" fill="#0F172A" />
                <rect x="272" y="225" width="8" height="8" fill="#0F172A" />

                {/* Corner Plant */}
                {/* Pot */}
                <polygon points="80,245 92,245 90,225 82,225" fill="#B45309" />
                {/* Leaves */}
                <path d="M86,225 C82,210 70,205 75,200 C80,195 86,210 86,225 Z" fill="#15803D" />
                <path d="M86,225 C90,210 102,205 97,200 C92,195 86,210 86,225 Z" fill="#166534" />
                <path d="M86,225 C86,200 80,190 86,185 C92,190 86,200 86,225 Z" fill="#1E3A8A" opacity="0.1" />
                <path d="M86,225 C86,200 86,190 86,185 C86,190 86,200 86,225 Z" fill="#14532D" />
              </svg>
            ) : (
              /* Scene 2: House Exterior SVG */
              <svg viewBox="0 0 400 300" className="w-full h-auto rounded-2xl shadow-inner border border-slate-800 bg-slate-900 overflow-hidden">
                {/* Sky */}
                <rect x="0" y="0" width="400" height="300" fill="#0F172A" />
                
                {/* Ground / Grass */}
                <rect x="0" y="210" width="400" height="90" fill="#1E293B" />
                {/* Path */}
                <polygon points="180,210 220,210 260,300 140,300" fill="#334155" />

                {/* Siding / Siding Wall (Accent Paint Target) */}
                <polygon
                  points="90,210 310,210 310,120 200,60 90,120"
                  fill={selectedColor.hex}
                  className="transition-colors duration-500 cursor-pointer hover:brightness-105"
                  onClick={() => setPaintTarget("walls")}
                />

                {/* Roof */}
                <polygon points="80,125 200,50 320,125 310,120 200,60 90,120" fill="#1E293B" />

                {/* Door Frame */}
                <rect x="180" y="145" width="40" height="65" fill="#E2E8F0" />
                {/* Door (Accent Paint Target 2) */}
                <rect
                  x="184"
                  y="149"
                  width="32"
                  height="61"
                  fill={doorColor.hex}
                  className="transition-colors duration-500 cursor-pointer hover:brightness-110"
                  onClick={() => setPaintTarget("door")}
                />
                {/* Door knob */}
                <circle cx="210" cy="180" r="2" fill="#F59E0B" />

                {/* Window Left */}
                <rect x="115" y="145" width="45" height="40" rx="2" fill="#475569" />
                <rect x="118" y="148" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="140" y="148" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="118" y="167" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="140" y="167" width="18" height="15" fill="#64748B" opacity="0.3" />

                {/* Window Right */}
                <rect x="240" y="145" width="45" height="40" rx="2" fill="#475569" />
                <rect x="243" y="148" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="265" y="148" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="243" y="167" width="18" height="15" fill="#64748B" opacity="0.3" />
                <rect x="265" y="167" width="18" height="15" fill="#64748B" opacity="0.3" />

                {/* Attic Window (Triangle/Circle) */}
                <circle cx="200" cy="95" r="12" fill="#475569" />
                <circle cx="200" cy="95" r="9" fill="#0F172A" />
                <line x1="200" y1="83" x2="200" y2="107" stroke="#475569" strokeWidth="1.5" />
                <line x1="188" y1="95" x2="212" y2="95" stroke="#475569" strokeWidth="1.5" />

                {/* Flower bush left */}
                <ellipse cx="80" cy="215" rx="15" ry="10" fill="#15803D" />
                <ellipse cx="92" cy="215" rx="12" ry="8" fill="#166534" />
                {/* Flower bush right */}
                <ellipse cx="310" cy="215" rx="15" ry="10" fill="#15803D" />
                <ellipse cx="322" cy="215" rx="12" ry="8" fill="#166534" />
              </svg>
            )}
          </div>

          {/* Bottom Selected Indicator Info */}
          <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5">
            <div className="flex items-center gap-2">
              <Paintbrush className="size-4 text-primary animate-pulse" />
              <span>
                Click on the <strong className="text-white">{paintTarget === "walls" ? "Walls/Siding" : "Front Door"}</strong> in the image to paint
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-white">
              <span
                className="size-3.5 rounded-full border border-slate-700"
                style={{ backgroundColor: paintTarget === "walls" ? selectedColor.hex : doorColor.hex }}
              />
              <span>{paintTarget === "walls" ? selectedColor.name : doorColor.name}</span>
            </div>
          </div>
        </div>

        {/* Visualizer Control Panel (Right) */}
        <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-slate-900/60">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Paintbrush className="size-4.5 text-primary" />
                <span>Color Palette Swatches</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Choose a premium coat color for the surface
              </p>
            </div>

            {/* Target Selector Tabs (For exterior) */}
            {activeScene === "exterior" && (
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setPaintTarget("walls")}
                  className={cn(
                    "flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition-all",
                    paintTarget === "walls"
                      ? "bg-slate-800 text-white border border-slate-700 shadow"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  Siding Slabs
                </button>
                <button
                  onClick={() => setPaintTarget("door")}
                  className={cn(
                    "flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition-all",
                    paintTarget === "door"
                      ? "bg-slate-800 text-white border border-slate-700 shadow"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  Front Door
                </button>
              </div>
            )}

            {/* Swatches Grid */}
            <div className="grid grid-cols-3 gap-3">
              {PAINT_COLORS.map((color) => {
                const isSelected =
                  paintTarget === "walls"
                    ? selectedColor.name === color.name
                    : doorColor.name === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => {
                      if (paintTarget === "walls") {
                        setSelectedColor(color);
                      } else {
                        setDoorColor(color);
                      }
                    }}
                    className="flex flex-col items-center gap-1.5 p-1 rounded-xl border border-transparent hover:border-slate-700 hover:bg-slate-800/40 transition-all group"
                  >
                    <div
                      className="size-11 rounded-full relative flex items-center justify-center shadow-inner border border-slate-750 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 size-full flex items-center justify-center rounded-full bg-black/35 backdrop-blur-xs text-white">
                          <Check className="size-5" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-center font-medium text-slate-300 w-full truncate px-0.5 group-hover:text-white">
                      {color.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color description card at bottom */}
          <div className="mt-8 p-4 bg-slate-950/80 border border-slate-850 rounded-2xl">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Selected: {paintTarget === "walls" ? selectedColor.name : doorColor.name}
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {paintTarget === "walls" ? selectedColor.description : doorColor.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary uppercase tracking-widest">
              <span>Sherwin-Williams / Benjamin Moore alternative available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
