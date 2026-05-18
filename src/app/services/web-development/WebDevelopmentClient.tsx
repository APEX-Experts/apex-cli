"use client";

import React from "react";
import {
  Globe,
  Palette,
  CloudUpload,
  ShieldCheck,
  Layers,
  Zap,
  MonitorCog,
  CloudCog,
} from "lucide-react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { ServiceHeroProps } from "@/components/services/ServiceHero";

const WEB_CAPABILITIES = [
  {
    id: "01",
    title: "Cloud Infrastructure",
    desc: "Automated deployment pipelines and serverless scaling on AWS, Vercel, or GCP, engineered for high-availability and zero-downtime environments.",
    icon: <CloudUpload className="w-8 h-8" />,
    image: "/images/project2.png",
  },
  {
    id: "02",
    title: "Security & Scale",
    desc: "Hardened security protocols and elastic architectures designed to handle secure access patterns, reliable hosting, and architecture that can grow with traffic.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/project3.png",
  },
  {
    id: "03",
    title: "Cinematic UI/UX",
    desc: "Motion-first design systems that combine aesthetic precision with functional utility for an immersive and memorable digital journey.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/project1.png",
  },
  {
    id: "04",
    title: "Full-Stack Architecture",
    desc: "Scalable backend systems and complex API orchestrations integrated with modern frontend frameworks for seamless end-to-end masterclass engineering.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/project2.png",
  },
  {
    id: "05",
    title: "Website Optimization & Support",
    desc: "Elite performance tuning, technical SEO improvements, and 24/7 technical support to ensure your digital presence remains optimal and synchronized.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/project3.png",
  },
];

const DEEP_DIVES = [
  {
    id: "01",
    badge: "Technical_Deep_Dive // 01",
    title: (
      <>
        Custom <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">
          Website <br /> Development
        </span>
      </>
    ),
    mainCard: {
      title: "Premium Web Architectures",
      desc: "We specialize in crafting bespoke digital experiences that combine high-authority design with production-grade engineering. Our websites are engineered for scale, speed, and cinematic user engagement across all platforms.",
    },
    items: [
      {
        title: "Corporate Websites",
        desc: "High-authority digital presence for enterprises.",
      },
      {
        title: "Business Websites",
        desc: "Scalable solutions for operational growth.",
      },
      {
        title: "Landing Pages",
        desc: "High-conversion masterpieces with maximum impact.",
      },
      {
        title: "Multi-Language",
        desc: "Globalized architectures & RTL support.",
      },
      {
        title: "Performance Tuning",
        desc: "Optimizing for Core Web Vitals excellence.",
      },
      {
        title: "Support",
        desc: "24/7 technical monitoring & care.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/project1.png",
    imageAlt: "Premium Custom Web Development",
    hudLeft: "RUNTIME: STABLE",
    hudRight: "STACK_PIPELINE: ACTIVE",
    hudBottomLeft: "V8_STATUS: OPTIMAL",
    hudBottomRight: "© APEX EXPERTS SOLUTIONS",
    floatingBox: {
      title: "RENDER_QUEUE",
      items: [
        { label: "FID_LATENCY", width: "60%" },
        { label: "CLS_SCORE", width: "85%" },
        { label: "LCP_SPEED", width: "70%" },
      ],
    },
  },
  {
    id: "02",
    badge: "Technical_Deep_Dive // 02",
    title: (
      <>
        Full-Stack <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">
          Web <br /> Development
        </span>
      </>
    ),
    mainCard: {
      title: "End-to-End Mastery",
      desc: "Our full-stack engineers connect frontend interfaces, APIs, databases, admin panels, and authentication into one working product. from complex database schemas to intuitive admin control centers.",
    },
    items: [
      {
        title: "Frontend Dev",
        desc: "Reactive, high-fidelity UI engineering.",
      },
      {
        title: "Backend Dev",
        desc: "Scalable server-side logic & API design.",
      },
      {
        title: "Database Integration",
        desc: "Complex data modeling & optimization.",
      },
      {
        title: "Admin Dashboards",
        desc: "Powerful internal management systems.",
      },
      {
        title: "API Orchestration",
        desc: "Seamless third-party & internal syncing.",
      },
      {
        title: "Support",
        desc: "Continuous technical maintenance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/project2.png",
    imageAlt: "Full-Stack System Engineering",
    hudLeft: "NODE_RUNTIME: ACTIVE",
    hudRight: "API_PIPELINE: SYNCHRONIZED",
    hudBottomLeft: "DATABASE_CLUSTER: NOMINAL",
    hudBottomRight: "© APEX EXPERTS CLOUD",
    floatingBox: {
      title: "SYSTEM_LOAD",
      items: [
        { label: "V8_RUNTIME", width: "70%" },
        { label: "DB_CONNECTIONS", width: "90%" },
        { label: "API_ROUTING", width: "80%" },
      ],
    },
  },
  {
    id: "03",
    badge: "Technical_Deep_Dive // 03",
    title: (
      <>
        E-Commerce <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          & Portal Development
        </span>
      </>
    ),
    mainCard: {
      title: "Global Transaction Engines",
      desc: "We engineer high-conversion E-Commerce ecosystems and secure organizational portals. From complex booking logic to multi-tier membership systems, our platforms are built to handle high-frequency transactions with unmatched security and speed.",
    },
    items: [
      {
        title: "E-Commerce Websites",
        desc: "Feature-rich, scalable digital storefronts.",
      },
      {
        title: "Customer Portals",
        desc: "Self-service hubs for client engagement.",
      },
      {
        title: "Booking Platforms",
        desc: "Complex reservation & scheduling logic.",
      },
      {
        title: "Member Portals",
        desc: "Secure multi-tier access management.",
      },
      {
        title: "Payment Systems",
        desc: "Military-grade encryption & orchestration.",
      },
      {
        title: "Support",
        desc: "Technical surveillance & optimization.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/project3.png",
    imageAlt: "E-Commerce & Portal Ecosystems",
    hudLeft: "TRANS_SHIELD: LOCKED",
    hudRight: "TLS_VERSION: 1.3",
    hudBottomLeft: "PAYMENT_SYNC: ONLINE",
    hudBottomRight: "PORTAL_BUILD_V5",
    floatingBox: {
      title: "TRANSACTIONS_LOAD",
      items: [
        { label: "GATEWAY_SYNC", width: "85%" },
        { label: "DB_TRANSACTIONS", width: "95%" },
        { label: "TOKEN_INFERENCE", width: "75%" },
      ],
    },
  },
  {
    id: "04",
    badge: "Technical_Deep_Dive // 04",
    title: (
      <>
        Optimization <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          & Support
        </span>
      </>
    ),
    mainCard: {
      title: "Continuous Performance Mastery",
      desc: "A website is a living organism. We provide continuous technical surveillance, performance tuning, and security hardening to ensure your digital asset remains at the absolute peak of its potential, 24 hours a day, 7 days a week.",
    },
    items: [
      {
        title: "Website Redesign",
        desc: "Modernizing legacy interfaces for today.",
      },
      {
        title: "Performance Tuning",
        desc: "Core Web Vitals & speed optimization.",
      },
      {
        title: "Security Enhancements",
        desc: "Hardening & vulnerability protection.",
      },
      {
        title: "Maintenance & Support",
        desc: "Proactive updates & bug resolution.",
      },
      {
        title: "SEO Optimization",
        desc: "Technical SEO & search dominance.",
      },
      {
        title: "Support",
        desc: "24/7 technical surveillance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/project1.png",
    imageAlt: "Surveillance & Hardening Core",
    hudLeft: "SURVEILLANCE: STANDBY",
    hudRight: "THREATS: ZERO",
    hudBottomLeft: "SSL_CERT: VALID",
    hudBottomRight: "APEX_SURVEILLANCE_V1.1",
    floatingBox: {
      title: "SHIELD_SURVEIL",
      items: [
        { label: "WAF_RULES", width: "95%" },
        { label: "SSL_STATUS", width: "100%" },
        { label: "DDOS_PROTECT", width: "90%" },
      ],
    },
  },
];

const CTA = {
  badge: "Engagement_Initialization // V5.0",
  title: (
    <>
      Ready to <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">
        Scale Your Vision?
      </span>
    </>
  ),
  description: (
    <>
      Join forces with{" "}
      <span className="text-white font-bold">APEX Experts</span> to engineer the
      next generation of digital excellence.
    </>
  ),
  ctaText: "Initialize Project",
  ctaLink: "/contact",
  secureNodeText: "Secure_Node: Active",
  availabilityText: "Available for Q3-Q4 2026",
  studioLabel: "Apex_Experts_Creative_Studio\nSystem_Build_Hash: 0x5a1118f",
};

const heroData: ServiceHeroProps = {
  badge: "WEB_DEVELOPMENT_ENGINE // APEX_SOL",
  header: "Enterprise Web Application",
  headerGlow: "Development",
  description:
    "Secure Systems Built for Operational Complexity. We engineer robust web systems for organizations that need more than a website: SaaS platforms, secure operational portals, administrative dashboards, and deep integrations with CRM, ERP, payment, and enterprise authentication systems.",
  image: "/images/project3.png",
  imageAlt: "Premium Web Engineering Core",
  ctaLink: "/contact",
  impactTitle: "Where it delivers impact",
  impactItems: [
    {
      icon: <MonitorCog className="w-6 h-6" />,
      title: "Operational Platforms & Client Portals",
      description:
        "Product and IT teams building internal operational tools, workflow systems, and client-facing portals with tailored business functionality.",
    },
    {
      icon: <CloudCog className="w-6 h-6" />,
      title: "Complex SaaS Ecosystems",
      description:
        "SaaS platforms that require advanced handling of complex data structures, user management, permissions, and third-party integrations.",
    },
  ],
};

const capabilityHubData = {
  badge: "Web_Orchestrator // V5.0",
  title: (
    <>
      The Web Development <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">
        Capability Hub
      </span>
    </>
  ),
  capabilities: WEB_CAPABILITIES,
  neuralCoreLabel: "WEB_HUB_V5.0",
  syncLabel: "EDGE_SYNC: SYNCHRONIZED",
  versionLabel: "SYSTEM_STATUS: NOMINAL",
  badgePrefix: "Capabilities",
  statusBadgeText:
    "EDGE_SYNC: SYNCHRONIZED\nSTACK_PIPELINE: ACTIVE\nSYSTEM_STATUS: NOMINAL",
};
export default function WebDevelopmentClient() {
  return <ServiceTemplate slug="web-development" hero={heroData} />;
}
