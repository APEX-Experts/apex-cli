"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SYSTEMS_WE_BUILD } from "@/constants";
import { EngineeringDomainCard } from "./EngineeringDomainCard";

export default function EngineeringDomains() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? (shouldReduceMotion ?? false) : false;

  // Animation variants for section content entry
  const headerVariants = {
    hidden: { opacity: 0, y: effectiveReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: effectiveReduceMotion ? 0 : 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Everything Centered */}
        <div className="text-center mb-8 space-y-6">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <SectionBadge>Engineering Domains</SectionBadge>
          </motion.div>

          <motion.h2
            variants={textVariants}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center font-bold text-3xl md:text-5xl leading-[48px] md:leading-[58px] tracking-tight text-white"
          >
            What systems we{" "}
            <span className="text-sinai-glow-orange">Build</span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center font-light text-lg leading-[32.4px] tracking-[0.01em] text-white/70 max-w-5xl mx-auto"
          >
            We architect enterprise-grade systems, AI-enabled platforms, and
            connected operational infrastructures designed to streamline
            workflows, unify data, and scale modern organizations with
            precision.
          </motion.p>
        </div>

        {/* Systems Cards List */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {SYSTEMS_WE_BUILD.map((system, index) => (
            <EngineeringDomainCard
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
