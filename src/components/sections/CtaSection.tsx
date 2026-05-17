"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="section-shell relative py-8 md:py-24 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold leading-[40px] md:leading-[140%] tracking-[-0.075rem] text-white md:text-5xl">
            Ready to assess your <br />
            <span className="text-sinai-glow-orange">system architecture?</span>
          </h2>

          <p className="mx-auto text-sm sm:text-lg leading-relaxed text-zinc-400 md:text-xl">
            Start with a 30-minute technical call. We will review your
            environment, identify constraints, and define whether and how we can
            help. Operating from Alexandria and Dubai. Serving enterprise
            clients across Egypt, UAE, and the GCC.
          </p>

          <div className="md:pt-8 md:pb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-10 md:h-16 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)] w-full md:w-fit mx-auto max-md:justify-center"
            >
              Book a Technical Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
