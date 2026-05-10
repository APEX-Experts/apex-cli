"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const SectionReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <motion.div
      initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const TelemetryData = () => {
  const [coords, setCoords] = React.useState({ x: "0.0000", y: "0.0000" });
  
  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCoords({
        x: Math.random().toFixed(4),
        y: Math.random().toFixed(4)
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      COORD_X: {coords.x}<br/>
      COORD_Y: {coords.y}<br/>
      SIG_STRENGTH: NOMINAL
    </>
  );
};

export default function AboutClient() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <div className="overflow-hidden bg-sinai-bg-base text-white selection:bg-sinai-glow-orange selection:text-black">
      
      {/* Hero Section & Story */}
      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sinai-glow-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sinai-glow-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
            <motion.div
              initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-sinai-glow-orange" />
                  <span className="text-xs font-mono text-sinai-glow-orange tracking-[0.5em] uppercase">About Us</span>
                </div>
                <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-normal md:text-5xl lg:text-6xl">
                  Engineering systems where business operations <br />
                  <span className="apex-gradient-text">actually happen</span>
                </h1>
                <p className="text-xl text-zinc-400 font-medium">
                  APEX Experts AI Solutions is a founder-led engineering practice specializing in Oracle APEX, AI integration, and enterprise application development. We build systems that operate inside real business workflows, not alongside them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={effectiveReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
              animate={effectiveReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
            >
              <h2 className="mb-6 text-2xl font-bold text-white">Built from the Inside of Enterprise Systems</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Our practice was founded by an enterprise Oracle engineer with 17+ years of hands-on experience designing and delivering decision support systems, Oracle APEX applications, and data warehouse architectures for organizations across Egypt, the UAE, and the GCC.
                </p>
                <p>
                  That background shapes how we work. We begin every engagement by understanding your existing infrastructure, your data environment, your security constraints, and your operational goals, before writing a single line of code.
                </p>
                <p>
                  APEX Experts operates across four core capabilities: Oracle APEX development, AI integration, web development, and mobile development. These are not isolated service lines. They are connected engineering disciplines that allow us to address the full complexity of an enterprise system.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-shell-lg relative overflow-hidden bg-[#080a0d] px-4 sm:px-6">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16 space-y-5 lg:mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-sinai-glow-orange" />
              <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] uppercase text-left">Strategic_Pillars</span>
            </motion.div>
            <h2 className="text-left text-4xl font-black uppercase leading-none tracking-normal md:text-6xl lg:text-7xl">
              What Guides Our <br/>
              <span className="apex-gradient-text">Engineering Practice</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-16 items-center">
            
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              <svg className="w-full h-full opacity-10">
                <motion.path 
                  d="M 200 100 L 800 100 L 800 400 L 200 400 Z" 
                  stroke="#f2a24b" 
                  strokeWidth="0.5" 
                  fill="none"
                  initial={effectiveReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <circle cx="200" cy="100" r="2" fill="#f2a24b" />
                <circle cx="800" cy="100" r="2" fill="#f2a24b" />
                <circle cx="800" cy="400" r="2" fill="#f2a24b" />
                <circle cx="200" cy="400" r="2" fill="#f2a24b" />
              </svg>
            </div>

            {[
              { id: "01", title: "Practical AI", col: "lg:col-span-5", align: "left", desc: "We operationalize AI into workflows with strict data permissions. Every implementation must function reliably within your existing security architecture.", tech: "AI_OPERATIONAL" },
              { id: "02", title: "Engineering Excellence", col: "lg:col-span-5 lg:col-start-8", align: "right", desc: "We deliver production applications, secure, maintainable, and fully integrated. Not prototypes, not MVPs handed off without a support path.", tech: "PROD_GRADE" },
              { id: "03", title: "Data Sovereignty", col: "lg:col-span-5", align: "left", desc: "Clients retain complete control and visibility over their data. No AI implementation we build requires data to leave your infrastructure.", tech: "DATA_SECURE" },
              { id: "04", title: "Product-Grade Delivery", col: "lg:col-span-5 lg:col-start-8", align: "right", desc: "We build bespoke systems with the scalability and reliability standards of enterprise SaaS.", tech: "SAAS_SCALE" }
            ].map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${node.col} relative group cursor-crosshair`}
              >
                <div className={`space-y-6 ${node.align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`flex items-center gap-4 ${node.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-4xl font-black text-white/5 group-hover:text-sinai-glow-orange/20 transition-colors duration-500">{node.id}</span>
                    <div className="h-px w-12 bg-white/10 group-hover:w-20 group-hover:bg-sinai-glow-orange/40 transition-all duration-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-normal text-white transition-all duration-500 group-hover:text-sinai-glow-soft lg:text-4xl">
                      {node.title}
                    </h3>
                    <p className="text-zinc-500 text-lg max-w-sm group-hover:text-zinc-300 transition-colors duration-500 mx-auto lg:mx-0">
                      {node.desc}
                    </p>
                  </div>

                  <div className={`flex items-center gap-3 pt-4 font-mono text-[9px] tracking-[0.3em] text-zinc-600 ${node.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <span className="group-hover:text-sinai-glow-orange transition-colors">{node.tech}</span>
                    <div className={`w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'group-hover:animate-ping'}`} />
                  </div>
                </div>

                <div className="absolute -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <div className="text-[8px] font-mono text-sinai-glow-orange/40 p-4 border-l border-t border-sinai-glow-orange/20">
                    <TelemetryData />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="section-shell relative py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            A dual-entity operation spanning Egypt and the UAE, built to serve enterprise clients across the GCC with localized execution and global engineering depth.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-sinai-glow-orange font-mono text-xs mb-2">Founded & Experience</div>
              <div className="text-white">2025 | Operating with 17+ years of accumulated enterprise engineering experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-sinai-glow-orange font-mono text-xs mb-2">Legal Entities & Hubs</div>
              <div className="text-white">APEX Experts AI Solutions L.L.C (Alexandria, Egypt) & Active Hubs in Dubai, UAE</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="text-sinai-glow-orange font-mono text-xs mb-2">Contact & Operations</div>
              <div className="text-white">info@apexexperts.net<br />+20 102 203 4499 | +971 58 580 3977</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Products Section */}
      <section className="section-shell relative py-24 bg-[linear-gradient(180deg,#06080a_0%,#080a0d_100%)]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Built Once. Proven at Product Scale. <span className="text-sinai-glow-orange">Delivered to Enterprises.</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Our SaaS products are not side projects, they are the direct outcome of the same engineering discipline we apply to enterprise clients, proving our ability to design, build, and scale production-grade AI and APEX systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "MyQuery", desc: "Standalone natural language analytics platform for enterprise data warehouses." },
              { name: "ASKLYZE", desc: "Oracle APEX-native AI analytics plugin, natural language reporting inside APEX, zero data movement." },
              { name: "Tasto", desc: "SaaS ERP platform unifying CRM, accounting, HR, and project operations." }
            ].map((prod, i) => (
              <motion.div 
                key={prod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-sinai-glow-orange/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-sinai-glow-orange/20 transition-colors">
                  <div className="text-xl font-black">{prod.name.charAt(0)}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{prod.name}</h3>
                <p className="text-zinc-400">{prod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build & How We Deliver */}
      <section className="section-shell relative py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">What We Build</h2>
            <p className="text-zinc-400">
              Our enterprise-grade engineering system connects data, streamlines operations, and enables intelligent workflows, built with a structured engineering approach from architecture to deployment.
            </p>
            <div className="space-y-4">
              {[
                { domain: "Enterprise Systems", focus: "Internal tools, dashboards, and workflow automation" },
                { domain: "Digital Platforms", focus: "SaaS products, portals, and business applications" },
                { domain: "AI Enablement", focus: "Intelligent assistants, automation layers, and data interaction systems" },
                { domain: "System Integration", focus: "APIs, middleware, and cross-system connectivity" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 gap-4">
                  <div className="font-bold text-sinai-glow-orange w-1/3">{item.domain}</div>
                  <div className="text-sm text-zinc-300 w-2/3">{item.focus}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">How We Deliver Systems</h2>
            <p className="text-zinc-400">
              Our delivery approach is structured, technical, and focused on eliminating uncertainty at every stage of implementation.
            </p>
            <div className="relative space-y-6 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-white/10">
              {[
                "Analyze existing system architecture and dependencies",
                "Identify bottlenecks, inefficiencies, and operational constraints",
                "Design scalable workflows and integration architecture",
                "Build and deploy production-ready systems"
              ].map((step, i) => (
                <div key={i} className="relative flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-black border border-sinai-glow-orange flex items-center justify-center font-mono text-sinai-glow-orange text-xs z-10">
                    0{i + 1}
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-shell-lg relative overflow-hidden border-t border-white/5 bg-sinai-bg-base">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="apex-container relative z-10">
          <SectionReveal delay={0}>
            <div className="mx-auto max-w-5xl space-y-10 text-center lg:space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl font-black leading-[0.9] tracking-normal text-white md:text-7xl lg:text-8xl">
                  Ready to assess your <br />
                  <span className="apex-gradient-text">system architecture?</span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-zinc-500 md:text-2xl">
                  Start with a 30-minute technical call. We will review your environment, identify constraints, and define whether and how we can help.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 pt-4">
                <Link href="/contact" className="group relative overflow-hidden rounded-full bg-sinai-glow-orange px-10 py-5 text-sm font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-sinai-glow-soft hover:text-black hover:shadow-[0_0_48px_rgba(217,130,47,0.22)] active:scale-95 sm:px-14 sm:py-6">
                  <span className="relative z-10">Schedule Technical Call</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                </Link>

                <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  <span>Operating from Alexandria and Dubai.</span>
                  <span>Serving enterprise clients across Egypt, UAE, and the GCC.</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
