"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, LayoutTemplate, Network, Workflow, BrainCircuit } from "lucide-react";

const LAYERS = [
  {
    id: "data",
    name: "Data Layer",
    desc: "DBs / Reports / Datasets",
    icon: <Database className="h-5 w-5" />,
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "app",
    name: "Application Layer",
    desc: "Web Apps / APEX / Tools",
    icon: <LayoutTemplate className="h-5 w-5" />,
    color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "integration",
    name: "Integration Layer",
    desc: "APIs / ORDS / Services",
    icon: <Network className="h-5 w-5" />,
    color: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "workflow",
    name: "Workflow Layer",
    desc: "Approvals / Automation / Business Processes",
    icon: <Workflow className="h-5 w-5" />,
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
  },
  {
    id: "ai",
    name: "AI Layer",
    desc: "ASKLYZE / AI Assistants (Insights & Automation)",
    icon: <BrainCircuit className="h-5 w-5" />,
    color: "from-sinai-glow-orange/20 to-red-500/20 text-sinai-glow-orange border-sinai-glow-orange/50",
  },
];

export function SystemFlowSection() {
  return (
    <section className="section-shell relative py-24">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
          We Don’t Build Features. <span className="text-sinai-glow-soft">We Build Systems.</span>
        </h2>
        <div className="mb-6 inline-flex items-center justify-center rounded-full border border-sinai-glow-orange/20 bg-sinai-glow-orange/5 px-4 py-2 text-[10px] font-mono tracking-widest text-sinai-glow-orange uppercase">
          User → Application → API Layer → Data Sources → Response / Workflow Executi
        </div>
        <p className="text-lg text-zinc-400 font-mono tracking-widest uppercase mt-4">Our System Landscape</p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-sinai-glow-orange/20 to-sinai-glow-orange/50" />

        <div className="space-y-6">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className={`flex w-full max-w-md flex-col items-center justify-center gap-3 rounded-2xl border bg-gradient-to-br ${layer.color} p-6 backdrop-blur-md transition-transform hover:scale-105`}>
                <div className="flex items-center gap-3">
                  {layer.icon}
                  <h3 className="text-xl font-bold">{layer.name}</h3>
                </div>
                <p className="text-sm font-medium text-white/70 text-center">{layer.desc}</p>
              </div>
              {i !== LAYERS.length - 1 && (
                <div className="my-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/30 backdrop-blur-sm">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
