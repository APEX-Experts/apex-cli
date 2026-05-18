import React from "react";
import { SectionBadge } from "../ui/SectionBadge";
import { ProblemCard } from "./ProblemCard";
import { SolutionCard } from "./SolutionCard";
import { Shield } from "lucide-react";
import { MouseGlow } from "../ui/MouseGlow";
import { useMouseGlow } from "@/hooks/useMouseGlow";

export interface ProjectProblemSolutionProps {
  badge: string;
  header: string;
  headerGlow: string;
  subheader: string;
  problem: {
    supertitle: string;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  solution: {
    supertitle: string;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  disclaimer: {
    header: string;
    description: string;
    items: {
      icon: React.ReactNode;
      title: string;
    }[];
  };
}

const ProjectProblemSolution = (props: ProjectProblemSolutionProps) => {
  const {
    badge,
    header,
    headerGlow,
    subheader,
    problem,
    solution,
    disclaimer,
  } = props;
  const { ref, position, isHovered, glowProps } =
    useMouseGlow<HTMLDivElement>();
  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6 md:mt-12">
      <div className="flex flex-col items-center gap-4 apex-container-wide">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="font-bold text-3xl md:text-5xl text-white text-center leading-[32px] md:leading-[58px] tracking-[-1.92px]">
          {header} <span className="text-sinai-glow-orange">{headerGlow}</span>
        </h1>
        <p className="md:text-lg md:leading-[32.4px] text-center text-white/70">
          {subheader}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-4">
          {/* Problem Card */}
          <ProblemCard
            supertitle={problem.supertitle}
            title={problem.title}
            items={problem.items}
          />
          {/* Solution Card */}
          <SolutionCard
            supertitle={solution.supertitle}
            title={solution.title}
            items={solution.items}
          />
        </div>
        <div
          ref={ref}
          {...glowProps}
          className="group relative w-full rounded-2xl p-8 md:p-12 flex flex-col items-center gap-6 bg-sinai-glow-orange/4 border border-sinai-glow-orange/15 overflow-hidden transition-all duration-500 hover:border-sinai-glow-orange/30"
        >
          <MouseGlow
            x={position.x}
            y={position.y}
            isHovered={isHovered}
            radius={3000}
          />
          <div className="relative z-10 w-full flex flex-col items-center gap-6">
            <div className="bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange w-20 h-20 flex items-center justify-center rounded-2xl">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-white/95 font-semibold text-xl md:text-3xl md:leading-[36px] tracking-[-0.75px] text-center">
              {disclaimer.header}
            </h3>
            <p className="md:text-lg md:leading-[29.25px] tracking-normal text-center text-white/50 max-w-3xl">
              {disclaimer.description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center w-full">
              {disclaimer.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-white/2 border border-white/25 hover:border-sinai-glow-orange/25 rounded-[14px] flex flex-col items-center justify-center gap-2 p-4 transition-all duration-500"
                >
                  <div className="text-sinai-glow-orange">{item.icon}</div>
                  <span className="font-medium text-sm md:text-xs leading-[16px] tracking-normal text-center text-white/60">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProblemSolution;
