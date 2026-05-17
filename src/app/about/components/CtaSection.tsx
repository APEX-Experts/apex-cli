"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const SectionReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <motion.div
      initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={
        effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function CtaSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="section-shell-lg relative overflow-hidden border-t border-white/5 bg-sinai-bg-base">
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Technical HUD Frame */}
      <div className="absolute inset-20 border border-white/[0.03] pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-20 h-px bg-sinai-glow-orange/30" />
        <div className="absolute top-0 left-0 w-px h-20 bg-sinai-glow-orange/30" />
        <div className="absolute bottom-0 right-0 w-20 h-px bg-sinai-glow-orange/30" />
        <div className="absolute bottom-0 right-0 w-px h-20 bg-sinai-glow-orange/30" />
      </div>

      <div className="apex-container relative z-10">
        <SectionReveal delay={0}>
          <div className="mx-auto max-w-5xl space-y-10 text-center lg:space-y-12">
            {/* Top Branding Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                />
                <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">
                  Engagement_Initialization // APEX_NODE_V24.1
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-black leading-[0.9] tracking-normal text-white md:text-7xl lg:text-8xl">
                Ready to assess your <br />
                <span className="apex-gradient-text">system architecture?</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-zinc-500 md:text-2xl">
                Start with a 30-minute technical call. We will review your
                environment, identify constraints, and define whether and how we
                can help.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 pt-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-sinai-glow-orange px-10 py-5 text-sm font-black uppercase tracking-[0.28em] text-white transition-all duration-500 hover:bg-sinai-glow-soft hover:text-black hover:shadow-[0_0_48px_rgba(217,130,47,0.22)] active:scale-95 sm:px-14 sm:py-6"
              >
                <span className="relative z-10">Schedule Technical Call</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                {/* Internal Shimmer */}
                <motion.div
                  animate={
                    effectiveReduceMotion ? {} : { left: ["-100%", "200%"] }
                  }
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
              </Link>

              <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                <span className="flex items-center gap-2">
                  <div
                    className={`w-1 h-1 rounded-full bg-green-500/50 ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                  />
                  Operating from Alexandria and Dubai.
                </span>
                <span className="w-px h-4 bg-white/10" />
                <span>
                  Serving enterprise clients across Egypt, UAE, and the GCC.
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Floating Data Decor */}
      <div className="absolute bottom-12 right-12 text-[8px] font-mono text-zinc-800 tracking-widest hidden lg:block uppercase">
        Apex_Experts_Oracle_Studio
        <br />
        System_Build_Hash: 0xAPEX_5A11
      </div>
    </section>
  );
}
