"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Truck, MonitorSmartphone } from "lucide-react";

const USE_CASES = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Financial Operations Modernization",
    domain: "Financial Operations Teams",
    need: "Centralized reporting across fragmented Oracle tables.",
    solution: "Natural language analytics dashboard with role-based data isolation.",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Healthcare Legacy Transformation",
    domain: "Healthcare Organizations",
    need: "Replace end-of-life Oracle Forms infrastructure.",
    solution: "Full APEX migration preserving 15+ years of business logic with zero disruption.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Logistics Field Enablement",
    domain: "Logistics Companies",
    need: "Offline/remote approval processing for field teams.",
    solution: "Mobile workflow application synced with APEX backend.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8" />,
    title: "Enterprise Systems Unification",
    domain: "SaaS / Enterprise Platforms",
    need: "Fragmented CRM, billing, and project tools.",
    solution: "Unified operational portal with granular role-based access control.",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-shell relative py-24">
      <div className="section-label mb-12">03 // Use Cases</div>
      
      <div className="mb-16 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Real-World Use Cases
        </h2>
        <p className="text-xl text-zinc-400">
          Where We Drive Transformation Across Critical Enterprise Workflows
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {USE_CASES.map((uc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sinai-glow-orange/10 text-sinai-glow-orange group-hover:bg-sinai-glow-orange group-hover:text-white transition-colors duration-500">
                {uc.icon}
              </div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                {uc.domain}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{uc.title}</h3>
              <div className="space-y-2">
                <p className="text-sm text-zinc-400"><strong className="text-zinc-300">Context:</strong> {uc.need}</p>
                <p className="text-sm text-sinai-glow-soft"><strong className="text-sinai-glow-orange">Solution:</strong> {uc.solution}</p>
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 bg-sinai-glow-orange/10 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
