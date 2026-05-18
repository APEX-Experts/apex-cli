"use client";

import { ProjectProblemSolutionProps } from "@/components/projects/ProjectProblemSolution";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Database,
  DatabaseZap,
  Handshake,
  MessageSquare,
  Shield,
  ShieldCheck,
} from "lucide-react";

const heroProps = {
  badge: "AI_ANALYTICS_PLATFORM // MYQ_V5",
  title: "MYQUERY",
  description:
    "MyQuery is a standalone plugin that connects to your data warehouse, database, or SaaS tools and lets anyone generate accurate reports and dashboards by asking a question in plain language.",
  metrics: [
    { label: "Insights Velocity", value: "Instant" },
    { label: "Data Integrity", value: "99.2%" },
    { label: "Integrations", value: "22+" },
    { label: "Setup Time", value: "5 min" },
  ],
  image: "/images/myquery-premium.png",
  logo: "/images/myquery-logo.png",
  streamLabel: "Insights_Engine_Live",
  archLabel: "Neural_Core",
};

const problemSolutionProps: ProjectProblemSolutionProps = {
  badge: "Problem Analysis // Enterprise Constraints",
  header: "Why Business Teams Still",
  headerGlow: "Wait for Reports",
  subheader:
    "MyQuery solves the issue for Operations, finance, and business teams who need data access without SQL dependency. It also provides solutions for IT teams managing reporting backlogs, and organizations with data in multiple connected sources.",
  problem: {
    supertitle: "Current State",
    title: "The Problem",
    items: [
      {
        title: "Slow Reporting Cycles",
        description:
          "Business users with specific, time-sensitive data questions wait days for IT to write and deploy a new report.",
      },
      {
        title: "Technical Barriers",
        description:
          "SQL-based analytics tools require technical training and remain inaccessible to operational teams.",
      },
      {
        title: "Data Freshness & Tooling Latency",
        description:
          "Exporting data to external BI tools introduces data freshness delays and creates secondary governance issues.",
      },
      {
        title: "Data Fragmentation & Inaccessible Silos",
        description:
          "Self-service BI tools that lack strict access controls create data visibility risk between departments.",
      },
    ],
  },
  solution: {
    supertitle: "MyQuery Solution",
    title: "The Solution",
    items: [
      {
        title: "22+ data connectors",
        description:
          " cloud databases, data warehouses, SaaS platforms, and enterprise APIs",
      },
      {
        title: "Natural language to SQL",
        description:
          "users type questions; MyQuery generates accurate queries against the connected schema",
      },
      {
        title: "Role-based data isolation",
        description: "per-user access controls enforced at query execution",
      },
      {
        title: "Dashboard and report generation",
        description:
          "output formatted as tables, charts, or dashboards with export options",
      },
      {
        title: "No SQL knowledge required",
        description:
          "for end users; SQL visibility available for technical users who need it",
      },
      {
        title: "Enterprise deployment",
        description:
          "can be deployed within your infrastructure for data residency requirements",
      },
    ],
  },
  disclaimer: {
    header: "A Conversational Interface to Your Enterprise Data",
    description:
      "MyQuery sits between your data sources and your business users.",
    items: [
      {
        icon: <Database className="w-6 h-6" />,
        title: "No SQL",
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: "No IT ticket",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "No data governance compromise",
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Real-time Insight",
      },
    ],
  },
};

const howItWorksProps = {
  badge: "Workflow Engine // AI Execution Flow",
  header: "How It",
  headerGlow: "Works",
  subheader:
    "MyQuery transforms natural language requests into secure analytics workflows through a streamlined AI execution pipeline.",
  steps: [
    {
      id: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Ask a Question",
      description: "Natural language input directly inside any data source",
    },
    {
      id: "02",
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Generates SQL",
      description:
        "Queries generated automatically against the connected schema architecture",
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
      description: "Data access controls are preserved at query execution time",
    },
  ],
};

const scenariosProps = {
  badge: "Enterprise Scenarios // Real-World Workflows",
  header: "Self-Service Analytics",
  headerGlow: "Across Enterprise Data",
  subheader:
    "MyQuery empowers teams with natural language analytics on their data, which enables self-service reporting for finance, operations, and business users while maintaining full data governance and security.",
  scenarios: [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Instant Revenue Insights",
      badge: "Finance",
      challenge:
        "CFOs often depend on BI teams to generate cross-business-unit revenue reports, slowing down decision-making and limiting real-time visibility.",
      solutionTitle: "Self-Service Revenue Analytics",
      solutionDescription:
        "Enable CFOs to query revenue performance across business units instantly using natural language, without relying on BI teams.",
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Automated KPI Reporting",
      badge: "Operations",
      challenge:
        "Operations teams spend significant time requesting or waiting for IT-supported KPI reporting workflows.",
      solutionTitle: "Plain-Language KPI Generation",
      solutionDescription:
        "Allow operations teams to generate daily KPI reports through simple plain-language queries without requiring dedicated IT support.",
    },
    {
      icon: <DatabaseZap className="w-5 h-5" />,
      title: "Unified Enterprise Data Access",
      badge: "Data Integration",
      challenge:
        "Managers struggle to retrieve consistent information spread across warehouses, CRMs, and billing systems.",
      solutionTitle: "Centralized Cross-System Querying",
      solutionDescription:
        "Provide a single centralized interface where managers can query data across warehouses, CRM platforms, and billing systems seamlessly.",
    },
  ],
};

const ctaProps = {
  header: "Give Your Teams Direct Access to",
  headerGlow: "Their Data",
  description:
    "MyQuery can be deployed against your existing data environment. Start with a technical call to assess your data sources, access control requirements, and deployment model.",
  buttonText: "Schedule a Technical Call",
};

export function MyQueryClient() {
  return (
    <ProjectTemplate
      projectKey="myquery"
      heroProps={heroProps}
      problemSolutionProps={problemSolutionProps}
      scenariosProps={scenariosProps}
      ctaProps={ctaProps}
    />
  );
}
