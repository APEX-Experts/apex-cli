"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";

export interface ProjectCTAProps {
  badge: string;
  title?: React.ReactNode | string;
  description?: React.ReactNode | string;
  ctaText?: string;
  ctaLink?: string;
  buildHash?: string;
}

export function ProjectCTA({
  badge,
  title = (
    <>
      Ready to <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">
        Scale Your Vision?
      </span>
    </>
  ),
  description = (
    <>
      Join forces with <span className="text-white font-bold">APEX Experts</span> to
      engineer the next generation of autonomous intelligence.
    </>
  ),
  ctaText = "Initialize Project",
  ctaLink = "/contact",
  buildHash = "0xPR_ASKLYZE",
}: ProjectCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#06080a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-20 border border-white/3 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-20 h-px bg-sinai-glow-orange/30" />
        <div className="absolute top-0 left-0 w-px h-20 bg-sinai-glow-orange/30" />
        <div className="absolute bottom-0 right-0 w-20 h-px bg-sinai-glow-orange/30" />
        <div className="absolute bottom-0 right-0 w-px h-20 bg-sinai-glow-orange/30" />
      </div>

      <div className="apex-container-wide relative z-10">
        <SectionReveal>
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/2 border border-white/10 backdrop-blur-md">
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? "" : "animate-pulse"}`}
                />
                <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">
                  {badge}
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-7xl md:text-[10rem] font-black tracking-normal leading-[0.8] text-white">
                {title}
              </h2>
              <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 pt-8">
              <Link
                href={ctaLink}
                className="group relative px-10 py-5 sm:px-14 lg:px-16 lg:py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-xl tracking-[0.4em] uppercase transition-all hover:shadow-[0_0_100px_rgba(242,162,75,0.6)] hover:scale-105 active:scale-95 duration-500"
              >
                <span className="relative z-10">{ctaText}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                  />
                )}
              </Link>

              <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500/50" />
                  Secure_Node: Active
                </span>
                <span className="w-px h-4 bg-white/10" />
                <span>Deployment: Global</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="absolute bottom-12 right-12 text-[8px] font-mono text-zinc-800 tracking-widest hidden lg:block uppercase">
        Apex_Experts_Engineering_Studio
        <br />
        System_Build_Hash: {buildHash}
      </div>
    </section>
  );
}
