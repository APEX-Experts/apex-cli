"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PRODUCTION_SYSTEMS } from "@/constants";
import { ProductionSystemCard } from "./ProductionSystemCard";

export default function ProductionSystems() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? (shouldReduceMotion ?? false) : false;

  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6">
      {/* Cinematic Ambient Background Glows */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Everything Centered */}
        <div className="text-center mb-16 space-y-6 lg:mb-20">
          <motion.div
            initial={
              effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }
            }
            whileInView={
              effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <SectionBadge>Proprietary Systems</SectionBadge>
          </motion.div>

          <motion.h2
            initial={
              effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={
              effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center font-bold text-3xl md:text-5xl leading-[48px] md:leading-[58px] tracking-tight text-white"
          >
            Production Systems{" "}
            <span className="text-sinai-glow-orange block sm:inline">
              Build to Scale
            </span>
          </motion.h2>

          <motion.p
            initial={
              effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={
              effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center font-normal text-lg md:text-[18px] leading-[32.4px] tracking-normal text-zinc-400 max-w-5xl mx-auto font-light"
          >
            We don&apos;t just consult on enterprise systems—we build, deploy,
            and scale our own. MyQuery, ASKLYZE, and Tasto are production-grade
            platforms demonstrating real AI capabilities, enterprise
            architecture, and operational scalability.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTION_SYSTEMS.map((system, index) => (
            <ProductionSystemCard
              key={system.title}
              system={system}
              index={index}
              reducedMotion={effectiveReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
