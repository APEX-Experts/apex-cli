"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProductionSystemIcon } from "@/components/Icons";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

import { ProductionSystem } from "@/constants";

interface ProductionSystemCardProps {
  system: ProductionSystem;
  index: number;
  reducedMotion: boolean;
}

export function ProductionSystemCard({
  system,
  index,
  reducedMotion,
}: ProductionSystemCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLAnchorElement>();

  return (
    <motion.a
      href={system.href}
      target="_blank"
      ref={ref}
      {...glowProps}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reducedMotion ? {} : { y: -8 }}
      className="group relative flex flex-col justify-between max-md:text-center min-h-[350px] gap-[10px] overflow-hidden rounded-[24px] border border-white/8 bg-[#FFFFFF1A] p-[34px] shadow-[0px_25px_50px_-12px_#00000040] backdrop-blur-xl transition-all duration-500 hover:border-t-[#D9822F80]"
    >
      {/* Mouse Following Glow */}
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={800}
        opacityStart={0.15}
        opacityEnd={0.05}
        reducedMotion={reducedMotion}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between max-md:items-center gap-4">
        {/* Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-sinai-glow-orange/30 group-hover:bg-sinai-glow-orange/5 transition-all duration-500">
          <ProductionSystemIcon
            index={index}
            className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-500"
          />
        </div>

        {/* Telemetry/Badge */}
        <span className="w-fit rounded-[10px] border border-sinai-glow-orange/20 bg-sinai-glow-orange/10 text-sinai-glow-orange py-[7px] px-2.5 font-medium text-sm tracking-[1.65px] uppercase">
          {system.badge}
        </span>

        {/* Title */}
        <h3 className="font-bold text-[32px] tracking-[-0.75px] text-white/90 transition-colors duration-500">
          {system.title}
        </h3>
        {/* Description */}
        <p className="text-white/60 leading-[27.2px] tracking-normal group-hover:text-white transition-colors duration-500">
          {system.description}
        </p>
        <div className="w-full h-px bg-white/5" />
        {/* Spec Footer */}
        <span className="text-sm leading-[23.8px] tracking-normal group-hover:text-sinai-glow-orange text-white/50 transition-colors duration-500">
          {system.feature}
        </span>
        <div className="separator-gradient" />
      </div>
    </motion.a>
  );
}
