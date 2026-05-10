"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutGrid,
  Cloud
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// 🚨 الحل الجذري: استخدام النسخة العادية من المكتبة بشكل Dynamic لمنع السيرفر من التدخل
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#d9822f] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

export const ApexFinalHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#06080a] flex flex-col justify-between overflow-hidden">

      {/* ── Background Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ── Main Content Area ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center py-20 lg:py-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 w-full items-end">

          {/* ── Left Content: Text & Buttons ── */}
          <div className="flex flex-col justify-end pb-10 lg:pb-12 z-20 w-full text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#d9822f] uppercase font-black px-3 py-1 border border-[#d9822f]/20 rounded-full bg-[#d9822f]/5">
                AI SOLUTIONS • ENTERPRISE GRADE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[5.4rem] font-black leading-[1] lg:leading-[0.95] tracking-tight text-white mb-6 lg:mb-8"
            >
              Enterprise Systems <br />
              Built <span className="text-[#d9822f]">with Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-white/40 leading-relaxed mb-8 lg:mb-10 max-w-lg"
            >
              APEX Experts delivers AI-powered solutions, Oracle APEX consulting, and enterprise web & mobile systems that streamline operations and drive measurable impact.
            </motion.p>

            {/* الأزرار في طبقة z-50 لضمان إمكانية الضغط عليها فوق أي شيء */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 lg:gap-6 relative z-50"
            >
              <Link
                href="#services"
                className="group flex items-center gap-4 bg-[#d9822f] text-black px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-xs lg:text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-[0_15px_40px_rgba(217,130,47,0.3)]"
              >
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#projects"
                className="group flex items-center gap-4 border border-white/10 bg-white/5 px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-xs lg:text-sm text-white tracking-widest uppercase hover:bg-white/10 transition-all"
              >
                VIEW PROJECTS
                <LayoutGrid className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right Content: Robot ── */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] z-40 order-first lg:order-none mb-10 lg:mb-0 flex items-end justify-center">

            <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[125%] lg:w-[130%] h-[125%] lg:h-[130%]">
              <Spline
                scene="https://prod.spline.design/AG3xaBRO19hjn3S3/scene.splinecode"
              />
            </div>
          </div>

          {/* ── Stats Area ── */}
          <div className="col-span-1 border-t border-white/10 pt-8 lg:pt-10 z-20 pb-10 lg:pb-0 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 lg:gap-6"
            >
              {[
                { val: '100+', label: 'DELIVERED' },
                { val: '40+', label: 'CLIENTS' },
                { val: 'AI', label: 'POWERED' }
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-2xl lg:text-3xl font-black text-white">{s.val}</span>
                  <span className="text-[8px] lg:text-[9px] text-white/20 uppercase font-bold tracking-[0.2em]">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block col-span-1"></div>

        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="w-full pb-8 pt-4 relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 w-full opacity-10">
            <div className="h-px flex-1 bg-white" />
            <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.3em] lg:tracking-[0.5em] text-white uppercase font-black text-center">
              Built on trust. Engineered to scale.
            </span>
            <div className="h-px flex-1 bg-white" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20 opacity-20">
            {['ORACLE', 'APEX', 'AI', 'OCI', 'PL/SQL'].map(t => (
              <span key={t} className="text-lg lg:text-3xl font-black text-white tracking-tighter">{t}</span>
            ))}
            <Cloud className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
        </div>
      </div>

    </section>
  );
};