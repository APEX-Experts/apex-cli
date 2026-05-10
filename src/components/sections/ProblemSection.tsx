"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServerCrash, Database, Clock, Lock } from "lucide-react";

const ISSUES = [
  {
    icon: <ServerCrash className="h-6 w-6" />,
    text: "Oracle Forms systems that are end-of-life but still running core processes.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    text: "Systems operate in silos (ERP, CRM, internal tools disconnected).",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    text: "Reporting that requires manual data extraction before anyone can make a decision.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    text: "Legacy systems restrict integration and scalability.",
  },
];

const RESULTS = [
  "Legacy Oracle Forms applications blocking modernization roadmaps.",
  "Fragmented data across siloed operational systems and databases.",
  "Manual reporting cycles introducing delays in business decision-making.",
  "AI initiatives that reach proof-of-concept and never reach production.",
  "APEX environments underperforming due to poor architecture and PL/SQL debt.",
  "Mobile and field teams disconnected from core approval workflows.",
];

export function ProblemSection() {
  return (
    <section className="section-shell relative overflow-hidden py-24">
      <div className="section-label mb-12">01 // The Problem</div>
      
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: What slows them down */}
        <div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Slows Enterprise Systems Down
          </h2>
          <div className="space-y-6">
            {ISSUES.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                  {issue.icon}
                </div>
                <p className="text-lg leading-relaxed text-zinc-300">{issue.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: The result is predictable */}
        <div className="relative flex flex-col justify-center">
          <div className="absolute -inset-x-6 -inset-y-10 z-0 bg-gradient-to-b from-sinai-glow-orange/5 to-transparent blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-sinai-glow-soft">
              <span className="h-px w-8 bg-sinai-glow-orange" />
              The result is predictable ↓
            </h3>
            
            <div className="mb-8 space-y-4">
              <p className="text-xl font-medium text-white">Technical debt accumulates.</p>
              <p className="text-xl font-medium text-white">Operational teams work around broken processes.</p>
              <p className="text-xl font-medium text-white">Modernization projects stall because the risk of disruption is too high.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                {RESULTS.map((result, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-400 sm:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/50" />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
