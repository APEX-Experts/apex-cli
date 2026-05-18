"use client";

import { HeroCTA } from "@/components/Icons";
import { Badge } from "@/components/ui/Badge";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ServiceImpactCard } from "./ServiceImpactCard";

export interface ServiceHeroProps {
  badge: string;
  header: string;
  headerGlow?: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  impactTitle: string;
  impactItems: { icon: React.ReactNode; title: string; description: string }[];
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

export function ServiceHero({
  badge,
  header,
  headerGlow,
  description,
  image,
  imageAlt,
  ctaText = "Schedule Call",
  ctaLink = "/contact",
  impactTitle,
  impactItems,
}: ServiceHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-[linear-gradient(180deg,#06080a_0%,#080a0d_50%,#06080a_100%)] pt-28 lg:pt-32 pb-12">
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

              <h1 className="font-black text-3xl md:text-[64px] leading-[40px] md:leading-[70px] tracking-[-1.6px] text-center md:text-start text-white">
                {header}{" "}
                {headerGlow && (
                  <span className="text-sinai-glow-orange">{headerGlow}</span>
                )}
              </h1>

              <p className="leading-[26px] text-base text-[#d0d0d0]">
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
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-5000"
                priority
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex flex-row gap-1 items-center">
            <span className="w-10 md:w-32 h-px rotate-180 bg-[linear-gradient(270deg,rgba(115,69,25,0.2)_0%,#D9822F_100%)]"></span>
            <span className="font-medium text-xs md:text-base leading-[19.5px] tracking-[1.56px] uppercase text-sinai-glow-orange">
              {impactTitle}
            </span>
            <span className="w-10 md:w-32 h-px bg-[linear-gradient(270deg,rgba(115,69,25,0.2)_0%,#D9822F_100%)]"></span>
          </div>
          <ul className="flex flex-col md:flex-row justify-between w-full gap-8">
            {impactItems.map((item, index) => (
              <ServiceImpactCard key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Particles count={10} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-b from-transparent via-sinai-bg-base/45 to-sinai-bg-base" />
    </section>
  );
}
