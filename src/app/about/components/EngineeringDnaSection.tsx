"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

const TelemetryData = () => {
  const [coords, setCoords] = React.useState({ x: "0.0000", y: "0.0000" });

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCoords({
        x: Math.random().toFixed(4),
        y: Math.random().toFixed(4),
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      COORD_X: {coords.x}
      <br />
      COORD_Y: {coords.y}
      <br />
      SIG_STRENGTH: NOMINAL
    </>
  );
};

export default function EngineeringDnaSection() {
  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6">
      {/* Background Mesh Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 space-y-5 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <SectionBadge>Strategic_DNA // Schema_v2.0</SectionBadge>
          </motion.div>
          <h2 className="text-left font-bold text-3xl md:text-5xl leading-[58px]">
            What Guides Our
            <span className="text-sinai-glow-orange">
              {" "}
              Engineering Practice
            </span>
          </h2>
        </div>

        {/* The Schematic Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-16 items-center">
          {/* DNA Nodes */}
          {[
            {
              id: "01",
              title: "Practical AI",
              col: "lg:col-span-5",
              align: "left",
              desc: "We operationalize AI into workflows with strict data permissions. Every implementation must function reliably within your existing security architecture.",
            },
            {
              id: "02",
              title: "Engineering Excellence",
              col: "lg:col-span-5 lg:col-start-8",
              align: "right",
              desc: "We deliver production applications, secure, maintainable, and fully integrated. Not prototypes, not MVPs handed off without a support path.",
            },
            {
              id: "03",
              title: "Data Sovereignty",
              col: "lg:col-span-5",
              align: "left",
              desc: "Clients retain complete control and visibility over their data. No AI implementation we build requires data to leave your infrastructure.",
            },
            {
              id: "04",
              title: "Product-Grade Delivery",
              col: "lg:col-span-5 lg:col-start-8",
              align: "right",
              desc: "We build bespoke systems with the scalability and reliability standards of enterprise SaaS.",
            },
          ].map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${node.col} relative group cursor-crosshair`}
            >
              <div className={`space-y-6 `}>
                <div
                  className={`flex items-center gap-4 ${node.align === "right" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`text-4xl font-black tracking-normal text-white/20 group-hover:text-sinai-glow-orange transition-colors duration-500 ${node.align === "right" ? "lg:text-right" : "lg:text-left"}`}
                  >
                    {node.id}
                  </span>
                  <div className="h-px w-12 bg-white/20 group-hover:w-20 group-hover:bg-sinai-glow-orange transition-all duration-500" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-normal text-white transition-all duration-500 group-hover:text-sinai-glow-soft lg:text-4xl">
                    {node.title}
                  </h3>
                  <p className="text-zinc-500 text-lg max-w-sm group-hover:text-zinc-300 transition-colors duration-500 mx-auto lg:mx-0">
                    {node.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
