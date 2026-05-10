"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "AI Integration Services",
    desc: "We embed AI natively into workflows, databases, and APEX environments. ASKLYZE delivers natural language reporting directly inside Oracle APEX. Implementations are governed by role-based access controls and strict data permissions.",
    tags: ["Agentic AI", "RPA", "Workflow Optimization"],
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.circle cx="12" cy="12" r="9" stroke="url(#grad1)" strokeWidth="1.5" animate={reduced ? {} : { rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} strokeDasharray="4 4" />
          <motion.circle cx="12" cy="12" r="5" stroke="url(#grad1)" strokeWidth="2" animate={reduced ? {} : { scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#8A3B13" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-sinai-glow-orange/20 blur-xl rounded-full" />
      </div>
    ),
    diagram: (reduced: boolean) => (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeDasharray="5 5" fill="none" />
          <motion.path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" animate={reduced ? {} : { rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>
    )
  },
  {
    id: "02",
    title: "Oracle APEX Services",
    desc: "We build and optimize Oracle APEX applications for internal operations, data entry, approvals, reporting, and Oracle Forms migration. Every implementation is architected for performance, security, and long-term maintainability.",
    tags: ["Low-Code Elite", "Database Design", "Oracle Cloud"],
    icon: (reduced: boolean) => (
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(242,162,75,0.2)]">
          {/* Ruler (Back Layer) - Top-Left to Bottom-Right (\) - THICKER */}
          <path
            d="M5.5 2.5 L2.5 5.5 L18.5 21.5 L21.5 18.5 Z"
            fill="url(#apexGradRuler)"
          />
          {/* Ruler Hole */}
          <circle cx="6.5" cy="6.5" r="1.5" fill="#000" fillOpacity="0.4" />
          {/* Ticks */}
          <line x1="10" y1="10" x2="12" y2="8" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="13" y1="13" x2="15" y2="11" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="16" y1="16" x2="18" y2="14" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />

          {/* Pencil (Front Layer) - Bottom-Left to Top-Right (/) - THICKER */}
          <motion.g
            animate={reduced ? {} : {
              y: [-0.5, 0.5, -0.5],
              rotate: [-1, 1, -1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Pencil Body */}
            <path d="M5.5 21.5 L2.5 18.5 L18.5 2.5 L21.5 5.5 Z" fill="url(#apexGradPencil)" />
            {/* Eraser End at Top-Right */}
            <path d="M18.5 2.5 L21.5 5.5 L23.5 3.5 L20.5 0.5 Z" fill="#FF5252" />
            {/* Metal Ring */}
            <path d="M17 4 L18 3 L20.5 5.5 L19.5 6.5 Z" fill="#C0C0C0" />
            {/* Wood Tip at Bottom-Left */}
            <path d="M5.5 21.5 L2.5 18.5 L0.5 23.5 Z" fill="#E8C39E" />
            {/* Graphite Lead at Bottom-Left */}
            <path d="M2 21 L0.5 23.5 L3 23.5 Z" fill="#333" />
          </motion.g>

          <defs>
            <linearGradient id="apexGradRuler" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#FFCC33" />
            </linearGradient>
            <linearGradient id="apexGradPencil" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2196F3" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    diagram: (reduced: boolean) => (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {[...Array(5)].map((_, i) => (
            <motion.rect key={i} x={40} y={40 + i * 25} width={120} height={15} stroke="currentColor" fill="none" animate={reduced ? {} : { x: [40, 50, 40] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
          ))}
        </svg>
      </div>
    )
  },
  {
    id: "03",
    title: "Web Development",
    desc: "We engineer robust web systems for SaaS platforms, client portals, and high-density operational dashboards. Deep integration with CRM, ERP, payment gateways, and enterprise authentication systems.",
    tags: ["Next.js", "React", "Scalable UI"],
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" stroke="url(#grad3)" strokeWidth="1.5" initial={{ strokeDashoffset: 0 }} animate={reduced ? {} : { strokeDashoffset: [0, 100] }} strokeDasharray="10 5" transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
          <circle cx="12" cy="12" r="3" fill="white" className={reduced ? '' : 'animate-pulse'} />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
      </div>
    ),
    diagram: (reduced: boolean) => (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.path d="M50 100 Q100 20 150 100 T250 100" stroke="currentColor" fill="none" strokeDasharray="10 5" initial={{ strokeDashoffset: 0 }} animate={reduced ? {} : { strokeDashoffset: -100 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>
    )
  },
  {
    id: "04",
    title: "Mobile Development",
    desc: "We build native and cross-platform mobile applications for field teams, approval workflows, and workforce management, fully integrated with Oracle APEX backends and enterprise APIs.",
    tags: ["iOS/Android", "React Native", "Secure Mobile"],
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#grad4)" strokeWidth="1.5" />
          <motion.path d="M5 18h14" stroke="url(#grad4)" strokeWidth="1" animate={reduced ? {} : { y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} />
          <circle cx="12" cy="19" r="1" fill="white" />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#8A3B13" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 rounded-full bg-sinai-glow-orange/5 blur-xl" />
      </div>
    ),
    diagram: (reduced: boolean) => (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.path d="M100 20 L180 160 L20 160 Z" stroke="currentColor" fill="none" initial={{ strokeDashoffset: 0 }} animate={reduced ? {} : { strokeDashoffset: [0, 400] }} transition={{ duration: 10, repeat: Infinity }} />
        </svg>
      </div>
    )
  }
];

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section id="services" className="section-shell relative scroll-mt-28 overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="apex-ambient-grid" />

      <div className="section-label relative z-10">
        02 // Solutions
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={
              service.id === "01" ? "/services/ai-automation" :
                service.id === "02" ? "/services/oracle-apex" :
                  service.id === "03" ? "/services/web-development" :
                    service.id === "04" ? "/services/mobile-development" :
                      "#"
            }
            className="apex-panel apex-panel-hover group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.5rem] p-5 sm:p-6 lg:min-h-[330px] lg:p-8"
          >
            {/* Technical Corner ID */}
            <div className="absolute right-6 top-6 font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-sinai-glow-soft sm:right-8 sm:top-8">
              [ SOL_{service.id} ]
            </div>

            {/* Background Diagram */}
            {typeof service.diagram === 'function' ? service.diagram(!!effectiveReduceMotion) : service.diagram}

            {/* Icon & Content */}
            <div className="relative z-10 flex h-full flex-col space-y-6">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] shadow-2xl transition-all duration-300 group-hover:border-sinai-glow-orange/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {typeof service.icon === 'function' ? service.icon(!!effectiveReduceMotion) : service.icon}
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-normal text-white transition-colors duration-300 group-hover:text-sinai-glow-soft lg:text-4xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400 sm:text-lg">
                  {service.desc}
                </p>
              </div>

              {/* Technical Tags */}
              <div className="mt-auto flex flex-wrap gap-2.5 pt-5">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/5 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 transition-all group-hover:border-white/10 group-hover:text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 bg-sinai-glow-orange/10 opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      {/* Footer System Status */}
      <div className="mt-10 flex flex-col justify-between gap-4 text-[9px] font-mono uppercase tracking-[0.24em] text-zinc-700 sm:flex-row sm:items-center">
        <span>{"// Operation Units Online"}</span>
        <div className="flex flex-wrap gap-4 text-zinc-500">
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-green-500/40" /> SYSTEM: STABLE</span>
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sinai-glow-orange/40" /> NODES: ACTIVE</span>
        </div>
      </div>
    </section>
  );
}
