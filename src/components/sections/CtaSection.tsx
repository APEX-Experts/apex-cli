"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="section-shell relative py-24 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-black uppercase leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Ready to assess your <br />
            <span className="apex-gradient-text">system architecture?</span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Start with a 30-minute technical call. We will review your environment, identify constraints, and define whether and how we can help.
          </p>

          <div className="pt-8 pb-12">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-sinai-glow-orange px-10 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-sinai-glow-soft hover:text-black hover:shadow-[0_0_40px_rgba(217,130,47,0.3)] active:scale-95"
            >
              Schedule Technical Call
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase sm:flex-row sm:gap-4">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
              Operating from Alexandria and Dubai.
            </span>
            <span className="hidden w-px h-3 bg-white/20 sm:block" />
            <span>Serving enterprise clients across Egypt, UAE, and the GCC.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
