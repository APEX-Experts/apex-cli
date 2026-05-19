import React, { JSX } from "react";
import { SectionBadge } from "../ui/SectionBadge";
import { ServicePrincipleCard } from "./ServicePrincipleCard";

export type ServicePrinciplesProps = {
  badge: string;
  header: string;
  subheader: string;
  items: {
    icon: JSX.Element;
    title: string;
    desc: string;
  }[];
};

const ServicePrinciples = ({
  badge,
  header,
  subheader,
  items,
}: ServicePrinciplesProps) => {
  return (
    <section className="relative isolate flex items-center overflow-hidden">
      <div className="flex flex-col items-center gap-16 py-12 apex-container-wide">
        <div className="flex flex-col items-center gap-2.5">
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="mb-2.5 font-medium text-3xl md:text-5xl leading-[32px] md:leading-[52.8px] tracking-[-1.2px] text-center">
            {header}
          </h2>
          <p className="md:text-[17px] text-zinc-400 leading-[28.9px] tracking-normal text-center">
            {subheader}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {items.map((item, index) => (
            <ServicePrincipleCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicePrinciples;
