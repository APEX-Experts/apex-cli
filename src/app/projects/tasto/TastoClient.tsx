"use client";

import { ProjectProblemSolutionProps } from "@/components/projects/ProjectProblemSolution";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Clock,
  Cpu,
  Layers3,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

const heroProps = {
  badge: "SAAS_REVENUE_INTELLIGENCE // TASTO_V1",
  title: "TASTO",
  description:
    "asto is a SaaS ERP ecosystem that unifies CRM, accounting, HR, and project operations into a single, cohesive architecture. Built for organizations managing business across multiple systems that do not talk to each other.",
  metrics: [
    { label: "MRR Sync", value: "Real-time" },
    { label: "Forecast Accuracy", value: "99.9%" },
    { label: "Churn Reduction", value: "-24%" },
    { label: "Reporting", value: "Unified" },
  ],
  image: "/images/tasto-premium.png",
  logo: "/images/tasto-logo.png",
};
const problemSolutionProps: ProjectProblemSolutionProps = {
  badge: "Problem Analysis // Enterprise Constraints",
  header: "What Fragmented Business Tools Cost",
  headerGlow: "in Practice",
  subheader:
    "Most growing organizations reach a point where the combination of a CRM, a separate accounting system, a standalone HR tool, and a project management platform produces operational dysfunction",
  problem: {
    supertitle: "Current State",
    title: "The Problem",
    items: [
      {
        title: "Disconnected Customer Financial Data",
        description:
          "Customer records exist in CRM but are not linked to their invoice history in accounting.",
      },
      {
        title: "Manual Project Cost Reconciliation",
        description:
          "Project costs cannot be reconciled against the accounting ledger without manual export and mapping.",
      },
      {
        title: "Duplicate Payroll Data Entry",
        description:
          "HR data for payroll requires re-entry from project timesheets.",
      },
      {
        title: "Fragmented Management Reporting",
        description:
          "Management reporting requires someone to manually consolidate data from four different systems, every time.",
      },
      {
        title: "Lack of a Single Source of Truth",
        description:
          "There is no single source of truth for what is happening across the business.",
      },
    ],
  },
  solution: {
    supertitle: "Tasto Solution",
    title: "The Solution",
    items: [
      {
        title: "CRM",
        description:
          "contact management, opportunity tracking, pipeline visibility, and customer communication history",
      },
      {
        title: "Accounting",
        description:
          "invoicing, expense management, financial reporting, and ledger management",
      },
      {
        title: "HR",
        description:
          "employee records, payroll inputs, leave management, and performance tracking",
      },
      {
        title: "Project Operations",
        description:
          "ask management, resource allocation, time tracking, and project-level cost visibility",
      },
      {
        title: "Unified reporting",
        description:
          "cross-functional dashboards drawing from live data across all modules",
      },
    ],
  },
  disclaimer: {
    header: "One Architecture for CRM, Accounting, HR, and Projects",
    description:
      "Tasto is built as a unified architecture, not four separate products bolted together with integrations.",
    items: [
      {
        icon: <BookOpenCheck className="w-6 h-6" />,
        title: "One source of truth",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Real-time Updates",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Operational Efficiency",
      },
      {
        icon: <Wallet className="w-6 h-6" />,
        title: "Financial Accuracy",
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
  header: "Unified Operations",
  headerGlow: "Without ERP Complexity",
  subheader:
    "Tasto eliminates the complexity of disconnected tools and manual data workflows by unifying CRM, accounting, HR, and project operations into a single, cohesive architecture.",
  scenarios: [
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      title: "Unified Project-Based Operations",
      badge: "Professional Services",
      challenge:
        "Professional services firms often manage CRM, project management, time tracking, and invoicing in disconnected systems, creating operational inefficiencies and fragmented client visibility.",
      solutionTitle: "Connected Service Delivery Workflow",
      solutionDescription:
        "Tasto unifies CRM, project management, time tracking, and invoicing into a single connected data model for seamless project-based operations.",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Centralized Operational Reporting",
      badge: "Management Reporting",
      challenge:
        "Growing companies waste significant time manually consolidating CRM, accounting, and HR exports to create management reports.",
      solutionTitle: "Single Operational View",
      solutionDescription:
        "Tasto provides a unified operational dashboard that eliminates manual reconciliation and enables management teams to access consolidated business insights instantly.",
    },
    {
      icon: <Layers3 className="w-5 h-5" />,
      title: "ERP Without Enterprise Complexity",
      badge: "ERP Modernization",
      challenge:
        "Organizations evaluating ERP solutions often face excessive implementation complexity, long deployment cycles, and high costs associated with Tier 1 ERP platforms.",
      solutionTitle: "Right-Sized Unified ERP",
      solutionDescription:
        "Tasto delivers unified operational capabilities with implementation scope, deployment speed, and complexity tailored to the organization's actual size and needs.",
    },
  ],
};

const ctaProps = {
  header: "Evaluate Tasto for ",
  headerGlow: "Your Organization",
  description:
    "Start with a product demonstration scoped to your specific operational structure, CRM, accounting, HR, and projects reviewed against your current tool landscape.",
  buttonText: "Schedule a Technical Call",
};

export function TastoClient() {
  return (
    <ProjectTemplate
      projectKey="tasto"
      heroProps={heroProps}
      problemSolutionProps={problemSolutionProps}
      scenariosProps={scenariosProps}
      ctaProps={ctaProps}
    />
  );
}
