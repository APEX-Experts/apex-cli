"use client";

import { ServiceHeroProps } from "@/components/services/ServiceHero";
import { ServiceOperationsProps } from "@/components/services/ServiceOperations";
import { ServiceScenariosProps } from "@/components/services/ServiceScenarios";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import {
  Activity,
  ArrowUpDown,
  ClipboardCheck,
  ClipboardX,
  ClockAlert,
  Database,
  DatabaseBackup,
  FileDigit,
  HardHat,
  HeartPulse,
  MessageCircleWarning,
  PackageCheck,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Smartphone,
  SmartphoneNfc,
  TimerOff,
  Truck,
  WifiOff,
  Workflow,
} from "lucide-react";

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
const operationsProps: ServiceOperationsProps = {
  badge: "MOBILE_DEVELOPMENT_ENGINE",
  header: "Enterprise Mobile Applications",
  headerGlow: "Engineered for Impact, Speed, and Scale",
  subheader:
    "We design and deliver enterprise-grade mobile applications that combine performance, tight security, and clean, scalable design.",
  items: [
    {
      isActive: false,
      badge: "FAILURE PATTERNS",
      title: "What Happens When Field Operations Run on Desktop Systems",
      description:
        "When field teams, service engineers, or distributed workforces depend on desktop-bound systems to process approvals, update task status, or access operational data, the consequences are measurable:",
      subItems: [
        {
          icon: <ClockAlert className="w-6 h-6" />,
          title: "Delayed Approval Workflows",
          description:
            "Approval chains frequently stall when authorized decision-makers are away from their workstations and unable to access operational systems.",
        },
        {
          icon: <TimerOff className="w-6 h-6" />,
          title: "Late Task Data Entry",
          description:
            "Operational task completion data is often entered hours after execution, reducing accuracy and limiting real-time visibility.",
        },
        {
          icon: <DatabaseBackup className="w-6 h-6" />,
          title: "Outdated Field Data Access",
          description:
            "Service and field teams may rely on cached reports instead of live system data, leading to incorrect decisions and operational inconsistencies.",
        },
        {
          icon: <ClipboardX className="w-6 h-6" />,
          title: "Incomplete Incident Reporting",
          description:
            "Incident reporting becomes delayed or incomplete when field staff are forced to complete documentation manually after the event occurs.",
        },
        {
          icon: <MessageCircleWarning className="w-6 h-6" />,
          title: "Operational Workaround Dependency",
          description:
            "Organizations often depend on fragmented workarounds like WhatsApp groups, spreadsheets, and phone calls to bridge gaps between mobile teams and core enterprise systems.",
        },
      ],
    },
    {
      isActive: true,
      badge: "MODERNIZATION APPROACH",
      title: "Mobile Applications Integrated at the System Level",
      description:
        "We build mobile applications that connect directly to your enterprise backend, not as a separate tool that syncs overnight, but as an operational client connected in real time to your Oracle APEX environment, ERP system, or enterprise database.",
      subItems: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Native & Cross-Platform Mobile Apps",
          description:
            "We build native iOS, Android, and React Native applications optimized for enterprise performance, operational workflows, and device-specific requirements.",
        },
        {
          icon: <HardHat className="w-6 h-6" />,
          title: "Workforce & Field Operations Apps",
          description:
            "We develop mobile applications for field teams with task management, inspections, escalation workflows, approvals, and real-time operational coordination.",
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Mobile Workflow Management",
          description:
            "We implement mobile-first approval flows, task routing systems, and service request management fully integrated with enterprise operations.",
        },
        {
          icon: <ServerCog className="w-6 h-6" />,
          title: "Oracle APEX & Enterprise API Integration",
          description:
            "We integrate mobile applications with Oracle APEX and enterprise systems through secure ORDS REST APIs, shared authentication, and centralized access controls.",
        },
      ],
    },
  ],
};

const scenariosProps: ServiceScenariosProps = {
  badge: "MOBILE DEVELOPMENT - REAL ENTERPRISE SCENARIOS",
  header: "Mobile Applications for",
  headerGlow: "Operational Teams",
  subheader:
    "Real-time mobile solutions for field operations, approvals, inspections, task management, and secure enterprise system access.",
  items: [
    {
      icon: <PackageCheck className="w-6 h-6" />,
      title: "Real-Time Delivery Approval Apps",
      desc: "Mobile delivery approval applications synchronized in real time with Oracle APEX dispatch and operational management systems.",
      badges: [
        {
          icon: <RefreshCw className="w-4 h-4" />,
          text: "Real-Time Sync",
        },
        {
          icon: <Truck className="w-4 h-4" />,
          text: "Dispatch Integration",
        },
      ],
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Mobile Inspection & Reporting Apps",
      desc: "Field inspection applications replacing paper-based reporting workflows with direct synchronization to Oracle enterprise systems.",
      badges: [
        {
          icon: <FileDigit className="w-4 h-4" />,
          text: "Paperless Reporting",
        },
        {
          icon: <Database className="w-4 h-4" />,
          text: "Oracle Sync",
        },
      ],
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Field Task Management Systems",
      desc: "Mobile field task management applications with instant backend synchronization and live operational visibility for enterprise teams.",
      badges: [
        {
          icon: <Activity className="w-4 h-4" />,
          text: "Live Visibility",
        },
        {
          icon: <ArrowUpDown className="w-4 h-4" />,
          text: "Instant Updates",
        },
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Secure Healthcare Mobile Apps",
      desc: "Healthcare mobile applications supporting secure patient record access, visit documentation, and offline operational capability.",
      badges: [
        {
          icon: <ShieldCheck className="w-4 h-4" />,
          text: "Secure Patient Access",
        },
        {
          icon: <WifiOff className="w-4 h-4" />,
          text: "Offline Capability",
        },
      ],
    },
  ],
};

export default function MobileDevelopmentClient() {
  return (
    <ServiceTemplate
      slug="mobile-development"
      hero={heroData}
      operations={operationsProps}
      scenarios={scenariosProps}
    />
  );
}
