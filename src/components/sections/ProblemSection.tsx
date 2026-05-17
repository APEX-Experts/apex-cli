"use client";

import { motion } from "framer-motion";
import { Clock, Database, Lock, ServerCrash } from "lucide-react";
import { useRef, useState } from "react";

const ISSUES = [
  {
    icon: <ServerCrash className="h-6 w-6" />,
    text: "Oracle Forms systems that are end-of-life but still running core processes.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    text: "Systems operate in silos (ERP, CRM, internal tools disconnected).",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    text: "Reporting that requires manual data extraction before anyone can make a decision.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    text: "Legacy systems restrict integration and scalability.",
  },
];

const RESULTS = [
  {
    header: "System-Level Breakdown",
    points: [
      "Legacy Oracle Forms applications blocking modernization roadmaps.",
      "Fragmented data across siloed operational systems and databases.",
      "Manual reporting cycles introducing delays in business decision-making.",
      "AI initiatives that reach proof-of-concept and never reach production.",
      "Mobile and field teams disconnected from core approval workflows.",
      "APEX environments underperforming due to poor architecture and PL/SQL debt.",
    ],
  },
  {
    header: "Immediate Operational Impact",
    points: [
      "Technical debt accumulates.",
      "Operational teams work around broken processes.",
      "Modernization projects stall because the risk of disruption is too high.",
    ],
  },
];

export function ProblemSection() {
  return (
    <section className="section-shell relative overflow-hidden py-8 md:py-24">
      <div className="section-label mb-12 text-center md:text-start">
        01 // The Problem
      </div>

      <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-center md:text-start">
        What Slows Enterprise{" "}
        <span className="text-sinai-glow-orange">Systems Down</span>
      </h2>
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Left: What slows them down */}
        <div>
          <div className="space-y-6">
            {ISSUES.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group transition-all duration-500 flex flex-col md:flex-row items-center md:items-start gap-4 rounded-2xl border border-white/5 bg-white/2 p-6 hover:bg-white/4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sinai-glow-orange/10 text-sinai-glow-orange group-hover:bg-sinai-glow-orange group-hover:text-white transition-all duration-500">
                  {issue.icon}
                </div>
                <p className="text-lg leading-relaxed text-zinc-300 text-center md:text-start">
                  {issue.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: The result is predictable */}
        <PredictableResultCard />
      </div>
    </section>
  );
}

function PredictableResultCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-x-6 -inset-y-10 z-0 bg-linear-to-b from-sinai-glow-orange/5 to-transparent blur-3xl" />

      {/* Cursor-follow gradient */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `
            radial-gradient(
              1800px circle at ${position.x}px ${position.y}px,
              rgba(217,130,47,0.25),
              rgba(217,130,47,0.10) 30%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm flex flex-col items-center md:items-start">
          <span className="rounded-2xl border border-sinai-glow-orange/20 bg-sinai-glow-orange/10 text-sinai-glow-orange px-4 py-3 mb-8 max-w-fit">
            The result is predictable
          </span>
          <ul className="space-y-4 ">
            {RESULTS.map((result, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start gap-3 text-sm text-zinc-400 sm:text-base"
              >
                <h3 className="text-base font-bold text-white">
                  {result.header}
                </h3>
                <ul className="space-y-1">
                  {result.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                      <span className="text-sm leading-[28px]">{point}</span>
                    </li>
                  ))}
                  {i === 0 && <div className="h-px w-full bg-white/10 mt-3" />}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
