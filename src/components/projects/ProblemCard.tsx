"use client";

import React from "react";
import { TriangleAlert } from "lucide-react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

export interface ProblemCardProps {
  supertitle: string;
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export function ProblemCard({ supertitle, title, items }: ProblemCardProps) {
  const { ref, position, isHovered, glowProps } =
    useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...glowProps}
      className="group relative rounded-2xl border border-white/20 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-sinai-glow-orange/30 bg-[linear-gradient(135deg,rgba(217,130,47,0.08)_0%,rgba(217,130,47,0.05)_50%,rgba(0,0,0,0)_100%)] backdrop-blur-xs"
    >
      {/* Mouse Following Glow */}
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1200}
      />

      <div className="relative z-10">
        <div className="flex flex-row gap-3 items-center mb-6">
          <div className="rounded-xl w-12 h-12 flex items-center justify-center bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange/80 group-hover:bg-sinai-glow-orange group-hover:text-white transition-all duration-500">
            <TriangleAlert className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium uppercase text-sm md:text-xs leading-[16px] tracking-[0.6px] text-white/40 group-hover:text-white/60 transition-colors duration-500">
              {supertitle}
            </span>
            <h3 className="text-white/90 font-semibold text-xl md:text-2xl leading-[32px] tracking-[-0.6px] group-hover:text-white transition-colors duration-500">
              {title}
            </h3>
          </div>
        </div>

        <div className="separator-gradient w-full! mb-8" />

        <ul className="flex flex-col gap-6">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col gap-1.5">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange shrink-0" />
                <span className="font-medium leading-[24px] tracking-normal text-white/90 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </span>
              </div>
              <p className="pl-4 text-sm text-white/40 leading-[22.75px] tracking-normal group-hover:text-white/60 transition-colors duration-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
