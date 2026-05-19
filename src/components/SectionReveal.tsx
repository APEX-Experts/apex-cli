"use client";

import { useRef, type ReactNode, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const initial = effectiveReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 36, filter: "blur(8px)" };

  const animate = isInView
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: effectiveReduceMotion ? 0.45 : 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for high-end motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
