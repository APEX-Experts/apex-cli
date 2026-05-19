"use client";

import { CtaSection } from "@/components/sections/CtaSection";
import CeoHeroSection from "./components/CeoHeroSection";
import DeliveryFramework from "./components/DeliveryFramework";
import EngineeringDnaSection from "./components/EngineeringDnaSection";
import EngineeringDomains from "./components/EngineeringDomains";
import EnterpriseFoundation from "./components/EnterpriseFoundation";
import ProductionSystems from "./components/ProductionSystems";
import TeamSection from "./components/TeamSection";
import { SectionReveal } from "@/components/SectionReveal";

export default function AboutClient() {
  return (
    <div className="overflow-x-clip bg-sinai-bg-base text-white selection:bg-sinai-glow-orange selection:text-black">
      <CeoHeroSection />
      <SectionReveal>
        <EngineeringDnaSection />
      </SectionReveal>
      <SectionReveal>
        <ProductionSystems />
      </SectionReveal>
      <SectionReveal>
        <EnterpriseFoundation />
      </SectionReveal>
      <SectionReveal>
        <EngineeringDomains />
      </SectionReveal>
      <SectionReveal>
        <DeliveryFramework />
      </SectionReveal>
      <SectionReveal>
        <TeamSection />
      </SectionReveal>
      <SectionReveal className="apex-container-wide relative">
        <CtaSection />
      </SectionReveal>
    </div>
  );
}
