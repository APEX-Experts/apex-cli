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
        "relative text-[13px] md:text-[22px] font-bold md:font-black text-sinai-glow-orange uppercase md:tracking-wider text-center leading-[19.5px] tracking-[0.32px]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default SubHeader;
