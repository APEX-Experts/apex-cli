"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Terminal, Database, Layout } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    slug: "asklyze",
    title: "Asklyze",
    client: "Plugin for Oracle APEX",
    desc: "A native Oracle APEX plugin that integrates conversational AI intelligence directly into your database applications.",
    detailedDesc:
      "Asklyze is engineered specifically for the Oracle APEX ecosystem. It allows users to query complex schemas using natural language, translating intent into secure PL/SQL natively.",
    image: "/images/asklyze-premium.png",
    tags: ["Oracle APEX", "AI Plugin", "PL/SQL"],
    icon: <Terminal className="w-8 h-8" />,
    specs: {
      status: "PRODUCTION",
      deployment: "ORACLE_CLOUD",
      build: "0x7F41",
    },
  },
  {
    id: "02",
    slug: "myquery",
    title: "MyQuery",
    client: "Data Engineering Tool",
    desc: "Advanced SQL orchestration and database visualization platform for high-performance engineering teams.",
    detailedDesc:
      "Built for data engineers by data engineers. MyQuery provides a cinematic interface for managing complex Oracle and PostgreSQL clusters with unparalleled visual precision.",
    image: "/images/myquery-premium.png",
    tags: ["SQL Orchestration", "React", "Data Viz"],
    icon: <Database className="w-8 h-8" />,
    specs: { status: "ACTIVE", deployment: "VPC_ENCLOSED", build: "0x2B92" },
  },
  {
    id: "03",
    slug: "tasto",
    title: "Tasto",
    client: "E-Commerce Experience",
    desc: "A cinematic, premium e-commerce platform redefining digital retail through motion-first design.",
    detailedDesc:
      "Tasto proves that high-performance doesn't have to mean boring. We've created a sub-100ms LCP experience that maintains the visual depth of a luxury fashion editorial.",
    image: "/images/tasto-premium.png",
    tags: ["E-Commerce", "GSAP", "Performance"],
    icon: <Layout className="w-8 h-8" />,
    specs: { status: "PRODUCTION", deployment: "EDGE_CDN", build: "0x11A4" },
  },
];

export default function ProjectsClient() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-sinai-bg-base pb-20 pt-28 text-white selection:bg-sinai-glow-orange selection:text-black lg:pb-24 lg:pt-32">
      {/* Background Architectural Grid (Parity with Services/Home) */}
      <div className="apex-ambient-grid" />

      {/* Cinematic Ambient Glow */}
      <div className="apex-ambient-glow right-[-12rem] top-0 opacity-55" />

      <div className="apex-container-wide relative z-10">
        {/* Cinematic Page Header - Terminal Style (Total Parity) */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-5xl space-y-6 lg:mb-20">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="h-px w-20 bg-sinai-glow-orange/30" />
              <div className="rounded-sm border border-sinai-glow-orange/25 bg-sinai-glow-orange/[0.08] px-4 py-1.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.34em] text-sinai-glow-soft">
                  PRODUCTION_REGISTRY // DEPLOYMENT_ARCHIVE
                </span>
              </div>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl lg:text-8xl">
              The <br />
              <span className="apex-gradient-text">Deployments.</span>
            </h1>

            <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:gap-8">
              <p className="text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
                A selection of APEX Experts products and project-ready
                platforms. Each project shows the product direction, the problem
                it solves, and the systems behind it.
              </p>
              <div className="flex flex-col items-start justify-end gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-700 md:items-end md:text-right">
                <div>{"// REGISTRY_SECURE: YES"}</div>
                <div>{"// ENCRYPTION: AES_256"}</div>
                <div>{"// ACCESS_LEVEL: GLOBAL_STRATEGIC"}</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Projects Grid - Mirroring Services Page Structure Exactly */}
        <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
          {PROJECTS.map((project) => (
            <SectionReveal key={project.id}>
              <div className="group relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Left: Metadata & ID */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center pt-4">
                  <div className="text-4xl font-black text-white/5 transition-colors duration-500 group-hover:text-sinai-glow-orange/20">
                    {project.id}
                  </div>
                  <div className="h-40 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent mt-6" />
                </div>

                {/* Center: Main Content */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] text-sinai-glow-orange shadow-2xl transition-all duration-500 group-hover:border-sinai-glow-orange/40">
                        <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {project.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                          {project.client}
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-normal text-white transition-colors duration-500 group-hover:text-sinai-glow-soft md:text-6xl">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">
                      {project.detailedDesc}
                    </p>
                  </div>

                  {/* Technical Spec HUD (Mirroring Services Specs) */}
                  <div className="apex-panel grid grid-cols-1 gap-5 rounded-[1.25rem] p-6 transition-colors group-hover:border-sinai-glow-orange/20 sm:grid-cols-3">
                    {Object.entries(project.specs).map(([key, val]) => (
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
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA & Media Preview (Mirroring Services Box) */}
                <div className="lg:col-span-4 lg:pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="apex-panel apex-panel-hover group/btn relative block overflow-hidden rounded-[1.5rem]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover scale-105 group-hover/btn:scale-110 transition-transform duration-1000 brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                      {/* Scanning Line */}
                      {!effectiveReduceMotion && (
                        <motion.div
                          animate={{ top: ["-10%", "110%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute left-0 right-0 h-px bg-sinai-glow-orange/40 z-20"
                        />
                      )}
                    </div>

                    <div className="relative space-y-5 p-6 lg:p-8">
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
                          Access Project <br /> Archive
                        </div>
                        <p className="text-sm text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">
                          Explore full deployment strategy and technical
                          execution details.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Global Footer System Status */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center lg:mt-20">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">
                Status
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-green-500 ${shouldReduceMotion ? "" : "animate-pulse"}`}
                />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">
                  REGISTRY_ONLINE
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">
                Security
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                ENCRYPTED_VAULT_V4
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase hidden lg:block text-right">
            Apex_Experts_Production_Registry_Core
            <br />
            System_Build_Hash: 0x92AF_B122
          </div>
        </div>
      </div>

      {/* Background Particles Parity */}
      {!shouldReduceMotion && (
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
