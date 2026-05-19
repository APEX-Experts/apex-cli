import React, { JSX } from "react";
import { SectionBadge } from "../ui/SectionBadge";
import { ServiceScenarioCard } from "./ServiceScenarioCard";

export type ServiceScenariosProps = {
  badge: string;
  header: string;
  headerGlow: string;
  subheader: string;
  items: {
    icon: JSX.Element;
    title: string;
    desc: string;
    badges: {
      icon: JSX.Element;
      text: string;
    }[];
  }[];
};

const ServiceScenarios = (props: ServiceScenariosProps) => {
  const { badge, header, headerGlow, subheader, items } = props;
  return (
    <section className="relative isolate flex items-center overflow-hidden">
      <div className="flex flex-col items-center md:items-start gap-16 py-12 md:py-20 apex-container-wide">
        <div className="flex flex-col items-center md:items-start gap-4 max-w-[940px]">
          <SectionBadge>{badge}</SectionBadge>
          <h1 className="font-bold text-white text-3xl md:text-5xl leading-[30px] md:leading-[52.8px] tracking-[-1.2px]">
            {header}{" "}
            <span className="text-sinai-glow-orange">{headerGlow}</span>
          </h1>
          <p className="md:text-lg md:leading-[28.9px] tracking-normal text-zinc-400">
            {subheader}
          </p>
        </div>
        <ul className="flex flex-col w-full items-center gap-6">
          {items.map((item, index) => (
            <ServiceScenarioCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceScenarios;

