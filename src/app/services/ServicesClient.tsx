"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Bot, Database, Globe, Smartphone } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    slug: "ai-automation",
    title: "AI & Process Automation",
    desc: "Revolutionizing enterprise workflows with intelligent autonomous agents and cognitive RPA architectures.",
    detailedDesc:
      "We engineer autonomous agents that can perceive, reason, and execute complex workflows without constant human intervention. Our systems connect to your core databases and analyze trends to suggest and implement adjustments in real-time.",
    tags: ["Agentic AI", "RPA", "LLM Ops"],
    icon: <Bot className="w-8 h-8" />,
    specs: { engine: "NeuralCore v4", latency: "<10ms", autonomy: "Level 5" },
  },
  {
    id: "02",
    slug: "oracle-apex",
    title: "Oracle APEX Development",
    desc: "Building mission-critical enterprise applications with database precision and low-code speed.",
    detailedDesc:
      "Leveraging the world's most advanced low-code platform to build data-centric applications that are secure, scalable, and fully integrated with your Oracle ecosystem. We specialize in complex ERP and CRM customizations.",
    tags: ["Low-Code Elite", "Database Design", "Oracle Cloud"],
    icon: <Database className="w-8 h-8" />,
    specs: { engine: "Oracle 23c", precision: "Nano", scale: "Enterprise" },
  },
  {
    id: "03",
    slug: "web-development",
    title: "Web Engineering",
    desc: "Crafting high-performance, cinematic web experiences with production-grade Next.js architectures.",
    detailedDesc:
      "Creating the intersection of high-engineering and digital art. We build scalable, motion-first web platforms that prioritize performance (100 Lighthouse scores) and user engagement through immersive design.",
    tags: ["Next.js", "GSAP", "Scalable UI"],
    icon: <Globe className="w-8 h-8" />,
    specs: { engine: "Vercel Edge", motion: "120fps", lighthouse: "100" },
  },
  {
    id: "04",
    slug: "mobile-development",
    title: "Mobile Architecture",
    desc: "Engineering premium native and cross-platform mobile apps with world-class UX/UI.",
    detailedDesc:
      "Focusing on military-grade structural integrity for mobile. We deliver high-performance iOS and Android applications with advanced security layers and seamless cross-device synchronization.",
    tags: ["iOS/Android", "React Native", "Secure Mobile"],
    icon: <Smartphone className="w-8 h-8" />,
    specs: { engine: "Native Core", security: "AES-256", sync: "Real-time" },
  },
];

export default function ServicesClient() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-sinai-bg-base pb-20 pt-28 text-white selection:bg-sinai-glow-orange selection:text-black lg:pb-24 lg:pt-32">
      {/* Background Architectural Grid (Parity with Homepage) */}
      <div className="apex-ambient-grid" />

      {/* Cinematic Ambient Glow */}
      <div className="apex-ambient-glow right-[-12rem] top-0 opacity-55" />

      <div className="apex-container-wide relative z-10">
        {/* Cinematic Page Header - Terminal Style (Parity with TerminalHero) */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-5xl space-y-6 lg:mb-20">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="h-px w-20 bg-sinai-glow-orange/30" />
              <div className="rounded-sm border border-sinai-glow-orange/25 bg-sinai-glow-orange/[0.08] px-4 py-1.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.34em] text-sinai-glow-soft">
                  SYSTEM_MANIFEST // CORE_CAPABILITIES
                </span>
              </div>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl lg:text-8xl">
              The <br />
              <span className="apex-gradient-text">Architectures.</span>
            </h1>

            <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:gap-8">
              <p className="text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
                A definitive catalog of our engineering operation units. Each
                module is designed to transform complex enterprise challenges
                into streamlined technical advantages.
              </p>
              <div className="flex flex-col items-start justify-end gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-700 md:items-end">
                <div>{"// STATUS: ALL_SYSTEMS_OPERATIONAL"}</div>
                <div>{"// LOCATION: GLOBAL_DISTRIBUTION_NODE"}</div>
                <div>{"// VERSION: 2024.1.Q2"}</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Services Grid - High Fidelity / Premium Version of Homepage Design */}
        <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
          {SERVICES.map((service) => (
            <SectionReveal key={service.id}>
              <div className="group relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Left: Metadata & ID */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center pt-4">
                  <div className="text-4xl font-black text-white/5 transition-colors duration-500 group-hover:text-sinai-glow-orange/20">
                    {service.id}
                  </div>
                  <div className="h-40 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent mt-6" />
                </div>

                {/* Center: Main Content */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] text-sinai-glow-orange shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-500 group-hover:border-sinai-glow-orange/25">
                        <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                          Capability_Module
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-normal text-white transition-colors duration-500 group-hover:text-sinai-glow-soft md:text-6xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
                      {service.detailedDesc}
                    </p>
                  </div>

                  {/* Technical Spec HUD */}
                  <div className="apex-panel grid grid-cols-1 gap-5 rounded-[1.25rem] p-6 transition-colors group-hover:border-sinai-glow-orange/20 sm:grid-cols-3">
                    {Object.entries(service.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[8px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">
                          {key}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-normal text-white">
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA & Interactive Element */}
                <div className="lg:col-span-4 lg:pt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="apex-panel apex-panel-hover group/btn relative block overflow-hidden rounded-[1.5rem] p-6 lg:p-8"
                  >
                    <div className="absolute inset-0 bg-sinai-glow-orange/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-out" />

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase font-black">
                          Initialization
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-sinai-glow-orange group-hover/btn:border-sinai-glow-orange transition-all">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-2xl font-black uppercase text-white leading-none">
                          Access Full <br /> Technical Spec
                        </div>
                        <p className="text-sm text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">
                          Retrieve deep architectural documentation and
                          deployment strategies.
                        </p>
                      </div>
                    </div>

                    {/* Technical HUD Decoration */}
                    <div className="absolute bottom-6 right-8 text-[8px] font-mono text-zinc-800 tracking-widest uppercase opacity-40">
                      SECURE_NODE_ACCESS
                    </div>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Global System Status Footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center lg:mt-20">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">
                Status
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                  ALL_SYSTEMS_NOMINAL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">
                Architecture
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                DISTRIBUTED_CORE_V2
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase hidden lg:block text-right">
            Apex_Experts_Operations_Registry
            <br />
            System_Build_Hash: 0x92AF_B122
          </div>
        </div>
      </div>

      {/* Background Particles (Parity with Home) */}
      {!effectiveReduceMotion && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: ["110vh", "-10vh"], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 12 + i * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
              className="absolute w-px h-24 bg-gradient-to-t from-transparent via-sinai-glow-orange to-transparent"
              style={{ left: `${15 * i}%` }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
