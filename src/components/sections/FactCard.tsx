import { VALUES } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

interface FactCardProps {
  val: (typeof VALUES)[0];
  index: number;
  iconComponent?: React.ReactNode;
}

export default function FactCard({ val, index, iconComponent }: FactCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      {...glowProps}
      className="group relative flex flex-col gap-4 overflow-hidden border border-transparent border-b-white/6 px-6 pt-8 pb-8 transition-all duration-300 hover:bg-white/5 hover:rounded-[20px] hover:p-4 hover:border-sinai-glow-orange sm:flex-row sm:items-start"
    >
      {/* Mouse Following Glow */}
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={1500}
        opacityStart={0.15}
        opacityEnd={0.05}
      />

      <div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row items-center md:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/2 border border-white/6 text-white/30 group-hover:text-white group-hover:border-sinai-glow-orange/40 group-hover:bg-sinai-glow-orange transition-all duration-500">
          {iconComponent}
        </div>
        <div className="text-center md:text-start">
          <h3 className="mb-3 text-[11px] group-hover:text-sm tracking-[1.65px] uppercase text-white/70 transition-all duration-500">
            {val.label}
          </h3>
          <p className="mb-2 font-semibold text-2xl tracking-[-0.6px] text-white/90 transition-all duration-500">
            {val.value}
          </p>
          <p className="text-sm leading-[23.8px] text-white/40 group-hover:text-sinai-glow-orange transition-all duration-500">
            {val.description}
          </p>
          <div className="hidden group-hover:block separator-gradient w-full" />
        </div>
      </div>
    </motion.div>
  );
}
