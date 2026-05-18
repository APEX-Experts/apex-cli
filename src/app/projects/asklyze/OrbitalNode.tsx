import { ProjectFeatureIcon } from "@/components/Icons";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import {
  ASKLYZE_FEATURES,
  MYQUERY_FEATURES,
  TASTO_FEATURES,
} from "@/constants";
import { ProjectName } from "@/types";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Capability {
  id: string;
  title: string;
  desc: string;
  image: string;
}

const StreamingText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(
        () => {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          if (i >= text.length) clearInterval(interval);
        },
        shouldReduceMotion ? 10 : 30
      );
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, shouldReduceMotion]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${shouldReduceMotion ? "" : "animate-pulse"} inline-block w-1 h-8 md:h-12 bg-sinai-glow-orange ml-1`}
      />
    </span>
  );
};

const NeuralCore = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer Orbital Rings */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 border border-white/5 rounded-full border-dashed"
      />

      {/* Central Glass Sphere */}
      <div className="relative w-80 h-80 rounded-full bg-linear-to-br from-white/5 to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

        {/* Internal Pulsing Plasma */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.4 }
              : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
        />

        {/* Central Branding Module */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span
                className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? "" : "animate-pulse"}`}
              />
              ASKLYZE_ENGINE_V2.1
            </div>
            {!shouldReduceMotion && (
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full"
              />
            )}
          </div>

          <div className="relative">
            <h3 className="text-4xl font-black tracking-normal text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-sinai-glow-orange/50 uppercase">
                ASKLYZE
              </span>
              <span className="text-[10px] font-mono tracking-[1.2em] text-sinai-glow-orange/60 ml-[1.2em] mt-2 font-bold uppercase">
                Intelligence
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* Floating Scanning Ring */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.1, scale: 1 }
            : { scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/30 rounded-full"
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
  project,
}: {
  cap: Capability;
  index: number;
  total: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  project: ProjectName;
}) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 320;
  const isEven = index % 2 === 0;
  const x =
    Math.cos(angle) * radius + (isEven ? (index === 0 ? 200 : -200) : 0);
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: active ? 1.2 : 1,
        filter: active ? "blur(0px)" : "blur(0.5px)",
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
      }}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
        <div
          className={`absolute inset-0 bg-white/3 border rounded-4xl rotate-45 transition-all duration-500 ${active ? "rotate-90 border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.3)] bg-sinai-glow-orange/5" : "border-white/10 group-hover:border-white/30"}`}
        />
        <div
          className={`relative z-10 transition-colors duration-500 ${active ? "text-sinai-glow-orange scale-105" : "text-zinc-500 group-hover:text-white"}`}
        >
          <ProjectFeatureIcon project={project} index={index} />
        </div>

        {/* Connecting Line to Core */}
        <div
          style={{
            width: radius,
            transform: `rotate(${angle + Math.PI}rad)`,
            transformOrigin: "left center",
          }}
          className={`absolute left-1/2 top-1/2 h-px transition-opacity duration-500 ${active ? "bg-sinai-glow-orange/40 opacity-100" : "bg-white/5 opacity-40"} pointer-events-none `}
        />
      </div>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${active ? "opacity-100 translate-y-1 mt-2" : "opacity-20 group-hover:opacity-60 mt-6"}`}
      >
        <span className="text-xs text-white tracking-[0.4em] font-bold uppercase">
          {cap.title}
        </span>
      </div>
    </motion.div>
  );
};

const CapabilityDetailView = ({ cap }: { cap: Capability }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/2 backdrop-blur-3xl border border-white/10 p-6 lg:p-8 rounded-4xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-br from-sinai-glow-orange/5 to-transparent opacity-50" />

      <div className="relative aspect-4/3 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
        <Image
          src={cap.image}
          alt={cap.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="space-y-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">
            Project_Capability // {cap.id}
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-black tracking-normal leading-tight uppercase">
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
              className={`w-1.5 h-1.5 rounded-full bg-green-500/50 ${shouldReduceMotion ? "" : "animate-pulse"}`}
            />
            ENGINE: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>BUILD: 0x2A11</span>
        </div>
      </div>
    </div>
  );
};

export const PageComponent = ({
  project,
}: {
  project: "myquery" | "asklyze" | "tasto";
}) => {
  const [activeFeatureId, setActiveFeatureId] = React.useState<string | null>(
    null
  );
  const FEATURES =
    project === "asklyze"
      ? ASKLYZE_FEATURES
      : project === "myquery"
        ? MYQUERY_FEATURES
        : TASTO_FEATURES;
  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      className="py-16 lg:py-24 relative overflow-hidden bg-[#06080a] min-h-[760px] lg:min-h-[860px]"
    >
      <div className="apex-container-wide">
        <SectionReveal>
          <div className="text-center mb-12 lg:mb-16">
            <SectionBadge className="mb-2">
              Technical_Capabilities // 03
            </SectionBadge>
            <h2 className="font-bold text-3xl md:text-5xl leading-[40px] md:leading-[58px] text-center">
              The Intelligence{" "}
              <span className="text-sinai-glow-orange">
                Powering {project === "asklyze" ? "Asklyze" : project === "myquery" ? "MyQuery" : "Tasto"}
              </span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 z-30 pointer-events-none">
            {FEATURES.map((feature, i) => (
              <OrbitalNode
                key={feature.id}
                cap={feature}
                index={i}
                total={FEATURES.length}
                active={activeFeatureId === feature.id}
                onEnter={() => setActiveFeatureId(feature.id)}
                onLeave={() => setActiveFeatureId(null)}
                project={project}
              />
            ))}
          </div>

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-20">
            <AnimatePresence mode="wait">
              {!activeFeatureId ? (
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
                  <CapabilityDetailView cap={activeFeature!} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-10">
            <div className="w-[700px] h-[700px] border border-white/5 rounded-full" />
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
            <div
              className={`absolute w-[350px] h-[350px] border border-sinai-glow-orange/10 rounded-full ${shouldReduceMotion ? "" : "animate-pulse"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
