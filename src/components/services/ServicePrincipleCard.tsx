"use client";

import React, { JSX } from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { useReducedMotion } from "framer-motion";

export interface ServicePrincipleCardProps {
  item: {
    icon: JSX.Element;
    title: string;
    desc: string;
  };
}

export function ServicePrincipleCard({ item }: ServicePrincipleCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();
  const shouldReduceMotion = useReducedMotion();

  return (
    <li
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden h-full flex flex-col items-center lg:items-start rounded-3xl bg-white/3 border border-white/15 hover:bg-sinai-glow-orange/3 hover:border-sinai-glow-orange/15 transition-all duration-500 p-6 gap-5"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1500}
        opacityStart={0.09}
        opacityEnd={0.03}
        reducedMotion={shouldReduceMotion ?? false}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center lg:items-start gap-5">
        <div className="flex items-center justify-center rounded-md bg-sinai-glow-orange/8 border-sinai-glow-orange/15 text-sinai-glow-orange p-2.5 border">
          {item.icon}
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-3 mb-4">
          <h3 className="text-white font-medium text-[15px] leading-[19.5px] tracking-normal">
            {item.title}
          </h3>
          <p className="text-xs text-zinc-400 leading-[19.2px] tracking-normal">
            {item.desc}
          </p>
        </div>
        <div className="separator-gradient w-[60%]! mt-auto!" />
      </div>
    </li>
  );
}
