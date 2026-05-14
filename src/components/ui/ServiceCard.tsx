import React, { useRef, useState } from "react";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode | ((reduced: boolean) => React.ReactNode);
  diagram: React.ReactNode | ((reduced: boolean) => React.ReactNode);
  href: string;
  reducedMotion: boolean;
}

export function ServiceCard({
  title,
  desc,
  tags,
  icon,
  diagram,
  href,
  reducedMotion,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="apex-panel apex-panel-hover group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl p-5 sm:p-6 lg:min-h-[330px] lg:p-8"
    >
      {/* Mouse Following Glow */}
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 backdrop-blur-[48px] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(
              1200px circle at ${position.x}px ${position.y}px,
              rgba(217,130,47,0.15),
              rgba(217,130,47,0.05) 30%,
              transparent 70%
            )`,
          }}
        />
      )}

      {/* Background Diagram */}
      {typeof diagram === "function" ? diagram(reducedMotion) : diagram}

      {/* Icon & Content */}
      <div className="relative z-10 flex h-full flex-col space-y-6 items-center md:items-start">
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/3 shadow-2xl transition-all duration-300 group-hover:border-sinai-glow-orange/20">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {typeof icon === "function" ? icon(reducedMotion) : icon}
        </div>

        <div className="space-y-4 text-center md:text-start">
          <h3 className="text-3xl font-bold tracking-normal text-white transition-colors duration-300 group-hover:text-sinai-glow-orange lg:text-4xl">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400 sm:text-lg">
            {desc}
          </p>
        </div>

        {/* Technical Tags */}
        <div className="mt-auto flex flex-wrap gap-2.5 pt-5 ">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/5 bg-white/3 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 transition-all group-hover:border-white/10 group-hover:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
