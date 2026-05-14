import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable Badge component for APEX Experts AI Solutions.
 * Designed with a cinematic, technical aesthetic using the brand's glow orange palette.
 */
export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-sinai-glow-orange bg-sinai-glow-orange/5 px-4 py-1.5",
        "text-[10px] md:text-sm tracking-[0.25rem] text-sinai-glow-orange uppercase font-black",
        "transition-all duration-300 hover:bg-sinai-glow-orange/10",
        className
      )}
    >
      {children}
    </div>
  );
};
