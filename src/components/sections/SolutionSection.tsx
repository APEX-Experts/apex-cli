"use client";

import React from "react";
import { motion } from "framer-motion";

export function SolutionSection() {
  return (
    <section className="section-shell relative py-24 border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sinai-glow-orange/20 bg-sinai-glow-orange/5 px-4 py-1.5 text-[10px] font-mono tracking-widest text-sinai-glow-orange uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
            Engineering Practice
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            As founder-led software engineering firm with 17+ years of specialized experience in Oracle APEX, enterprise data architecture, and production AI integration.
          </h2>

          <p className="text-xl text-zinc-400 font-medium">
            Our practice spans Oracle APEX development, AI embedding, web platforms, and mobile applications, all built to operate reliably inside real business environments.
          </p>

          <div className="py-6">
            <div className="inline-block relative">
              <span className="absolute -inset-2 bg-sinai-glow-orange/20 blur-xl rounded-full opacity-50" />
              <h3 className="relative text-2xl font-black text-sinai-glow-soft uppercase tracking-wider">
                We do not hand over roadmaps. <br className="hidden sm:block" />
                We build the systems.
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Oracle APEX</h4>
              <p className="text-sm text-zinc-400">enterprise application development, Oracle Forms migration, ORDS integration, PL/SQL performance engineering</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">AI Integration</h4>
              <p className="text-sm text-zinc-400">natural language analytics, RAG architectures, workflow-level automation with strict access controls</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Web Development</h4>
              <p className="text-sm text-zinc-400">SaaS platforms, secure operational portals, role-based data environments</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Mobile Development</h4>
              <p className="text-sm text-zinc-400">field operations apps, approval workflows, real-time Oracle APEX backend integration</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
