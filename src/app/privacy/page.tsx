import React from "react";
import { Metadata } from "next";
import LegalTemplate from "@/components/ui/LegalTemplate";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Privacy Protocol | APEX Experts AI Solutions",
  description:
    "Official Data Protection and Privacy Governance Framework for APEX Experts AI Solutions.",
  alternates: {
    canonical: "https://apexexperts.net/privacy",
  },
  openGraph: {
    title: "Privacy Protocol | APEX Experts AI Solutions",
    description: "Official Data Protection and Privacy Governance Framework.",
    url: "https://apexexperts.net/privacy",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "Privacy Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Protocol | APEX Experts AI Solutions",
    description: "Official Data Protection and Privacy Governance Framework.",
    images: ["/images/og-main.png"],
  },
};

export default function PrivacyPage() {
  const filePath = path.join(process.cwd(), "src/data/legal/privacy.md");
  const content = fs.readFileSync(filePath, "utf8");

  return <LegalTemplate title="Privacy Policy" content={content} />;
}
