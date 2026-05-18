"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

// --- Type definitions ---
export interface ServiceCapability {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

// --- Streaming Typewriter Text Component ---
const StreamingText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  useEffect(() => {
    if (!mounted) return;

    const startTimeout = setTimeout(() => {
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
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, effectiveReduceMotion, mounted]);

  return <span className={className}>{displayedText}</span>;
};

// --- Glowing Particle Cloud Component ---
export const Particles = ({ count = 10 }: { count?: number }) => {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<{ x: string; delay: number }[]>(
    []
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
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
  }, [count]);

  if (!mounted) return null;

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ x: pos.x, y: shouldReduceMotion ? "50%" : "110%" }}
          animate={shouldReduceMotion ? {} : { y: "-10%", rotate: 360 }}
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

// --- Centered Neural / Branding Core Component ---
export const NeuralCore = ({
  centerTextTop = "APEX",
  centerTextBottom = "EXPERTS",
  versionLabel = "APEX_ENGINE_V2.0",
  orbitTexts = ["REACT_19", "NEXT_JS", "V8_ENG"],
  logo,
}: {
  centerTextTop?: string;
  centerTextBottom?: string;
  versionLabel?: string;
  orbitTexts?: string[];
  logo?: React.ReactNode;
}) => {
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
              {versionLabel}
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
            {logo ? (
              <div className="flex flex-col items-center justify-center">
                {logo}
              </div>
            ) : (
              <h3 className="text-6xl font-black tracking-normal text-white flex flex-col items-center leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">
                  {centerTextTop}
                </span>
                <span className="text-[10px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">
                  {centerTextBottom}
                </span>
              </h3>
            )}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-sinai-glow-orange/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* Orbiting Data Fragments */}
        {orbitTexts.map((text, i) => (
          <motion.div
            key={i}
            animate={effectiveReduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-normal">
              {text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Scanning Ring */}
      {!effectiveReduceMotion && (
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/25 rounded-full"
        />
      )}
    </div>
  );
};

// --- Orbital Node Interactive Element Component ---
export const OrbitalNode = ({
  cap,
  index,
  total,
  active,
  onEnter,
  onLeave,
  radius = 320,
}: {
  cap: ServiceCapability;
  index: number;
  total: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  radius?: number;
}) => {
  const angle = (index / total) * Math.PI * 2;
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
          className={`absolute inset-0 bg-white/[0.03] border rounded-[2rem] rotate-45 transition-all duration-500 ${active ? "rotate-90 border-sinai-glow-orange bg-sinai-glow-orange/5 shadow-[0_0_30px_rgba(217,130,47,0.09)]" : "border-white/10 group-hover:border-white/30"}`}
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

// --- Capability Detailed View Component ---
export const CapabilityDetailView = ({
  cap,
  syncLabel = "ENGINE_SYNC: ACTIVE",
  versionLabel = "V8_VER: 12.4.X",
  badgePrefix = "Capability",
}: {
  cap: ServiceCapability;
  syncLabel?: string;
  versionLabel?: string;
  badgePrefix?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 lg:p-8 rounded-[2rem] relative overflow-hidden group pointer-events-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-50 pointer-events-none" />

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
            {badgePrefix}
            {" // "}
            {cap.id}
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-4xl md:text-5xl font-black tracking-normal leading-tight">
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
            {syncLabel}
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>{versionLabel}</span>
        </div>
      </div>
    </div>
  );
};
