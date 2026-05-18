"use client";

import { useRef } from "react";
import { ProjectHero, ProjectHeroProps } from "./ProjectHero";
import ProjectProblemSolution, {
  ProjectProblemSolutionProps,
} from "./ProjectProblemSolution";
import ProjectHowItWorks, { ProjectHowItWorksProps } from "./ProjectHowItWorks";
import ProjectScenarios, { ProjectScenariosProps } from "./ProjectScenarios";
import ProjectCTA, { ProjectCtaProps } from "./ProjectCTA";

export interface ProjectTemplateProps {
  projectKey: "asklyze" | "myquery" | "tasto";
  heroProps: ProjectHeroProps;
  problemSolutionProps: ProjectProblemSolutionProps;
  howItWorksProps?: ProjectHowItWorksProps;
  scenariosProps: ProjectScenariosProps;
  ctaProps: ProjectCtaProps;
}

export function ProjectTemplate({
  projectKey,
  heroProps,
  problemSolutionProps,
  howItWorksProps,
  scenariosProps,
  ctaProps,
}: ProjectTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative bg-sinai-bg-base text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black font-sans"
    >
      <ProjectHero {...heroProps} />
      <ProjectProblemSolution {...problemSolutionProps} />
      {howItWorksProps && <ProjectHowItWorks {...howItWorksProps} />}
      <ProjectScenarios {...scenariosProps} />
      <ProjectCTA {...ctaProps} />
    </div>
  );
}
