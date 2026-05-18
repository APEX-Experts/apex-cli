"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f2a24b_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-5 lg:mb-20">
          <SectionBadge>Strategic Assets</SectionBadge>
          <h2 className="text-4xl font-black uppercase leading-none tracking-normal md:text-6xl lg:text-7xl">
            The Team
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">
            The people who design, build, test, and support APEX Experts
            projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "01",
              name: "Amr Mohamed",
              role: "TEAM LEADER",
              img: "/images/avatars/Amr.png",
            },
            {
              id: "02",
              name: "Asma Ali",
              role: "MARKETING MANAGER",
              img: "/images/avatars/asma.png",
            },
            {
              id: "03",
              name: "Hesham Abdelwahed",
              role: "SALES MANAGER",
              img: "/images/avatars/hesham.png",
            },
            {
              id: "05",
              name: "Abdelrahman Ibrahim",
              role: "SR. SOFTWARE ENG.",
              img: "/images/avatars/abd.png",
            },
            {
              id: "06",
              name: "Mario Milad",
              role: "PRODUCT DESIGNER",
              img: "/images/avatars/mario.png",
            },
            {
              id: "07",
              name: "Reham Samer",
              role: "QUALITY ENGINEERING",
              img: "/images/avatars/reham.png",
            },
            {
              id: "08",
              name: "Maha Salam",
              role: "SYSTEM ADMIN",
              img: "/images/avatars/maha.png",
            },
          ].map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-xl transition-all duration-700 hover:border-sinai-glow-orange/30 hover:shadow-[0_0_50px_rgba(242,162,75,0.1)]"
            >
              {/* Holographic Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90 z-10" />

              {/* Member Identity Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Biometric Scan Line */}
              <motion.div
                animate={effectiveReduceMotion ? {} : { top: ["-10%", "110%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                className="absolute left-0 right-0 h-16 bg-linear-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Name & Role */}
                  <div className="space-y-1 mb-6 text-center md:text-start">
                    <h3 className="text-2xl font-black uppercase leading-none tracking-normal text-white transition-colors group-hover:text-sinai-glow-soft">
                      {member.name}
                    </h3>
                    <p className="text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Particles Fallback */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={
              effectiveReduceMotion
                ? { opacity: 0.2 }
                : { y: ["100vh", "-10vh"], opacity: [0, 1, 0] }
            }
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute w-px h-20 bg-linear-to-t from-transparent via-sinai-glow-orange to-transparent"
            style={{ left: `${20 * i}%` }}
          />
        ))}
      </div>
    </section>
  );
}
