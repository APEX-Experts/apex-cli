"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function TechEcosystemSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="section-shell-lg relative overflow-hidden bg-sinai-bg-base px-4 sm:px-6">
      {/* Animated Neural Background (CSS-based) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,#f2a24b_1px,transparent_1px)] bg-[size:100px_100px] ${effectiveReduceMotion ? '' : 'animate-[pulse_8s_infinite]'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Side: Tech Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
                <div className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Tech_Ecosystem // Integrated</span>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none tracking-normal md:text-6xl lg:text-7xl">
                Tools <br/>
                <span className="text-sinai-glow-orange">We</span> Use
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-lg font-light italic">
                We don&apos;t just use tools; we engineer ecosystems. We choose tools based on the project: reliability, maintainability, security, and speed of delivery.
              </p>
            </div>

            {/* Live System Telemetry List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "AI_CORE", val: "ANTHROPIC_CLAUDE", status: "STABLE" },
                { label: "DB_ENGINE", val: "ORACLE_26", status: "NEXT_GEN" },
                { label: "FRONTEND", val: "NEXT.JS", status: "OPTIMIZED" },
                { label: "BACKEND", val: "NODE_PRO_MAX", status: "SCALABLE" }
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 group hover:border-sinai-glow-orange/30 transition-all duration-500">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase">{item.label}</span>
                    <span className="text-[8px] font-mono text-sinai-glow-orange uppercase tracking-widest">{item.status}</span>
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-sinai-glow-orange transition-colors">{item.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Neural Core Visual (Upgraded with Tech Galaxy) */}
          <div className="relative aspect-square flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center scale-90 lg:scale-100">
              {/* Outer Orbital Rings */}
              <motion.div 
                animate={effectiveReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed"
              />
              <motion.div 
                animate={effectiveReduceMotion ? {} : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-white/5 rounded-full border-dashed"
              />
              
              {/* Central Glass Sphere */}
              <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                
                <motion.div 
                  animate={effectiveReduceMotion ? { opacity: 0.4 } : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
                    <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                      POWER_MATRIX_v3.0
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="flex flex-col items-center text-4xl font-black leading-none tracking-normal text-white lg:text-5xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">APEX</span>
                      <span className="text-[8px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">EXPERTS</span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* Orbiting Tech Logos Galaxy */}
              {[
                { id: "oracle", slug: "oracle", color: "#F80000", status: "CORE_ENGINE", version: "v23c" },
                { id: "anthropic", slug: "anthropic", color: "#D19A66", status: "AI_LLM", version: "CLAUDE_3.5" },
                { id: "nextdotjs", slug: "nextdotjs", color: "#FFFFFF", status: "FRAMEWORK", version: "v14.2" },
                { id: "react", slug: "react", color: "#61DAFB", status: "UI_LIBRARY", version: "v18.3" },
                { id: "nodedotjs", slug: "nodedotjs", color: "#339933", status: "RUNTIME", version: "LTS" },
                { id: "python", slug: "python", color: "#3776AB", status: "LOGIC_CORE", version: "v3.12" },
                { id: "tailwindcss", slug: "tailwindcss", color: "#06B6D4", status: "STYLING", version: "v3.4" },
                { id: "openai", slug: "openai", color: "#FFFFFF", status: "AI_ORCHESTRATOR", version: "GPT-4o" }
              ].map((tech, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 280; // Distance from center
                return (
                  <div
                    key={tech.id}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      style={{ 
                        left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                        top: `calc(50% + ${Math.sin(angle) * radius}px)`
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center p-3 pointer-events-auto hover:border-sinai-glow-orange/50 transition-all group shadow-2xl z-20"
                    >
                      <div className="relative w-12 h-12">
                        <Image 
                          src={`/images/tech/${tech.slug}.svg`} 
                          className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                          alt={tech.id}
                          style={{ filter: `drop-shadow(0 0 10px ${tech.color}44)` }}
                          fill
                          priority
                        />
                      </div>
                      
                      {/* Premium Tooltip Reveal */}
                      <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-50 translate-y-4 group-hover:translate-y-0">
                        <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-2xl border border-sinai-glow-orange/30 shadow-[0_0_40px_rgba(242,162,75,0.15)] min-w-[160px] relative">
                          {/* Decorative Corner */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-sinai-glow-orange/30 rotate-45" />
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between gap-4">
                              <div className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black uppercase whitespace-nowrap">Node_{tech.id}</div>
                              <div className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                            </div>
                            
                            <div className="space-y-1">
                              <h4 className="text-sm font-black uppercase tracking-normal text-white">{tech.id.replace('dotjs', '')}</h4>
                              <div className="flex items-center gap-2">
                                <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">{tech.status}</span>
                                <span className="w-1 h-1 rounded-full bg-white/10" />
                                <span className="text-[7px] font-mono text-sinai-glow-orange uppercase">{tech.version}</span>
                              </div>
                            </div>

                            <div className="h-px w-full bg-white/5" />
                            <div className="text-[6px] font-mono text-zinc-600 tracking-widest uppercase">Connectivity: Nominal</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}

              {/* Floating Scanning Ring */}
              <motion.div 
                animate={effectiveReduceMotion ? { opacity: 0.1, scale: 1 } : { scale: [0.8, 1.3, 0.8], opacity: [0, 0.4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] border border-sinai-glow-orange/20 rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
