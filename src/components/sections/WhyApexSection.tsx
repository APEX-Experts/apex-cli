"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Cpu,
  Blocks,
  LayoutGrid,
  Database,
  Focus,
  Box,
} from "lucide-react";
import Link from "next/link";
import { WhyUsIcon } from "../Icons";

const VALUES = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Oracle Engineering Depth",
    desc: "17+ years of Oracle enterprise engineering",
    state:
      "The same senior experts who design your architecture also deliver it.",
  },
  {
    icon: <Focus className="h-6 w-6" />,
    title: "Specialized Focus",
    desc: "Focused expertise, not generalist execution",
    state:
      "We specialize in Oracle APEX, enterprise systems, and applied AI and go deep where it matters.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Production-Grade AI Systems",
    desc: "AI systems built for real operations",
    state:
      "Every system runs inside real workflows, permissions, and business constraints, not demos.",
  },
  {
    icon: <WhyUsIcon height={24} width={24} index={3} />,
    title: "Proven SaaS Execution",
    desc: "Real SaaS products, real deployments",
    state:
      "MyQuery, ASKLYZE, and Tasto demonstrate our ability to build and ship production systems.",
  },
  {
    icon: <WhyUsIcon height={24} width={24} index={4} />,
    title: "Long-Term Architecture Design",
    desc: "Built to eliminate technical debt",
    state:
      "Every system is designed for long-term stability, scalability, and maintainability.",
  },
];

interface ValueCardProps {
  val: (typeof VALUES)[0];
  index: number;
}

function ValueCard({ val, index }: ValueCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-start sm:p-8"
    >
      {/* Mouse Following Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 backdrop-blur-[48px] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            1500px circle at ${position.x}px ${position.y}px,
            rgba(217,130,47,0.15),
            rgba(217,130,47,0.05) 30%,
            transparent 70%
          )`,
        }}
      />

      <div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/3 border border-white/8 text-white/30 group-hover:text-white group-hover:border-sinai-glow-orange/40 group-hover:bg-sinai-glow-orange/10 transition-all duration-300">
          {val.icon}
        </div>
        <div>
          <h3 className="mb-3 text-2xl font-bold text-white">{val.title}</h3>
          <p className="mb-2 text-sm font-medium text-sinai-glow-orange">
            {val.desc}
          </p>
          <p className="text-sm text-white/50">{val.state}</p>
          <div className="separator-gradient" />
        </div>
      </div>
    </motion.div>
  );
}

export function WhyApexSection() {
  return (
    <section className="section-shell relative py-24">
      <div className="section-label mb-12">04 // Why Us</div>

      <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="sticky top-32">
            <h2 className="mb-8 text-3xl md:text-5xl font-bold leading-[140%] tracking-[-0.075rem]">
              Why Organizations{" "}
              <span className="text-sinai-glow-orange">Choose Us</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Most enterprises don’t fail because of lack of tools, they fail
                because their systems are fragmented, fragile, and not built for
                real operational scale.
              </p>
              <p>
                We help organizations fix that at the core by combining Oracle
                APEX engineering, applied AI, and enterprise data architecture
                into production-grade systems.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-white/15 why-us-gradient p-8">
              <h3 className="mb-4 text-base tracking-widest text-sinai-glow-orange">
                Ready to Assess Your System Architecture?
              </h3>
              <p className="mb-6 text-sm text-white">
                Start with a 30-minute technical call. We will review your
                environment, identify constraints, and define whether and how we
                can help.
              </p>
              <Link
                href="/contact"
                className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-16 rounded-full font-black md:text-lg tracking-widest transition-all duration-300 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)]  w-full md:w-fit max-md:justify-center"
              >
                Schedule Technical Call
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {VALUES.map((val, i) => (
              <ValueCard key={i} val={val} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
