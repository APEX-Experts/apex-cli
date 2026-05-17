import { VALUES } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

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
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-start sm:p-8"
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
