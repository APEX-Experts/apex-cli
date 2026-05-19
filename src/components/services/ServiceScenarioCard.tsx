"use client";

import React, { JSX } from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { useReducedMotion } from "framer-motion";

export interface ServiceScenarioCardProps {
  item: {
    icon: JSX.Element;
    title: string;
    desc: string;
    badges: {
      icon: JSX.Element;
      text: string;
    }[];
  };
}

export function ServiceScenarioCard({ item }: ServiceScenarioCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();
  const shouldReduceMotion = useReducedMotion();

  return (
    <li
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden w-full flex flex-col items-center md:items-start rounded-3xl border bg-white/3 border-white/10 hover:bg-sinai-glow-orange/3 hover:border-sinai-glow-orange/50 p-5 transition-all duration-500"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1800}
        opacityStart={0.09}
        opacityEnd={0.03}
        reducedMotion={shouldReduceMotion ?? false}
      />
      <div className="relative z-10 w-full flex flex-col items-center md:items-start gap-2.5">
        <div className="flex flex-col md:flex-row w-full justify-between gap-6 items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-md p-3 bg-sinai-glow-orange/8 border-sinai-glow-orange/15 text-sinai-glow-orange">
            {item.icon}
          </div>
          <div className="flex flex-row gap-3 items-center">
            {item.badges.map((badge, badgeIndex) => (
              <div
                key={badgeIndex}
                className="rounded-md border py-1 px-2.5 bg-sinai-glow-orange/6 border-sinai-glow-orange/12 text-sinai-glow-orange"
              >
                <span className="flex items-center gap-1 text-xs md:text-[9px] font-medium leading-[13.5px] tracking-[0.72px] uppercase text-sinai-glow-orange">
                  {badge.icon}
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <h3 className="font-medium md:text-[19px] md:leading-[24.7px] tracking-normal text-white text-center md:text-start">
          {item.title}
        </h3>
        <p className="text-sm leading-[23.8px] tracking-normal text-zinc-400 text-center md:text-start">
          {item.desc}
        </p>
        <div className="separator-gradient w-[70%]!" />
      </div>
    </li>
  );
}
