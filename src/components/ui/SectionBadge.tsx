import React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  lineClassName?: string;
  lineWidth?: string;
}

/**
 * A premium SectionBadge component for APEX Experts AI Solutions.
 * Renders a horizontal orange accent line on the left, followed by the text badge.
 */
export const SectionBadge = ({
  children,
  className,
  textClassName,
  lineClassName,
  lineWidth = "w-8",
}: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center md:justify-start gap-3 text-center md:text-start max-md:w-full max-md:mx-auto",
        className
      )}
    >
      <div
        className={cn("h-px bg-sinai-glow-orange", lineWidth, lineClassName)}
      />
      <span
        className={cn(
          "text-sinai-glow-orange uppercase font-extrabold tracking-[0.25rem] max-md:text-xs",
          textClassName
        )}
      >
        {children}
      </span>
    </div>
  );
};
