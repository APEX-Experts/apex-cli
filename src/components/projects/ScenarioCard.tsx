"use client";

import React, { JSX } from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

export interface ScenarioCardProps {
  scenario: {
    icon: JSX.Element;
    title: string;
    badge: string;
    challenge: string;
    solutionTitle: string;
    solutionDescription: string;
  };
}

export function ScenarioCard({ scenario }: ScenarioCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();

  return (
    <li
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden rounded-2xl w-full border border-white/10 hover:border-sinai-glow-orange/10 bg-white/2 hover:bg-sinai-glow-orange/2 p-8 md:p-10 transition-all duration-500"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={3000}
        opacityStart={0.1}
        opacityEnd={0.03}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-6 md:col-span-1">
          <div className="w-12 h-12 bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange flex items-center justify-center rounded-[14px]">
            {scenario.icon}
          </div>
          <h3 className="font-semibold text-lg md:text-xl md:leading-[28px] tracking-[-0.5px] text-white/90 text-center md:text-start">
            {scenario.title}
          </h3>
          <span className="w-fit bg-sinai-glow-orange/8 border border-sinai-glow-orange/12 rounded-lg text-center px-2 py-1 font-medium text-white/50 text-sm md:text-xs leading-4 tracking-normal ">
            {scenario.badge}
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-5 md:col-span-3">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-start">
            <div className="flex flex-row gap-2 items-center">
              <span className="w-1 h-1 bg-sinai-glow-orange/50 rounded-full"></span>
              <span className="uppercase text-sm md:text-xs font-medium leading-4 tracking-[0.6px] text-white/40 ">
                Challenge
              </span>
            </div>
            <p className="pl-3 text-white/50">{scenario.challenge}</p>
          </div>
          <div className="separator-gradient w-full! mb-2" />
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-start">
            <div className="flex flex-row gap-2 items-center">
              <span className="w-1 h-1 bg-sinai-glow-orange rounded-full"></span>
              <span className="uppercase text-sm md:text-xs font-medium leading-4 tracking-[0.6px] text-sinai-glow-orange/80 ">
                Solution
              </span>
            </div>
            <p className="pl-3 text-white/60 font-medium leading-[26px]">
              {scenario.solutionTitle}
            </p>
            <p className="pl-3 text-white/50 text-sm leading-[22.75px]">
              {scenario.solutionDescription}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
