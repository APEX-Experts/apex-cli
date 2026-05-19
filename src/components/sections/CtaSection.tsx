"use client";

import React from "react";
import { CtaTemplate } from "@/components/ui/CtaTemplate";

export function CtaSection() {
  return (
    <CtaTemplate
      title={
        <>
          Ready to assess your <br />
          <span className="text-sinai-glow-orange">system architecture?</span>
        </>
      }
      description="Start with a 30-minute technical call. We will review your environment, identify constraints, and define whether and how we can help. Operating from Alexandria and Dubai. Serving enterprise clients across Egypt, UAE, and the GCC."
      buttonText="Book a Technical Consultation"
      buttonHref="/contact"
    />
  );
}
