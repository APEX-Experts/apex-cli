import React, { JSX } from "react";
import { SectionBadge } from "../ui/SectionBadge";
import { MouseGlow } from "../ui/MouseGlow";
import { useMouseGlow } from "@/hooks/useMouseGlow";

export interface ProjectHowItWorksProps {
  badge: string;
  header: string;
  headerGlow: string;
  subheader: string;
  steps: {
    id: string;
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}

interface HowItWorksStepCardProps {
  step: {
    id: string;
    icon: JSX.Element;
    title: string;
    description: string;
  };
}

const HowItWorksStepCard = ({ step }: HowItWorksStepCardProps) => {
  const { ref, position, isHovered, glowProps } = useMouseGlow<HTMLLIElement>();

  return (
    <li
      className="border p-6 bg-white/2 border-white/50 rounded-2xl flex flex-col gap-2 hover:border-sinai-glow-orange/20 hover:bg-sinai-glow-orange/3 transition-all duration-300 relative group z-10 overflow-hidden"
      ref={ref}
      {...glowProps}
    >
      <MouseGlow
        isHovered={isHovered}
        x={position.x}
        y={position.y}
        radius={1600}
        opacityStart={0.15}
        opacityEnd={0.03}
      />
      <span className="font-semibold text-sm md:text-xs leading-[16px] tracking-[0.6px] text-sinai-glow-orange/80 uppercase">
        Step {step.id}
      </span>
      <div className="rounded-[14px] w-14 h-14 flex items-center justify-center bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange">
        {step.icon}
      </div>
      <h3 className="font-semibold text-white/90 text-lg md:text-xl leading-[28px] tracking-[-0.5px]">
        {step.title}
      </h3>
      <p className="text-sm leading-[22.75px] tracking-normal text-white/50">
        {step.description}
      </p>
      <div className="separator-gradient"></div>
    </li>
  );
};

const ProjectHowItWorks = (props: ProjectHowItWorksProps) => {
  const { badge, header, headerGlow, subheader, steps } = props;

  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6 md:mt-12">
      <div className="flex flex-col items-center gap-6 apex-container-wide">
        <div className="flex flex-col items-center text-center gap-2.5 max-w-3xl">
          <SectionBadge>{badge}</SectionBadge>
          <h1 className="font-semibold text-3xl md:text-5xl leading-[40px] md:leading-[70px] tracking-[-1.28px] text-white">
            {header}{" "}
            <span className="text-sinai-glow-orange">{headerGlow}</span>
          </h1>
          <p className="md:text-lg md:leading-[29.25px] tracking-normal text-white/70">
            {subheader}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {steps.map((step, index) => (
            <HowItWorksStepCard key={index} step={step} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectHowItWorks;
