"use client";

import React from "react";
import { Smartphone, Apple, Zap, Palette, Database, Workflow, SmartphoneNfc } from "lucide-react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { ServiceHeroProps } from "@/components/services/ServiceHero";

const MOBILE_CAPABILITIES = [
  {
    id: "01",
    title: "iOS Engineering",
    desc: "Swift & SwiftUI masterclass engineering for the premium Apple ecosystem.",
    icon: <Apple className="w-8 h-8" />,
    image: "/images/mobile-dev-hero.png",
  },
  {
    id: "02",
    title: "Android Core",
    desc: "Kotlin-first development designed for robust, scalable Android applications.",
    icon: <Smartphone className="w-8 h-8" />,
    image: "/images/mobile-uiux.png",
  },
  {
    id: "03",
    title: "Cross-Platform",
    desc: "High-fidelity Flutter & React Native apps with native-grade performance.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/mobile-backend.png",
  },
  {
    id: "04",
    title: "UX/UI Mastery",
    desc: "Cinematic mobile interfaces defined by fluid transitions and gesture logic.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/mobile-uiux.png",
  },
  {
    id: "05",
    title: "Secure Backend",
    desc: "Edge-computed real-time data layers and offline-first mobile architectures.",
    icon: <Database className="w-8 h-8" />,
    image: "/images/mobile-backend.png",
  },
];

const DEEP_DIVES = [
  {
    id: "01",
    badge: "Technical_Deep_Dive // 01",
    title: (
      <>
        Custom Mobile <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">
          App Development
        </span>
      </>
    ),
    mainCard: {
      title: "Custom Mobile Apps",
      desc: "We engineer bespoke mobile applications that combine native performance with cinematic design. From enterprise solutions to customer-facing apps, we build for impact.",
    },
    items: [
      {
        title: "iOS Development",
        desc: "Native Swift/SwiftUI masterpieces.",
      },
      {
        title: "Android Development",
        desc: "Kotlin-first robust engineering.",
      },
      {
        title: "Cross-Platform",
        desc: "Flutter & React Native excellence.",
      },
      {
        title: "Business Apps",
        desc: "Scalable enterprise mobile solutions.",
      },
      {
        title: "Performance",
        desc: "Optimizing for smooth interactions and fast screen loading.",
      },
      {
        title: "Support",
        desc: "support, monitoring, and improvements",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/mobile-dev-hero.png",
    imageAlt: "Premium Mobile App Engineering",
    hudLeft: "MOBILE_STATUS: NOMINAL",
    hudRight: "CORE_TEMP: 26°C",
    hudBottomLeft: "IOS_SWIFTUI_V18",
    hudBottomRight: "© APEX EXPERTS LABS",
    floatingBox: {
      title: "COMPILE_LOAD",
      items: [
        { label: "SWIFT_COMPILER", width: "70%" },
        { label: "KOTLIN_DAEMON", width: "65%" },
        { label: "FLUTTER_ENGINE", width: "80%" },
      ],
    },
  },
  {
    id: "02",
    badge: "Technical_Deep_Dive // 02",
    title: (
      <>
        UI/UX for <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">
          Mobile Apps
        </span>
      </>
    ),
    mainCard: {
      title: "Immersive Experiences",
      desc: "We design interfaces that feel alive. Our focus on fluid motion, intuitive patterns, and haptic feedback ensures your app is not just used, but enjoyed.",
    },
    items: [
      {
        title: "UI Design",
        desc: "Glassmorphic & modern interfaces.",
      },
      {
        title: "UX Optimization",
        desc: "Frictionless user journey flows.",
      },
      {
        title: "Prototyping",
        desc: "Interactive high-fidelity motions.",
      },
      {
        title: "Design Systems",
        desc: "Atomic & scalable UI components.",
      },
      {
        title: "Visual Design",
        desc: "Cinematic & brand-aligned aesthetics.",
      },
      {
        title: "Support",
        desc: "Continuous design evolution.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/mobile-uiux.png",
    imageAlt: "Interactive Design Systems",
    hudLeft: "HAPTIC_ENGINE: STABLE",
    hudRight: "GESTURE_MATRIX: NOMINAL",
    hudBottomLeft: "FIGMA_DECK_V1.0",
    hudBottomRight: "© APEX DESIGN TEAM",
    floatingBox: {
      title: "UI_QUEUE",
      items: [
        { label: "FRAME_SPEED", width: "95%" },
        { label: "HAPTICS_LATENCY", width: "100%" },
        { label: "RENDERER_CACHE", width: "90%" },
      ],
    },
  },
  {
    id: "03",
    badge: "Technical_Deep_Dive // 03",
    title: (
      <>
        Backend & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          API Integration
        </span>
      </>
    ),
    mainCard: {
      title: "Backend & API Integration",
      desc: "We build the infrastructure that powers your app. From complex API orchestrations to secure user authentication, our backends are engineered for scale and speed.",
    },
    items: [
      {
        title: "API Integration",
        desc: "Seamless orchestration & REST/GraphQL.",
      },
      {
        title: "Authentication",
        desc: "Secure multi-factor user management.",
      },
      {
        title: "Database Connect",
        desc: "Optimized data sync & offline-first.",
      },
      {
        title: "Third-Party Sync",
        desc: "Integrating CRM, ERP, and payment nodes.",
      },
      {
        title: "Cloud Scale",
        desc: "Serverless & automated infrastructure.",
      },
      {
        title: "Support",
        desc: "support, monitoring, and improvements",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/mobile-backend.png",
    imageAlt: "Cloud Database Synchronization",
    hudLeft: "DB_SYNC: SYNCHRONIZED",
    hudRight: "API_LATENCY: 12MS",
    hudBottomLeft: "POSTGRESQL_PRIMARY",
    hudBottomRight: "EDGE_SUPABASE_CLUSTER",
    floatingBox: {
      title: "ENDPOINT_INFERENCE",
      items: [
        { label: "AUTH_GATEWAY", width: "80%" },
        { label: "SYNC_WORKERS", width: "85%" },
        { label: "CACHING_REDIS", width: "90%" },
      ],
    },
  },
  {
    id: "04",
    badge: "Technical_Deep_Dive // 04",
    title: (
      <>
        Maintenance <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          & Enhancement
        </span>
      </>
    ),
    mainCard: {
      title: "Life Cycle Excellence",
      desc: "Apps require constant care. We provide continuous monitoring, performance tuning, and feature updates to ensure your product remains at the cutting edge of the market.",
    },
    items: [
      {
        title: "Performance Opt",
        desc: "Speed & responsiveness tuning.",
      },
      {
        title: "Updates & Fixes",
        desc: "Proactive bug resolution & OS sync.",
      },
      {
        title: "Enhancements",
        desc: "New feature rollouts & evolution.",
      },
      {
        title: "Support Protocols",
        desc: "24/7 technical surveillance & monitoring.",
      },
      {
        title: "Security Audits",
        desc: "Continuous vulnerability protection.",
      },
      {
        title: "Support",
        desc: "Engagement initialization.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/mobile-uiux.png",
    imageAlt: "Lifecycle & Enhancement Infrastructure",
    hudLeft: "SURVEILLANCE: STANDBY",
    hudRight: "THREATS: ZERO",
    hudBottomLeft: "SECURE_SHIELD_V4.2",
    hudBottomRight: "© APEX CYBERSECURITY",
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
  badge: "MOBILE_DEVELOPMENT_ENGINE // APEX_SOL",
  header: "Enterprise Mobile Application",
  headerGlow: "Development",
  description:
    "We engineer premium native iOS and Android applications, fluid hybrid experiences, and high-security edge-computing database synchronization layers. High-fidelity layouts meets absolute performance.",
  image: "/images/mobile-dev-hero.png",
  imageAlt: "Premium Mobile Engineering Core",
  ctaLink: "/contact",
  impactTitle: "Where it delivers impact",
  impactItems: [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Connected Field Operations",
      description:
        "Operations managers and IT teams whose field staff are disconnected from core approval workflows, operational tasks, and centralized business systems.",
    },
    {
      icon: <SmartphoneNfc className="w-6 h-6" />,
      title: "Mobile ERP & Oracle Integration",
      description:
        "Organizations with mobile-driven workflows that require deep integration with Oracle databases, ERP platforms, and enterprise backend systems.",
    },
  ],
};

const capabilityHubData = {
  badge: "Mobile_Orchestrator // V5.0",
  title: (
    <>
      The Mobile Development <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">
        Capability Hub
      </span>
    </>
  ),
  capabilities: MOBILE_CAPABILITIES,
  neuralCoreLabel: "MOBILE_HUB_V5.0",
  syncLabel: "EDGE_SYNC: SYNCHRONIZED",
  versionLabel: "SYSTEM_STATUS: NOMINAL",
  badgePrefix: "Capabilities",
  statusBadgeText:
    "EDGE_SYNC: SYNCHRONIZED\nSTACK_PIPELINE: ACTIVE\nSYSTEM_STATUS: NOMINAL",
};

export default function MobileDevelopmentClient() {
  return <ServiceTemplate slug="mobile-development" hero={heroData} />;
}
