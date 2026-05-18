"use client";

import { ProjectHeroProps } from "@/components/projects/ProjectHero";
import { ProjectProblemSolutionProps } from "@/components/projects/ProjectProblemSolution";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import {
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  FileTextIcon,
  MessageSquare,
  Shield,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";

const heroProps: ProjectHeroProps = {
  badge: "PLUGIN FOR ORACLE APEX // ASKL_V2",
  title: "ASKLYZE",
  description:
    "ASKLYZE is an Oracle APEX-native plugin that delivers AI-powered natural language reporting directly inside your existing APEX environment. Business users type a question and receive accurate reports, charts, and dashboards without SQL access, without data moving outside your infrastructure.",
  metrics: [
    { label: "Query Velocity", value: "+300%" },
    { label: "Data Security", value: "Native" },
    { label: "Integration", value: "Plug & Play" },
    { label: "Accuracy", value: "98.5%" },
  ],
  image: "/images/asklyze-premium.png",
  logo: "/images/asklyze-logo.png",
  ctaText: "Schedule Call",
  ctaLink: "/contact",
  streamLabel: "Data_Stream_Live",
  archLabel: "Core_Architecture",
};
const problemSolutionProps: ProjectProblemSolutionProps = {
  badge: "Problem Analysis // Enterprise Constraints",
  header: "The Enterprise Reporting",
  headerGlow: "Bottleneck in Oracle APEX",
  subheader:
    "Traditional reporting workflows introduce operational delays, governance risks, and unnecessary architectural complexity.",
  problem: {
    supertitle: "Current State",
    title: "The Problem",
    items: [
      {
        title: "Manual SQL Dependencies",
        description:
          "Reports require SQL expertise, creating bottlenecks and delays in data access",
      },
      {
        title: "Deployment Friction",
        description:
          "Every reporting change needs IT involvement and deployment cycles",
      },
      {
        title: "External Tool Complexity",
        description:
          "Third-party analytics introduce data movement and compliance risks",
      },
      {
        title: "Governance Fragmentation",
        description:
          "Data leaves Oracle infrastructure, creating security and audit concerns",
      },
    ],
  },
  solution: {
    supertitle: "Asklyze Solution",
    title: "The Solution",
    items: [
      {
        title: "Natural Language Analytics",
        description:
          "Ask questions in plain English, get instant SQL-powered insights",
      },
      {
        title: "Native APEX Integration",
        description:
          "Built directly inside Oracle APEX with zero external dependencies",
      },
      {
        title: "AI-Generated SQL",
        description:
          "Automatic query generation with role-based access control",
      },
      {
        title: "Zero Data Movement",
        description: "All processing happens inside your Oracle infrastructure",
      },
    ],
  },
  disclaimer: {
    header: "No Data Leaves Your Oracle Infrastructure",
    description:
      "ASKLYZE operates entirely within Oracle APEX, ensuring complete architectural isolation, compliance safety, and zero external dependencies.",
    items: [
      {
        icon: <Database className="w-6 h-6" />,
        title: "Native APEX",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Zero Dependencies",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Compliance-Safe",
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Instant Analytics",
      },
    ],
  },
};

const howItWorksProps = {
  badge: "Workflow Engine // AI Execution Flow",
  header: "How It",
  headerGlow: "Works",
  subheader:
    "ASKLYZE transforms natural language requests into secure Oracle-native analytics workflows through a streamlined AI execution pipeline.",
  steps: [
    {
      id: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Ask a Question",
      description: "Natural language input directly inside Oracle APEX",
    },
    {
      id: "02",
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Generates SQL",
      description:
        "Queries generated automatically against Oracle schema architecture",
    },
    {
      id: "03",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Results Instantly Rendered",
      description:
        "Reports, dashboards, and enterprise visual analytics generated in real time",
    },
    {
      id: "04",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure by Design",
      description:
        "Oracle-native permissions and enterprise access controls preserved",
    },
  ],
};

const scenariosProps = {
  badge: "Enterprise Scenarios // Real-World Workflows",
  header: "Built for Real",
  headerGlow: "Enterprise Worflows",
  subheader:
    "ASKLYZE integrates directly into existing Oracle APEX environments, enabling operational teams to access enterprise insights without disrupting infrastructure, governance, or workflow architecture.",
  scenarios: [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Data Residency & Compliance",
      badge: "Enterprise Security & Compliance Teams",
      challenge:
        "Organizations with on-premise Oracle infrastructure require secure analytics without external data movement or third-party tool dependencies.",
      solutionTitle:
        "ASKLYZE operates entirely within Oracle APEX infrastructure",
      solutionDescription:
        "Zero data leaves your Oracle environment. Complete compliance with enterprise security policies and data residency requirements.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Financial Reporting Operations",
      badge: "Financial Analysts & Controllers",
      challenge:
        "Finance teams need ad-hoc reporting and operational insights without waiting for IT teams to manually write SQL queries.",
      solutionTitle:
        "Natural language analytics directly inside Oracle APEX workflows",
      solutionDescription:
        "Financial teams generate real-time reports instantly through conversational queries, eliminating SQL bottlenecks and IT dependencies.",
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Procurement & Supplier Analytics",
      badge: "Procurement Managers & Supply Chain Teams",
      challenge:
        "Procurement teams monitor supplier KPIs, SLA performance, and operational metrics across complex Oracle database schemas.",
      solutionTitle:
        "Business users query enterprise data without SQL knowledge",
      solutionDescription:
        "Procurement managers access supplier analytics in seconds, enabling faster decision-making and improved vendor performance management.",
    },
    {
      icon: <FileTextIcon className="w-5 h-5" />,
      title: "Operational Reporting",
      badge: "Operations Teams & Department Managers",
      challenge:
        "Department managers require access to operational dashboards and KPI tracking without manual report generation cycles.",
      solutionTitle: "AI-generated analytics with role-based access control",
      solutionDescription:
        "Operations teams visualize real-time KPIs and operational metrics instantly, maintaining Oracle APEX security and governance models.",
    },
  ],
};

const ctaProps = {
  header: "Add AI Analytics to your",
  headerGlow: "Oracle Apex Environment",
  description:
    "ASKLYZE can be scoped and deployed into an existing Oracle APEX environment without a full system rebuild. Start with a technical call to assess your APEX version, schema structure, and deployment requirements",
  buttonText: "Book a Technical Consultation",
};

export function AsklyzeClient() {
  return (
    <ProjectTemplate
      projectKey="asklyze"
      heroProps={heroProps}
      problemSolutionProps={problemSolutionProps}
      howItWorksProps={howItWorksProps}
    />
  );
}
