"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";


interface StatCardProps {
  value: string;
  label: string;
}

const STATS_DATA: StatCardProps[] = [
  {
    value: "17+",
    label: "Years Experience",
  },
  {
    value: "Oracle",
    label: "APEX Specialist",
  },
  {
    value: "Data",
    label: "Driven Logic",
  },
  {
    value: "AI",
    label: "Native Philosophy",
  },
];

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="px-5 py-4 rounded-xl bg-white/3 border border-white/10 flex flex-col gap-1.5 hover:border-sinai-glow-orange/30 transition-colors group/card">
      <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">
        {value}
      </span>
      <p className="text-sm text-zinc-400 uppercase tracking-[0.8px] leading-[10px]">
        {label}
      </p>
    </div>
  );
}

export default function CeoHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sinai-glow-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sinai-glow-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: CEO Message */}
          <motion.div
            initial={
              effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }
            }
            animate={
              effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <SectionBadge>
                Leadership Message
              </SectionBadge>
              <h1 className="font-black text-4xl md:text-[64px] leading-[77px]">
                Built from the Inside of <br />
                <span className="text-sinai-glow-orange">
                  Enterprise Systems
                </span>
              </h1>
            </div>

            <div className="space-y-5 font-light md:text-xl md:leading-[32.5px] text-white">
              <p className="relative text-white">
                <span className="absolute -left-8 -top-4 text-6xl font-serif text-sinai-glow-orange/20">
                  &quot;
                </span>
                Our practice was founded by an enterprise Oracle engineer with
                17+ years of hands-on experience designing and delivering
                decision support systems, Oracle APEX applications, and data
                warehouse architectures for organizations across Egypt, the UAE,
                and the GCC.
              </p>
              <p className="text-white">
                That background shapes how we work. We begin every engagement by
                understanding your existing infrastructure, your data
                environment, your security constraints, and your operational
                goals, before writing a single line of code.
              </p>
              <p className="relative text-white">
                APEX Experts operates across four core capabilities: Oracle APEX
                development, AI integration, web development, and mobile
                development. These are not isolated service lines. They are
                connected engineering disciplines that allow us to address the
                full complexity of an enterprise system.
                <span className="absolute -right-8 -bottom-4 text-6xl font-serif text-sinai-glow-orange/20 rotate-180">
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold text-lg leading-[20px] tracking-[0.075rem] uppercase">
                Ahmed Al-Saied
              </div>
              <div className="tracking-[1px] uppercase mt-2.5 text-zinc-400">
                Founder & CEO
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Image */}
          <motion.div
            initial={
              effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }
            }
            animate={
              effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              {/* Decorative Frame Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-sinai-glow-orange/30 rounded-br-3xl z-10" />

              <Image
                src="/images/avatars/ahmed.png"
                alt="Ahmed Al-Saied - Founder & CEO"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[3s] ease-out grayscale hover:grayscale-0"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />

              {/* Name Tag HUD */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-sinai-glow-orange/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className=" text-sinai-glow-orange text-sm leading-[15px] tracking-[0.25rem] uppercase mb-1">
                  Architect & Visionary
                </div>
                <h3 className="text-2xl font-black uppercase tracking-normal">
                  Ahmed Al-Saied
                </h3>
                <div className="w-12 h-[2px] bg-sinai-glow-orange mt-3" />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3/4">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
