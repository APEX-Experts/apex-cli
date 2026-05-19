"use client";

import React, { JSX } from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { useReducedMotion } from "framer-motion";

export interface ServiceOperationCardProps {
  subItem: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  isActive: boolean;
}

export function ServiceOperationCard({
  subItem,
  isActive,
}: ServiceOperationCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();
  const shouldReduceMotion = useReducedMotion();

  return (
    <li
      ref={ref}
      {...glowProps}
      className={`relative overflow-hidden flex-1 rounded-3xl border transition-all duration-300 ${
        isActive
          ? "border-sinai-glow-orange/50 bg-white/4"
          : "border-white/20 bg-white/2 hover:border-white/30 hover:bg-white/4"
      } p-6`}
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1800}
        opacityStart={0.15}
        opacityEnd={0.03}
        reducedMotion={shouldReduceMotion ?? false}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-9 h-9 flex items-center justify-center rounded-md border bg-sinai-glow-orange/6 border-sinai-glow-orange/10 text-sinai-glow-orange shrink-0">
          {subItem.icon}
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-start">
          <h4 className="font-medium text-white leading-[21px] tracking-normal">
            {subItem.title}
          </h4>
          <p className="text-xs md:text-sm text-zinc-400 leading-[19.5px] tracking-normal">
            {subItem.description}
          </p>
        </div>
      </div>
    </li>
  );
}
