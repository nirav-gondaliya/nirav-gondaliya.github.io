// ---------------------------------------------------------------
// Single source of truth for site content.
// Public repos live under https://github.com/nirav-gondaliya. Most
// project work is client/NDA — those are marked isPrivate: true
// and render a "Private · client work" badge instead of a link.
// demoUrl / loomUrl are intentionally empty placeholders; fill
// them in below as deployments / walkthroughs become available.
// ---------------------------------------------------------------

// ProjectLinks: shared link shape for Featured Projects and More Tools.
// - repoUrl: only set when a real PUBLIC repo exists. Never point at the
//   bare profile here — leave undefined and rely on isPrivate instead.
// - demoUrl: live deployment, optional.
// - loomUrl: walkthrough video, optional.
// - isPrivate: true = client/NDA work, no public code.
export type ProjectLinks = {
  repoUrl?: string;
  demoUrl?: string;
  loomUrl?: string;
  isPrivate: boolean;
};

export type FeaturedProject = ProjectLinks & {
  title: string;
  problem: string;
  built: string;
  stack: string[];
  role: string;
  // Optional: marks two projects as a pair (e.g. an MCP server and the agent
  // that calls it). Set on BOTH halves of the pair so the UI can render a
  // small "↔ Pairs with …" link on each card. Value must match the partner
  // project's `title` exactly.
  pairWith?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "UPI MCP Server",
    problem:
      "UPI is India's default payment rail, but there's no way for an AI assistant to mint a valid upi:// link or a scannable QR without hitting a third-party API and leaking payee details.",
    built:
      "An offline, zero-dependency MCP server that builds and parses UPI deep links and renders PNG QR codes locally. Three tools — create_upi_link, create_upi_qr, parse_upi_link — each with VPA validation and amount bounds. No API keys, no network calls, no NPCI affiliation: pure deterministic logic over the public UPI URI spec.",
    stack: ["TypeScript", "MCP SDK", "Node 18+", "QR PNG", "UPI URI spec", "Offline"],
    role: "Sole author. Designed the tool schema, wrote the URI builder/parser and the QR pipeline.",
    repoUrl: "https://github.com/nirav-gondaliya/upi-mcp",
    demoUrl: "",
    loomUrl: "",
    isPrivate: false,
    pairWith: "UPI Agent (LLM client)",
  },
  {
    title: "UPI Agent (LLM client)",
    problem:
      "Most agent demos hide the loop behind a framework. I wanted a minimal, readable proof that a tiny TypeScript loop + a free open-weight LLM can drive a real MCP server end-to-end.",
    built:
      "A from-scratch agent loop that turns plain-English requests (\"send ₹250 to alice@upi for lunch\") into UPI links and QR codes by autonomously calling tools on the upi-mcp server. No agent framework — just history + tools → LLM → tool call → result → repeat. Runs on Groq's free Llama 3.3 70B endpoint at temperature 0 for deterministic tool dispatch.",
    stack: ["TypeScript", "MCP Client SDK", "Groq API", "Llama 3.3 70B", "Tool calling", "Node 18+"],
    role: "Sole author. Wrote the agent loop, the tool-dispatch layer and the MCP client wiring.",
    repoUrl: "https://github.com/nirav-gondaliya/upi-agent",
    demoUrl: "",
    loomUrl: "",
    isPrivate: false,
    pairWith: "UPI MCP Server",
  },
  {
    title: "PhonePe MCP Server",
    problem:
      "PhonePe handles a huge slice of India's digital payments, yet there's no first-party way to plug it into Claude, agents, or any MCP-capable AI client.",
    built:
      "An unofficial TypeScript MCP server for PhonePe Standard Checkout v2. Five tools — create_payment, get_order_status, initiate_refund, get_refund_status and a timing-safe verify_webhook_signature. OAuth tokens are fetched, cached and refreshed automatically. Sandbox and production environments. Unit-tested against a mocked fetch — no live calls.",
    stack: ["TypeScript", "MCP SDK", "Node 18+", "OAuth", "Webhook crypto", "Vitest"],
    role: "Sole author. Designed the tool schema, wrote the auth/cache layer, ship and maintain it solo.",
    repoUrl: "https://github.com/nirav-gondaliya/phonepe-mcp",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: false,
  },
  {
    title: "Multi-Store Retail ERP / CRM / PM",
    problem:
      "A multi-store retail chain was running ops across five disconnected SaaS tools, each with their own access model.",
    built:
      "A single ERP with embedded CRM and project management. Full role-based access control down to the field level — owners, store managers, cashiers and accountants each see a different app.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "RBAC", "Stripe-style audit log"],
    role: "End-to-end: schema, RBAC engine, deploy, monitoring.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Auto-Provisioning Lead Funnel",
    problem:
      "Sales team needed every qualified lead to land on a working, isolated instance of the product — not a generic demo.",
    built:
      "A lead funnel that programmatically spins up a fresh AWS instance of the product on its own subdomain per client. New tenant, new DNS, new DB, all wired in under a minute.",
    stack: ["Node.js", "AWS SDK", "Route 53", "IaC", "Postgres"],
    role: "Architected the multi-tenant provisioning pipeline and DNS automation.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Resilient API → SQL Ingestion Pipeline",
    problem:
      "A fragile upstream API would buckle under volume — rate-limits, timeouts, and silent partial failures were corrupting downstream reports.",
    built:
      "A high-volume ingestion pipeline with adaptive rate-limiting, exponential backoff, queue-based backpressure and at-least-once delivery into SQL. Upstream is now treated as the unreliable network it actually is.",
    stack: ["Node.js", "SQL", "Queueing", "Backpressure", "Idempotency keys"],
    role: "Designed the resilience model and rebuilt the pipeline from scratch.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "On-Device LLM for Android",
    problem:
      "Wanted to prove a useful LLM could run fully offline on a phone — no cloud, no API key, no telemetry.",
    built:
      "A custom Android app that loads and runs a quantized LLM locally. Conversational UX, streaming tokens, fully offline. Inference happens on-device with model files bundled or sideloaded.",
    stack: ["Android", "Kotlin", "Local inference", "Quantized LLM"],
    role: "Solo build — app shell, prompt loop, model integration.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "WhatsApp Appointment Booking + Payments",
    problem:
      "Clinic clients were dropping off any booking flow that required them to leave WhatsApp.",
    built:
      "Full appointment booking inside WhatsApp via the Business API — slot picking, confirmations, reminders and an integrated payment gateway. Zero context-switch for the patient.",
    stack: ["WhatsApp Business API", "Node.js", "Payment gateway", "Webhooks"],
    role: "End-to-end: conversation design, payment integration, deploy.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Elios GenAI Suite",
    problem:
      "Small businesses wanted one place for all the GenAI tools they kept hearing about — not ten separate logins.",
    built:
      "A unified suite: image generation, video processing, TTS, STT, AI résumé generation and Google OAuth — all under one dashboard with shared billing and history.",
    stack: ["OpenAI APIs", "Next.js", "Node.js", "Google OAuth", "FFmpeg"],
    role: "Full-stack lead for the platform and integrations.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "POS Application",
    problem:
      "Retailers needed a POS that worked on cheap Android hardware, kept selling when the internet died, and synced cleanly once it came back.",
    built:
      "Full point-of-sale system: cart, taxes, discounts, receipt printing, offline queue, and reconciliation with the central database.",
    stack: ["Node.js", "React", "Offline-first sync", "Thermal printer"],
    role: "Built the offline-first sync layer and the reconciliation engine.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Consult Doctor",
    problem:
      "Independent doctors couldn't afford the per-seat pricing of enterprise telehealth platforms.",
    built:
      "Telehealth platform with WebRTC video consultations, Razorpay payments and digital prescriptions a patient can download or forward to a pharmacy.",
    stack: ["WebRTC", "Node.js", "Razorpay", "PDF generation"],
    role: "Built the video layer and the prescription pipeline.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Local Agentic Code Pipeline",
    problem:
      "Cloud-LLM dev tools are great until you're working with proprietary code you can't legally send to a third party.",
    built:
      "A self-correcting local agent (Qwen 2.5 + Cline + Aider) that generates project structure, writes tests, runs them, reads stack traces and iterates until everything's green. Entirely local — no cloud LLM, no telemetry.",
    stack: ["Qwen 2.5", "Cline", "Aider", "Local inference", "Test runner loop"],
    role: "Designed the self-correction loop and the prompt scaffolding.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
];

export type MoreTool = ProjectLinks & { title: string; blurb: string };

export const MORE_TOOLS: MoreTool[] = [
  {
    title: "Todo + scratchpad app",
    blurb: "Daily driver. Todos and free-form notes living together, keyboard first.",
    repoUrl: "https://github.com/nirav-gondaliya/todo",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: false,
  },
  {
    title: "File diff checker",
    blurb: "Drop two files, get a clean side-by-side diff in your browser.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Google Maps lead scraper",
    blurb: "Pulls structured business leads from Maps for any query + radius.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Phone-number spam classifier",
    blurb: "Heuristic + ML model that flags likely spam callers by pattern.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Number-based image-region highlighter",
    blurb: "Annotate any image with numbered regions, exportable as overlay.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "Side-by-side image review platform",
    blurb: "Store uploads, admin approval queue, side-by-side comparison.",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: true,
  },
  {
    title: "AI server provisioner (Ubuntu 24.04)",
    blurb:
      "One-shot Ubuntu 24.04 setup for GPU AI hosts: NVIDIA drivers + CUDA, Docker, a shared PyTorch venv (transformers, diffusers, accelerate), Node LTS + PM2, UFW. Idempotent.",
    repoUrl: "https://github.com/nirav-gondaliya/shivay-infra-setup",
    demoUrl: "", // TODO: paste live URL
    loomUrl: "", // TODO: paste Loom walkthrough URL
    isPrivate: false,
  },
];

// Open Source contribution — Lighthouse PR.
// repoUrl points at the upstream repo (not my profile).
// prUrl, when filled, renders a "View my merged PR ↗" button.
export type OpenSourceItem = {
  repoUrl: string;
  prUrl?: string;
};

export const LIGHTHOUSE: OpenSourceItem = {
  repoUrl: "https://github.com/GoogleChrome/lighthouse",
  prUrl: "", // TODO: paste merged PR URL
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export const EXPERIENCE: Role[] = [
  {
    company: "Ratnam Solutions",
    title: "Senior Software Engineer · Forward Deployed",
    period: "Sep 2022 — Apr 2026",
    location: "Remote, India",
    bullets: [
      "Embedded as technical lead for a multinational QSR customer — serving Burger King and Belgian Waffles across India and Indonesia. Ran requirement breakdown directly with their executives and shipped a real-time B2B analytics platform processing 5M+ data points/day into the dashboards (SSSG, ADS, ADT) their C-suite runs on — replacing manual reporting and saving them 5–10 hours/week.",
      "Acted as the primary technical liaison between customer stakeholders and engineering — translating business requirements into scoped work and distributing tasks across a 4-engineer team.",
      "Architected the Node.js + MongoDB + Redis ingestion and data-warehousing pipeline behind the platform; cut data-transfer latency ~40% across distributed franchise sources.",
      "Owned production deployment, monitoring and incident response on AWS (EC2, S3, CloudWatch) for the live customer system.",
      "Introduced AI-assisted development (Cursor, Claude Code) into the team's workflow — ~30% faster delivery on greenfield modules.",
    ],
  },
  {
    company: "Shivay Infotech",
    title: "Independent Consultant",
    period: "2023 — Present (alongside full-time)",
    location: "Remote",
    bullets: [
      "Scoped and delivered custom systems for clients end to end — from first call to production.",
      "Built Consult Doctor — telehealth with WebRTC video consults, Razorpay payments and digital prescriptions.",
      "Built the Elios GenAI Suite — image, video, TTS/STT, résumé generation and Google OAuth under one roof.",
      "Mentored 8 junior engineers in full-stack development, system design and code review.",
    ],
  },
  {
    company: "Techniverse Software",
    title: "Software Engineer",
    period: "Jan 2022 — Aug 2022",
    location: "Rajkot, India",
    bullets: [
      "Designed and deployed serverless infrastructure (AWS Lambda, API Gateway, CloudFormation) for enterprise SaaS clients — ~35% lower infra cost vs an equivalent EC2-based architecture.",
      "Built React frontends on serverless backends, owning features end to end from API design to UI.",
      "Implemented infra-as-code with CloudFormation — provisioning new environments dropped from days to hours.",
    ],
  },
  {
    company: "Soft 'n' Web",
    title: "Software Engineer",
    period: "Jun 2021 — Oct 2021",
    location: "Rajkot, India",
    bullets: [
      "Delivered conversational-AI features with Google Dialogflow and Firebase Functions — scaled to thousands of daily user interactions.",
    ],
  },
  {
    company: "WebCodeGenie Technology",
    title: "Software Engineer",
    period: "Jan 2019 — May 2021",
    location: "Ahmedabad, India",
    bullets: [
      "Promoted from intern to developer within 6 months on shipping velocity and code quality.",
      "Built production CRM, ERP, lead-management and financial-loan systems for mid-market clients across India (Node.js, Angular, MongoDB, MySQL).",
    ],
  },
];

export const CORE_STACK = [
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "MCP",
  "Local LLMs",
];

// Skills grouped by domain — evidence comes from public repos, the experience
// timeline, and the featured projects on this page. No fluff entries.
export type SkillGroup = { name: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Customer & delivery",
    items: [
      "Requirement discovery & scoping",
      "Live solutioning with customer teams",
      "Stakeholder management (C-suite ↔ engineering)",
      "Technical pre-sales support",
      "Production deployment",
      "Monitoring & incident response",
      "Mentoring",
    ],
  },
  {
    name: "AI & LLM infra",
    items: [
      "MCP servers & clients",
      "Agent loops",
      "Multi-LLM routing",
      "RAG",
      "On-device / local LLMs",
      "OpenAI & Anthropic APIs",
      "LangChain",
      "Vector databases",
      "Prompt engineering",
    ],
  },
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "Kotlin", "SQL", "Shell"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js (App Router)", "Redux", "Tailwind CSS", "Framer Motion", "Angular", "GraphQL"],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "Express", "NestJS", "REST", "WebRTC", "Webhooks", "OAuth 2.0", "Microservices", "Event-driven & serverless"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Aurora", "Data warehousing", "Rate-limiting & backpressure"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS (Lambda, API Gateway, CloudFormation, EC2, S3, SQS, Route 53, CloudWatch)",
      "Docker",
      "CI/CD · GitHub Actions",
      "Infrastructure-as-code",
      "Multi-tenant provisioning",
    ],
  },
  {
    name: "Payments & domain",
    items: ["PhonePe Standard Checkout v2", "Razorpay", "Stripe-style audit logs", "RBAC"],
  },
  {
    name: "Practice",
    items: [
      "AI-assisted dev (Claude Code, Cursor, Aider)",
      "Cross-timezone async delivery",
      "Production incident response",
      "Mentoring & code review",
    ],
  },
];
