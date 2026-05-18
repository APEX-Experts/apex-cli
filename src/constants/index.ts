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

type Guide = {
  label: string;
  description: string;
};

export const GUIDES: Guide[] = [
  {
    label: "Practical AI",
    description: `We operationalize AI into workflows with strict data permissions. Every implementation must function reliably within your existing security architecture.`,
  },
  {
    label: "Engineering Excellence",
    description: `We deliver production applications, secure,
maintainable, and fully integrated. Not
prototypes, not MVPs handed off without a
support path.`,
  },
  {
    label: "Data Sovereignty",
    description: `Clients retain complete control and visibility
over their data. No AI implementation we
build requires data to leave your
infrastructure.`,
  },
  {
    label: "Product-Grade Delivery",
    description: `We build bespoke systems with the
scalability and reliability standards of
enterprise SaaS.`,
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

type Features = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export const ASKLYZE_FEATURES: Features[] = [
  {
    id: "01",
    title: "Natural Language SQL",
    desc: "Empower non-technical users to query complex Oracle schemas using plain English. ASKLYZE translates intent into precise PL/SQL in milliseconds.",
    image: "/images/asklyze-premium.png",
  },
  {
    id: "02",
    title: "Zero Data Movement",
    desc: "Unlike other AI solutions, ASKLYZE processes requests within your VPC. Your data never leaves the Oracle Database, ensuring strict compliance and security.",
    image: "/images/project2.png",
  },
  {
    id: "03",
    title: "AI-Generated Visuals",
    desc: "Instantly turn query results into beautiful, interactive APEX charts and dashboards. The AI automatically selects the best visualization for your data.",
    image: "/images/project3.png",
  },
  {
    id: "04",
    title: "Native APEX Integration",
    desc: "Built as a standard Oracle APEX plugin. Drag, drop, and configure in minutes. No complex middleware or external servers required.",
    image: "/images/web-dev-cinematic.png",
  },
];

export const MYQUERY_FEATURES: Features[] = [
  {
    id: "01",
    title: "Decision Velocity",
    desc: "Empower your entire organization with instant answers. MyQuery translates complex business questions into accurate data visualizations in seconds.",
    image: "/images/myquery-premium.png",
  },
  {
    id: "02",
    title: "Universal Bridge",
    desc: "Connect to over 22+ native data sources including Snowflake, BigQuery, and SQL Server. A single intelligence layer for your entire data stack.",
    image: "/images/web-dev-cinematic.png",
  },
  {
    id: "03",
    title: "Governed AI",
    desc: "Maintain strict control over who sees what. MyQuery's governance engine ensures that AI-powered insights respect all existing security and permission layers.",
    image: "/images/project2.png",
  },
  {
    id: "04",
    title: "Auto-Dashboards",
    desc: "Stop building manual reports. MyQuery automatically organizes related insights into beautiful, cinematic dashboards that update in real-time.",
    image: "/images/project3.png",
  },
];

export const TASTO_FEATURES: Features[] = [
  {
    id: "01",
    title: "Unified Clarity",
    desc: "Tasto unites analytics, forecasting, and benchmarks into one real-time view. Turn complex recurring revenue into a clear system of record.",
    image: "/images/tasto-premium.png",
  },
  {
    id: "02",
    title: "Predictive Growth",
    desc: "Stop guessing your future MRR. Tasto uses advanced financial AI to forecast growth, churn, and expansion with clearer forecasts for planning.",
    image: "/images/project3.png",
  },
  {
    id: "03",
    title: "Cohort Intelligence",
    desc: "Deep-dive into user retention and lifetime value. Tasto automatically generates cohort maps to identify your most valuable customer segments.",
    image: "/images/project2.png",
  },
  {
    id: "04",
    title: "Multi-Billing Sync",
    desc: "Automatically aggregate data from Stripe, Recurly, and Chargebee. Tasto handles currency conversion and reconciliation across all systems.",
    image: "/images/web-dev-cinematic.png",
  },
];
