import React from "react";
import { Metadata } from "next";
import LegalTemplate from "@/components/ui/LegalTemplate";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Terms of Service | APEX Experts AI Solutions",
  description:
    "Official Master Terms and Conditions governing the use of APEX Experts AI Solutions and platforms.",
  alternates: {
    canonical: "https://apexexperts.net/terms",
  },
  openGraph: {
    title: "Terms of Service | APEX Experts AI Solutions",
    description: "Official Master Terms and Conditions.",
    url: "https://apexexperts.net/terms",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | APEX Experts AI Solutions",
    description: "Official Master Terms and Conditions.",
    images: ["/images/og-main.png"],
  },
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), "src/data/legal/terms.md");
  const content = fs.readFileSync(filePath, "utf8");

  return <LegalTemplate title="Terms of Service" content={content} />;
}
