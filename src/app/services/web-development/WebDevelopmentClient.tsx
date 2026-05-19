"use client";

import { ServiceHeroProps } from "@/components/services/ServiceHero";
import { ServiceOperationsProps } from "@/components/services/ServiceOperations";
import { ServiceScenariosProps } from "@/components/services/ServiceScenarios";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import {
  Activity,
  Cable,
  CloudCog,
  CreditCard,
  DatabaseZap,
  FileCode2,
  KeyRound,
  Layers3,
  LayoutDashboard,
  LayoutPanelTop,
  LockKeyhole,
  MapPinned,
  MonitorCog,
  Shield,
  ShieldCheck,
  ShieldX,
  TrendingDown,
  Truck,
  Unplug,
  UsersRound,
  Webhook,
} from "lucide-react";

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

const operationsProps: ServiceOperationsProps = {
  badge: "WEB DEVELOPMENT ENGINE",
  header: "Web Applications That Scale",
  headerGlow: "Securely, Efficiently, Reliably",
  subheader:
    "We design and deliver enterprise-grade web applications, SaaS platforms, and operational portals that combine performance, tight security, and clean, scalable design.",
  items: [
    {
      isActive: false,
      badge: "FAILURE PATTERNS",
      title: "Where Enterprise Web Systems Start to Fail",
      description:
        "Most enterprise application failures come from predictable architectural decisions — not technology limitations. These are the most common breakdown points in production systems.",
      subItems: [
        {
          icon: <ShieldX className="w-6 h-6" />,
          title: "Late Access Control Design",
          description:
            "Role-based permissions introduced late in development often create cross-user data exposure risks and inconsistent security boundaries.",
        },
        {
          icon: <Unplug className="w-6 h-6" />,
          title: "Fragile System Integrations",
          description:
            "Point-to-point integrations between ERP, CRM, payment, and operational systems frequently break when upstream platforms or APIs change.",
        },
        {
          icon: <TrendingDown className="w-6 h-6" />,
          title: "Poor Scalability Architecture",
          description:
            "Applications designed for limited usage often degrade under real operational load due to weak scalability planning and infrastructure design.",
        },
        {
          icon: <FileCode2 className="w-6 h-6" />,
          title: "Accumulated Technical Debt",
          description:
            "Repeated development handoffs without proper documentation or architectural ownership lead to systems that become difficult and risky to maintain.",
        },
        {
          icon: <UsersRound className="w-6 h-6" />,
          title: "Weak Data Isolation",
          description:
            "Self-service platforms can unintentionally expose sensitive data across user groups when access boundaries and permission models are incomplete.",
        },
      ],
    },
    {
      isActive: true,
      badge: "MODERNIZATION APPROACH",
      title: "Web Systems Engineered from the Data Layer Up",
      description:
        "Our web practice is focused on systems that carry real operational weight: internal tools used daily by large teams, client portals with complex permission structures spanning multiple organizations, and SaaS platforms where multi-tenant data isolation is a non-negotiable architectural requirement.",
      subItems: [
        {
          icon: <Layers3 className="w-6 h-6" />,
          title: "Full-Cycle SaaS Platform Development",
          description:
            "We build scalable SaaS platforms end-to-end, including multi-tenant architecture, subscription billing, role-based access control, and administrative environments.",
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Secure Client & Partner Portals",
          description:
            "We develop secure enterprise portals with role-based access, audit logging, SSO, SAML, OAuth integrations, and deep connectivity with ERP, CRM, and Oracle systems.",
        },
        {
          icon: <LayoutPanelTop className="w-6 h-6" />,
          title: "Operational Dashboards & Admin Systems",
          description:
            "We engineer high-density operational dashboards with real-time reporting, bulk actions, smart alerts, and performance optimization for concurrent enterprise usage.",
        },
        {
          icon: <Cable className="w-6 h-6" />,
          title: "CRM, ERP & Payment Gateway Integration",
          description:
            "We implement resilient integrations between enterprise platforms, CRM systems, ERPs, payment gateways, and authentication providers using fault-tolerant, event-driven architectures.",
        },
      ],
    },
  ],
};

const scenariosProps: ServiceScenariosProps = {
  badge: "WEB DEVELOPMENT - REAL ENTERPRISE SCENARIOS",
  header: "Built for Complex",
  headerGlow: "Business Operations",
  subheader:
    "Secure portals, SaaS platforms, operational dashboards, and enterprise integrations engineered for scalability, control, and high-performance workflows.",
  items: [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Enterprise Client Portals",
      desc: "Enterprise client portals with organization-level data isolation, SSO authentication, audit logging, and integrations with CRM and project management systems.",
      badges: [
        {
          icon: <LockKeyhole className="w-4 h-4" />,
          text: "Data Isolation",
        },
        {
          icon: <KeyRound className="w-4 h-4" />,
          text: "SSO Authentication",
        },
      ],
    },
    {
      icon: <Layers3 className="w-6 h-6" />,
      title: "Multi-Tenant SaaS Platforms",
      desc: "Scalable SaaS platforms with subscription billing, webhook automation, and operational admin panels for customer lifecycle and usage management.",
      badges: [
        {
          icon: <CreditCard className="w-4 h-4" />,
          text: "Subscription Billing",
        },
        {
          icon: <Webhook className="w-4 h-4" />,
          text: "Webhook Automation",
        },
      ],
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Enterprise Reporting Dashboards",
      desc: "Internal dashboards aggregating ERP and CRM data with secure role-based authorization and event-driven enterprise integrations.",
      badges: [
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Role-Based Access",
        },
        {
          icon: <Activity className="w-4 h-4" />,
          text: "Event-Driven Integrations",
        },
      ],
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics & Partner Portals",
      desc: "Logistics and partner portals supporting shipment tracking, workflow approvals, Oracle APEX integrations, and carrier-level data isolation.",
      badges: [
        {
          icon: <MapPinned className="w-4 h-4" />,
          text: "Shipment Tracking",
        },
        {
          icon: <DatabaseZap className="w-4 h-4" />,
          text: "Carrier Data Isolation",
        },
      ],
    },
  ],
};

export default function WebDevelopmentClient() {
  return (
    <ServiceTemplate
      slug="web-development"
      hero={heroData}
      operations={operationsProps}
      scenarios={scenariosProps}
    />
  );
}
