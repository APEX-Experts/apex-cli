"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  metrics: Record<string, string>;
  image: string;
  logo?: string;
  videoUrl?: string;
  desc: string;
  features?: string[];
  ctaText?: string;
  tech: string[];
  href?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "ASKLYZE",
    client: "APEX EXPERTS",
    category: "AI INSIGHTS PLUGIN",
    metrics: { dashboards: "Native", charts: "AI-Gen", reports: "Automated" },
    image: "/images/asklyze-premium.png",
    logo: "/images/asklyze-logo.png",
    desc: "Oracle APEX plugin for AI-powered business insights. Turn natural-language questions into reports, charts, and dashboards inside Oracle APEX with zero data movement.",
    features: [
      "Fast Time to Value",
      "Natural-Language Analytics",
      "Built Inside Oracle APEX",
      "Zero Data Movement",
      "Less Effort, More Productivity",
      "Purpose-Built for Oracle APEX"
    ],
    ctaText: "Explore ASKLYZE",
    tech: ["Oracle APEX", "Oracle Database", "Natural Language", "AI Analytics"],
    href: "/projects/asklyze"
  },
  {
    id: "02",
    title: "MyQuery",
    client: "APEX EXPERTS",
    category: "AI ANALYTICS PLATFORM",
    metrics: { velocity: "Instant", sql: "Zero", integrations: "22+" },
    image: "/images/myquery-premium.png",
    logo: "/images/myquery-logo.png",
    desc: "The AI analytics platform that puts data in everyone's hands. Type a question in plain English, and get accurate reports, charts, and dashboards instantly without SQL.",
    features: [
      "Instant Decision Velocity",
      "Accessibility Without Compromise",
      "Data Team Leverage",
      "Governed Self-Service",
      "22+ Native Integrations",
      "Auto-Generated Dashboards"
    ],
    ctaText: "Explore MyQuery",
    tech: ["Natural Language", "AI Analytics", "150+ Connections"],
    href: "/projects/myquery"
  },
  {
    id: "03",
    title: "Tasto",
    client: "APEX EXPERTS",
    category: "SAAS METRICS & GROWTH",
    metrics: { mrr_sync: "Real-time", forecasts: "AI-Driven", retention: "Cohorts" },
    image: "/images/tasto-premium.png",
    logo: "/images/tasto-logo.png",
    desc: "Tasto unites analytics, forecasting, and benchmarks into one real-time view. Turn recurring revenue into a system of record with automated subscription tracking across multiple billing systems.",
    features: [
      "Unified SaaS Clarity",
      "Predictive Growth Forecasting",
      "Cohort Analysis & Retention",
      "Global Benchmarking",
      "Multi-Billing System Sync",
      "Accurate MRR Reporting"
    ],
    ctaText: "Explore Tasto",
    tech: ["Financial AI", "SaaS Analytics", "Forecasting", "Billing Integration"],
    href: "/projects/tasto"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell-lg relative overflow-hidden !bg-transparent">
      {/* Decorative Blur - Exact match from ProcessSection background */}
      <div className="apex-ambient-glow left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      {/* Header Section - Clean & Strong */}
      <div className="apex-container-wide relative z-10 mb-12 !bg-transparent lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-sinai-glow-orange" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
                06 // Selected Works
              </span>
            </div>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-normal text-white md:text-7xl lg:text-8xl">
              Engineering <br />
              <span className="text-zinc-800">Excellence.</span>
            </h2>
          </div>
          <div className="max-w-sm text-right hidden md:block">
            <p className="text-zinc-500 font-mono text-[10px] leading-relaxed tracking-widest uppercase">
              Curated selection of high-performance <br />
              AI implementations & digital systems.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Feed */}
      <div className="apex-container-wide relative z-10 space-y-12 lg:space-y-16">
        {PROJECTS.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: effectiveReduceMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10"
    >
      {/* Media Column */}
      <motion.div
        style={{ y: (isEven && !effectiveReduceMotion) ? y : 0 }}
        className={`lg:col-span-7 relative ${isEven ? "" : "lg:order-2"}`}
      >
        <Link href={project.href || "#"}>
          <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
            <ProjectMedia project={project} reduced={!!effectiveReduceMotion} />

            {/* Internal Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Subtle Technical Label */}
            <div className="absolute top-8 left-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
              <div className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
              <span className="text-[8px] font-mono text-white/60 tracking-[0.4em] uppercase">Deployment_Active // 0x{project.id}</span>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Info Column */}
      <div className={`space-y-6 lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
        <div className="space-y-6">
          {project.logo ? (
            <div className="relative mb-6 h-20 w-44">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                sizes="192px"
                className="object-contain object-left opacity-95"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-bold uppercase">{project.client}</div>
              <h3 className="text-4xl font-black tracking-normal text-white uppercase">{project.title}</h3>
            </div>
          )}

          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
            {project.desc}
          </p>
        </div>

        {/* Minimal Metrics */}
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">{key}</div>
              <div className="whitespace-nowrap font-mono text-xl font-bold tracking-normal text-white sm:text-2xl">{value}</div>
              <div className="h-0.5 w-4 bg-sinai-glow-orange/20" />
            </div>
          ))}
        </div>

        {/* Tech Stack - Clean Line */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-zinc-600 font-mono text-[9px] tracking-widest uppercase border-t border-white/5 pt-6">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div>
          <Link
            href={project.href || "#"}
            className="group relative py-4 flex items-center gap-6 overflow-hidden"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white group-hover:text-sinai-glow-orange transition-colors">
              {project.ctaText || "Explore Case Study"}
            </span>
            <div className={`h-px bg-white/10 transition-all duration-500 ${effectiveReduceMotion ? 'w-12' : 'w-12 group-hover:w-20 group-hover:bg-sinai-glow-orange'}`} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectMedia({ project, reduced }: { project: Project; reduced: boolean }) {
  if (project.videoUrl) {
    const isGif = project.videoUrl.endsWith(".gif");
    if (isGif) {
      return (
        <Image
          src={project.videoUrl}
          alt={project.title}
          fill
          unoptimized
          className={`w-full h-full object-cover opacity-80 transition-transform duration-[2000ms] ${reduced ? '' : 'group-hover:scale-105'}`}
        />
      );
    }
    return (
      <video
        src={project.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover opacity-80 transition-transform duration-[2000ms] ${reduced ? '' : 'group-hover:scale-105'}`}
      />
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover opacity-60 transition-transform duration-[2000ms] ${reduced ? '' : 'group-hover:scale-105'}`}
    />
  );
}
