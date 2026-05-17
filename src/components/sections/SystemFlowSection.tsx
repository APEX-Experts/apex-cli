"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  LayoutTemplate,
  Network,
  Workflow,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import SubHeader from "../ui/SubHeader";
import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "data",
    name: "Data Layer",
    desc: "DBs / Reports / Datasets",
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: "app",
    name: "Application Layer",
    desc: "Web Apps / APEX / Tools",
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
  {
    id: "integration",
    name: "Integration Layer",
    desc: "APIs / ORDS / Services",
    icon: <Network className="h-5 w-5" />,
  },
  {
    id: "workflow",
    name: "Workflow Layer",
    desc: "Approvals / Automation / Business Processes",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    id: "ai",
    name: "AI Layer",
    desc: "ASKLYZE / AI Assistants (Insights & Automation)",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
];

export function SystemFlowSection() {
  return (
    <section className="section-shell relative overflow-hidden py-8 md:py-24">
      <div className="mx-auto flex flex-col items-center md:items-start gap-6 text-center">
        <Badge>REAL-WORLD SOFTWARE</Badge>

        <h2 className="text-4xl font-bold tracking-[-0.075rem] text-white lg:text-6xl">
          We Don’t Build Features.{" "}
          <span className="text-sinai-glow-orange">We Build Systems.</span>
        </h2>

        <SubHeader>
          We do not hand over roadmaps. We build the systems.
        </SubHeader>
      </div>

      <LayersLayout />
    </section>
  );
}

function LayersLayout() {
  return (
    <>
      {/* MOBILE / TABLET */}
      <div className="mx-auto flex max-w-xl flex-col items-center px-4 lg:hidden max-md:mt-8">
        {LAYERS.map((layer, i) => (
          <div key={layer.id} className="flex w-full flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className="
          group
          relative
          flex
          min-h-[110px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-white/10
          bg-[#06080a]
          px-6
          py-6
          text-center
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-sinai-glow-orange/40
          hover:bg-[#080a0d]
        "
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="text-white/50 transition-all duration-500 group-hover:text-white">
                  {layer.icon}
                </div>

                <h3 className="text-lg font-semibold text-white/50 transition-all duration-500 group-hover:text-white">
                  {layer.name}
                </h3>
              </div>

              <p className="text-center text-sm font-medium leading-5 text-white/50 transition-all duration-500 group-hover:text-white">
                {layer.desc}
              </p>
            </motion.div>

            {/* PIPE */}
            {i !== LAYERS.length - 1 && (
              <svg
                className="pointer-events-none h-16 w-6 overflow-visible"
                viewBox="0 0 24 64"
                fill="none"
              >
                {/* Pipe body */}
                <path
                  d="M12 0 L12 64"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Inner line */}
                <path
                  d="M12 0 L12 64"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />

                {/* White flow */}
                <path
                  d="M12 0 L12 64"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  pathLength={100}
                  strokeDasharray="18 88"
                  className="pipe-flow-single"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="relative mx-auto hidden max-w-7xl lg:block">
        <style>{`
        @keyframes pipeFlow {
          from {
            stroke-dashoffset: 80;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .pipe-flow {
          animation: pipeFlow 2s linear infinite;
        }

        @keyframes pipeFlowSingle {
          from {
            stroke-dashoffset: 100;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        .pipe-flow-single {
          animation: pipeFlowSingle 2.5s linear infinite;
        }
      `}</style>

        {/* PIPE NETWORK */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 1800 520"
          fill="none"
        >
          {/* DATA -> APP */}
          <Pipe
            d="
      M 280 450
      L 550 4
    "
          />

          {/* APP -> INTEGRATION */}
          <Pipe
            d="
      M 550 105
      L 960 450
    "
          />

          {/* INTEGRATION -> WORKFLOW */}
          <Pipe
            d="
      M 940 450
      L 1180 4
    "
          />

          {/* WORKFLOW -> AI */}
          <Pipe
            d="
      M 1180 105
      L 1600 450
    "
          />
        </svg>

        {/* CARDS */}
        <div className="relative z-10 flex items-center px-8 py-16 gap-x-0">
          {LAYERS.map((layer, i) => {
            const top = i % 2 !== 0;

            return (
              <div
                key={layer.id}
                className={`flex h-[420px] ${top ? "items-start" : "items-end"} ${i === 1 ? "translate-x-[-50%]" : i === 2 ? "translate-x-[-75%]" : i === 3 ? "translate-x-[-125%]" : i === 4 ? "translate-x-[-150%]" : ""} pointer-events-none`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  className={cn(
                    `
                  group
                  relative
                  flex
                  h-[100px]
                  w-[355px]
                  flex-col
                  justify-center
                  items-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#06080a]
                  px-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-sinai-glow-orange/40
                  hover:bg-[#080a0d]
                  pointer-events-auto
                  ${i === 0 ? "z-100" : i === 1 ? "z-99" : i === 2 ? "z-98" : i === 3 ? "z-97" : "z-96"}
                `
                  )}
                >
                  <div className="relative z-10 mb-3 flex items-center gap-3 *:transition-all *:duration-500">
                    <div className="text-white/50 group-hover:text-white">
                      {layer.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-white/50 group-hover:text-white transition-all duration-500">
                      {layer.name}
                    </h3>
                  </div>

                  <p className="z-10 font-medium text-sm leading-5 text-center text-white/50 group-hover:text-white transition-all duration-500">
                    {layer.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Pipe({ d }: { d: string }) {
  return (
    <>
      {/* Pipe body */}
      <path
        d={d}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner line */}
      <path
        d={d}
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Flow animation */}
      <path
        d={d}
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        pathLength={100}
        strokeDasharray="12 88"
        className="pipe-flow-single"
      />
    </>
  );
}
