import { VALUES } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

interface ValueCardProps {
  val: (typeof VALUES)[0];
  index: number;
  iconComponent?: React.ReactNode;
}

export default function ValueCard({
  val,
  index,
  iconComponent,
}: ValueCardProps) {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      {...glowProps}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-start sm:p-8"
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
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/3 border border-white/8 text-white/30 group-hover:text-white group-hover:border-sinai-glow-orange/40 group-hover:bg-sinai-glow-orange/10 transition-all duration-500">
          {iconComponent}
        </div>
        <div className="text-center md:text-start">
          <h3 className="mb-3 text-2xl font-bold text-white">{val.label}</h3>
          <p className="mb-2 text-sm font-medium text-sinai-glow-orange">
            {val.value}
          </p>
          <p className="text-sm text-white/50">{val.description}</p>
          <div className="separator-gradient" />
        </div>
      </div>
    </motion.div>
  );
}
