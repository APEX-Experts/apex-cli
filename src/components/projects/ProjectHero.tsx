"use client";

import { HeroCTA } from "@/components/Icons";
import { Badge } from "@/components/ui/Badge";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export interface MetricItem {
  label: string;
  value: string;
}

export interface ProjectHeroProps {
  badge: string;
  title: string;
  description: string;
  metrics: MetricItem[];
  image: string;
  logo: string;
  ctaText?: string;
  ctaLink?: string;
  streamLabel?: string;
  archLabel?: string;
}

const Particles = ({ count = 12 }: { count?: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [positions, setPositions] = React.useState<
    { x: string; delay: number }[]
  >([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
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
          className="absolute w-1 h-1 bg-sinai-glow-orange/20 rounded-full blur-[1px]"
        />
      ))}
    </>
  );
};

export function ProjectHero({
  badge,
  title,
  description,
  metrics,
  image,
  logo,
  ctaText = "Schedule Call",
  ctaLink = "/contact",
  streamLabel = "Data_Stream_Live",
  archLabel = "Core_Architecture",
}: ProjectHeroProps) {
  const shouldReduceMotion = useReducedMotion();

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
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <Badge>{badge}</Badge>

              <h1 className="font-bold text-3xl md:text-[64px] leading-[40px] md:leading-[78px] tracking-normal text-center md:text-start uppercase text-white">
                {title}
              </h1>

              <p className="md:text-2xl md:leading-[39px] tracking-normal text-center md:text-start text-zinc-400">
                {description}
              </p>
            </div>

            <Link
              href={ctaLink}
              className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-16 rounded-full font-black md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)]  w-full md:w-fit max-md:justify-center"
            >
              <HeroCTA
                width={20}
                height={20}
                className="w-5 h-5 transition-transform"
              />
              {ctaText}
            </Link>

            <div className="md:flex grid grid-cols-2 md:flex-row flex-wrap justify-between max-md:justify-center w-full gap-4 py-8 sm:py-10">
              {metrics.map((stat, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="text-sm leading-[12px] tracking-[0.8px] uppercase text-white/80 text-center md:text-start">
                    {stat.label}
                  </div>
                  <div className="font-black text-white text-lg md:text-3xl md:leading-[28px] tracking-normal text-center md:text-start">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-full justify-self-end lg:max-w-136 xl:max-w-160 2xl:max-w-2xl"
          >
            <div className="relative aspect-square max-w-2xl mx-auto rounded-4xl overflow-hidden border border-white/10 shadow-[0_0_72px_rgba(217,130,47,0.08)] group bg-zinc-950">
              <Image
                src={image}
                alt={`${title} Interface`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-5000"
                priority
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />

              <div className="absolute top-6 left-6 p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[200px] space-y-4">
                <div className="text-[8px] font-mono text-sinai-glow-orange tracking-widest font-black uppercase">
                  {streamLabel}
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-1 bg-white/5 rounded-full overflow-hidden"
                    >
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? { width: "100%" }
                            : { width: ["0%", "100%", "0%"] }
                        }
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                        className="h-full bg-sinai-glow-orange/40"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-2 uppercase">
                  {archLabel}
                </div>
                <div className="w-48 h-12 relative">
                  <Image
                    src={logo}
                    alt="Logo"
                    fill
                    className="object-contain object-right brightness-0 invert opacity-40"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Particles count={10} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-b from-transparent via-sinai-bg-base/45 to-sinai-bg-base" />
    </section>
  );
}
