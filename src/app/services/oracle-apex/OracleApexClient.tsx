"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Cpu,
  GraduationCap,
  Palette,
  CloudUpload,
  ShieldCheck,
} from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

interface OracleCapability {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

// --- Content Data ---

const APEX_CAPABILITIES = [
  {
    id: "01",
    title: "Development",
    desc: "End-to-end engineering of mission-critical APEX applications. We specialize in advanced data modeling, custom plugin development, high-performance database design, and hybrid mobile solutions with enterprise reporting.",
    icon: <Code2 className="w-8 h-8" />,
    image: "/images/apex-dev-core.png",
  },
  {
    id: "02",
    title: "Integration",
    desc: "Seamlessly connecting your APEX ecosystem with third-party interfaces, advanced JavaScript libraries, and modern utility frameworks. Robust implementations of payment gateways, mailing protocols, and complex API orchestrations.",
    icon: <Cpu className="w-8 h-8" />,
    image: "/images/apex-ai-workflow.png",
  },
  {
    id: "03",
    title: "Training",
    desc: "Elite corporate and educational training modules tailored for all levels. From fundamental APEX building blocks to expert-level architectural mastery, our specialists empower your team with Oracle excellence.",
    icon: <GraduationCap className="w-8 h-8" />,
    image: "/images/apex-training-hub.png",
  },
  {
    id: "04",
    title: "Designing",
    desc: "Aesthetic precision meets functional utility. We deliver creative, user-centric theme development and custom UI layouts that prioritize engagement and intuitive navigation while maintaining Oracle's core performance.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/project1.png",
  },
  {
    id: "05",
    title: "Migration",
    desc: "Frictionless digital transformation services. We expertly migrate Forms to APEX, Excel workflows to centralized applications, and On-Premises environments to the Oracle Cloud with zero data loss and hardened security.",
    icon: <CloudUpload className="w-8 h-8" />,
    image: "/images/project2.png",
  },
  {
    id: "06",
    title: "Support",
    desc: "Round-the-clock enterprise support for servers and applications. Proactive 24-hour monitoring and rapid-response maintenance to ensure your Oracle APEX infrastructure remains synchronized and optimal.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/apex-training-hub.png",
  },
];

// --- Sub-Components (Exactly from AI-Automation) ---

const StreamingText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  useEffect(() => {
    const startTimeout = setTimeout(
      () => {
        let i = 0;
        const interval = setInterval(
          () => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
          },
          effectiveReduceMotion ? 10 : 30
        );
        return () => clearInterval(interval);
      },
      effectiveReduceMotion ? 100 : delay
    );

    return () => clearTimeout(startTimeout);
  }, [text, delay, effectiveReduceMotion]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${effectiveReduceMotion ? "" : "animate-pulse"} inline-block w-1 h-8 md:h-12 bg-sinai-glow-orange ml-1`}
      />
    </span>
  );
};

const NeuralCore = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
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
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_64px_rgba(217,130,47,0.055)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

        {/* Internal Pulsing Plasma */}
        <motion.div
          animate={
            effectiveReduceMotion
              ? { opacity: 0.4 }
              : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/[0.08] blur-[60px]"
        />

        {/* Central Branding Module */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/25 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span
                className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
              />
              ORACLE_ENGINE_V24.1
            </div>
            {!effectiveReduceMotion && (
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full"
              />
            )}
          </div>

          <div className="relative">
            <h3 className="text-6xl font-black tracking-normal text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">
                APEX
              </span>
              <span className="text-[10px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">
                EXPERTS
              </span>
            </h3>
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-sinai-glow-orange/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* Orbiting Data Fragments */}
        {!effectiveReduceMotion &&
          APEX_CAPABILITIES.slice(0, 3).map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-normal">
                {i === 0 ? "0x7F" : i === 1 ? "DB_MOD" : "SQL_X"}
              </div>
            </motion.div>
          ))}
      </div>

      {/* Floating Scanning Ring */}
      <motion.div
        animate={
          effectiveReduceMotion
            ? { opacity: 0.1, scale: 1 }
            : { scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/25 rounded-full"
      />
    </div>
  );
};

const OrbitalNode = ({
  cap,
  index,
  total,
  active,
  onEnter,
  onLeave,
}: {
  cap: OracleCapability;
  index: number;
  total: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 320;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: active ? 1.2 : 1,
        filter: active ? "blur(0px)" : "blur(0.5px)",
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
        <div
          className={`absolute inset-0 bg-white/[0.03] border rounded-[2rem] rotate-45 transition-all duration-500 ${active ? "rotate-90 border-sinai-glow-orange shadow-[0_0_30px_rgba(217,130,47,0.09)] bg-sinai-glow-orange/5" : "border-white/10 group-hover:border-white/30"}`}
        />
        <div
          className={`relative z-10 transition-colors duration-500 ${active ? "text-sinai-glow-orange scale-110" : "text-zinc-500 group-hover:text-white"}`}
        >
          {cap.icon}
        </div>

        <div
          style={{
            width: radius,
            transform: `rotate(${angle + Math.PI}rad)`,
            transformOrigin: "left center",
          }}
          className={`absolute left-1/2 top-1/2 h-px transition-opacity duration-500 ${active ? "bg-sinai-glow-orange/40 opacity-100" : "bg-white/5 opacity-40"} pointer-events-none`}
        />
      </div>

      <div
        className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${active ? "opacity-100 translate-y-2" : "opacity-20 group-hover:opacity-60"}`}
      >
        <span className="text-[10px] font-mono text-white tracking-[0.4em] font-bold uppercase">
          {cap.title}
        </span>
      </div>
    </motion.div>
  );
};

const CapabilityDetailView = ({ cap }: { cap: OracleCapability }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 lg:p-8 rounded-[2rem] relative overflow-hidden group pointer-events-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-50" />

      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] z-10">
        <Image
          src={cap.image}
          alt={cap.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="space-y-8 relative z-10 text-left">
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/[0.08] border border-sinai-glow-orange/25 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">
            Oracle_Capability // {cap.id}
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-black tracking-normal leading-tight">
            {cap.title}
          </h3>
          <div className="min-h-[100px]">
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              <StreamingText text={cap.desc} delay={100} />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600">
          <span className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange/55 ${effectiveReduceMotion ? "" : "animate-pulse"}`}
            />
            SYSTEM_SYNC: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>SCHEMA_V: 0x2410</span>
        </div>
      </div>
    </div>
  );
};

const Particles = ({ count = 10 }: { count?: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [positions, setPositions] = React.useState<
    { x: string; delay: number }[]
  >([]);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      setPositions(
        [...Array(count)].map(() => ({
          x: Math.random() * 100 + "%",
          delay: Math.random() * 10,
        }))
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [count, shouldReduceMotion]);

  if (!mounted || shouldReduceMotion) return null;

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ x: pos.x, y: "110%" }}
          animate={{ y: "-10%", rotate: 360 }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: pos.delay,
          }}
          className="absolute w-1 h-1 bg-sinai-glow-orange/[0.08] rounded-full blur-[1px]"
        />
      ))}
    </>
  );
};

const OracleApexHero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-[linear-gradient(180deg,#06080a_0%,#080a0d_50%,#06080a_100%)] pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,130,47,0.055)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,130,47,0.04)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,10,0.18)_0%,transparent_42%,rgba(6,8,10,0.88)_100%)]" />
      <div className="apex-ambient-grid" />

      <div className="apex-container-wide relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.82fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(30rem,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-full min-w-0 max-w-3xl space-y-8 text-left"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 mb-4 sm:gap-4">
                <div className="h-px w-8 bg-sinai-glow-orange/30 sm:w-12" />
                <span className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] uppercase tracking-[0.24em] text-sinai-glow-orange font-bold sm:tracking-[0.5em]">
                  ORACLE_APEX_ENGINE // SOL_02
                </span>
              </div>

              <h1 className="max-w-full text-balance text-4xl font-black tracking-normal leading-[0.88] text-white sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
                Oracle APEX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                  Power.
                </span>
              </h1>

              <p className="text-base leading-relaxed text-zinc-400 sm:text-xl md:text-2xl max-w-full font-light">
                We engineer mission-critical enterprise applications with the
                speed of low-code and the reliability of Oracle. Transforming
                complex data into high-performance digital assets.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center px-6 py-5 text-center sm:w-auto sm:px-12 sm:py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-bold text-sm tracking-[0.22em] uppercase sm:tracking-[0.3em] transition-all hover:shadow-[0_0_42px_rgba(217,130,47,0.12)]"
              >
                <span className="relative z-10">Initialize Engagement</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex w-full items-center justify-center px-6 py-5 text-center sm:w-auto sm:px-12 sm:py-6 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold text-sm tracking-[0.22em] uppercase sm:tracking-[0.3em] hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                Registry Details
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-white/5 sm:grid-cols-3 sm:gap-8 sm:pt-12">
              {[
                { label: "DEV_VELOCITY", value: "20X" },
                { label: "DATA_SYNC", value: "REALTIME" },
                { label: "SECURITY_LEVEL", value: "MILITARY" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[8px] font-mono text-zinc-600 mb-1 tracking-widest uppercase">
                    {stat.label}
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-full justify-self-end lg:max-w-[34rem] xl:max-w-[40rem] 2xl:max-w-2xl"
          >
            <div className="relative aspect-square max-w-2xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_72px_rgba(217,130,47,0.08)] group">
              <Image
                src="/images/oracle-apex-hero.png"
                alt="Oracle APEX Premium Development"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[5000ms] brightness-75"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              {/* Technical HUD Overlays */}
              <div className="absolute top-6 right-8 text-[8px] font-mono text-sinai-glow-orange/70 tracking-[0.2em] text-right">
                SYSTEM_STATUS: NOMINAL
                <br />
                DB_MASTERY: LEVEL_MAX
              </div>

              <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500 tracking-[0.2em]">
                CORE_ENGINE_V24.1
                <br />© APEX_EXPERTS_SOLUTIONS
              </div>

              {/* Scanning Line Animation */}
              {!effectiveReduceMotion && (
                <motion.div
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sinai-glow-orange/35 to-transparent z-20 pointer-events-none"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Particles count={8} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent via-sinai-bg-base/45 to-sinai-bg-base" />
    </section>
  );
};

export default function OracleApexClient() {
  const [activeCapId, setActiveCapId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  const activeCap = APEX_CAPABILITIES.find((c) => c.id === activeCapId);

  return (
    <div className="relative bg-sinai-bg-base text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black">
      <OracleApexHero />

      {/* The Core: Oracle APEX Capability Hub - Design Identical to AI-Automation */}
      <section
        id="capabilities"
        className="py-16 lg:py-24 relative overflow-hidden bg-[#080a0d] min-h-[760px] lg:min-h-[860px]"
      >
        <div className="apex-container-wide">
          <SectionReveal>
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                  Apex_Orchestrator // V24.1
                </span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-normal leading-none">
                The Oracle APEX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">
                  Capability Hub
                </span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            {/* Orbital Nodes - Always Visible */}
            <div className="absolute inset-0 z-50 pointer-events-none">
              {APEX_CAPABILITIES.map((cap, i) => (
                <OrbitalNode
                  key={cap.id}
                  cap={cap}
                  index={i}
                  total={APEX_CAPABILITIES.length}
                  active={activeCapId === cap.id}
                  onEnter={() => setActiveCapId(cap.id)}
                  onLeave={() => setActiveCapId(null)}
                />
              ))}
            </div>

            {/* Central Area: Hub or Detail */}
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-40 pointer-events-none">
              <AnimatePresence mode="wait">
                {!activeCapId ? (
                  <motion.div
                    key="hub-core"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                  >
                    <NeuralCore />
                  </motion.div>
                ) : (
                  <motion.div
                    key="detail-card"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    <CapabilityDetailView cap={activeCap!} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technical Background Schematic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-10">
              <div className="w-[700px] h-[700px] border border-white/5 rounded-full" />
              <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
              <div
                className={`absolute w-[350px] h-[350px] border border-sinai-glow-orange/10 rounded-full ${effectiveReduceMotion ? "" : "animate-pulse"}`}
              />
            </div>
          </div>
        </div>

        {/* Floating Technical Tags */}
        <div className="absolute top-20 right-20 text-[8px] font-mono text-zinc-800 leading-relaxed uppercase hidden lg:block text-right">
          DB_CORE: CONNECTED
          <br />
          LOW_CODE_PIPELINE: ACTIVE
          <br />
          ORACLE_STATUS: OPTIMAL
        </div>
      </section>

      {/* Deep Dive: APEX Application Development - Technical Design // 02 */}
      <section className="pt-20 lg:pt-28 pb-16 lg:pb-20 relative bg-sinai-bg-base overflow-hidden border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="apex-container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <SectionReveal>
              <div className="space-y-8 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                      Technical_Deep_Dive // 01
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-normal leading-none">
                    APEX <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20 text-balance">
                      Application <br /> Development
                    </span>
                  </h2>
                </div>

                <div className="space-y-7">
                  <div className="p-6 lg:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/15 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/20 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                      />
                      Oracle APEX Application Development
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      We specialize in crafting high-performance Data Models,
                      custom Plugin architectures, and robust Database logic.
                      Our expertise extends to API integrations, AI-assisted
                      features, and reporting workflows inside Oracle APEX.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Plugin Dev",
                        desc: "Bespoke extensions for unique business logic.",
                      },
                      {
                        title: "Database Dev",
                        desc: "Designing schemas for stable APEX apps.",
                      },
                      {
                        title: "Web Services",
                        desc: "Seamless REST/SOAP orchestration.",
                      },
                      {
                        title: "AI Integrations",
                        desc: "Predictive intelligence & LLM capabilities.",
                      },
                      {
                        title: "Reporting",
                        desc: "Analytical insights & custom dashboards.",
                      },
                      {
                        title: "Support",
                        desc: "24/7 Enterprise monitoring & maintenance.",
                        isCTA: true,
                      },
                    ].map((service, i) =>
                      service.isCTA ? (
                        <Link
                          href="/contact"
                          key={i}
                          className="p-6 rounded-2xl bg-sinai-glow-orange/[0.08] border border-sinai-glow-orange/25 hover:bg-sinai-glow-orange/10 transition-all duration-500 group/item relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/10 to-transparent opacity-50" />
                          <div className="relative z-10">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-white ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                              />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-normal">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div
                          key={i}
                          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-all duration-500 group/item"
                        >
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">
                            {service.title}
                          </div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-normal">
                            {service.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_64px_rgba(217,130,47,0.055)] group">
                  <Image
                    src="/images/apex-dev-core.png"
                    alt="APEX Development Core"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />

                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Scanning Line */}
                  <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/10 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-6 left-8 text-[8px] font-mono text-sinai-glow-orange/55 tracking-widest">
                    DB_SYNC: ACTIVE
                    <br />
                    ENGINE_TEMP: 28°C
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    ORACLE_APEX_V24.1
                    <br />© APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-sinai-bg-base/80 backdrop-blur-3xl border border-sinai-glow-orange/20 z-30 shadow-[0_24px_80px_rgba(0,0,0,0.28)] max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">
                    DATA_MODELING
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-1 bg-white/5 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{ width: ["0%", `${30 + i * 20}%`, "0%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="h-full bg-sinai-glow-orange"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive: AI Integration in APEX - Technical Design // 03 */}
      <section className="pt-16 lg:pt-20 pb-20 lg:pb-24 relative bg-sinai-bg-base overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.026)_0%,transparent_70%)] pointer-events-none" />

        <div className="apex-container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Image Left */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_58px_rgba(217,130,47,0.04)] group">
                  <Image
                    src="/images/apex-ai-workflow.png"
                    alt="AI Integration Hub"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />

                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Circular Radar Scan */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-[1px] border-sinai-glow-orange/10 rounded-full scale-[1.2] opacity-50 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-6 right-8 text-[8px] font-mono text-sinai-glow-orange/55 tracking-widest text-right">
                    VECTOR_ENGINE: SYNC
                    <br />
                    AI_MODELS: ACTIVE
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    ORACLE_DATABASE_23AI
                    <br />
                    GENERATIVE_AI_SERVICE
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-sinai-bg-base/80 backdrop-blur-3xl border border-sinai-glow-orange/20 z-30 shadow-[0_24px_80px_rgba(0,0,0,0.28)] max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">
                    AI_INFERENCE
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="text-[8px] text-zinc-500 font-mono">
                          TOKEN_{i}
                        </div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            animate={{
                              width: [
                                `${40 + i * 15}%`,
                                "20%",
                                `${40 + i * 15}%`,
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.7,
                            }}
                            className="h-full bg-sinai-glow-orange"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Content Right */}
            <SectionReveal>
              <div className="space-y-8 text-right lg:text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                      Technical_Deep_Dive // 02
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-normal leading-none uppercase">
                    Oracle APEX <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20 text-balance">
                      AI / Workflow
                    </span>
                  </h2>
                </div>

                <div className="space-y-7">
                  <div className="p-6 lg:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/15 transition-colors text-right lg:text-left">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/20 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 justify-end lg:justify-start">
                      Intelligence-Driven Automation
                      <div
                        className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                      />
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Leverage the power of Oracle Database 23ai directly within
                      APEX. We build advanced RAG (Retrieval-Augmented
                      Generation) systems, vector-based semantic search, and
                      AI-powered workflows that transform how users interact
                      with enterprise data.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Vector Search",
                        desc: "Native semantic discovery within Oracle 23ai.",
                      },
                      {
                        title: "RAG Systems",
                        desc: "Intelligent Retrieval-Augmented Generation.",
                      },
                      {
                        title: "AI Workflows",
                        desc: "APEX workflows and approval logic.",
                      },
                      {
                        title: "Generative AI",
                        desc: "Custom LLM integrations & chat interfaces.",
                      },
                      {
                        title: "Data Analytics",
                        desc: "AI-driven insight extraction & modeling.",
                      },
                      {
                        title: "AI Support",
                        desc: "24/7 AI model monitoring & maintenance.",
                        isCTA: true,
                      },
                    ].map((service, i) =>
                      service.isCTA ? (
                        <Link
                          href="/contact"
                          key={i}
                          className="p-6 rounded-2xl bg-sinai-glow-orange/[0.08] border border-sinai-glow-orange/25 hover:bg-sinai-glow-orange/10 transition-all duration-500 group/item relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/10 to-transparent opacity-50" />
                          <div className="relative z-10 text-right lg:text-left">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2 justify-end lg:justify-start">
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-white ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                              />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-normal">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div
                          key={i}
                          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-all duration-500 group/item text-right lg:text-left"
                        >
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">
                            {service.title}
                          </div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-normal">
                            {service.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive: APEX Migration Services - Technical Design // 04 */}
      <section className="pt-16 lg:pt-20 pb-20 lg:pb-24 relative bg-sinai-bg-base overflow-hidden border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="apex-container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <SectionReveal>
              <div className="space-y-8 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                      Technical_Deep_Dive // 03
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-normal leading-none uppercase">
                    Migration <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20 text-balance">
                      Services
                    </span>
                  </h2>
                </div>

                <div className="space-y-7">
                  <div className="p-6 lg:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/15 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/20 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                      />
                      Legacy Modernization
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      OAC offers seamless transitions for your legacy
                      ecosystems. We specialize in safe, data-loss-prevented
                      migrations that move your business from aging
                      infrastructure to high-performance Oracle Cloud
                      environments.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Forms to APEX",
                        desc: "Migrating legacy Oracle Forms to modern web apps.",
                      },
                      {
                        title: "EXCEL to APEX",
                        desc: "Transforming spreadsheets into collaborative apps.",
                      },
                      {
                        title: "Premises to Cloud",
                        desc: "Moving infrastructure to Oracle Cloud seamlessly.",
                      },
                      {
                        title: "Support",
                        desc: "24/7 Enterprise monitoring & maintenance.",
                        isCTA: true,
                      },
                    ].map((service, i) =>
                      service.isCTA ? (
                        <Link
                          href="/contact"
                          key={i}
                          className="p-6 rounded-2xl bg-sinai-glow-orange/[0.08] border border-sinai-glow-orange/25 hover:bg-sinai-glow-orange/10 transition-all duration-500 group/item relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/10 to-transparent opacity-50" />
                          <div className="relative z-10">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-white ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                              />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-normal">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div
                          key={i}
                          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-all duration-500 group/item"
                        >
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">
                            {service.title}
                          </div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-normal">
                            {service.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_64px_rgba(217,130,47,0.055)] group">
                  <Image
                    src="/images/project3.png"
                    alt="APEX Migration Core"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />

                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Scanning Line */}
                  {!effectiveReduceMotion && (
                    <motion.div
                      animate={{ top: ["-10%", "110%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/10 to-transparent z-20 pointer-events-none"
                    />
                  )}

                  {/* Technical Frame Markers */}
                  <div className="absolute top-6 left-8 text-[8px] font-mono text-sinai-glow-orange/55 tracking-widest">
                    MIGRATION_LINK: STABLE
                    <br />
                    DATA_INTEGRITY: 100%
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    CLOUD_TRANSFORMATION
                    <br />© APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-sinai-bg-base/80 backdrop-blur-3xl border border-sinai-glow-orange/20 z-30 shadow-[0_24px_80px_rgba(0,0,0,0.28)] max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">
                    MIGRATION_PATH
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-1 bg-white/5 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? { width: `${30 + i * 20}%` }
                              : { width: ["0%", `${30 + i * 20}%`, "0%"] }
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="h-full bg-sinai-glow-orange"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive: APEX Training Services - Technical Design // 05 */}
      <section className="pt-16 lg:pt-20 pb-20 lg:pb-24 relative bg-sinai-bg-base overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.026)_0%,transparent_70%)] pointer-events-none" />

        <div className="apex-container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Image Left */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_58px_rgba(217,130,47,0.04)] group">
                  <Image
                    src="/images/apex-training-hub.png"
                    alt="APEX Training Hub"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />

                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Circular Radar Scan */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-[1px] border-sinai-glow-orange/10 rounded-full scale-[1.2] opacity-50 pointer-events-none"
                    />
                  )}

                  {/* Technical Frame Markers */}
                  <div className="absolute top-6 right-8 text-[8px] font-mono text-sinai-glow-orange/55 tracking-widest text-right">
                    TRAINING_MODE: ACTIVE
                    <br />
                    EXPERT_SYNC: OPTIMAL
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    KNOWLEDGE_TRANSFER
                    <br />© APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-sinai-bg-base/80 backdrop-blur-3xl border border-sinai-glow-orange/20 z-30 shadow-[0_24px_80px_rgba(0,0,0,0.28)] max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">
                    SKILL_ANALYSIS
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="text-[8px] text-zinc-500 font-mono">
                          LEVEL_{i}
                        </div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            animate={
                              shouldReduceMotion
                                ? { width: `${40 + i * 15}%` }
                                : {
                                    width: [
                                      `${40 + i * 15}%`,
                                      "20%",
                                      `${40 + i * 15}%`,
                                    ],
                                  }
                            }
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.7,
                            }}
                            className="h-full bg-sinai-glow-orange"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Content Right */}
            <SectionReveal>
              <div className="space-y-8 text-right lg:text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                      Technical_Deep_Dive // 04
                    </span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-normal leading-none uppercase text-balance">
                    Training <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20 text-balance">
                      Services
                    </span>
                  </h2>
                </div>

                <div className="space-y-7">
                  <div className="p-6 lg:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/15 transition-colors text-right lg:text-left">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/20 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 justify-end lg:justify-start">
                      Expert Knowledge Transfer
                      <div
                        className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                      />
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Train your team on Oracle APEX fundamentals, application
                      structure, database logic, and maintainable delivery
                      practices. We offer comprehensive training modules from
                      fundamental building blocks to advanced architectural
                      mastery, tailored for both corporate teams and educational
                      institutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Corporate Training",
                        desc: "Tailored modules for enterprise development teams.",
                      },
                      {
                        title: "Educational Training",
                        desc: "Foundational courses for institutions & students.",
                      },
                      {
                        title: "Expert Support",
                        desc: "24/7 Enterprise monitoring & maintenance.",
                        isCTA: true,
                      },
                    ].map((service, i) =>
                      service.isCTA ? (
                        <Link
                          href="/contact"
                          key={i}
                          className="p-6 rounded-2xl bg-sinai-glow-orange/[0.08] border border-sinai-glow-orange/25 hover:bg-sinai-glow-orange/10 transition-all duration-500 group/item relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/10 to-transparent opacity-50" />
                          <div className="relative z-10 text-right lg:text-left">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2 justify-end lg:justify-start">
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-white ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                              />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-normal">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div
                          key={i}
                          className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-all duration-500 group/item text-right lg:text-left"
                        >
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">
                            {service.title}
                          </div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-normal">
                            {service.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The Oracle Legacy: 17+ Years of Excellence - SUPER PREMIUM */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-sinai-bg-base">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,130,47,0.055)_0%,transparent_60%)] pointer-events-none" />

        {/* Scrolling Technical Text Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-col justify-between py-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`whitespace-nowrap text-[12rem] font-black leading-none tracking-normal flex gap-8 lg:gap-10 ${effectiveReduceMotion ? "" : "animate-infinite-scroll"}`}
            >
              <span className="text-white">LEGACY_ENGINEERING</span>
              <span className="text-transparent stroke-white stroke-1">
                EST_2007
              </span>
              <span className="text-white">ORACLE_MASTERY</span>
              <span className="text-transparent stroke-white stroke-1">
                17_YEARS
              </span>
            </div>
          ))}
        </div>

        <div className="apex-container-wide relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
              <div className="lg:col-span-7 space-y-8">
                <SectionReveal>
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-4">
                      <div className="w-12 h-px bg-sinai-glow-orange" />
                      <span className="text-sinai-glow-orange font-mono text-xs tracking-[0.6em] font-black uppercase">
                        The_Expertise_Legacy
                      </span>
                    </div>
                    <h2 className="text-7xl md:text-[10rem] font-black tracking-normal leading-[0.8] text-white">
                      17 Years <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-soft via-white to-white/20">
                        Of Mastery.
                      </span>
                    </h2>
                  </div>
                </SectionReveal>

                <SectionReveal>
                  <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                    Long-term Oracle APEX experience across internal
                    applications, reporting, integrations, and training
                  </p>
                </SectionReveal>
              </div>

              <div className="lg:col-span-5">
                <SectionReveal>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-sinai-glow-orange/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
                      <div className="relative p-6 lg:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden">
                        <div className="text-[12px] font-mono text-zinc-500 mb-4 tracking-[0.4em] uppercase">
                          Global_Impact_Index
                        </div>
                        <div className="text-8xl font-black text-white mb-2 font-mono tabular-nums tracking-normal">
                          12+
                        </div>
                        <div className="text-lg text-zinc-400 font-light uppercase tracking-widest">
                          Institutions Empowered
                        </div>

                        {/* Technical HUD element inside card */}
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                          <div className="flex gap-2">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1 h-4 bg-sinai-glow-orange/35 rounded-full ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                          <div className="text-[9px] font-mono text-zinc-700 uppercase">
                            Success_Rate: 100%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <SectionReveal>
              <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  { label: "ESTABLISHED", value: "2007" },
                  { label: "LINES_OF_CODE", value: "5M+" },
                  { label: "DEPLOYMENTS", value: "CRITICAL" },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] font-black uppercase">
                      {item.label}
                    </div>
                    <div className="text-3xl font-black text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Related Case Study: ApexCloud ERP Transformation - SUPER PREMIUM */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#080a0d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="apex-container-wide">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10 lg:mb-12">
              <div className="h-px w-12 bg-sinai-glow-orange" />
              <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
                Case_Study // 01
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-8">
              <SectionReveal>
                <div className="relative group aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                  <Image
                    src="/images/project2.png"
                    alt="ApexCloud ERP Transformation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Technical Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="space-y-4">
                      <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase">
                        Enterprise_Modernization
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black text-white tracking-normal">
                        ApexCloud ERP
                      </h3>
                    </div>
                    <div className="hidden md:block">
                      <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-2">
                        Build_Version
                      </div>
                      <div className="text-xl font-bold text-sinai-glow-orange">
                        APEX_PRO_V24
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-4 space-y-8 text-left">
              <SectionReveal>
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-white tracking-normal leading-tight">
                    Transforming complex financial legacy systems into
                    high-performance digital hubs.
                  </h4>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    We migrated a multi-decade legacy ERP system for a global
                    financial institution into a unified Oracle APEX
                    environment, reducing operational complexity by 60% and
                    improving data throughput by 300%.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "PERFORMANCE_GAIN", value: "+300%" },
                    { label: "TCO_REDUCTION", value: "-60%" },
                    { label: "SECURITY_SYNC", value: "NATIVE" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                    >
                      <div className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">
                        {stat.label}
                      </div>
                      <div className="text-xl font-bold text-sinai-glow-orange tracking-normal">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 text-[10px] font-mono text-white tracking-[0.4em] font-black uppercase group"
                >
                  View Project Details
                  <div className="w-8 h-px bg-sinai-glow-orange group-hover:w-12 transition-all duration-500" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Cinematic Masterpiece */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-sinai-bg-base">
        {/* Background Ambient Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,130,47,0.055)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Technical HUD Frame */}
        <div className="absolute inset-20 border border-white/[0.03] pointer-events-none hidden md:block">
          <div className="absolute top-0 left-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute top-0 left-0 w-px h-20 bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-px h-20 bg-sinai-glow-orange/30" />
        </div>

        <div className="apex-container-wide relative z-10">
          <SectionReveal>
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Top Branding Tag */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md">
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                  />
                  <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">
                    Engagement_Initialization // APEX_NODE_V24.1
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-7xl md:text-[10rem] font-black tracking-normal leading-[0.8] text-white">
                  Ready to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">
                    Scale Your Vision?
                  </span>
                </h2>
                <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
                  Join forces with{" "}
                  <span className="text-white font-bold">APEX Experts</span> to
                  engineer the next generation of enterprise excellence.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 pt-8">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 sm:px-14 lg:px-16 lg:py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-xl tracking-[0.4em] uppercase transition-all hover:shadow-[0_0_54px_rgba(217,130,47,0.16)] hover:scale-105 active:scale-95 duration-500"
                >
                  <span className="relative z-10">Initialize Project</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                  {!effectiveReduceMotion && (
                    <motion.div
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </Link>

                <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-sinai-glow-orange/55" />
                    Secure_Node: Active
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span>Available for Q3-Q4 2026</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Floating Data Decor */}
        <div className="absolute bottom-12 right-12 text-[8px] font-mono text-zinc-800 tracking-widest hidden lg:block uppercase">
          Apex_Experts_Oracle_Studio
          <br />
          System_Build_Hash: 0xAPEX_5A11
        </div>
      </section>
    </div>
  );
}
