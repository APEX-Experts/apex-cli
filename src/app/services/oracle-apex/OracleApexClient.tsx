"use client";

import { ServiceHeroProps } from "@/components/services/ServiceHero";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import {
  AlertTriangle,
  CloudUpload,
  Code2,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  Palette,
  ShieldCheck,
} from "lucide-react";

const APEX_CAPABILITIES = [
  {
    id: "01",
    title: "Development",
    desc: "End-to-end engineering of mission-critical APEX applications. We specialize in advanced data modeling, custom plugin development, high-performance database design, and hybrid mobile solutions with enterprise reporting.",
    icon: <Code2 className="w-8 h-8" />,
    image: "/images/apex-dev-core.png",
  },
  {
    id: "02",
    title: "Integration",
    desc: "Seamlessly connecting your APEX ecosystem with third-party interfaces, advanced JavaScript libraries, and modern utility frameworks. Robust implementations of payment gateways, mailing protocols, and complex API orchestrations.",
    icon: <Cpu className="w-8 h-8" />,
    image: "/images/apex-ai-workflow.png",
  },
  {
    id: "03",
    title: "Training",
    desc: "Elite corporate and educational training modules tailored for all levels. From fundamental APEX building blocks to expert-level architectural mastery, our specialists empower your team with Oracle excellence.",
    icon: <GraduationCap className="w-8 h-8" />,
    image: "/images/apex-training-hub.png",
  },
  {
    id: "04",
    title: "Designing",
    desc: "Aesthetic precision meets functional utility. We deliver creative, user-centric theme development and custom UI layouts that prioritize engagement and intuitive navigation while maintaining Oracle's core performance.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/project1.png",
  },
  {
    id: "05",
    title: "Migration",
    desc: "Frictionless digital transformation services. We expertly migrate Forms to APEX, Excel workflows to centralized applications, and On-Premises environments to the Oracle Cloud with zero data loss and hardened security.",
    icon: <CloudUpload className="w-8 h-8" />,
    image: "/images/project2.png",
  },
  {
    id: "06",
    title: "Support",
    desc: "Round-the-clock enterprise support for servers and applications. Proactive 24-hour monitoring and rapid-response maintenance to ensure your Oracle APEX infrastructure remains synchronized and optimal.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/apex-training-hub.png",
  },
];

const DEEP_DIVES = [
  {
    id: "01",
    badge: "Technical_Deep_Dive // 01",
    title: (
      <>
        APEX <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20">
          Application <br /> Development
        </span>
      </>
    ),
    mainCard: {
      title: "Oracle APEX Application Development",
      desc: "We specialize in crafting high-performance Data Models, custom Plugin architectures, and robust Database logic. Our expertise extends to API integrations, AI-assisted features, and reporting workflows inside Oracle APEX.",
    },
    items: [
      {
        title: "Plugin Dev",
        desc: "Bespoke extensions for unique business logic.",
      },
      {
        title: "Database Dev",
        desc: "Designing schemas for stable APEX apps.",
      },
      {
        title: "Web Services",
        desc: "Seamless REST/SOAP orchestration.",
      },
      {
        title: "AI Integrations",
        desc: "Predictive intelligence & LLM capabilities.",
      },
      {
        title: "Reporting",
        desc: "Analytical insights & custom dashboards.",
      },
      {
        title: "Support",
        desc: "24/7 Enterprise monitoring & maintenance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/apex-dev-core.png",
    imageAlt: "APEX Development Core",
    hudLeft: "DB_SYNC: ACTIVE",
    hudRight: "ENGINE_TEMP: 28°C",
    hudBottomLeft: "ORACLE_APEX_V24.1",
    hudBottomRight: "© APEX EXPERTS SOLUTIONS",
    floatingBox: {
      title: "DATA_MODELING",
      items: [
        { label: "INDEX_1", width: "55%" },
        { label: "INDEX_2", width: "70%" },
        { label: "INDEX_3", width: "85%" },
      ],
    },
  },
  {
    id: "02",
    badge: "Technical_Deep_Dive // 02",
    title: (
      <>
        Oracle APEX <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20">
          AI / Workflow
        </span>
      </>
    ),
    mainCard: {
      title: "Intelligence-Driven Automation",
      desc: "Leverage the power of Oracle Database 23ai directly within APEX. We build advanced RAG (Retrieval-Augmented Generation) systems, vector-based semantic search, and AI-powered workflows that transform how users interact with enterprise data.",
    },
    items: [
      {
        title: "Vector Search",
        desc: "Native semantic discovery within Oracle 23ai.",
      },
      {
        title: "RAG Systems",
        desc: "Intelligent Retrieval-Augmented Generation.",
      },
      {
        title: "AI Workflows",
        desc: "APEX workflows and approval logic.",
      },
      {
        title: "Generative AI",
        desc: "Custom LLM integrations & chat interfaces.",
      },
      {
        title: "Data Analytics",
        desc: "AI-driven insight extraction & modeling.",
      },
      {
        title: "AI Support",
        desc: "24/7 AI model monitoring & maintenance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/apex-ai-workflow.png",
    imageAlt: "AI Workflow Core",
    hudLeft: "VECTOR_ENGINE: SYNC",
    hudRight: "AI_MODELS: ACTIVE",
    hudBottomLeft: "ORACLE_DATABASE_23AI",
    hudBottomRight: "GENERATIVE_AI_SERVICE",
    floatingBox: {
      title: "AI_INFERENCE",
      items: [
        { label: "TOKEN_1", width: "55%" },
        { label: "TOKEN_2", width: "70%" },
        { label: "TOKEN_3", width: "85%" },
      ],
    },
  },
  {
    id: "03",
    badge: "Technical_Deep_Dive // 03",
    title: (
      <>
        Migration <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20">
          Services
        </span>
      </>
    ),
    mainCard: {
      title: "Legacy Modernization",
      desc: "OAC offers seamless transitions for your legacy ecosystems. We specialize in safe, data-loss-prevented migrations that move your business from aging infrastructure to high-performance Oracle Cloud environments.",
    },
    items: [
      {
        title: "Forms to APEX",
        desc: "Migrating legacy Oracle Forms to modern web apps.",
      },
      {
        title: "EXCEL to APEX",
        desc: "Transforming spreadsheets into collaborative apps.",
      },
      {
        title: "Premises to Cloud",
        desc: "Moving infrastructure to Oracle Cloud seamlessly.",
      },
      {
        title: "Support",
        desc: "24/7 Enterprise monitoring & maintenance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/project2.png",
    imageAlt: "Migration Core Hub",
    hudLeft: "MIGRATE_ENGINE: STANDBY",
    hudRight: "DATA_LOCK: SAFE",
    hudBottomLeft: "ORACLE_CLOUD_INFRA",
    hudBottomRight: "APEX_MIGRATE_V4.0",
    floatingBox: {
      title: "MIGRATION_LOAD",
      items: [
        { label: "OBJECT_1", width: "55%" },
        { label: "OBJECT_2", width: "70%" },
        { label: "OBJECT_3", width: "85%" },
      ],
    },
  },
  {
    id: "04",
    badge: "Technical_Deep_Dive // 04",
    title: (
      <>
        Training <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/20">
          Services
        </span>
      </>
    ),
    mainCard: {
      title: "Expert Knowledge Transfer",
      desc: "Train your team on Oracle APEX fundamentals, application structure, database logic, and maintainable delivery practices. We offer comprehensive training modules from fundamental building blocks to advanced architectural mastery, tailored for both corporate teams and educational institutions.",
    },
    items: [
      {
        title: "Corporate Training",
        desc: "Tailored modules for enterprise development teams.",
      },
      {
        title: "Educational Training",
        desc: "Foundational courses for institutions & students.",
      },
      {
        title: "Expert Support",
        desc: "24/7 Enterprise monitoring & maintenance.",
        isCTA: true,
        ctaLink: "/contact",
      },
    ],
    image: "/images/apex-training-hub.png",
    imageAlt: "Training Hub Core",
    hudLeft: "ACADEMY_NODE: ONLINE",
    hudRight: "SESSIONS: ACTIVE",
    hudBottomLeft: "ORACLE_ACADEMY_V24",
    hudBottomRight: "APEX_EXPERT_TRAINING",
    floatingBox: {
      title: "TRAINING_LOAD",
      items: [
        { label: "MODULE_1", width: "55%" },
        { label: "MODULE_2", width: "70%" },
        { label: "MODULE_3", width: "85%" },
      ],
    },
  },
];

const CASE_STUDY = {
  badge: "Case_Study // 01",
  image: "/images/project2.png",
  imageAlt: "ApexCloud ERP Transformation",
  projectCategory: "Enterprise_Modernization",
  projectTitle: "ApexCloud ERP",
  buildVersion: "APEX_PRO_V24",
  descriptionHeader:
    "Transforming complex financial legacy systems into high-performance digital hubs.",
  description:
    "We migrated a multi-decade legacy ERP system for a global financial institution into a unified Oracle APEX environment, reducing operational complexity by 60% and improving data throughput by 300%.",
  stats: [
    { label: "PERFORMANCE_GAIN", value: "+300%" },
    { label: "TCO_REDUCTION", value: "-60%" },
    { label: "SECURITY_SYNC", value: "NATIVE" },
  ],
  link: "/contact",
};

const CTA = {
  badge: "Engagement_Initialization // APEX_NODE_V24.1",
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
      next generation of enterprise excellence.
    </>
  ),
  ctaText: "Initialize Project",
  ctaLink: "/contact",
  secureNodeText: "Secure_Node: Active",
  availabilityText: "Available for Q3-Q4 2026",
  studioLabel: "Apex_Experts_Oracle_Studio\nSystem_Build_Hash: 0xAPEX_5A11",
};

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

const capabilityHubData = {
  badge: "Apex_Orchestrator // V24.1",
  title: (
    <>
      The Oracle APEX <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">
        Capability Hub
      </span>
    </>
  ),
  capabilities: APEX_CAPABILITIES,
  neuralCoreLabel: "APEX_HUB_V24.1",
  syncLabel: "ORACLE_DB: SYNCHRONIZED",
  versionLabel: "SYSTEM_STATUS: OPTIMAL",
  badgePrefix: "Registry",
  statusBadgeText:
    "ORACLE_DB: SYNCHRONIZED\nLOW_CODE_PIPELINE: ACTIVE\nSYSTEM_STATUS: OPTIMAL",
};

export default function OracleApexClient() {
  return <ServiceTemplate slug="oracle-apex" hero={heroData} />;
}
