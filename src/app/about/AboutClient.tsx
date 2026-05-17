"use client";

import CeoHeroSection from "./components/CeoHeroSection";
import CtaSection from "./components/CtaSection";
import EngineeringDnaSection from "./components/EngineeringDnaSection";
import EnterpriseFoundation from "./components/EnterpriseFoundation";
import ProductionSystems from "./components/ProductionSystems";
import TeamSection from "./components/TeamSection";

export default function AboutClient() {
  return (
    <div className="overflow-x-clip bg-sinai-bg-base text-white selection:bg-sinai-glow-orange selection:text-black">
      <CeoHeroSection />
      <EngineeringDnaSection />
      <ProductionSystems />
      <EnterpriseFoundation />
      <TeamSection />
      <CtaSection />
    </div>
  );
}
