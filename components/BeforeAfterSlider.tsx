"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  simulateBefore?: boolean; // Applies faded filter to afterImage for mock comparisons
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before paint job",
  afterAlt = "After paint job",
  className,
  simulateBefore = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  // Setup ResizeObserver to lock width of the clipped before image
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set initial width
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Drag Event Listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden select-none w-full aspect-[4/3] rounded-2xl border border-border shadow-xl bg-muted",
        className
      )}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          priority
        />
        <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow uppercase tracking-wider pointer-events-none z-20">
          After
        </span>
      </div>

      {/* Before Image (Foreground, clipped using width) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-0 left-0 h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        >
          <Image
            src={simulateBefore ? afterImage : beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-cover pointer-events-none",
              simulateBefore && "filter saturate-[0.55] brightness-[0.8] contrast-[0.9] sepia-[10%] grayscale-[20%]"
            )}
          />
        </div>
        <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow uppercase tracking-wider pointer-none z-20">
          Before
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 group"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-primary text-primary-foreground border-2 border-white flex items-center justify-center shadow-lg shadow-black/30 group-hover:scale-110 active:scale-95 transition-transform duration-200">
          <MoveHorizontal className="size-5 shrink-0" />
        </div>
      </div>
    </div>
  );
}
