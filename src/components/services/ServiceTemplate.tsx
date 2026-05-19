"use client";

import { useEffect, useState } from "react";
import { ServiceHero, ServiceHeroProps } from "./ServiceHero";
import ServiceOperations, { ServiceOperationsProps } from "./ServiceOperations";
import ServiceScenarios, { ServiceScenariosProps } from "./ServiceScenarios";
import ServicePrinciples, { ServicePrinciplesProps } from "./ServicePrinciples";
import ServiceCta, { ServiceCtaProps } from "./ServiceCta";

export interface ServiceTemplateProps {
  slug: string;
  hero: ServiceHeroProps;
  operations: ServiceOperationsProps;
  scenarios: ServiceScenariosProps;
  principles?: ServicePrinciplesProps;
  cta: ServiceCtaProps;
}

export default function ServiceTemplate({
  slug,
  hero,
  operations,
  scenarios,
  principles,
  cta,
}: ServiceTemplateProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-sinai-bg-base min-h-screen text-white flex items-center justify-center font-mono text-xs tracking-widest uppercase">
        Initializing_Service_Registry...
      </div>
    );
  }

  return (
    <div className="relative bg-sinai-bg-base text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black">
      <ServiceHero {...hero} />
      <ServiceOperations {...operations} />
      <ServiceScenarios {...scenarios} />
      {principles && <ServicePrinciples {...principles} />}
      <ServiceCta {...cta} />
    </div>
  );
}
