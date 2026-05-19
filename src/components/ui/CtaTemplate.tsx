"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CtaTemplateProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaTemplate({
  title,
  description,
  buttonText,
  buttonHref,
}: CtaTemplateProps) {
  return (
    <section className="section-shell border-none relative py-8 md:py-24 overflow-hidden w-full">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-bold leading-[40px] md:leading-[140%] tracking-[-0.075rem] text-white md:text-5xl uppercase">
            {title}
          </h2>

          <p className="mx-auto text-sm sm:text-lg leading-relaxed text-zinc-400 md:text-xl max-w-2xl">
            {description}
          </p>

          <div className="md:pt-8 md:pb-12">
            <Link
              href={buttonHref}
              className="group inline-flex items-center justify-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-12 md:h-16 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)] w-full md:w-fit mx-auto"
            >
              {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
