export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  relevantExperience: string;
  deliverables: string[];
  evidenceAcceptance: string[];
  ctaLabel: string;
  ctaTopic: string;
  badge: string;
  keyMetrics: { label: string; value: string }[];
}

export interface ValueItem {
  name: string;
  definition: string;
  application: string;
}

export interface TeamCapability {
  function: string;
  foundation: string;
  contribution: string;
  skills: string[];
}

export interface ClientSector {
  sector: string;
  need: string;
  startingPoint: string;
  impactSummary: string;
}

export interface DeliveryStep {
  step: number;
  title: string;
  description: string;
  deliverable: string;
}

export const COMPANY_PROFILE = {
  name: "Satora.dev",
  tagline: "Design. Build. Connect. Grow.",
  taglineSub: "Digital experiences, software products, AI and measurable marketing.",
  positioning: "Satora.dev brings design, software, AI and digital marketing together to help growing organizations improve their online presence and the work behind it.",
  date: "October 2026",
  mission: "Help organizations build useful digital experiences, connect their business workflows and adopt technology with a clear purpose.",
  vision: "Become a trusted long-term technology and growth partner for businesses that need thoughtful design, practical engineering and continuous improvement.",
  promise: "We start with the people, the problem and the outcome. We choose technology after understanding the work it must support, make decisions visible and deliver a result the client can use and maintain."
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Website Design and Development",
    badge: "Customer-Facing Foundation",
    shortDesc: "Design and develop websites that explain your business clearly and make the next step easy.",
    detailedDesc: "From a company website or campaign landing page to an online store, we combine useful content, thoughtful interfaces and a platform your team can manage. Every build starts with structured UI/UX discovery, content architecture, and responsive precision.",
    relevantExperience: "Team experience across 26+ reviewed web and commerce systems, modern WordPress CMS, headless architectures, React, Next.js, Tailwind CSS, and WooCommerce.",
    deliverables: [
      "UI/UX discovery, sitemap, wireframes & responsive interface design",
      "Business websites, high-converting landing pages & WordPress CMS",
      "WooCommerce stores with test checkout, tax & shipping configurations",
      "Booking & CRM connections, website migrations, speed optimization",
      "Technical SEO foundation & client content-editing team training",
      "Maintenance, updates & prioritized improvement backlog after launch"
    ],
    evidenceAcceptance: [
      "Tested page layouts across mobile, tablet, and ultra-wide viewports",
      "Verified form delivery and CRM notification routing",
      "Speed benchmarks and Core Web Vitals optimization audit",
      "Clean client editing permissions and handover documentation"
    ],
    ctaLabel: "Discuss Your Website",
    ctaTopic: "Website Design & Development",
    keyMetrics: [
      { label: "Core Web Vitals", value: "95+ Mobile Score" },
      { label: "Handover Readiness", value: "100% Client-Editable" },
      { label: "Design Iterations", value: "Agreed Wireframe Signoff" }
    ]
  },
  {
    id: "saas-software",
    number: "02",
    title: "SaaS and Custom Software",
    badge: "Products & Operations",
    shortDesc: "Turn a business idea or repetitive workflow into useful, maintainable software.",
    detailedDesc: "We help define an MVP, design the user experience, build the application, and plan its ongoing operation. Projects include SaaS products, customer portals, interactive dashboards, internal tools, and connected business systems.",
    relevantExperience: "Backend engineering in FastAPI & Python, PostgreSQL, time-series data, containerized deployments, paired with commercial process analysis and supply-chain workflow knowledge.",
    deliverables: [
      "Product discovery, prioritized user stories & bounded release plan",
      "Modern frontend interfaces with role-based workspace views",
      "Backend APIs, relational database schema & authentication system",
      "Customer/organization workspaces, admin tools & audit logging",
      "Agreed business integrations (CRM, payment webhooks, ERP feeds)",
      "Automated testing, backups, monitoring & operational documentation"
    ],
    evidenceAcceptance: [
      "Strict tenant isolation and permission boundary testing",
      "Reproducible end-to-end task completion verification",
      "Subscription webhook lifecycle (creation, failed payment, cancellation)",
      "Zero orphan data records upon organization export/deletion"
    ],
    ctaLabel: "Plan Your Software",
    ctaTopic: "SaaS & Custom Software",
    keyMetrics: [
      { label: "Architecture", value: "Role-Based & Modular" },
      { label: "Scope Model", value: "Bounded MVP Delivery" },
      { label: "Data Integrity", value: "Strict Tenant Isolation" }
    ]
  },
  {
    id: "ai-chatbots",
    number: "03",
    title: "Custom AI Chatbots",
    badge: "Knowledge & Escalation",
    shortDesc: "Give customers and staff a faster, accurate way to find approved business information.",
    detailedDesc: "We build custom AI chatbots around approved business content, with clear boundaries, source references where appropriate, and a seamless route to a person when the answer needs review or human escalation.",
    relevantExperience: "Retrieval-augmented generation (RAG) using FAISS and pgvector, agent orchestration, prompt engineering, and frontline customer service escalation patterns.",
    deliverables: [
      "Customer support chatbot using approved FAQs, services & policy documents",
      "Internal knowledge assistant with identity checks & document permissions",
      "Lead-assistance chatbot gathering briefs and handing off to authorized CRM",
      "Commerce assistant for approved product inquiries and specifications",
      "Structured ingestion/update workflow & citation verification panel",
      "Human escalation triage queue & conversation analytics dashboard"
    ],
    evidenceAcceptance: [
      "Accuracy benchmark against an agreed evaluation question set",
      "Refusal behavior on out-of-scope or unverified prompts",
      "Strict citation linking to approved source documents",
      "Documented prompt injection resistance and data privacy boundaries"
    ],
    ctaLabel: "Explore Custom Chatbot",
    ctaTopic: "Custom AI Chatbots",
    keyMetrics: [
      { label: "Hallucination Defense", value: "Strict Source Citations" },
      { label: "Escalation", value: "1-Click Human Handoff" },
      { label: "Channel Support", value: "Web, CRM, WhatsApp" }
    ]
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI Solutions and Automation",
    badge: "Workflow Optimization",
    shortDesc: "Use AI where it can solve a defined business problem through focused pilots.",
    detailedDesc: "We help teams automate repetitive work, organize unstructured information, improve recommendations, and test data-driven features through focused pilots with measurable acceptance criteria.",
    relevantExperience: "Multi-agent systems, event-driven pipelines, document parsing, published agricultural computer vision research, and EEG recording analysis.",
    deliverables: [
      "Workflow automation: routing, classification, reminders & task execution",
      "Document intelligence: structured extraction from invoices, briefs & PDFs",
      "Recommendations & personalization: ranking objectives & baseline evaluation",
      "Analytics assistance: natural-language queries against approved reporting tables",
      "Computer vision feasibility: dataset curation, baseline models & error analysis",
      "Fail-safe rule engines with human approval gates for critical actions"
    ],
    evidenceAcceptance: [
      "Measured baseline before rollout vs. pilot execution accuracy",
      "Deterministic fallback rules for high-stakes decisions",
      "Audit logs for all automated agent actions and retries",
      "Cost-per-execution modeling to avoid budget overruns"
    ],
    ctaLabel: "Map Automation Opportunity",
    ctaTopic: "AI Solutions & Automation",
    keyMetrics: [
      { label: "Pilot Scoping", value: "Feasibility-First" },
      { label: "Human Review", value: "Gated Approval Points" },
      { label: "Rule Design", value: "Deterministic Fallbacks" }
    ]
  },
  {
    id: "digital-marketing",
    number: "05",
    title: "Digital Marketing and Growth",
    badge: "Measurable Demand",
    shortDesc: "Make your business easier to discover and your marketing easier to measure.",
    detailedDesc: "We connect search, content, social media, and paid campaigns with a website that gives people a clear next step, then review which activity produces useful inquiries rather than vanity traffic.",
    relevantExperience: "Technical and on-page SEO audits, organic performance reporting, Meta advertising setup, audience qualification, and CRM conversion tracking.",
    deliverables: [
      "Technical & on-page SEO audits, site architecture & keyword strategy",
      "Content strategy, editorial calendars & agreed website copywriting",
      "Social media planning, publishing workflows & engagement reviews",
      "Meta campaign setup, creative direction & conversion event tracking",
      "Landing page optimization & attribution modeling connecting to CRM",
      "Comprehensive Growth Diagnostic: visibility, conversion & pipeline audit"
    ],
    evidenceAcceptance: [
      "Measurement of qualified inquiries rather than unverified vanity metrics",
      "Transparent attribution setup with baseline performance recording",
      "Pre-approved copy and media assets before publishing",
      "Scheduled monthly growth reviews with concrete pipeline data"
    ],
    ctaLabel: "Request Growth Diagnostic",
    ctaTopic: "Digital Marketing & Growth",
    keyMetrics: [
      { label: "Focus Metric", value: "Qualified Inquiries" },
      { label: "Attribution", value: "CRM-Connected" },
      { label: "Audit Offering", value: "Growth Diagnostic" }
    ]
  }
];

export const COMPANY_VALUES: ValueItem[] = [
  {
    name: "Clarity",
    definition: "Explain the scope, dependencies, costs and next step in language the client can understand.",
    application: "Written scopes with explicit deliverable boundaries, itemized integrations, and zero technical jargon hiding."
  },
  {
    name: "Useful Craftsmanship",
    definition: "Make interfaces readable, workflows coherent and software maintainable.",
    application: "Clean code architecture, accessible contrast, resilient forms, and systems designed for real operational adoption."
  },
  {
    name: "Accountability",
    definition: "Assign owners, record decisions and review work against agreed acceptance criteria.",
    application: "Every sprint and deliverable has a named owner and verifiable test criteria before sign-off."
  },
  {
    name: "Evidence",
    definition: "Distinguish what is known, what is reported and what still needs testing.",
    application: "We test before declaring success. No unbacked vanity claims, fake benchmarks, or unverified badges."
  },
  {
    name: "Respect for Users",
    definition: "Consider accessibility, data permissions, real operating conditions and human handoff.",
    application: "WCAG 2.2 AA standards, least-privilege security, graceful fallback states, and intuitive human handoff."
  },
  {
    name: "Continuous Learning",
    definition: "Use feedback, research and measured results to improve the work.",
    application: "Post-launch measurement reviews, iterative refinement, and applied research applied to real commercial challenges."
  }
];

export const TEAM_CAPABILITIES: TeamCapability[] = [
  {
    function: "Digital Design & Engineering",
    foundation: "Websites, CMS, e-commerce, frontend interfaces and maintenance",
    contribution: "Design usable customer journeys and build maintainable digital experiences that teams can manage.",
    skills: ["Figma & UI/UX Design", "React & Next.js", "WordPress & Headless CMS", "Tailwind CSS & TypeScript", "WooCommerce", "Core Web Vitals"]
  },
  {
    function: "AI & Backend Engineering",
    foundation: "Retrieval systems, APIs, agents, data systems, models and research",
    contribution: "Assess technical feasibility, build reliable AI features, and operate robust supporting backend services.",
    skills: ["Python & FastAPI", "FAISS & pgvector RAG", "PostgreSQL & Time-series", "Multi-Agent Orchestration", "Computer Vision Feasibility", "Docker & CI/CD"]
  },
  {
    function: "Commercial Analysis & Delivery",
    foundation: "Business development, procurement, supply chain and reporting",
    contribution: "Translate business problems into clear priorities, bounded scopes, and coordinated cross-functional work.",
    skills: ["Requirements Mapping", "Workflow & Process Design", "CRM & Pipeline Setup", "Procurement Logic", "BI & Analytics Dashboards", "Stakeholder Alignment"]
  },
  {
    function: "Marketing & Content",
    foundation: "SEO, social media, content, advertising and WordPress",
    contribution: "Shape clear messaging, attract relevant qualified audiences, and measure real lead conversion activity.",
    skills: ["Technical & On-page SEO", "Content Architecture", "Meta Advertising", "Keyword Research", "Editorial Governance", "Conversion Attribution"]
  },
  {
    function: "Customer Success & Operations",
    foundation: "Frontline service, community engagement, records and communication",
    contribution: "Support client onboarding, project updates, staff training, and practical adoption after launch.",
    skills: ["Client Action Tracking", "Handover Coordination", "User Training Guides", "Support Triage", "Feedback Collection", "Change Management"]
  }
];

export const CLIENT_SECTORS: ClientSector[] = [
  {
    sector: "Service Businesses",
    need: "Clearer service presentation, fewer missed inquiries, and structured lead capture.",
    startingPoint: "Website review, conversion redesign and automated CRM routing.",
    impactSummary: "Eliminates inquiry leakage and ensures prompt team response."
  },
  {
    sector: "Training Providers",
    need: "Course discovery, intuitive syllabus review, enrollment inquiries and automated follow-up.",
    startingPoint: "Course information site, lead pipeline and reminder workflows.",
    impactSummary: "Turns course visitors into verified inquiries and booked students."
  },
  {
    sector: "Care Organizations",
    need: "Accessible, highly readable service details and clear, reassuring contact pathways.",
    startingPoint: "Accessible website redesign and general inquiry routing.",
    impactSummary: "Complies with accessibility standards while easing user anxiety."
  },
  {
    sector: "Commerce Brands",
    need: "Product clarity, fast store usability, transparent checkout, and customer communication.",
    startingPoint: "Store UX improvement, checkout audit and bounded CRM integration.",
    impactSummary: "Streamlines purchase flow and inventory/inquiry alignment."
  },
  {
    sector: "Operations & Logistics Teams",
    need: "Repeated manual data entry, supplier quotation friction, and delayed internal reporting.",
    startingPoint: "Process review and a tailored internal coordination tool.",
    impactSummary: "Reduces procurement delays and establishes clean audit records."
  },
  {
    sector: "Startup Product Teams",
    need: "A software idea without a tested workflow, validated user story, or bounded MVP release scope.",
    startingPoint: "Discovery sprint, interactive prototype, and MVP release plan.",
    impactSummary: "De-risks build cost before committing heavy engineering budget."
  },
  {
    sector: "Knowledge-Heavy Teams",
    need: "Repeated employee/client inquiries, scattered documents, and slow information retrieval.",
    startingPoint: "Approved-content AI assistant pilot with citation verification.",
    impactSummary: "Instant verified answers with zero unauthorized hallucinations."
  }
];

export const DELIVERY_METHODOLOGY: DeliveryStep[] = [
  {
    step: 1,
    title: "Understand the Problem",
    description: "Start with the client context, users, current systems and the outcome that matters. Gather examples of the present workflow and clarify known facts before proposing any technology.",
    deliverable: "Problem Definition & Context Document"
  },
  {
    step: 2,
    title: "Define the Plan",
    description: "Agree deliverables, boundaries, dependencies, milestones, content responsibilities and acceptance criteria. Identify account access, data permissions, and operating budgets.",
    deliverable: "Scoped Milestone Plan & Acceptance Criteria"
  },
  {
    step: 3,
    title: "Design the Experience",
    description: "Map the primary user journey and review wireframes or prototypes. Validate tone, navigation, and essential states (loading, empty, error) with operational reality.",
    deliverable: "Interactive Prototypes & Information Architecture"
  },
  {
    step: 4,
    title: "Build and Integrate",
    description: "Implement agreed functionality, organize content, and connect required systems with strict source control. Use synthetic test data when real records are unnecessary.",
    deliverable: "Tested Codebase & Configured Cloud Infrastructure"
  },
  {
    step: 5,
    title: "Test and Release",
    description: "Review against agreed criteria. Test critical journeys, access permissions, form receipt, and failure cases. Resolve material issues, define rollbacks, and launch cleanly.",
    deliverable: "Verification Test Sign-Off & Production Deployment"
  },
  {
    step: 6,
    title: "Hand Over and Improve",
    description: "Provide full access, documentation, and staff training. Establish support coverage, ownership, and a prioritized improvement backlog for continuous enhancement.",
    deliverable: "Handover Repository, Training Guide & Backlog"
  }
];

export const STRATEGIC_STAGES = [
  {
    stage: "Stage 01",
    name: "Establish Foundation",
    focus: "Confirm business identity, commercial standards, specialist availability, service definitions, and reusable handover frameworks."
  },
  {
    stage: "Stage 02",
    name: "Validate the Offer",
    focus: "Engage prospective buyers, run bounded discovery pilots, test problem-solution fit, and refine delivery scopes based on real operational evidence."
  },
  {
    stage: "Stage 03",
    name: "Develop Recurring Work",
    focus: "Establish maintenance, growth, and continuous care agreements. Monitor client retention and evaluate repeating workflows for modular software assets."
  },
  {
    stage: "Stage 04",
    name: "Build Depth",
    focus: "Scale specialist software and AI capabilities with verified demand, mature data practices, and documented client performance outcomes."
  }
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Discovery & Diagnostics",
    badge: "De-Risking Phase",
    description: "A bounded assessment to clarify an uncertain website, software product, automation pipeline, or growth funnel.",
    deliverables: "Findings report, technical roadmap, scoped options, cost-benefit estimate.",
    duration: "1 to 2 Weeks"
  },
  {
    title: "Defined Milestone Project",
    badge: "Fixed Scope",
    description: "Agreed website, custom software MVP, or chatbot build delivered through structured, verifiable milestones.",
    deliverables: "Sitemap/wireframes, staging releases, test signoffs, production launch, complete handover.",
    duration: "4 to 12 Weeks"
  },
  {
    title: "Scoped AI Pilot",
    badge: "Controlled Experiment",
    description: "Test an AI use case with approved data, defined evaluation criteria, bounded operational budget, and rollback guards.",
    deliverables: "Ingestion pipeline, benchmark question set, test dashboard, feasibility verdict.",
    duration: "2 to 4 Weeks"
  },
  {
    title: "Recurring Care & Growth",
    badge: "Continuous Partnership",
    description: "Planned monthly service capacity for website maintenance, software patches, content governance, and marketing attribution.",
    deliverables: "Regular updates, SLA priority response, monthly analytics review, improvement backlog.",
    duration: "Monthly / Quarterly"
  }
];
