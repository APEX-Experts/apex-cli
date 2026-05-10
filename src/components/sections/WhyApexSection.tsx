"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Target, Cpu, Blocks, LayoutGrid } from "lucide-react";

const VALUES = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "1. Oracle Engineering Depth",
    desc: "17+ years of Oracle enterprise engineering",
    state: "The same senior experts who design your architecture also deliver it.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "2. Specialized Focus",
    desc: "Focused expertise, not generalist execution",
    state: "We specialize in Oracle APEX, enterprise systems, and applied AI and go deep where it matters.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "3. Production-Grade AI Systems",
    desc: "AI systems built for real operations",
    state: "Every system runs inside real workflows, permissions, and business constraints, not demos.",
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "4. Proven SaaS Execution",
    desc: "Real SaaS products, real deployments",
    state: "MyQuery, ASKLYZE, and Tasto demonstrate our ability to build and ship production systems.",
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "5. Long-Term Architecture Design",
    desc: "Built to eliminate technical debt",
    state: "Every system is designed for long-term stability, scalability, and maintainability.",
  },
];

export function WhyApexSection() {
  return (
    <section className="section-shell relative py-24">
      <div className="section-label mb-12">04 // Why Us</div>
      
      <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="sticky top-32">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Organizations Choose Us
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Most enterprises don’t fail because of lack of tools, they fail because their systems are fragmented, fragile, and not built for real operational scale.
              </p>
              <p>
                We help organizations fix that at the core by combining Oracle APEX engineering, applied AI, and enterprise data architecture into production-grade systems.
              </p>
            </div>
            
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-sinai-glow-soft">
                Ready to assess your system architecture?
              </h3>
              <p className="mb-6 text-sm text-zinc-400">
                Start with a 30-minute technical call. We will review your environment, identify constraints, and define whether and how we can help.
              </p>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-bold text-black transition-colors hover:bg-sinai-glow-soft">
                Schedule Technical Call
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {VALUES.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col gap-4 rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05] sm:flex-row sm:items-center sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sinai-glow-orange/10 text-sinai-glow-orange">
                  {val.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-white group-hover:text-sinai-glow-soft transition-colors">
                    {val.title}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-sinai-glow-orange">
                    {val.desc}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {val.state}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
