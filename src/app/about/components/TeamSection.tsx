"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section className="section-shell-lg border-none relative overflow-hidden border-t border-white/5 bg-[#080a0d] px-4 sm:px-6">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f2a24b_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-5 lg:mb-20">
          <Badge>Human_Capital // Strategic_Assets</Badge>
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
              skills: ["Architecture", "Leadership", "Neural Sync"],
              cluster: "TECHNICAL",
            },
            {
              id: "02",
              name: "Asma Ali",
              role: "MARKETING MANAGER",
              img: "/images/avatars/asma.png",
              skills: ["Growth", "Branding", "Market_IQ"],
              cluster: "BUSINESS",
            },
            {
              id: "03",
              name: "Hesham Abdelwahed",
              role: "SALES MANAGER",
              img: "/images/avatars/hesham.png",
              skills: ["Enterprise", "Scale", "Relations"],
              cluster: "BUSINESS",
            },
            {
              id: "04",
              name: "Micheal Magdy",
              role: "SR. SOFTWARE ENG.",
              img: "/images/avatars/mich.png",
              skills: ["Backend", "Cloud Scale", "Logic"],
              cluster: "TECHNICAL",
            },
            {
              id: "05",
              name: "Abdelrahman Ibrahim",
              role: "SR. SOFTWARE ENG.",
              img: "/images/avatars/abd.png",
              skills: ["Frontend", "UX Engine", "Motion"],
              cluster: "TECHNICAL",
            },
            {
              id: "06",
              name: "Mario Milad",
              role: "PRODUCT DESIGNER",
              img: "/images/avatars/mario.png",
              skills: ["Visuals", "Human Proxy", "Design"],
              cluster: "CREATIVE",
            },
            {
              id: "07",
              name: "Reham Samer",
              role: "QUALITY ENGINEERING",
              img: "/images/avatars/reham.png",
              skills: ["Stability", "QA_Core", "Compliance"],
              cluster: "TECHNICAL",
            },
            {
              id: "08",
              name: "Maha Salam",
              role: "SYSTEM ADMIN",
              img: "/images/avatars/maha.png",
              skills: ["Infrastructure", "Sec_Ops", "Kernel"],
              cluster: "TECHNICAL",
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />

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
                className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Header: ID & Cluster */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <span className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.4em]">
                      NODE_{member.id}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[6px] font-mono text-zinc-500 uppercase tracking-widest">
                      {member.cluster}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black uppercase leading-none tracking-normal text-white transition-colors group-hover:text-sinai-glow-soft">
                      {member.name}
                    </h3>
                    <p className="text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase">
                      {member.role}
                    </p>
                  </div>

                  {/* Technical Skills: Only on Hover */}
                  <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-sm bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-[7px] font-mono text-sinai-glow-orange uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Authorization */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                    <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-widest leading-none">
                      Level_04 Authorization
                    </span>
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-green-500/40 ${effectiveReduceMotion ? "" : "shadow-[0_0_10px_rgba(34,197,94,0.4)]"}`}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/10 rounded-tr-xl group-hover:border-sinai-glow-orange/40 transition-colors" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/10 rounded-bl-xl group-hover:border-sinai-glow-orange/40 transition-colors" />
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
            className="absolute w-px h-20 bg-gradient-to-t from-transparent via-sinai-glow-orange to-transparent"
            style={{ left: `${20 * i}%` }}
          />
        ))}
      </div>
    </section>
  );
}
