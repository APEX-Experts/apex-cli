"use client";

import React from "react";
import { Share2, Cpu, Zap, Layers, BrainCircuit, Network, MessagesSquare } from "lucide-react";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { ServiceHeroProps } from "@/components/services/ServiceHero";

const CAPABILITIES = [
  {
    id: "01",
    title: "Autonomous Integration",
    desc: "Seamlessly connect disparate legacy systems and cloud native architectures with self-healing AI bridges.",
    icon: <Share2 className="w-8 h-8" />,
    image: "/images/autonomous-integration-detail.png",
  },
  {
    id: "02",
    title: "Cognitive RPA",
    desc: "Intelligent software robots that perceive, reason, and execute complex business logic with human-like precision.",
    icon: <Cpu className="w-8 h-8" />,
    image: "/images/cognitive-rpa-detail.png",
  },
  {
    id: "03",
    title: "Predictive Analytics",
    desc: "Leverage deep learning models to forecast operational bottlenecks before they impact your bottom line.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/predictive-analytics-detail.png",
  },
  {
    id: "04",
    title: "Agentic Orchestration",
    desc: "Use focused AI steps for planning, lookup, drafting, approval, and handoff.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/agentic-orchestration-detail.png",
  },
];

const DEEP_DIVES = [
  {
    id: "02",
    badge: "Technical_Deep_Dive // 02",
    title: (
      <>
        Workflow <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          Intelligence
        </span>
      </>
    ),
    mainCard: {
      title: "AI-Assisted Decisions",
      desc: "Our engines don't just follow scripts. The system checks context, rules, and available data before recommending the next approved step. This is the difference between simple automation and true enterprise intelligence.",
    },
    metrics: [
      { label: "LOGIC_SYNTHESIS", value: "99.9%" },
      { label: "DECISION_LATENCY", value: "<12ms" },
      { label: "CONTEXT_WINDOW", value: "2M+" },
      { label: "ERROR_MITIGATION", value: "AUTO" },
    ],
    image: "/images/autonomous-reasoning-core.png",
    imageAlt: "Autonomous Reasoning Core",
    hudLeft: "SYSTEM_SCAN: READY",
    hudRight: "CORE_TEMP: 32°C",
    hudBottomLeft: "REASONING_ENGINE_V4.0",
    hudBottomRight: "© APEX EXPERTS SOLUTIONS",
    floatingBox: {
      title: "NODE_ANALYSIS",
      items: [
        { label: "LOGIC_DEDUCT", width: "80%" },
        { label: "SWARM_SYNC", width: "95%" },
        { label: "WEIGHTS_ADJ", width: "70%" },
      ],
    },
  },
  {
    id: "03",
    badge: "Advanced_Orchestration // 03",
    title: (
      <>
        Agentic <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          Orchestration
        </span>
      </>
    ),
    mainCard: {
      title: "Connected AI Steps",
      desc: "Our orchestration layer deploys multi-agent swarms that collaborate synchronously. By breaking complex enterprise objectives into atomized tasks, we achieve a level of concurrency and precision that traditional RPA cannot match.",
    },
    metrics: [
      { label: "SWARM_COORDINATION", value: "100%" },
      { label: "TASK_CONCURRENCY", value: "∞" },
      { label: "INTER_AGENT_SYNC", value: "<5ms" },
      { label: "AUTONOMY_LEVEL", value: "L5" },
    ],
    image: "/images/predictive-analytics-detail.png",
    imageAlt: "Agentic Swarm Engine",
    hudLeft: "AGENT_ORCHESTRATOR: ACTIVE",
    hudRight: "THREADS: 124",
    hudBottomLeft: "SWARM_COORDINATION_V1.2",
    hudBottomRight: "© APEX EXPERTS SYSTEMS",
    floatingBox: {
      title: "ORCHESTRATOR_LOAD",
      items: [
        { label: "PLANNER_MODULE", width: "90%" },
        { label: "EXECUTION_AGENT", width: "75%" },
        { label: "VERIFICATION_LOOP", width: "85%" },
      ],
    },
  },
  {
    id: "04",
    badge: "Data_Alchemy // 04",
    title: (
      <>
        Cognitive <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">
          Data Synthesis
        </span>
      </>
    ),
    mainCard: {
      title: "Decision Intelligence",
      desc: "Turn data from your tools into dashboards and alerts that show what needs attention. Our synthesis engine aggregates distributed data streams into real-time, actionable insights and immersive executive dashboards that reveal the hidden pulse of your enterprise.",
    },
    metrics: [
      { label: "INSIGHT_ACCURACY", value: "99.8%" },
      { label: "DATA_THROUGHPUT", value: "P_SCALE" },
      { label: "LATENCY_TO_INSIGHT", value: "NEAR_0" },
      { label: "CONFIDENCE_SCORE", value: "95%+" },
    ],
    image: "/images/cognitive-data-synthesis-core.png",
    imageAlt: "Cognitive Data Synthesis Hub",
    hudLeft: "ANALYTIC_ENGINE: LIVE",
    hudRight: "DATA_SOURCE: MULTI_THREAD",
    hudBottomLeft: "DECISION_CORE_V2.0",
    hudBottomRight: "© APEX EXPERTS INTELLIGENCE",
    floatingBox: {
      title: "Realtime_Synthesis",
      type: "visualizer",
    },
  },
];

const CASE_STUDY = {
  badge: "Real_World_Impact // 05",
  image: "/images/project1.png",
  imageAlt: "NeuralStream 2.0 Integration",
  projectCategory: "Predictive_Automation",
  projectTitle: "NeuralStream 2.0",
  buildVersion: "APEX_AGENT_V4",
  descriptionHeader:
    "Engineering autonomous predictive decision engines for global operations.",
  description:
    "We deployed a multi-agent orchestration ecosystem that processed over 40 million operational records per second. The deployment reduced system downtime by 84% and unlocked predictive automation vectors.",
  stats: [
    { label: "DECISION_ACCURACY", value: "99.97%" },
    { label: "RESPONSE_LATENCY", value: "0.24ms" },
    { label: "DOWNTIME_REDUCTION", value: "-84%" },
  ],
  link: "/contact",
};

const CTA = {
  badge: "Agentic_Activation // APEX_NODE_V4.0",
  title: (
    <>
      Ready to <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">
        Deploy Intelligence?
      </span>
    </>
  ),
  description: (
    <>
      Partner with <span className="text-white font-bold">APEX Experts</span> to
      engineer your autonomous cognitive capabilities.
    </>
  ),
  ctaText: "Initialize Agent",
  ctaLink: "/contact",
  secureNodeText: "Secure_Node: Active",
  availabilityText: "Available for Q3-Q4 2026",
  studioLabel: "Apex_Experts_AI_Studio\nSystem_Build_Hash: 0xAPEX_5A11",
};

const heroData: ServiceHeroProps = {
  badge: "AI SOLUTIONS • ENTERPRISE GRADE",
  header: "AI Integration for",
  headerGlow: "Enterprise Systems",
  description:
    "Embedded in Workflows, Governed by Your Data Rules. We integrate AI directly into existing systems, workflows, and enterprise data layers — ensuring outputs respect governance models, operational permissions, and infrastructure architecture.",
  image: "/images/ai-automation-hero.png",
  imageAlt: "AI Automation Core",
  ctaLink: "/contact",
  impactTitle: "Where it delivers impact",
  impactItems: [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Stalled AI Transformation Initiatives",
      description:
        "CTOs and IT Directors whose AI initiatives failed to progress beyond proof-of-concept due to integration, scalability, or operational challenges.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Enterprise AI System Integration",
      description:
        "Organizations that require AI capabilities to operate seamlessly within Oracle, ERP, and custom enterprise system environments.",
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Self-Service Knowledge Access",
      description:
        "Teams where reporting, analytics, and knowledge retrieval still depend heavily on IT mediation and manual support processes.",
    },
  ],
};

const capabilityHubData = {
  badge: "Automation_Registry // V4.0",
  title: (
    <>
      The AI Automation <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">
        Capability Hub
      </span>
    </>
  ),
  capabilities: CAPABILITIES,
  neuralCoreLabel: "AI_ENGINE_V4.0",
  syncLabel: "REASONING_CORE: ACTIVE",
  versionLabel: "AGENT_STATUS: OPTIMAL",
  badgePrefix: "Capability",
  statusBadgeText:
    "REASONING_CORE: ACTIVE\nINTEGRATION_PIPELINE: SYNCHRONIZED\nAGENT_STATUS: OPTIMAL",
};
export default function AIAutomationClient() {
  return <ServiceTemplate slug="ai-automation" hero={heroData} />;
}
