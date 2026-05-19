import Link from "next/link";
import React from "react";

export type ServiceCtaProps = {
  header: string;
  headerGlow: string;
  subheader: string;
  ctaButtonText: string;
};

const ServiceCta = ({
  header,
  headerGlow,
  subheader,
  ctaButtonText,
}: ServiceCtaProps) => {
  return (
    <section className="relative isolate flex items-center overflow-hidden">
      <div className="flex flex-col items-center gap-6 py-12 md:pb-20 md:pt-6 apex-container-wide">
        <h1 className="font-bold text-3xl md:text-5xl text-center tracking-[-1.2px] leading-[140%] text-white max-w-3xl">
          {header} <span className="text-sinai-glow-orange">{headerGlow}</span>
        </h1>
        <p className="text-center text-white-200/70 font-medium leading-[130%] tracking-normal max-w-5xl">
          {subheader}
        </p>
        <Link
          href="/contact"
          className="group flex items-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-10 md:h-16 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)] w-full md:w-fit mx-auto max-md:justify-center"
        >
          {ctaButtonText}
        </Link>
      </div>
    </section>
  );
};

export default ServiceCta;
