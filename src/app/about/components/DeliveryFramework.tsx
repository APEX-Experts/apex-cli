"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DELIVERY_FRAMEWORK } from "@/constants";
import { DeliveryFrameworkIcon } from "@/components/Icons";

const DeliveryFramework = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into vertical scroll progress for the right-column cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to top percentage and height scale
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const topPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-shell-lg border-none relative px-4 sm:px-6 max-w-7xl mx-auto z-10 py-16 md:py-24">
      <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
        {/* Left Column (Sticky) */}
        <div className="lg:col-span-2">
          <div className="sticky top-32">
            <SectionBadge className="mb-4">Delivery Framework</SectionBadge>
            <h2 className="mb-8 font-bold text-3xl md:text-5xl leading-[48px] md:leading-[58px] tracking-[-1.2px] text-center md:text-start">
              How We Deliver
              <span className="text-sinai-glow-orange"> Systems</span>
            </h2>
            <p className="md:text-lg leading-[29.25px] tracking-normal text-center md:text-start text-zinc-400">
              Our engineering process is structured to reduce operational
              uncertainty, align technical architecture with business
              objectives, and deliver scalable production-ready systems with
              precision.
            </p>
          </div>
        </div>

        {/* Right Column (Cards + Scroll Progress Indicator) */}
        <div
          ref={containerRef}
          className="lg:col-span-3 relative pl-8 md:pl-16"
        >
          {/* Background Progress Track */}
          <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-white/5 z-0 pointer-events-none" />

          {/* Active Filled Progress Line */}
          <motion.div
            className="absolute left-0 top-4 w-[2px] bg-sinai-glow-orange origin-top z-0 pointer-events-none"
            style={{ scaleY, height: "calc(100% - 32px)" }}
          />

          {/* Scroll Circle Indicator */}
          <div className="absolute left-0 top-4 bottom-4 w-[2px] z-10 pointer-events-none">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-sinai-glow-orange border-2 border-sinai-bg-base shadow-[0_0_8px_#FF5500]"
              style={{ top: topPercent }}
            />
          </div>

          {/* Cards List */}
          <div className="space-y-8">
            {DELIVERY_FRAMEWORK.map((item, index) => (
              <ScrollDeliveryCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface DeliveryCardProps {
  item: (typeof DELIVERY_FRAMEWORK)[0];
  index: number;
}

const ScrollDeliveryCard = ({ item, index }: DeliveryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // By setting the top and bottom margins to -50%, we create a virtual
  // trigger line exactly in the middle of the screen (50vh).
  // Only one card can cross this precise threshold at a time.
  const isActive = useInView(cardRef, {
    margin: "-49% 0px -49% 0px",
  });

  const [position, setPosition] = useState({ x: 150, y: 150 });

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col gap-6 rounded-3xl border p-3 sm:py-6 transition-all duration-500 ${
        isActive
          ? "border-white/10 bg-white/5 shadow-lg"
          : "border-white/5 bg-white/2"
      }`}
    >
      {/* Scroll-activated Radial Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 backdrop-blur-[48px] transition-opacity duration-700 rounded-3xl"
        style={{
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(
            800px circle at ${position.x}px ${position.y}px,
            rgba(217,130,47,0.15),
            rgba(217,130,47,0.03) 40%,
            transparent 70%
          )`,
        }}
      />

      {/* Top-Left Index Orange Square Badge */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-[14px] p-3 flex items-center justify-center z-20 bg-sinai-glow-orange transition-all duration-500 ${
          isActive
            ? "opacity-100 scale-105 shadow-[0_0_12px_rgba(217,130,47,0.4)]"
            : "opacity-30 scale-100"
        }`}
      >
        {`0${index + 1}`}
      </div>

      {/* Card Content Container */}
      <div className="relative z-10 flex flex-col gap-4 pl-4 pt-4 md:pl-6 md:pt-4">
        {/* Premium Icon Wrapper */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 ${
            isActive
              ? "text-white border-sinai-glow-orange/40 bg-sinai-glow-orange/10 scale-105"
              : "bg-white/3 border-white/8 text-white/30"
          }`}
        >
          <DeliveryFrameworkIcon index={index} className="w-6 h-6" />
        </div>

        {/* Title */}
        <div>
          <h3
            className={`text-2xl font-bold transition-colors duration-500 ${
              isActive ? "text-sinai-glow-orange" : "text-white"
            }`}
          >
            {item.title}
          </h3>
        </div>

        {/* Items List with Orange Bullets */}
        <ul className="space-y-3 mt-2">
          {item.items.map((subItem, subIndex) => (
            <li
              key={subIndex}
              className="flex items-center gap-3 text-zinc-400 text-sm font-medium"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange shrink-0 transition-transform duration-500 ${
                  isActive
                    ? "scale-125 shadow-[0_0_6px_#FF5500]"
                    : "shadow-[0_0_2px_#FF5500]"
                }`}
              />
              <span>{subItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default DeliveryFramework;
