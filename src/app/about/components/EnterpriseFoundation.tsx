import { FactIcon } from "@/components/Icons";
import FactCard from "@/components/sections/FactCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FACTS } from "@/constants";

const EnterpriseFoundation = () => {
  return (
    <section className="section-shell-lg border-none relative px-4 sm:px-6 max-w-7xl mx-auto z-10">
      <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="sticky top-32">
            <SectionBadge className="mb-4">Company Facts</SectionBadge>
            <h2 className="mb-8 font-bold text-3xl md:text-5xl leading-[58px] tracking-[-1.2px] text-center md:text-start">
              Enterprise <br />
              <span className="text-sinai-glow-orange">Foundation</span>
            </h2>
            <p className="md:text-lg leading-[29.25px] tracking-normal text-center md:text-start">
              A dual-entity operation spanning Egypt and the UAE, built to serve
              enterprise clients across the GCC with localized execution and
              global engineering depth.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {FACTS.map((val, i) => (
              <FactCard
                key={i}
                val={val}
                index={i}
                iconComponent={<FactIcon index={i} />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFoundation;
