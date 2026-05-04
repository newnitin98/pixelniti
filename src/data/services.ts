import { Code2, Smartphone, Bot, Workflow, Layout, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  link: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: "web",
    title: "Website Development",
    description:
      "Premium websites for local businesses, clinics, and growing companies that load fast and look credible.",
    fullDescription:
      "We design and build modern business websites using Next.js — fast, secure, and structured to rank on Google. No page builders. No generic templates. Every site is built around your specific business outcomes and the customers you want to attract.",
    icon: Code2,
    link: "/services#web",
    features: [
      "Custom design based on your brand",
      "Mobile-first, responsive layout",
      "Contact forms and WhatsApp CTA",
      "Google Search Console + SEO setup",
      "Vercel edge deployment",
    ],
  },
  {
    id: "app",
    title: "App Development",
    description:
      "Custom web applications and dashboards tailored to your specific business logic and operations.",
    fullDescription:
      "When your business needs more than a brochure site — appointment systems, booking flows, client portals, or dashboards — we build custom web applications that fit your operations exactly. No bloated SaaS. Built to your spec.",
    icon: Smartphone,
    link: "/services#app",
    features: [
      "Custom business logic and data models",
      "User authentication and role management",
      "Admin dashboards and reporting",
      "Third-party API integrations",
      "Scalable database architecture",
    ],
  },
  {
    id: "ai",
    title: "AI Agents",
    description:
      "Smart AI agents that answer queries, capture leads, and support your customers 24/7.",
    fullDescription:
      "We design and deploy AI agents that handle real business tasks — answering product questions, qualifying leads, scheduling appointments, and routing complex queries to your team. Trained on your content, not generic data.",
    icon: Bot,
    link: "/services#ai",
    features: [
      "Trained on your business content",
      "Lead capture and qualification logic",
      "WhatsApp and web chat integration",
      "Handoff protocols to human agents",
      "Usage reporting and tuning",
    ],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description:
      "Connect your tools and automate repetitive tasks to save time and reduce manual errors.",
    fullDescription:
      "We map your manual workflows and replace them with automated sequences using webhooks, APIs, and integration platforms. Less manual work means fewer errors, faster response times, and more time for actual business.",
    icon: Workflow,
    link: "/services#automation",
    features: [
      "Workflow discovery and mapping",
      "Tool integrations (CRM, email, WhatsApp)",
      "Webhook and API connections",
      "Notification and alerting systems",
      "Documentation and team training",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Conversion-focused design that builds immediate trust with your visitors.",
    fullDescription:
      "Good design is not decoration — it is how your customers decide whether to trust you in the first 5 seconds. We design interfaces that communicate credibility, clarity, and value from the first scroll.",
    icon: Layout,
    link: "/services#uiux",
    features: [
      "Brand-aligned visual design",
      "Figma prototype and review",
      "Accessibility-compliant components",
      "Design system documentation",
      "Handoff-ready specs for development",
    ],
  },
  {
    id: "seo",
    title: "SEO & Security",
    description:
      "Built-in technical SEO, Google Search Console setup, and security hardening.",
    fullDescription:
      "Technical SEO and security are not afterthoughts at PixelNiti. Every site we deliver includes proper semantic HTML, structured data, sitemap, robots.txt, and Search Console integration from day one — so your site ranks and stays safe.",
    icon: ShieldCheck,
    link: "/services#seo",
    features: [
      "JSON-LD structured data",
      "Sitemap and robots.txt",
      "Google Search Console setup",
      "Core Web Vitals optimization",
      "Security headers via Vercel",
    ],
  },
];
