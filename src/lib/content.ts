export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Avg. revenue lift, legal partners", value: "+50%" },
  { label: "Avg. traffic lift, commerce partners", value: "+30%" },
  { label: "Hours returned per lawyer, weekly", value: "12+" },
  { label: "Languages our products speak", value: "30" },
];

export const services = [
  {
    slug: "legal",
    eyebrow: "For law firms",
    title: "Legal AI Workspace",
    headline: "A second associate that never sleeps.",
    summary:
      "An AI-native workspace for law firms. It drafts documents in your voice, ingests cases from UYAP and other legal services, and runs the first conversation with new clients so partners walk in already briefed.",
    metric: { value: "+50%", label: "average revenue lift across partner firms" },
    features: [
      {
        title: "Document automation",
        body: "Petitions, contracts, briefs, and filings drafted from your templates and prior work. Output cites sources and respects firm style.",
      },
      {
        title: "UYAP and case sync",
        body: "Cases are pulled from UYAP and other legal services automatically. Files, deadlines, and parties show up in the workspace without manual entry.",
      },
      {
        title: "Client onboarding concierge",
        body: "A consultative intake assistant interviews prospective clients, captures the facts, and routes qualified matters to the right partner.",
      },
      {
        title: "Knowledge memory",
        body: "Your firm's playbook, precedents, and tone are stored in a private memory. Quality compounds with every case you close.",
      },
    ],
    proof:
      "Within one quarter, partner firms report +50% revenue from higher matter throughput, faster onboarding, and fewer drafting hours.",
  },
  {
    slug: "commerce",
    eyebrow: "For e-commerce",
    title: "Commerce Growth Engine",
    headline: "Win the bazaar. Then own the shelf.",
    summary:
      "We map your position in the market, watch your rivals around the clock, and rebuild your storefront so it converts. Catalog, copy, imagery, SEO, and merchandising work as one system.",
    metric: { value: "+30%", label: "average traffic lift in the first quarter" },
    features: [
      {
        title: "Competitor intelligence",
        body: "Continuous scraping of competitor pricing, listings, and content. We surface the angles you can win on this week.",
      },
      {
        title: "Catalog and storefront design",
        body: "End-to-end product catalog, landing pages, and storefront design. Imagery, copy, and structure built to convert.",
      },
      {
        title: "Search and SEO program",
        body: "Keyword strategy, technical SEO, and on-page work that earns rank. Reporting against the +30% traffic line.",
      },
      {
        title: "Business strategy",
        body: "Pricing, bundling, and merchandising plays. We don't just decorate the shop, we tell you what to sell next.",
      },
    ],
    proof:
      "Partners average +30% traffic and a meaningful uplift in conversion within one quarter of go-live.",
  },
  {
    slug: "health",
    eyebrow: "For healthcare",
    title: "Clinical Intelligence Suite",
    headline: "Give your clinicians their hours back.",
    summary:
      "Fine-tuned, high-performance models that integrate with the systems you already run. We accelerate documentation, triage, and patient communication without disrupting the floor.",
    metric: { value: "+38%", label: "documentation time saved per clinician" },
    features: [
      {
        title: "Clinical documentation copilot",
        body: "Ambient note-taking and structured summaries that drop into your EHR. Clinicians review and sign, the system handles the rest.",
      },
      {
        title: "Patient triage and intake",
        body: "Multilingual intake and triage that captures history before the visit and flags urgency for staff.",
      },
      {
        title: "Operational AI",
        body: "Scheduling, routing, and back-office automation tuned to the realities of clinics and hospital networks.",
      },
      {
        title: "Compliance by design",
        body: "Private deployments, KVKK and HIPAA aligned, with full audit trails. Your data does not leave your perimeter.",
      },
    ],
    proof:
      "Clinical partners return 38% of documentation hours to patient care while improving record quality.",
  },
  {
    slug: "build",
    eyebrow: "End-to-end",
    title: "Build With Us",
    headline: "We build the whole company you have in your head.",
    summary:
      "Strategy, product, engineering, and brand under one roof. From a sketch on a napkin to a business operating in production, we are the senior team you wish you had hired first.",
    metric: { value: "4–6", label: "weeks to a working v1 in production" },
    features: [
      {
        title: "Strategy and roadmap",
        body: "Market shaping, scope, and a quarter-by-quarter plan that protects what matters and ships what counts.",
      },
      {
        title: "Product and brand",
        body: "Identity, UX, and storytelling that earn trust before the first feature loads.",
      },
      {
        title: "Engineering at scale",
        body: "Cloud-native delivery on AWS, GCP, and Azure. Observability, evals, and security baked in.",
      },
      {
        title: "Operate or hand off",
        body: "We run it for you, or train your team and step back. Your call.",
      },
    ],
    proof:
      "Most engagements have a working v1 in four to six weeks. We move fast because the seniors do the work themselves.",
  },
];

export const industries = [
  {
    name: "Legal",
    pitch:
      "Document automation, UYAP-connected case ingest, and a client concierge that turns inquiries into retained matters.",
    metric: "+50% revenue",
  },
  {
    name: "E-commerce",
    pitch:
      "Catalog and storefront design, competitor scraping, and an SEO program that delivers measurable traffic gains.",
    metric: "+30% traffic",
  },
  {
    name: "Healthcare",
    pitch:
      "Documentation copilots, triage and intake, and operational AI integrated with the systems your teams already run.",
    metric: "+38% time saved",
  },
  {
    name: "Enterprise",
    pitch:
      "Private platforms and copilots that turn institutional knowledge into a competitive advantage.",
    metric: "Built to last",
  },
];

export const principles = [
  {
    title: "Outcomes are the product.",
    body: "We sign on numbers, not adjectives. Every engagement reports against the metric we promised.",
  },
  {
    title: "Senior on every seat.",
    body: "The people you meet are the people who do the work. No hand-offs, no juniors learning on you.",
  },
  {
    title: "Built to last, not to demo.",
    body: "Production rigor from day one: observability, evals, and security are not optional.",
  },
  {
    title: "Turkish craft, global standard.",
    body: "We bring world-class engineering home, and take the best of home to the world.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Discovery",
    body: "A 30-minute call. We listen, then propose the metric we will move and how we will prove it.",
  },
  {
    step: "02",
    title: "Scope",
    body: "A tight, milestone-based proposal. You see the v1, the team, and the timeline before we start.",
  },
  {
    step: "03",
    title: "Build",
    body: "Two-week cycles. You see what shipped and what is next. We protect the timeline, you protect the priorities.",
  },
  {
    step: "04",
    title: "Operate",
    body: "We run it with you, or hand it off with documentation and team training. Either way, the work outlives us.",
  },
];

export const work = [
  {
    industry: "Legal",
    title: "From inbox chaos to a closed practice.",
    summary:
      "A boutique firm replaced manual intake and drafting with the Ada legal workspace. UYAP-connected case sync and a client concierge moved partners off paperwork and onto strategy.",
    outcome: "+50% revenue",
    duration: "12 weeks",
  },
  {
    industry: "E-commerce",
    title: "Outsold the bazaar in a single quarter.",
    summary:
      "A multi-category retailer rebuilt its catalog and SEO foundation with us. Continuous competitor scraping rewrote the merchandising plan weekly.",
    outcome: "+30% traffic",
    duration: "10 weeks",
  },
  {
    industry: "Healthcare",
    title: "Hours returned, charts that read like a person wrote them.",
    summary:
      "A clinical network deployed our documentation copilot inside its EHR. Clinicians sign faster, charts are richer, and intake is multilingual by default.",
    outcome: "+38% time saved",
    duration: "14 weeks",
  },
];

export const studio = [
  {
    name: "Founders",
    role: "Engineering · Applied Science",
    body: "A senior team of native Turkish engineers and applied scientists who shipped products used by millions at Amazon, Google, and Microsoft.",
  },
  {
    name: "Strategy",
    role: "Brand · Product · Story",
    body: "Strategists and designers who frame the bet, build the brand, and write the words that earn trust before the first feature loads.",
  },
  {
    name: "Operations",
    role: "Delivery · Reliability",
    body: "The people who keep the work shipping. Observability, evals, security, and the daily craft of running production well.",
  },
];

export const faq = [
  {
    q: "How do you charge?",
    a: "Engagements are scoped to outcomes with milestone billing. We do not bill hourly and we do not pad teams.",
  },
  {
    q: "Where is the data stored?",
    a: "Each customer gets an isolated data store. We support KVKK, GDPR, and HIPAA aligned deployments, on cloud or on-prem.",
  },
  {
    q: "Do you only work with Turkish customers?",
    a: "No. Studio is in Istanbul, customers are global. We work in English and Turkish by default and 30+ languages on demand.",
  },
  {
    q: "Will you train our team?",
    a: "Yes. Hand-off includes documentation, runbooks, and structured training. The work outlives us by design.",
  },
];
