"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion";

export interface PipelineStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

export interface ProjectPipelineProps {
  steps: PipelineStep[];
  glowGradId: string;
  encryptionLabel?: string;
  latencyBase?: number;
}

export function ProjectPipeline({
  steps,
  glowGradId,
  encryptionLabel = "AES_256",
  latencyBase = 120,
}: ProjectPipelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const pipelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: pipelineProgress } = useScroll({
    target: pipelineRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return pipelineProgress.onChange((latest) => {
      const stepCount = steps.length;
      const index = Math.min(Math.floor(latest * stepCount), stepCount - 1);
      if (index >= 0) setActiveStep(index);
    });
  }, [pipelineProgress, steps.length]);

  return (
    <section id="pipeline-scroll" className="relative bg-[#06080a]">
      <div ref={pipelineRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,162,75,0.05)_0%,transparent_50%)]" />

          <div className="apex-container-wide relative z-10">
            <div className="max-w-4xl mb-10 lg:mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-sinai-glow-orange/30" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                  System_Architecture // 04
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-normal leading-none uppercase">
                The Intelligence <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-sinai-glow-orange/30">
                  Pipeline.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7 relative h-[500px] lg:h-[600px]">
                <div className="absolute inset-0 rounded-4xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group">
                  <AnimatePresence mode="wait">
                    {steps.map((step, i) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                          opacity: activeStep === i ? 0.6 : 0,
                          scale: activeStep === i ? 1 : 1.1,
                          zIndex: activeStep === i ? 10 : 0,
                        }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-linear-to-br from-black via-transparent to-black/80 z-20" />

                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="relative w-full h-full">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        {!shouldReduceMotion && (
                          <motion.path
                            d="M 100,300 Q 400,300 700,300"
                            stroke={`url(#${glowGradId})`}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        )}
                        <defs>
                          <linearGradient
                            id={glowGradId}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#F2A24B" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {!shouldReduceMotion &&
                        [...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              x: [0, 400, 800],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1.2, 0.5],
                            }}
                            transition={{
                              duration: 4 - activeStep * 0.5,
                              repeat: Infinity,
                              delay: i * 0.8,
                              ease: "linear",
                            }}
                            className="absolute top-[300px] left-0 w-2 h-2 bg-sinai-glow-orange rounded-full shadow-[0_0_15px_rgba(242,162,75,0.8)]"
                          />
                        ))}
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase space-y-2 z-40">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? "" : "animate-pulse"}`}
                      />
                      PIPELINE_STEP: 0{activeStep + 1}
                    </div>
                    <div>ENCRYPTION: {encryptionLabel}</div>
                    <div>LATENCY: {latencyBase - activeStep * 20}ms</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative space-y-8">
                {steps.map((item, i) => (
                  <div
                    key={i}
                    className={`group relative space-y-6 transition-all duration-700 ${activeStep === i ? "opacity-100 scale-105" : "opacity-20 scale-95 blur-[1px]"}`}
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 ${activeStep === i ? "bg-sinai-glow-orange text-white border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.4)]" : "bg-white/5 border-white/10 text-zinc-500"}`}
                      >
                        {item.icon}
                      </div>
                      <div
                        className={`h-px flex-1 transition-colors duration-500 ${activeStep === i ? "bg-sinai-glow-orange/50" : "bg-white/5"}`}
                      />
                      <span
                        className={`font-mono text-[10px] tracking-[0.5em] font-black transition-colors duration-500 ${activeStep === i ? "text-sinai-glow-orange" : "text-zinc-800"}`}
                      >
                        STEP_{item.step}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3
                        className={`text-3xl font-black tracking-normal uppercase transition-colors duration-500 ${activeStep === i ? "text-white" : "text-zinc-600"}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base font-light leading-relaxed transition-colors duration-500 ${activeStep === i ? "text-zinc-400" : "text-zinc-700"}`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <div
                      className={`absolute -left-10 top-0 bottom-0 w-1 transition-all duration-500 ${activeStep === i ? "bg-sinai-glow-orange shadow-[0_0_15px_rgba(242,162,75,0.5)]" : "bg-white/5"} hidden lg:block rounded-full`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
