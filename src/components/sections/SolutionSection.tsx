"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { PRACTICES } from "@/constants";
import PracticeCard from "./PracticeCard";

export function SolutionSection() {
  return (
    <section className="section-shell relative py-0 border-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 flex flex-col items-center"
        >
          <Badge>Engineering Practice</Badge>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[120%]">
            Built for Enterprise-
            <span className="text-sinai-glow-orange">Grade Modernization</span>
          </h2>

          <p className="text-base text-white-200 font-medium leading-[130%] tracking-[0%] text-center max-w-6xl">
            A founder-led software engineering firm with 17+ years of expertise
            in Oracle APEX, enterprise data architecture, AI integration, web
            platforms, and mobile applications — delivering scalable systems
            built for real business operations.
          </p>

          <div className="py-6">
            <div className="inline-block relative">
              <h3 className="relative text-[22px] font-black text-sinai-glow-soft uppercase tracking-wider text-center">
                We do not hand over roadmaps. We build the systems.
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
            {PRACTICES.map((practice, index) => (
              <PracticeCard key={index} practice={practice} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
