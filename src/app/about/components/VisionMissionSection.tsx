"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function VisionMissionSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="section-shell-lg relative overflow-hidden bg-sinai-bg-base px-4 sm:px-6">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #f2a24b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Central Logical Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sinai-glow-orange/30 to-transparent hidden md:block">
          <motion.div 
            animate={effectiveReduceMotion ? {} : { top: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-1 h-20 bg-sinai-glow-orange shadow-[0_0_15px_#f2a24b] -left-[1.5px]"
          />
        </div>

        <div className="space-y-12 lg:space-y-16">
          
          {/* Vision Node */}
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10">
            <div className="relative order-2 md:order-1">
              <motion.div
                initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, x: -100 }}
                whileInView={effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] uppercase">Phase_01</span>
                  <div className="h-px w-20 bg-sinai-glow-orange/20" />
                </div>
                <h2 className="absolute -left-10 -top-10 select-none text-6xl font-black uppercase leading-[0.85] tracking-normal opacity-10 lg:text-8xl">Vision</h2>
                <h3 className="text-left text-4xl font-black uppercase leading-none tracking-normal lg:text-6xl">
                  Architecting <br/>
                  <span className="text-sinai-glow-orange">The Future</span>
                </h3>
                <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md font-light italic text-left">
                  To be a trusted engineering partner for practical AI, Oracle APEX, and custom software projects., redefining how businesses interact with data through the lens of technical mastery.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="w-12 h-12 rounded-full border border-sinai-glow-orange/20 flex items-center justify-center group-hover:border-sinai-glow-orange transition-colors">
                    <div className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-ping'}`} />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Global_Standard_Protocol</span>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden md:flex justify-center order-1 md:order-2">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-80 h-80 relative"
              >
                <div className={`absolute inset-0 border-[0.5px] border-sinai-glow-orange/20 rounded-full ${effectiveReduceMotion ? '' : 'animate-[spin_20s_linear_infinite]'}`} />
                <div className={`absolute inset-10 border-[0.5px] border-white/10 rounded-full ${effectiveReduceMotion ? '' : 'animate-[spin_15s_linear_infinite_reverse]'}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-sinai-glow-orange/5 rounded-full blur-3xl" />
                  <span className="text-sinai-glow-orange font-mono text-xs tracking-widest uppercase text-center">Target_Vision</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mission Node */}
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10">
            <div className="hidden md:flex justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-80 h-80 relative"
              >
                <div className={`absolute inset-0 border-t border-l border-white/10 rounded-3xl rotate-45 ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                <div className="absolute inset-10 border-b border-r border-sinai-glow-orange/20 rounded-3xl -rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  <span className="text-white font-mono text-xs tracking-widest uppercase text-center">Execution_Core</span>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, x: 100 }}
                whileInView={effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 relative z-10 text-right md:text-left md:pl-16"
              >
                <div className="flex items-center gap-4 justify-end md:justify-start">
                  <div className="h-px w-20 bg-white/20" />
                  <span className="text-white font-mono text-[10px] tracking-[0.5em] uppercase">Phase_02</span>
                </div>
                <h2 className="absolute -right-10 -top-10 select-none text-6xl font-black uppercase leading-[0.85] tracking-normal opacity-10 md:-left-10 lg:text-8xl">Mission</h2>
                <h3 className="text-right text-4xl font-black uppercase leading-none tracking-normal md:text-left lg:text-6xl">
                  Engineering <br/>
                  <span className="text-white">The Impact</span>
                </h3>
                <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md ml-auto md:ml-0 font-light italic text-right md:text-left">
                  Helping teams replace slow manual work with reliable software, clear dashboards, and safer automation.
                </p>
                <div className="flex items-center gap-6 pt-4 justify-end md:justify-start">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Active_Deployment_Logic</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full bg-white ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Floating Background Labels */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[15vh] font-black text-white/[0.02] uppercase tracking-[0.5em] select-none vertical-text hidden lg:block">
        Evolution
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[15vh] font-black text-sinai-glow-orange/[0.02] uppercase tracking-[0.5em] select-none vertical-text hidden lg:block">
        Architecture
      </div>
    </section>
  );
}
