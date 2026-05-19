"use client";

import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { useReducedMotion } from "framer-motion";

export interface ServiceImpactCardProps {
  item: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

export function ServiceImpactCard({ item }: ServiceImpactCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();
  const shouldReduceMotion = useReducedMotion();

  return (
    <li
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden flex flex-col gap-4 items-center md:items-start p-8 bg-sinai-glow-orange/2 border border-sinai-glow-orange/10 rounded-3xl w-full transition-all duration-300 hover:bg-sinai-glow-orange/[0.04] hover:border-sinai-glow-orange/20"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1200}
        opacityStart={0.15}
        opacityEnd={0.03}
        reducedMotion={shouldReduceMotion ?? false}
      />

      <div className="relative z-10 w-full flex flex-col gap-4 items-center md:items-start text-center md:text-start">
        <div className="w-12 h-12 flex items-center justify-center bg-sinai-glow-orange/8 border border-sinai-glow-orange/12 rounded-md text-sinai-glow-orange">
          {item.icon}
        </div>
        <h3 className="font-medium md:text-lg text-white leading-[23.8px] tracking-normal">
          {item.title}
        </h3>
        <p className="text-sm leading-[22.4px] tracking-normal text-zinc-400 text-center md:text-start">
          {item.description}
        </p>
      </div>
    </li>
  );
}
