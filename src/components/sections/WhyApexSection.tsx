"use client";

import { VALUES } from "@/constants";
import Link from "next/link";
import ValueCard from "./ValueCard";
import { ValueIcon } from "../Icons";

export function WhyApexSection() {
  return (
    <section className="section-shell relative py-8 md:py-24">
      <div className="section-label mb-12">04 // Why Us</div>

      <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="sticky top-32">
            <h2 className="mb-8 text-3xl md:text-5xl font-bold leading-[40px] md:leading-[140%] tracking-normal md:tracking-[-0.075rem] text-center md:text-start">
              Why Organizations{" "}
              <span className="text-sinai-glow-orange">Choose Us</span>
            </h2>
            <div className="space-y-3 md:space-y-6 text-base md:text-lg leading-relaxed text-zinc-400 text-center md:text-start">
              <p>
                Most enterprises don’t fail because of lack of tools, they fail
                because their systems are fragmented, fragile, and not built for
                real operational scale.
              </p>
              <p>
                We help organizations fix that at the core by combining Oracle
                APEX engineering, applied AI, and enterprise data architecture
                into production-grade systems.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-white/15 why-us-gradient p-8 text-center md:text-start">
              <h3 className="mb-4 text-base tracking-widest text-sinai-glow-orange">
                Ready to Assess Your System Architecture?
              </h3>
              <p className="mb-6 text-sm text-white">
                Start with a 30-minute technical call. We will review your
                environment, identify constraints, and define whether and how we
                can help.
              </p>
              <Link
                href="/contact"
                className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-10 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)]  w-full md:w-fit max-md:justify-center"
              >
                Schedule Technical Call
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {VALUES.map((val, i) => (
              <ValueCard
                key={i}
                val={val}
                index={i}
                iconComponent={<ValueIcon index={i} />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
