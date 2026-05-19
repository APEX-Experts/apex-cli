"use client";

import { GitBranchIcon } from "@/components/Icons";
import { ServiceCtaProps } from "@/components/services/ServiceCta";
import { ServiceHeroProps } from "@/components/services/ServiceHero";
import { ServiceOperationsProps } from "@/components/services/ServiceOperations";
import { ServicePrinciplesProps } from "@/components/services/ServicePrinciples";
import { ServiceScenariosProps } from "@/components/services/ServiceScenarios";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileCheck,
  Layers,
  Lock,
  MessagesSquare,
  Network,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const heroProps: ServiceHeroProps = {
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

const operationsProps: ServiceOperationsProps = {
  badge: "ENTERPRISE AI // OPERATIONAL SYSTEMS",
  header: "AI That Moves",
  headerGlow: "Beyond Demos",
  subheader:
    "We design AI implementations that operate inside real enterprise systems, respecting data structures, governance rules, access controls, and operational workflows.",
  items: [
    {
      isActive: false,
      badge: "OPERATIONAL CONSTRAINTS",
      title: "Why Most Enterprise AI Initiatives Never Move Beyond Demos",
      description:
        "Most enterprise AI projects produce impressive demonstrations — but fail to become operational systems integrated into real workflows.",
      subItems: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "AI lacks schema and business-context awareness",
          description:
            "Generic outputs that don't align with operational data models",
        },
        {
          icon: <ShieldCheck className="w-4 h-4" />,
          title: "External data movement breaks enterprise governance",
          description: "Compliance violations and audit trail fragmentation",
        },
        {
          icon: <Lock className="w-4 h-4" />,
          title: "Missing role-based controls reduce operational trust",
          description:
            "Teams hesitate to deploy AI without proper access management",
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Teams remain dependent on IT for reporting workflows",
          description:
            "Bottlenecks prevent autonomous operational decision-making",
        },
        {
          icon: <Workflow className="w-4 h-4" />,
          title: "Isolated automation scripts increase fragmentation",
          description: "Technical debt accumulates across disconnected systems",
        },
      ],
    },
    {
      isActive: true,
      badge: "PRODUCTION SYSTEMS",
      title: "AI That Operates Inside Your Enterprise Systems",
      description:
        "Our AI implementations are designed for production reliability, operational governance, and enterprise-grade auditability — not isolated demonstrations.",
      subItems: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "Schema-context AI architecture",
          description:
            "AI trained on your enterprise data models and business logic",
        },
        {
          icon: <Lock className="w-4 h-4" />,
          title: "Role-based access integration",
          description:
            "Permissions inherit from existing identity and access systems",
        },
        {
          icon: <FileCheck className="w-4 h-4" />,
          title: "Governed output validation",
          description:
            "Automated verification against compliance and governance rules",
        },
        {
          icon: <GitBranchIcon className="w-4 h-4" />,
          title: "Infrastructure-native deployment",
          description:
            "AI runs inside your existing database and ERP infrastructure",
        },
        {
          icon: <Workflow className="w-4 h-4" />,
          title: "Operational workflow embedding",
          description:
            "AI integrated directly into daily operational processes",
        },
      ],
    },
  ],
};

const scenariosProps: ServiceScenariosProps = {
  badge: "ENTERPRISE WORKFLOWS // OPERATIONAL AI SCENARIOS",
  header: "Where AI Becomes Operational Inside",
  headerGlow: "Enterprise Systems",
  subheader:
    "Real operational environments where AI is applied within existing systems to improve access, automation, and decision-making under enterprise governance rules.",
  items: [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Financial Reporting Operations",
      desc: "Finance teams manually generating reports from Oracle tables need natural language analytics with role-based business access.",
      badges: [
        {
          icon: <Database className="w-2.5 h-2.5" />,
          text: "Oracle ERP",
        },
        {
          icon: (
            <span className="w-1 h-1 rounded-full bg-sinai-glow-orange"></span>
          ),
          text: "Analytics",
        },
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Public Sector Knowledge Retrieval",
      desc: "Government organizations with thousands of policy documents require secure RAG-based retrieval aligned with enterprise permissions.",
      badges: [
        {
          icon: <Database className="w-2.5 h-2.5" />,
          text: "Secure Gov",
        },
        {
          icon: (
            <span className="w-1 h-1 rounded-full bg-sinai-glow-orange"></span>
          ),
          text: "RAG",
        },
      ],
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Enterprise Support Operations",
      desc: "Support teams handling large ticket volumes need AI-driven triage, routing, and escalation workflows with human approval controls.",
      badges: [
        {
          icon: <Database className="w-2.5 h-2.5" />,
          text: "Secure Now",
        },
        {
          icon: (
            <span className="w-1 h-1 rounded-full bg-sinai-glow-orange"></span>
          ),
          text: "Automation",
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "ERP Financial Monitoring",
      desc: "ERP organizations need AI-powered anomaly detection inside Oracle reporting environments without external data export.",
      badges: [
        {
          icon: <Database className="w-2.5 h-2.5" />,
          text: "Oracle APEX",
        },
        {
          icon: (
            <span className="w-1 h-1 rounded-full bg-sinai-glow-orange"></span>
          ),
          text: "Monitoring",
        },
      ],
    },
  ],
};

const principlesProps: ServicePrinciplesProps = {
  badge: "AI ARCHITECTURE // PRODUCTION PRINCIPLES",
  header: "What Separates Our AI Practice",
  subheader:
    "Our AI systems are engineered for operational reliability, governance alignment, and production deployment inside enterprise environments.",
  items: [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Production-Only AI Systems",
      desc: "We only deploy AI systems proven in operational environments, not experimental or research-grade models.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Schema-Aware Intelligence Layer",
      desc: "AI trained on your data models, business terminology, and operational relationships.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Full Data Sovereignty",
      desc: "All AI operations execute within your infrastructure boundaries without external data transfer.",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Human-Led Approvals",
      desc: "Critical workflows require explicit human approval with full audit trails and governance controls.",
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      title: "Proven AI Products in Production",
      desc: "Our implementations leverage enterprise-grade AI products already operating at scale.",
    },
  ],
};

const ctaProps: ServiceCtaProps = {
  header: "Assess Whether AI Is Ready to",
  headerGlow: "Operate in Your Environment",
  subheader:
    "Start with an AI integration assessment. We evaluate your current infrastructure, workflow architecture, governance requirements, and security constraints to define where AI can operate safely and deliver operational value.",
  ctaButtonText: "Book a Technical Consultation",
};

export default function AIAutomationClient() {
  return (
    <ServiceTemplate
      slug="ai-automation"
      hero={heroProps}
      operations={operationsProps}
      scenarios={scenariosProps}
      principles={principlesProps}
      cta={ctaProps}
    />
  );
}
