import { TerminalHero } from "@/components/TerminalHero";
import { HeroTextSection } from "@/components/sections/HeroTextSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SystemFlowSection } from "@/components/sections/SystemFlowSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { WhyApexSection } from "@/components/sections/WhyApexSection";
import { SectionReveal } from "@/components/SectionReveal";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { getCspNonce } from "@/lib/csp";

export default async function Home() {
  const nonce = await getCspNonce();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apexexperts.net/#organization",
        name: "APEX Experts AI Solutions",
        url: "https://apexexperts.net",
        logo: {
          "@type": "ImageObject",
          url: "https://apexexperts.net/images/logo.png",
        },
        image: "https://apexexperts.net/images/dark-logo.jpg",
        description:
          "APEX Experts AI Solutions builds practical AI systems, Oracle APEX applications, business dashboards, automation workflows, and custom web and mobile software for real business operations.",
      },
      {
        "@type": "WebSite",
        "@id": "https://apexexperts.net/#website",
        name: "APEX Experts AI Solutions",
        url: "https://apexexperts.net",
        publisher: {
          "@id": "https://apexexperts.net/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <script
        nonce={nonce}
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative">
        {/* ── Hero: Cinematic CLI Experience ── */}
        <TerminalHero />
        
        {/* ── Hero Text ── */}
        <HeroTextSection />

        {/* ── Page Content ── */}
        <div className="relative bg-[linear-gradient(180deg,#06080a_0%,#080a0d_45%,#06080a_100%)]">
          <div className="apex-container-wide relative">
            
            {/* ── Problem Section ── */}
            <SectionReveal>
              <ProblemSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Solution Section ── */}
            <SectionReveal>
              <SolutionSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── System Flow ── */}
            <SectionReveal>
              <SystemFlowSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Services ── */}
            <SectionReveal>
              <ServicesSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Use Cases ── */}
            <SectionReveal>
              <UseCasesSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Why APEX Experts ── */}
            <SectionReveal>
              <WhyApexSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Process ── */}
            <SectionReveal>
              <ProcessSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Projects ── */}
            <SectionReveal>
              <ProjectsSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Testimonials ── */}
            <SectionReveal>
              <TestimonialsSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Blog ── */}
            <SectionReveal>
              <BlogSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── CTA Block ── */}
            <SectionReveal>
              <CtaSection />
            </SectionReveal>

            <div className="section-separator my-0" aria-hidden="true" />

            {/* ── Contact ── */}
            <SectionReveal>
              <ContactSection />
            </SectionReveal>

            <div className="h-10 sm:h-12" />
          </div>
        </div>
      </section>
    </>
  );
}
