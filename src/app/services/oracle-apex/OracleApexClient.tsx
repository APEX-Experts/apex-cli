"use client";

import { ServiceCtaProps } from "@/components/services/ServiceCta";
import { ServiceHeroProps } from "@/components/services/ServiceHero";
import { ServiceOperationsProps } from "@/components/services/ServiceOperations";
import { ServiceScenariosProps } from "@/components/services/ServiceScenarios";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import {
  Activity,
  AlertTriangle,
  Blocks,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Database,
  Factory,
  FileWarning,
  Gauge,
  GaugeCircle,
  GitBranch,
  HeartPulse,
  LayoutDashboard,
  LockKeyhole,
  Map,
  Puzzle,
  RefreshCcw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Waypoints,
} from "lucide-react";

const heroData: ServiceHeroProps = {
  badge: "ORACLE APEX • ENTERPRISE SOLUTIONS",
  header: "Oracle Apex",
  headerGlow: "Development Services",
  description:
    "Enterprise Applications Built on Oracle Architecture. We deliver production-grade Oracle APEX applications for organizations running critical operations on Oracle databases. From new application development to Oracle Forms migration and APEX environment remediation, our practice covers the full technical depth of the Oracle APEX stack.",
  image: "/images/oracle-apex-hero.png",
  imageAlt: "Oracle APEX Premium Development",
  ctaLink: "/contact",
  impactTitle: "Where it delivers impact",
  impactItems: [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Oracle Environment Management",
      description:
        "IT Directors and DBAs responsible for managing, maintaining, and optimizing Oracle database environments across the organization.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Oracle Forms Modernization",
      description:
        "Organizations preparing to replace or modernize legacy Oracle Forms applications approaching end-of-life.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "APEX Performance Optimization",
      description:
        "Teams struggling with poorly performing or poorly architected Oracle APEX implementations that limit scalability and usability.",
    },
  ],
};

const operationsProps: ServiceOperationsProps = {
  badge: "ORACLE APEX // OPERATIONAL SYSTEMS",
  header: "Oracle Forms & APEX",
  headerGlow: "Modernization Services",
  subheader:
    "We help organizations overcome the constraints that make Oracle Forms and legacy APEX systems difficult to change, modernize, and operate at scale.",
  items: [
    {
      isActive: false,
      badge: "CONSTRAINTS AND FAILURE PATTERNS",
      title: "Why Oracle Environments Become Hard to Modernize",
      description:
        "Most Oracle systems aren’t failing because of technology limitations, they’re constrained by years of accumulated business logic, undocumented architecture, and high-risk dependencies that make change complex and operationally sensitive.",
      subItems: [
        {
          icon: <FileWarning className="w-6 h-6" />,
          title: "Oracle Forms End-of-Life Risk",
          description:
            "Many enterprises still rely on Oracle Forms for mission-critical operations despite years of end-of-life notices, because migration introduces significant operational and business risk.",
        },
        {
          icon: <GitBranch className="w-6 h-6" />,
          title: "Deeply Embedded Legacy Logic",
          description:
            "Legacy Oracle Forms systems often contain deeply embedded PL/SQL logic, complex workflows, and tightly coupled application state that cannot be easily rebuilt without disruption.",
        },
        {
          icon: <GaugeCircle className="w-6 h-6" />,
          title: "Non-Scalable APEX Architecture",
          description:
            "Many Oracle APEX implementations suffer from poor page-level architecture that struggles to scale under concurrent enterprise usage.",
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          title: "Accumulated PL/SQL Technical Debt",
          description:
            "PL/SQL packages in long-running APEX systems often evolve organically over time, resulting in significant technical debt and maintainability issues.",
        },
        {
          icon: <ShieldAlert className="w-6 h-6" />,
          title: "Insecure ORDS Endpoint Design",
          description:
            "ORDS endpoints are frequently implemented without proper security, throttling, or access control strategies, exposing enterprise systems to operational risks.",
        },
        {
          icon: <LockKeyhole className="w-6 h-6" />,
          title: "Weak Data Access Governance",
          description:
            "Organizations often lack complete or consistent data access control models across applications, creating governance and compliance challenges.",
        },
        {
          icon: <Puzzle className="w-6 h-6" />,
          title: "Outdated Custom Plugin Dependencies",
          description:
            "Custom APEX plugins may become outdated, unsupported, or incompatible with newer platform versions, increasing maintenance complexity.",
        },
        {
          icon: <Map className="w-6 h-6" />,
          title: "Undocumented System Architecture",
          description:
            "The absence of clear architectural documentation makes every enhancement, migration, or production change a high-risk operation.",
        },
      ],
    },
    {
      isActive: true,
      badge: "MODERNIZATION APPROACH",
      title: "Beyond APEX Administration",
      description:
        "Modernizing Oracle Forms and APEX environments requires more than feature translation. It demands architectural remediation, performance optimization, and security hardening—done in a way that preserves operational continuity.",
      subItems: [
        {
          icon: <LayoutDashboard className="w-6 h-6" />,
          title: "Enterprise APEX Application Development",
          description:
            "We design and build Oracle APEX applications for workflows, approvals, reporting, and operational management with architecture focused on performance, security, and long-term maintainability.",
        },
        {
          icon: <RefreshCcw className="w-6 h-6" />,
          title: "Oracle Forms Migration",
          description:
            "We migrate legacy Oracle Forms applications to Oracle APEX while preserving core business logic, PL/SQL packages, and operational workflows through carefully planned module-based migration strategies.",
        },
        {
          icon: <Activity className="w-6 h-6" />,
          title: "APEX Performance & Architecture Optimization",
          description:
            "We audit and optimize Oracle APEX environments through PL/SQL tuning, query optimization, session architecture improvements, and targeted component refactoring.",
        },
        {
          icon: <Waypoints className="w-6 h-6" />,
          title: "ORDS Integration & REST API Design",
          description:
            "We design secure ORDS REST APIs for Oracle databases with robust authentication, endpoint architecture, and payload structures for enterprise integrations.",
        },
        {
          icon: <Blocks className="w-6 h-6" />,
          title: "Custom APEX Plugin Engineering",
          description:
            "We develop custom Oracle APEX plugins that extend native platform capabilities with fully documented, maintainable, and version-compatible components.",
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "AI Integration Within Oracle APEX",
          description:
            "We embed AI capabilities directly into Oracle APEX environments, including natural language reporting, LLM-powered document processing, and workflow automation while preserving Oracle-level security controls.",
        },
      ],
    },
  ],
};

const scenariosProps: ServiceScenariosProps = {
  badge: "ORACLE APEX / Oracle FORMS - REAL ENTERPRISE SCENARIOS",
  header: "Critical Oracle APEX Challenges We Address ",
  headerGlow: "at Scale",
  subheader:
    "Real scenarios that reflect the complex challenges we solve for enterprise clients on Oracle APEX & Oracle Forms at Scale.",
  items: [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Secure Oracle Forms Modernization",
      desc: "A government agency requires a phased Oracle Forms to APEX migration strategy that preserves critical business logic, operational workflows, and security compliance standards.",
      badges: [
        {
          icon: <ShieldCheck className="w-4 h-4" />,
          text: "Security Compliance",
        },
        {
          icon: <RefreshCcw className="w-4 h-4" />,
          text: "Oracle Forms Migration",
        },
      ],
    },
    {
      icon: <ChartNoAxesCombined className="w-6 h-6" />,
      title: "APEX Performance Optimization",
      desc: "A financial services organization is experiencing Oracle APEX report timeouts caused by inefficient PL/SQL execution and poor session state architecture.",
      badges: [
        {
          icon: <Gauge className="w-4 h-4" />,
          text: "Performance Tuning",
        },
        {
          icon: <Database className="w-4 h-4" />,
          text: "PL/SQL Optimization",
        },
      ],
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Secure ORDS API Infrastructure",
      desc: "A manufacturing firm requires secure ORDS REST APIs with authentication, access control, and rate limiting to support enterprise mobile applications.",
      badges: [
        {
          icon: <Waypoints className="w-4 h-4" />,
          text: "ORDS Integration",
        },
        {
          icon: <Smartphone className="w-4 h-4" />,
          text: "Mobile Access",
        },
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "On-Premise AI Query Systems",
      desc: "A healthcare provider requires AI-powered natural language querying capabilities deployed entirely on-premise with zero sensitive data leaving internal infrastructure.",
      badges: [
        {
          icon: <BrainCircuit className="w-4 h-4" />,
          text: "Enterprise AI",
        },
        {
          icon: <LockKeyhole className="w-4 h-4" />,
          text: "Data Privacy",
        },
      ],
    },
  ],
};

const ctaProps: ServiceCtaProps = {
  header: "Assess Your",
  headerGlow: "Oracle APEX Environment",
  subheader:
    "Start with a 30-minute technical call. We will review your current APEX state, Oracle Forms exposure, or modernization requirements, and define a practical scope for engagement.",
  ctaButtonText: "Book a Technical Consultation",
};

export default function OracleApexClient() {
  return (
    <ServiceTemplate
      slug="oracle-apex"
      hero={heroData}
      operations={operationsProps}
      scenarios={scenariosProps}
      cta={ctaProps}
    />
  );
}
