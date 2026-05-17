import { VALUES } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

interface FactCardProps {
  val: (typeof VALUES)[0];
  index: number;
  iconComponent?: React.ReactNode;
}

export default function FactCard({ val, index, iconComponent }: FactCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col gap-4 overflow-hidden border border-transparent border-b-white/6 px-6 pt-8 pb-8 transition-all duration-300 hover:bg-white/5 hover:rounded-[20px] hover:p-4 hover:border-sinai-glow-orange sm:flex-row sm:items-start"
    >
      {/* Mouse Following Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 backdrop-blur-[48px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            1500px circle at ${position.x}px ${position.y}px,
            rgba(217,130,47,0.15),
            rgba(217,130,47,0.05) 30%,
            transparent 70%
          )`,
        }}
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
