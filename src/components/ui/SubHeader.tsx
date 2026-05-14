import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SubHeader = ({ className, children }: Props) => {
  return (
    <h3
      className={cn(
        "relative text-[22px] font-black text-sinai-glow-orange uppercase tracking-wider text-center",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default SubHeader;
