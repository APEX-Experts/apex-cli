"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Truck, MonitorSmartphone } from "lucide-react";

const USE_CASES = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Financial Operations Modernization",
    capability: "Financial Analytics Modernization",
    target: "Financial Operations Teams",
    context: "Centralized reporting across fragmented Oracle tables.",
    solution:
      "Natural language analytics dashboard with role-based data isolation.",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Healthcare Legacy Transformation",
    capability: "Legacy System Migration",
    target: "Healthcare Organizations",
    context: "Replace end-of-life Oracle Forms infrastructure.",
    solution:
      "Full APEX migration preserving 15+ years of business logic with zero disruption.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Logistics Field Enablement",
    capability: "Field Operations Enablement",
    target: "Logistics Companies",
    context: "Offline/remote approval processing for field teams.",
    solution: "Mobile workflow application synced with APEX backend.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8" />,
    title: "Enterprise Systems Unification",
    capability: "Unified Enterprise Operations",
    target: "SaaS / Enterprise Platforms",
    context: "Fragmented CRM, billing, and project tools.",
    solution:
      "Unified operational portal with granular role-based access control.",
  },
];

interface UseCaseCardProps {
  uc: (typeof USE_CASES)[0];
  index: number;
}

function UseCaseCard({ uc, index }: UseCaseCardProps) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between items-center md:items-start overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-8 transition-colors hover:bg-white/4"
    >
      {/* Mouse Following Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 backdrop-blur-[48px] transition-opacity duration-300"
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

      <div className="relative z-10 flex h-full flex-col justify-between items-center md:items-start">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border text-zinc-400 group-hover:text-white transition-colors duration-500">
            {uc.icon}
          </div>
        </div>

        <div className="space-y-4 text-center md:text-start">
          <h3 className="text-2xl font-bold text-white">{uc.title}</h3>
          <div className="space-y-2">
            <div className="text-sm text-zinc-400 group-hover:text-white flex flex-col gap-2">
              <strong>Capability:</strong>
              <span>{uc.capability}</span>
            </div>
            <div className="text-sm text-zinc-400 group-hover:text-white flex flex-col gap-2">
              <strong>Target:</strong>
              <span>{uc.target}</span>
            </div>
            <div className="text-sm text-zinc-400 group-hover:text-white flex flex-col gap-2">
              <strong>Business Context:</strong>
              <span>{uc.context}</span>
            </div>
            <div className="text-sm text-sinai-glow-orange mt-4">
              <span>{uc.solution}</span>
            </div>
            <div className="separator-gradient" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function UseCasesSection() {
  return (
    <section className="section-shell relative py-8 md:py-24">
      <div className="section-label mb-12">03 // Use Cases</div>

      <div className="mb-16 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-center md:text-start">
          Real-World <span className="text-sinai-glow-orange">Use Cases</span>
        </h2>
        <p className="text-base md:text-xl text-zinc-400 text-center md:text-start">
          Where We Drive Transformation Across Critical Enterprise Workflows
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {USE_CASES.map((uc, i) => (
          <UseCaseCard key={i} uc={uc} index={i} />
        ))}
      </div>
    </section>
  );
}
