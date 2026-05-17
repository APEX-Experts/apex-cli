"use client";

import React from "react";
import { motion } from "framer-motion";
import { SystemsWeBuildIcon } from "@/components/Icons";

interface SystemItem {
  supertitle: string;
  title: string;
  description: string;
}

interface EngineeringDomainCardProps {
  system: SystemItem;
  index: number;
  reducedMotion: boolean;
}

export function EngineeringDomainCard({
  system,
  index,
  reducedMotion,
}: EngineeringDomainCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 + idx * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // Here we want the bottom color
      className="group relative p-4 border-b border-white/5 hover:border-white/50 hover:border-t hover:border-r hover:border-l hover:rounded-[20px] transition-all duration-500"
    >
      {/* Card Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* First Column: Icon + Titles */}
        <div className="flex items-center gap-4">
          {/* Icon Sub-column */}
          <div className="flex items-center justify-center shrink-0 w-[46.13px] h-[46.13px] rounded-[14px] bg-[#FFFFFF05] border-[0.5px] border-[#FFFFFF80] text-[#FFFFFF80] group-hover:text-white group-hover:border-white transition-all duration-500">
            <SystemsWeBuildIcon index={index} width={22} height={22} />
          </div>

          {/* Supertitle and Title Sub-column */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] leading-[16px] tracking-[1.8px] uppercase text-white/30 group-hover:text-white/80 transition-all duration-500">
              {system.supertitle}
            </span>
            <h3 className="font-semibold text-[20px] leading-[28px] tracking-[-0.5px] text-white/30 group-hover:text-white transition-all duration-500">
              {system.title}
            </h3>
          </div>
        </div>

        {/* Second Column: Description */}
        <div>
          <p className="text-[16px] leading-[28.8px] tracking-[0px] text-white/25 group-hover:text-white/50 transition-all duration-500">
            {system.description}
          </p>
        </div>
      </div>

      {/* Separator Gradient */}
      <div className="separator-gradient w-full! max-w-3xl! mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
