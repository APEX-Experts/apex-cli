"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface MouseGlowProps {
  x: number;
  y: number;
  isHovered: boolean;
  radius?: number;
  color?: string; // e.g. "217, 130, 47"
  opacityStart?: number;
  opacityEnd?: number;
  reducedMotion?: boolean;
  className?: string;
}

export function MouseGlow({
  x,
  y,
  isHovered,
  radius = 1000,
  color = "217, 130, 47", // Signature Sinai glow orange
  opacityStart = 0.12,
  opacityEnd = 0.04,
  reducedMotion = false,
  className = "",
}: MouseGlowProps) {
  if (reducedMotion) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500",
        className
      )}
      style={{
        opacity: isHovered ? 1 : 0,
        background: `radial-gradient(
          ${radius}px circle at ${x}px ${y}px,
          rgba(${color}, ${opacityStart}),
          rgba(${color}, ${opacityEnd}) 30%,
          transparent 70%
        )`,
      }}
    />
  );
}
