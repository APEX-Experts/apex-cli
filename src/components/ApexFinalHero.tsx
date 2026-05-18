"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { HeroCTA } from "./Icons";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

// 🚨 الحل الجذري: استخدام النسخة العادية من المكتبة بشكل Dynamic لمنع السيرفر من التدخل
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-sinai-glow-orange border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export const ApexFinalHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#06080a] flex flex-col justify-between overflow-hidden px-4 pb-8 pt-28 sm:px-6 md:pb-16 lg:pb-20 lg:pt-32">
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* ── Main Content Area ── */}
      <div className="max-w-7xl mx-auto relative z-10 w-full flex-1 flex flex-col justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 w-full items-center">
          {/* ── Text Area ── */}
          <div className="order-1">
            <div className="flex flex-col justify-center z-20 w-full text-left gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center max-md:justify-center gap-2"
              >
                <Badge>AI SOLUTIONS • ENTERPRISE GRADE</Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[42px] sm:text-5xl md:text-[64px] text-center md:text-start font-bold md:font-black leading-12 lg:leading-20 tracking-0 md:tracking-tight text-white"
              >
                Enterprise Systems Built Where{" "}
                <span className="text-sinai-glow-orange">
                  Business Actually Happens
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-white-200/60 max-w-lg leading-[26px] md:leading-[29.25px] text-center md:text-start"
              >
                We design and deliver enterprise software systems, web
                platforms, and AI-integrated environments that operate within
                your existing architecture, connect your data, and support
              </motion.p>
            </div>
          </div>

          {/* ── Robot ── */}
          <div className="relative w-full h-[230px] sm:h-[550px] lg:h-[650px] z-40 order-2 lg:row-span-2 my-8 lg:my-0 flex items-end justify-center">
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[125%] lg:w-[130%] h-[125%] lg:h-[130%]">
              <Spline scene="https://prod.spline.design/AG3xaBRO19hjn3S3/scene.splinecode" />
            </div>
          </div>

          {/* ── CTA + Stats ── */}
          <div className="order-3 flex flex-col gap-6">
            {/* Stats */}
            <div className="border-t border-white/10 z-20 relative py-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4 lg:gap-6"
              >
                {[
                  { val: "100+", label: "DELIVERED" },
                  { val: "40+", label: "CLIENTS" },
                  { val: "AI", label: "POWERED" },
                ].map((s, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-2xl lg:text-3xl font-black text-white leading-[36px] text-center md:text-start">
                      {s.val}
                    </span>
                    <span className="text-sm text-white uppercase font-bold tracking-[0.2em] leading-[13.5px] text-center md:text-start">
                      {s.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 lg:gap-6 relative z-50"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-16 rounded-full font-black md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)]  max-md:w-full max-md:justify-center"
              >
                <HeroCTA
                  width={20}
                  height={20}
                  className="w-5 h-5 transition-transform"
                />
                Schedule Call
              </Link>

              <Link
                href="#services"
                className="group flex items-center gap-4 border border-white bg-white/5 px-8 lg:px-10 h-16 rounded-full font-black text-white md:text-lg tracking-widest hover:bg-white/10 transition-all duration-500 max-md:w-full max-md:justify-center"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="w-full pb-8 pt-4 relative z-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 w-full justify-center">
            <span className="text-sm tracking-[4.5px] leading-[22px] text-white uppercase font-black text-center">
              Built on trust. Engineered to scale.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20 opacity-20">
            {["ORACLE", "APEX", "AI", "OCI", "PL/SQL"].map((t) => (
              <span
                key={t}
                className={cn(
                  "text-base lg:text-3xl font-black text-white tracking-tighter",
                  t.includes("PL/SQL") && "hidden md:block"
                )}
              >
                {t}
              </span>
            ))}
            <Cloud className="w-6 h-6 lg:w-8 lg:h-8 text-white hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
