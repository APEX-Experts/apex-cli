"use client";

import React, { JSX, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";
import { ServiceOperationCard } from "./ServiceOperationCard";

export type ServiceOperationsProps = {
  badge: string;
  header: string;
  headerGlow: string;
  subheader: string;
  items: {
    badge: string;
    title: string;
    description: string;
    isActive: boolean;
    subItems: {
      icon: JSX.Element;
      title: string;
      description: string;
    }[];
  }[];
};

const ServiceOperations = (props: ServiceOperationsProps) => {
  const { badge, header, headerGlow, subheader, items } = props;
  const sectionRef = useRef<HTMLElement>(null);

  // Hook into vertical scroll progress for the operations section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Map scroll [0→1] to the square's top position along the track
  const topPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex items-center overflow-hidden"
    >
      <div className="flex flex-col items-center md:items-start gap-16 py-12 md:py-20 apex-container-wide">
        {/* Section header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-4">
          <SectionBadge>{badge}</SectionBadge>
          <div className="text-center md:text-start space-y-2.5">
            <h2 className="font-bold text-white text-3xl md:text-5xl leading-[30px] md:leading-[61.6px] tracking-[-1.4px]">
              {header}{" "}
              <span className="text-sinai-glow-orange">{headerGlow}</span>
            </h2>
            <p className="md:text-lg text-zinc-400 md:leading-[30px] tracking-normal">
              {subheader}
            </p>
          </div>
        </div>

        {/* Two-column row with scroll-progress separator in between */}
        {/* On md: screens, we use a CSS Grid with 2 rows: Row 1 for headers, Row 2 for the lists */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_58px_1fr] md:grid-rows-[auto_1fr] gap-16 md:gap-x-8 md:gap-y-0 w-full">
          {items.map((item, index) => {
            const isLeft = index === 0;
            return (
              <div
                key={index}
                className="w-full flex flex-col items-center md:items-start text-center md:text-start gap-4 md:contents"
              >
                {/* Header Container */}
                <div
                  className={`flex flex-col items-center md:items-start text-center md:text-start gap-4 ${
                    isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"
                  }`}
                >
                  <SectionBadge>{item.badge}</SectionBadge>
                  <h3 className="font-medium text-white text-3xl md:text-[40px] md:leading-[50.4px] tracking-[-1.05px]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base md:leading-[27.2px] tracking-normal text-zinc-400 max-w-md">
                    {item.description}
                  </p>
                  <div className="separator-gradient w-[70%]! mb-4"></div>
                </div>

                {/* List Container */}
                <div
                  className={`w-full ${
                    isLeft ? "md:col-start-1 md:row-start-2" : "md:col-start-3 md:row-start-2"
                  }`}
                >
                  <ul className="flex flex-col w-full gap-4">
                    {item.subItems.map((subItem, subIdx) => (
                      <ServiceOperationCard
                        key={subIdx}
                        subItem={subItem}
                        isActive={item.isActive}
                      />
                    ))}
                  </ul>
                </div>

                {/* Scroll-progress separator — only between the two columns and aligned with Row 2 (the lists) */}
                {isLeft && (
                  <div className="hidden md:block md:col-start-2 md:row-start-2 md:row-span-1 self-stretch shrink-0 w-[58px] relative">
                    {/* Dimmed track line */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-white/5 pointer-events-none" />

                    {/* Orange filled line that grows from top as the user scrolls */}
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-sinai-glow-orange origin-top pointer-events-none"
                      style={{ scaleY: scrollYProgress, height: "100%" }}
                    />

                    {/* 58×58 square that rides along the line */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] bg-black border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_16px_rgba(255,85,0,0.15)] z-10"
                      style={{ top: topPercent }}
                    >
                      <ArrowRight className="w-5 h-5 text-sinai-glow-orange" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOperations;
