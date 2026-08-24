export const CONTACT_EMAIL = "info@devkull.in";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Salesforce", to: "/salesforce" },
  { label: "Integrations", to: "/integrations" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const coreServices = [
  {
    title: "Salesforce Customization",
    summary:
      "Customize Salesforce around your business processes, workflows, objects, permissions, dashboards and user requirements.",
    points: [
      "Salesforce configuration",
      "Custom objects",
      "Custom fields",
      "Validation rules",
      "Automation",
      "Workflow configuration",
      "Reports & dashboards",
      "User roles & permissions",
      "Process optimization",
    ],
    icon: "sliders",
  },
  {
    title: "Salesforce Integration",
    summary: "Connect Salesforce with external applications and business systems.",
    points: [
      "REST API integration",
      "SOAP API integration",
      "Webhooks",
      "Third-party integrations",
      "Data synchronization",
      "Real-time integrations",
      "Middleware integrations",
      "Custom API development",
    ],
    icon: "plug",
  },
  {
    title: "Salesforce E-commerce Integration",
    summary:
      "Connect Salesforce CRM with your online store and synchronize customer, order, product and business data.",
    points: [
      "Customer synchronization",
      "Order synchronization",
      "Product synchronization",
      "Inventory synchronization",
      "Customer lifecycle automation",
      "Lead & opportunity workflows",
      "Marketing automation",
    ],
    icon: "cart",
  },
  {
    title: "E-commerce Platform Integration",
    summary:
      "Salesforce integrations for WooCommerce, WordPress, Magento / Adobe Commerce, PrestaShop and OpenCart.",
    points: [
      "WooCommerce",
      "WordPress",
      "Magento / Adobe Commerce",
      "PrestaShop",
      "OpenCart",
      "Custom storefronts",
    ],
    icon: "grid",
  },
  {
    title: "Salesforce Automation",
    summary: "Automate repetitive business processes and improve operational efficiency.",
    points: [
      "Flow automation",
      "Process automation",
      "Lead automation",
      "Opportunity automation",
      "Customer onboarding",
      "Notifications",
      "Approval workflows",
      "Data synchronization",
    ],
    icon: "bolt",
  },
  {
    title: "Salesforce Data & Migration",
    summary: "Move, synchronize and structure data inside Salesforce with confidence.",
    points: [
      "Data migration",
      "Data cleaning",
      "Data mapping",
      "Import/export",
      "Deduplication",
      "Data synchronization",
      "Data validation",
    ],
    icon: "database",
  },
  {
    title: "Salesforce Development",
    summary: "Custom Salesforce development for functionality the standard platform does not cover.",
    points: [
      "Apex development",
      "Lightning Web Components",
      "Custom applications",
      "Custom UI",
      "Custom APIs",
      "Integrations",
      "Backend logic",
      "Salesforce extensions",
    ],
    icon: "code",
  },
  {
    title: "Salesforce Support & Optimization",
    summary: "Continuously improve, monitor and maintain your Salesforce environment.",
    points: [
      "Salesforce audit",
      "Performance optimization",
      "Automation optimization",
      "Bug fixing",
      "System improvements",
      "Integration maintenance",
      "Technical support",
    ],
    icon: "shield",
  },
] as const;

export const salesforceCapabilities = [
  "Salesforce Consulting",
  "Salesforce Customization",
  "Salesforce Configuration",
  "Salesforce Development",
  "Salesforce Integration",
  "Salesforce Automation",
  "Salesforce Flow",
  "Apex Development",
  "Lightning Web Components",
  "Salesforce API Integration",
  "Salesforce Data Migration",
  "Salesforce Data Synchronization",
  "Salesforce CRM Implementation",
  "Salesforce Optimization",
  "Salesforce Reports & Dashboards",
  "Salesforce Security & Access Configuration",
  "Salesforce User Management",
  "Workflow Automation",
  "Business Process Automation",
  "Third-Party Integration",
  "Custom Salesforce Applications",
  "Salesforce Maintenance & Support",
  "Salesforce E-commerce Integration",
];

export const platforms = [
  { name: "WooCommerce", note: "WordPress-native commerce" },
  { name: "WordPress", note: "Content & storefront layer" },
  { name: "Magento", note: "Open-source commerce" },
  { name: "Adobe Commerce", note: "Enterprise commerce" },
  { name: "PrestaShop", note: "Lightweight commerce" },
  { name: "OpenCart", note: "Modular commerce" },
  { name: "Custom E-commerce Platforms", note: "API-first storefronts" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "Understand your business processes, existing systems and integration requirements.",
  },
  {
    step: "02",
    title: "Design",
    body: "Design the Salesforce architecture, data flow and integration strategy.",
  },
  {
    step: "03",
    title: "Integrate",
    body: "Build APIs, automations, synchronization and custom functionality.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "Test, monitor and continuously improve the solution.",
  },
];

export const whyDevkull = [
  {
    title: "Business-First Approach",
    body: "Solutions are designed around actual business workflows rather than forcing your business into a rigid system.",
  },
  { title: "Scalable Architecture", body: "Build integrations that can grow with your business." },
  { title: "Custom Solutions", body: "No unnecessary one-size-fits-all implementations." },
  {
    title: "Integration Expertise",
    body: "Connect Salesforce with your existing digital ecosystem.",
  },
  { title: "Automation Focused", body: "Reduce repetitive work through intelligent automation." },
  {
    title: "Long-Term Support",
    body: "Build systems that are maintainable and continuously improvable.",
  },
];

export const useCases = [
  "E-commerce CRM integration",
  "Customer synchronization",
  "Order-to-Salesforce automation",
  "Lead management automation",
  "Product synchronization",
  "Customer lifecycle automation",
  "Multi-platform e-commerce integration",
  "Custom Salesforce applications",
  "Business workflow automation",
  "API-based integrations",
  "Sales process automation",
  "Data migration and cleanup",
];

export const industries = [
  "E-commerce",
  "Retail",
  "SaaS",
  "Healthcare",
  "Professional Services",
  "Education",
  "B2B",
  "Startups",
];

export const techStack = [
  "Salesforce",
  "WooCommerce",
  "WordPress",
  "Magento",
  "Adobe Commerce",
  "PrestaShop",
  "OpenCart",
  "REST APIs",
  "Webhooks",
  "JavaScript",
  "Node.js",
  "React",
  "MongoDB",
];

export const solutions = [
  {
    title: "E-commerce → Salesforce Integration",
    body: "Synchronize customers, orders and product information.",
  },
  {
    title: "Multi-Store Salesforce Integration",
    body: "Connect multiple e-commerce platforms into one Salesforce environment.",
  },
  {
    title: "Salesforce Automation System",
    body: "Automate repetitive sales and customer workflows.",
  },
  {
    title: "Custom Salesforce Application",
    body: "Build custom functionality around specific business requirements.",
  },
];

export const serviceOptions = [
  "Salesforce Customization",
  "Salesforce Integration",
  "Salesforce E-commerce Integration",
  "Salesforce Automation",
  "Salesforce Development",
  "Data Migration",
  "API Integration",
  "Support & Optimization",
  "Other",
];

export const platformOptions = [
  "Salesforce",
  "WooCommerce",
  "WordPress",
  "Magento",
  "PrestaShop",
  "OpenCart",
  "Custom Platform",
  "Other",
];
