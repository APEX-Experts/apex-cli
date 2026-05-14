"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";

const MENU_ITEMS = [
  { label: "ABOUT_SYSTEM", id: "about", desc: "Who we are and how we approach AI projects." },
  { label: "CORE_SERVICES", id: "services", desc: "AI, Oracle APEX, web, and mobile development services." },
  { label: "ENGINEERING_PIPELINE", id: "process", desc: "Our methodology & delivery flow." },
  { label: "PRODUCTION_REGISTRY", id: "projects", desc: "Live case studies & deployments." },
  { label: "INTELLECTUAL_CAPITAL", id: "blog", desc: "Engineering dispatches & research." },
  { label: "ENGAGE_PROTOCOL", id: "contact", desc: "Tell us what you want to build." },
];

export function TerminalHero() {
  const [stage, setStage] = useState(0); // 0: Open, 1: Title, 2: Badge, 3: Engine, 4: Menu
  const [streamedTitle, setStreamedTitle] = useState("");
  const [streamedBadge, setStreamedBadge] = useState("");
  const [streamedEngine, setStreamedEngine] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const fullTitle = "APEX EXPERTS";
  const fullBadge = "AI SOLUTIONS";
  const fullEngine = "PRACTICAL AI SYSTEMS ENGINE";

  const windowRef = useRef<HTMLDivElement>(null);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual transform logic to bypass Framer Motion internal checks
  const calculateTransform = (value: number, rangeIn: [number, number], rangeOut: [number, number]) => {
    const [inMin, inMax] = rangeIn;
    const [outMin, outMax] = rangeOut;
    const progress = Math.min(Math.max((value - inMin) / (inMax - inMin), 0), 1);
    return outMin + (outMax - outMin) * progress;
  };

  const opacityScroll = calculateTransform(scrollYValue, [0, 450], [1, 0]);
  const scaleScroll = effectiveReduceMotion ? 1 : calculateTransform(scrollYValue, [0, 450], [1, 0.95]);
  const yScroll = effectiveReduceMotion ? 0 : calculateTransform(scrollYValue, [0, 450], [0, 100]);

  useEffect(() => {
    if (stage === 0) {
      if (effectiveReduceMotion) {
        gsap.fromTo(
          windowRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => setStage(1)
          }
        );
      } else {
        gsap.fromTo(
          windowRef.current,
          { scale: 0.85, opacity: 0, rotationX: 15, y: 120, filter: "blur(20px)" },
          {
            scale: 1, opacity: 1, rotationX: 0, y: 0, filter: "blur(0px)",
            duration: 1.8, ease: "expo.out", delay: 0.4,
            onComplete: () => setStage(1)
          }
        );
      }
    }

    const typeSpeed = effectiveReduceMotion ? 10 : 50;
    if (stage === 1) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullTitle.length) {
          setStreamedTitle(fullTitle.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(2), 300);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    }

    if (stage === 2) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullBadge.length) {
          setStreamedBadge(fullBadge.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(3), 200);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    }

    if (stage === 3) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullEngine.length) {
          setStreamedEngine(fullEngine.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(4), effectiveReduceMotion ? 200 : 800);
        }
      }, effectiveReduceMotion ? 10 : 40);
      return () => clearInterval(interval);
    }
  }, [stage, effectiveReduceMotion]);

  return (
    <div className="relative min-h-[74svh] bg-sinai-bg-base sm:min-h-[82svh] lg:min-h-[88svh]">
      <motion.div
        style={{ opacity: opacityScroll, scale: scaleScroll, y: yScroll }}
        className="relative flex min-h-[74svh] items-start justify-center overflow-hidden px-4 py-20 sm:min-h-[82svh] sm:items-center sm:px-6 sm:py-24 lg:min-h-[88svh] lg:py-28"
      >
        <div className="absolute inset-0 z-0">
          <div className="apex-ambient-glow left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 opacity-90" />
          <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.022] mix-blend-overlay" />
          <div className="apex-ambient-grid" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sinai-bg-base to-transparent" />
        </div>

        <div
          ref={windowRef}
          className="apex-panel relative z-10 flex aspect-[9/13] w-full max-w-[22rem] flex-col overflow-hidden rounded-[1.5rem] shadow-[0_44px_110px_-42px_rgba(0,0,0,0.95)] sm:aspect-[16/11] sm:max-w-3xl sm:rounded-[1.75rem] lg:aspect-video lg:max-w-5xl"
          style={{ perspective: "1000px" }}
        >
          <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 sm:h-12 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#cf5f55]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#d4a64f]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#6ea77a]" />
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase font-bold">APEX_CLI_v4.0.2</span>
              <span className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-green-500 ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                <span className="text-[10px] font-mono text-green-500/80">CONNECTED</span>
              </div>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden p-4 font-mono sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.10)_50%)] bg-[size:100%_5px] opacity-20" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-5 min-h-[104px] sm:mb-7 sm:min-h-[130px] md:min-h-[150px]">
                <div className="mb-4 text-4xl font-black leading-[0.9] tracking-normal text-sinai-glow-soft sm:text-6xl md:text-8xl">
                  {streamedTitle}<span className={stage === 1 && !effectiveReduceMotion ? "animate-pulse" : ""}>_</span>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  {streamedBadge && (
                    <span className="rounded border border-sinai-glow-soft/30 bg-sinai-glow-orange/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.28em] text-sinai-glow-soft">
                      {streamedBadge}<span className={stage === 2 && !effectiveReduceMotion ? "animate-pulse" : ""}>_</span>
                    </span>
                  )}
                  {streamedEngine && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500 sm:text-xs">
                      {streamedEngine}<span className={stage === 3 && !effectiveReduceMotion ? "animate-pulse" : ""}>_</span>
                    </span>
                  )}
                </div>
              </div>

              {/* ── CLI Selection Menu (AI Agent Style) ── */}
              <div className="flex flex-col">
                {stage >= 4 && (
                  <div className="space-y-1">
                    <div className="mb-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.24em] text-zinc-600 sm:text-[10px]">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                      SELECT_MODULE_TO_INITIALIZE
                    </div>

                    {MENU_ITEMS.map((item, i) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onMouseEnter={() => setActiveIndex(i)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className="group/item flex cursor-pointer items-start gap-3 rounded-lg py-1.5 outline-none transition-colors hover:bg-white/[0.025] focus-visible:bg-white/[0.035] sm:items-center sm:gap-5"
                      >
                        {/* CLI Indicator */}
                        <div className="w-6 flex justify-center">
                          <AnimatePresence mode="wait">
                            {activeIndex === i ? (
                              <motion.span
                                key="active"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="text-sinai-glow-orange font-black text-sm"
                              >
                                ❯
                              </motion.span>
                            ) : (
                              <motion.span
                                key="inactive"
                                className="text-zinc-800 font-bold text-[10px]"
                              >
                                ○
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Item Content */}
                        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
                          <span className={`text-xs font-black tracking-[0.12em] transition-colors duration-300 sm:text-sm ${activeIndex === i ? 'text-white' : 'text-zinc-600'}`}>
                            {item.label}
                          </span>
                          {activeIndex === i && (
                            <motion.span
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[10px] text-zinc-500 font-mono"
                            >
                              {"// "}{item.desc}
                            </motion.span>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-[8px] font-bold tracking-widest text-zinc-700 sm:text-[9px]">
                <div className="hidden sm:block">LOCATION: 37.7749° N, 122.4194° W</div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <span>FORM STATUS: READY</span>
                  <span>STATE: READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
