export type Practice = {
  name: string;
  items: string[];
};

export const PRACTICES: Practice[] = [
  {
    name: "Oracle APEX",
    items: [
      "Enterprise application development",
      "Oracle Forms migration",
      "ORDS integration",
      "PL/SQL performance engineering",
    ],
  },
  {
    name: "AI Integration",
    items: [
      "natural language analytics",
      "RAG architectures",
      "workflow-level automation with strict access controls",
    ],
  },
  {
    name: "Web Development",
    items: [
      "SaaS platforms",
      "secure operational portals",
      "role-based data environments",
    ],
  },
  {
    name: "Mobile Development",
    items: [
      "field operations apps",
      "approval workflows",
      "real-time Oracle APEX backend integration",
    ],
  },
];

export type ProductionSystem = {
  badge: string;
  title: string;
  description: string;
  feature: string;
  href: string;
};

export const PRODUCTION_SYSTEMS: ProductionSystem[] = [
  {
    badge: "Natural Language Analytics",
    title: "MyQuery",
    description: "Enterprise data exploration through conversational",
    feature: "Production SQL generation with role-based access control",
    href: "https://myquery.ai",
  },
  {
    badge: "AI-Powered Intelligence",
    title: "ASKLYZE",
    description: "Real-time operational analytics for enterprise teams",
    feature: "RAG architecture with strict data governance and permissions",
    href: "https://asklyze.ai",
  },
  {
    badge: "Enterprise Workflow Platform",
    title: "Tasto",
    description: "Scalable operational system for complex business processes",
    feature: "Multi-tenant architecture with advanced approval workflows",
    href: "https://tasto.cloud",
  },
];

type Fact = {
  label: string;
  value: string;
  description: string;
};

export const FACTS: Fact[] = [
  {
    label: "Founded",
    value: "2007",
    description: "17+ years of enterprise engineering",
  },
  {
    label: "Legal Entity",
    value: "Registered Corporation",
    description: "Egypt & UAE operations",
  },
  {
    label: "Active Hubs",
    value: "Alexandria, Dubai",
    description: "Operating across Egypt, UAE, and GCC",
  },
  {
    label: "Market Focus",
    value: "Enterprise Modernization",
    description: "Oracle APEX, AI Integration, Data Architecture",
  },
  {
    label: "Contact",
    value: "info@apexexperts.net",
    description: "Technical consultation inquiries",
  },
];

export const VALUES: Fact[] = [
  {
    label: "Oracle Engineering Depth",
    value: "17+ years of Oracle enterprise engineering",
    description:
      "The same senior experts who design your architecture also deliver it.",
  },
  {
    label: "Specialized Focus",
    value: "Focused expertise, not generalist execution",
    description:
      "We specialize in Oracle APEX, enterprise systems, and applied AI and go deep where it matters.",
  },
  {
    label: "Production-Grade AI Systems",
    value: "AI systems built for real operations",
    description:
      "Every system runs inside real workflows, permissions, and business constraints, not demos.",
  },
  {
    label: "Proven SaaS Execution",
    value: "Real SaaS products, real deployments",
    description:
      "MyQuery, ASKLYZE, and Tasto demonstrate our ability to build and ship production systems.",
  },
  {
    label: "Long-Term Architecture Design",
    value: "Built to eliminate technical debt",
    description:
      "Every system is designed for long-term stability, scalability, and maintainability.",
  },
];

type Systems = {
  supertitle: string;
  title: string;
  description: string;
};

export const SYSTEMS_WE_BUILD: Systems[] = [
  {
    supertitle: "Core Infrastructure",
    title: "Enterprise Systens",
    description:
      "Oracle APEX applications, Oracle Forms migration, PL/SQL optimization, ORDS API development, enterprise data modeling",
  },
  {
    supertitle: "Web Architecture",
    title: "Digital Platforms",
    description:
      "SaaS platforms, operational portals, role-based environments, secure data applications, real-time dashboards",
  },
  {
    supertitle: "Intelligent Systems",
    title: "AI Integration",
    description:
      "Natural language analytics, RAG architectures, workflow-level AI, enterprise LLM integration, permission-aware intelligence",
  },
  {
    supertitle: "Connected Operations",
    title: "System Integration",
    description:
      "Cross-platform orchestration, API architecture, data synchronization, legacy system bridging, unified interfaces",
  },
  {
    supertitle: "Field Enablement",
    title: "Mobile Operators",
    description:
      "Field operations apps, offline-capable workflows, approval systems, real-time backend sync, operational mobility",
  },
];

type DeliveryFramework = {
  title: string;
  items: string[];
};

export const DELIVERY_FRAMEWORK: DeliveryFramework[] = [
  {
    title: "Analyze Existing Architecture",
    items: [
      "System discovery",
      "Infrastructure mapping",
      "Dependency analysis",
    ],
  },
  {
    title: "Identify Bottlenecks & Constraints",
    items: [
      "Operational inefficiencies",
      "Workflow gaps",
      "Scaling limitations",
    ],
  },
  {
    title: "Design Workflow & Integration Architecture",
    items: [
      "Connected systems",
      "API orchestration",
      "Scalable infrastructure planning",
    ],
  },
  {
    title: "Deploy Production-Ready Systems",
    items: [
      "Implementation",
      "Deployment",
      "Optimization",
      "Operational activation",
    ],
  },
];
