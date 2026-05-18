import { JSX } from "react";
import { SectionBadge } from "../ui/SectionBadge";
import { ScenarioCard } from "./ScenarioCard";

export type ProjectScenariosProps = {
  badge: string;
  header: string;
  headerGlow: string;
  subheader: string;
  scenarios: {
    icon: JSX.Element;
    title: string;
    badge: string;
    challenge: string;
    solutionTitle: string;
    solutionDescription: string;
  }[];
};

const ProjectScenarios = (props: ProjectScenariosProps) => {
  const { badge, header, headerGlow, subheader, scenarios } = props;
  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6 md:mt-12">
      <div className="flex flex-col items-center md:items-start gap-5 apex-container-wide">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="font-semibold text-3xl md:text-5xl lg:text-[56px] text-white md:leading-[61.6px] md:tracking-[-1.12px] text-center md:text-start">
          {header} <span className="text-sinai-glow-orange">{headerGlow}</span>
        </h1>
        <p className="md:text-lg md:leading-[29.25px] tracking-normal text-white/70 text-center md:text-start">
          {subheader}
        </p>
        <ul className="flex flex-col w-full items-center gap-6">
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={index} scenario={scenario} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectScenarios;
