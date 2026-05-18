import Link from "next/link";
import React from "react";

export type ProjectCtaProps = {
  header: string;
  headerGlow: string;
  description: string;
  buttonText: string;
};

const ProjectCTA = (props: ProjectCtaProps) => {
  const { header, headerGlow, description, buttonText } = props;
  return (
    <section className="section-shell-lg border-none relative overflow-hidden px-4 sm:px-6 md:mt-12">
      <div className="flex flex-col items-center gap-6 apex-container-wide">
        <h1 className="text-3xl md:text-5xl font-bold text-white md:leading-[140%] md:tracking-[-1.2px] text-center">
          {header}
          <span className="text-sinai-glow-orange"> {headerGlow}</span>
        </h1>
        <p className="font-medium leading-[130%] tracking-normal text-center text-white-200/70 max-w-5xl">
          {description}
        </p>
        <div className="md:pb-12">
          <Link
            href="/contact"
            className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-10 md:h-16 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)] w-full md:w-fit mx-auto max-md:justify-center"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
