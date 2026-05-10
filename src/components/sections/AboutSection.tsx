"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const POSITIONS = [
  {
    id: "depth",
    title: "Technical Depth",
    short: "We start with your workflow, data, users, and security rules before choosing the AI layer.",
    header: "AI that fits",
    subHeader: " real business workflows.",
    description: "APEX Experts AI Solutions is a specialized engineering practice focused on designing, building, and deploying production-grade artificial intelligence systems."
  },
  {
    id: "focus",
    title: "Strategic Focus",
    short: "We work with teams that need AI to connect to real data, approvals, permissions, and daily operations.",
    header: "AI connected",
    subHeader: " to the systems your team already uses.",
    description: "We work at the intersection of advanced machine learning research and robust software engineering — turning AI ideas into working software your team can actually use."
  },
  {
    id: "quality",
    title: "Quality Standard",
    short: "Our work meets the same bar as the tools we build with: tested, documented, and designed to evolve.",
    header: "Built to Evolve",
    subHeader: " designed for longevity.",
    description: "Every project is planned for testing, documentation, handover, and future changes."
  }
];

export function AboutSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section id="about" className="section-shell scroll-mt-28">
      {/* Section label */}
      <div className="section-label">
        01 // About
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Main copy (Left side) — changes based on hover */}
        <div className="flex min-h-[260px] flex-col justify-center lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: effectiveReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: effectiveReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="space-y-7"
            >
              <h2 className="text-balance text-4xl font-bold leading-[0.94] tracking-normal sm:text-6xl">
                {POSITIONS[activeIdx].header}
                <br />
                <span className="text-3xl font-medium text-white/42 sm:text-5xl">
                  {POSITIONS[activeIdx].subHeader}
                </span>
              </h2>

              <div className="max-w-2xl space-y-5 text-lg leading-relaxed sm:text-xl">
                <p>{POSITIONS[activeIdx].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side panel — The Hover Controls (Right side) */}
        <div className="lg:col-span-2">
          <div className="apex-panel relative overflow-hidden rounded-[1.5rem] p-5 sm:p-6 lg:p-8 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(217,130,47,0.06),transparent_44%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-sinai-glow-orange font-bold mb-7 relative">
              Our Core Positions
            </h3>

            <div className="space-y-2 relative">
              {POSITIONS.map((pos, i) => (
                <div
                  key={pos.id}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 group/item ${activeIdx === i
                      ? "bg-white/[0.04] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                      : "opacity-40 hover:opacity-100 border border-transparent"
                    }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeIdx === i ? "bg-sinai-glow-orange scale-150" : "bg-white/20"
                      }`} />
                    <h4 className="text-base font-bold tracking-normal text-white">
                      {pos.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed opacity-70">
                    {pos.short}
                  </p>

                  {/* Progress Indicator line for active item */}
                  {activeIdx === i && (
                    <>
                      <motion.div
                        layoutId={effectiveReduceMotion ? undefined : "activePosition"}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-sinai-glow-orange rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0, x: effectiveReduceMotion ? 0 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mt-6"
                      >
                        <Link href="/about" className="inline-flex items-center gap-3 text-[10px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black uppercase hover:text-white transition-all group/btn">
                          Explore_Full_Record
                          <div className={`h-px bg-sinai-glow-orange transition-all duration-500 ${effectiveReduceMotion ? 'w-6' : 'w-6 group-hover/btn:w-10'}`} />
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${effectiveReduceMotion ? '' : 'group-hover/btn:translate-x-1'}`}><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
