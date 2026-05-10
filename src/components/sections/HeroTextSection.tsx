import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroTextSection() {
  return (
    <section className="relative overflow-hidden bg-sinai-bg-base px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="apex-container-wide relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Enterprise Systems Built <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-soft to-sinai-glow-orange">Where Business Actually Happens</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            We design and deliver enterprise software systems, web platforms, and AI-integrated environments that operate within your existing architecture, connect your data, and support real workflows.
          </p>
          <div className="mb-10 flex items-center justify-center gap-2 text-sm font-medium text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
            For CIOs, CTOs, and IT Directors managing Oracle environments, fragmented operational systems, or AI initiatives.
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-sinai-glow-soft"
            >
              Start an Engagement
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sinai-glow-orange/10 blur-[120px]" />
    </section>
  );
}
