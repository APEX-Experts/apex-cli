"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    id: "01",
    title: "AI Integration Services",
    desc: "We embed AI natively into workflows, databases, and APEX environments. ASKLYZE delivers natural language reporting directly inside Oracle APEX. Implementations are governed by role-based access controls and strict data permissions.",
    tags: ["Agentic AI", "RPA", "Workflow Optimization"],
    href: "/services/ai-automation",
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.circle
            cx="12"
            cy="12"
            r="9"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            animate={reduced ? {} : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            strokeDasharray="4 4"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="5"
            stroke="url(#grad1)"
            strokeWidth="2"
            animate={reduced ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <path
            d="M12 8v8M8 12h8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9822f" />
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
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeDasharray="5 5"
            fill="none"
          />
          <motion.path
            d="M100 20 L100 180 M20 100 L180 100"
            stroke="currentColor"
            animate={reduced ? {} : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    ),
  },
  {
    id: "02",
    title: "Oracle APEX Services",
    desc: "We build and optimize Oracle APEX applications for internal operations, data entry, approvals, reporting, and Oracle Forms migration. Every implementation is architected for performance, security, and long-term maintainability.",
    tags: ["Low-Code Elite", "Database Design", "Oracle Cloud"],
    href: "/services/oracle-apex",
    icon: (reduced: boolean) => (
      <div className="relative w-14 h-14">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(242,162,75,0.2)]"
        >
          {/* Ruler (Back Layer) - Top-Left to Bottom-Right (\) - THICKER */}
          <path
            d="M5.5 2.5 L2.5 5.5 L18.5 21.5 L21.5 18.5 Z"
            fill="url(#apexGradRuler)"
          />
          {/* Ruler Hole */}
          <circle cx="6.5" cy="6.5" r="1.5" fill="#000" fillOpacity="0.4" />
          {/* Ticks */}
          <line
            x1="10"
            y1="10"
            x2="12"
            y2="8"
            stroke="#000"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          <line
            x1="13"
            y1="13"
            x2="15"
            y2="11"
            stroke="#000"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          <line
            x1="16"
            y1="16"
            x2="18"
            y2="14"
            stroke="#000"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />

          {/* Pencil (Front Layer) - Bottom-Left to Top-Right (/) - THICKER */}
          <motion.g
            animate={
              reduced
                ? {}
                : {
                    y: [-0.5, 0.5, -0.5],
                    rotate: [-1, 1, -1],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Pencil Body */}
            <path
              d="M5.5 21.5 L2.5 18.5 L18.5 2.5 L21.5 5.5 Z"
              fill="url(#apexGradPencil)"
            />
            {/* Eraser End at Top-Right */}
            <path
              d="M18.5 2.5 L21.5 5.5 L23.5 3.5 L20.5 0.5 Z"
              fill="#FF5252"
            />
            {/* Metal Ring */}
            <path d="M17 4 L18 3 L20.5 5.5 L19.5 6.5 Z" fill="#C0C0C0" />
            {/* Wood Tip at Bottom-Left */}
            <path d="M5.5 21.5 L2.5 18.5 L0.5 23.5 Z" fill="#E8C39E" />
            {/* Graphite Lead at Bottom-Left */}
            <path d="M2 21 L0.5 23.5 L3 23.5 Z" fill="#333" />
          </motion.g>

          <defs>
            <linearGradient
              id="apexGradRuler"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d9822f" />
              <stop offset="100%" stopColor="#FFCC33" />
            </linearGradient>
            <linearGradient
              id="apexGradPencil"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
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
            <motion.rect
              key={i}
              x={40}
              y={40 + i * 25}
              width={120}
              height={15}
              stroke="currentColor"
              fill="none"
              animate={reduced ? {} : { x: [40, 50, 40] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
    ),
  },
  {
    id: "03",
    title: "Web Development",
    desc: "We engineer robust web systems for SaaS platforms, client portals, and high-density operational dashboards. Deep integration with CRM, ERP, payment gateways, and enterprise authentication systems.",
    tags: ["Next.js", "React", "Scalable UI"],
    href: "/services/web-development",
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.path
            d="M12 2l10 5v10l-10 5-10-5V7l10-5z"
            stroke="url(#grad3)"
            strokeWidth="1.5"
            initial={{ strokeDashoffset: 0 }}
            animate={reduced ? {} : { strokeDashoffset: [0, 100] }}
            strokeDasharray="10 5"
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="white"
            className={reduced ? "" : "animate-pulse"}
          />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9822f" />
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
          <motion.path
            d="M50 100 Q100 20 150 100 T250 100"
            stroke="currentColor"
            fill="none"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 0 }}
            animate={reduced ? {} : { strokeDashoffset: -100 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    ),
  },
  {
    id: "04",
    title: "Mobile Development",
    desc: "We build native and cross-platform mobile applications for field teams, approval workflows, and workforce management, fully integrated with Oracle APEX backends and enterprise APIs.",
    tags: ["iOS/Android", "React Native", "Secure Mobile"],
    href: "/services/mobile-development",
    icon: (reduced: boolean) => (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect
            x="5"
            y="2"
            width="14"
            height="20"
            rx="3"
            stroke="url(#grad4)"
            strokeWidth="1.5"
          />
          <motion.path
            d="M5 18h14"
            stroke="url(#grad4)"
            strokeWidth="1"
            animate={reduced ? {} : { y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <circle cx="12" cy="19" r="1" fill="white" />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d9822f" />
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
          <motion.path
            d="M100 20 L180 160 L20 160 Z"
            stroke="currentColor"
            fill="none"
            initial={{ strokeDashoffset: 0 }}
            animate={reduced ? {} : { strokeDashoffset: [0, 400] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </svg>
      </div>
    ),
  },
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
    <section
      id="services"
      className="section-shell relative scroll-mt-8 md:scroll-mt-28 overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="apex-ambient-grid" />

      <div className="section-label mb-6 relative z-10">02 // Solutions</div>

      <h2 className="text-3xl md:text-5xl font-bold leading-[40px] md:leading-[130%] tracking-normal md:tracking-[-0.075rem] mb-6 text-center md:text-start">
        System-Level Capabilities That Power{" "}
        <span className="text-sinai-glow-orange">Your Operations</span>
      </h2>

      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            reducedMotion={!!effectiveReduceMotion}
          />
        ))}
      </div>
    </section>
  );
}
