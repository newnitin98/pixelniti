export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We understand your business goals, target audience, and what success looks like.",
    detail:
      "Every project starts with understanding — not designing. We ask structured questions about your customers, competitors, and the outcomes your business needs from this digital product.",
    iconName: "Search",
  },
  {
    step: "02",
    title: "Content & Requirements",
    description: "Gathering your assets, copy direction, and all technical requirements.",
    detail:
      "We send you a structured intake form. You provide your logo, brand direction, key messages, and any specific functionality needed. We handle the copy structure and content architecture.",
    iconName: "ClipboardList",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Creating the visual identity and interface that builds immediate trust.",
    detail:
      "We design directly in code or in Figma depending on the project. You review prototypes and give feedback before any full development begins — keeping revision cycles short.",
    iconName: "Palette",
  },
  {
    step: "04",
    title: "Development & Engineering",
    description: "Writing clean, responsive, performance-optimized code.",
    detail:
      "Built with Next.js, TypeScript, and Tailwind CSS. Every component is tested across desktop, tablet, and mobile. Code is clean, documented where needed, and built for maintainability.",
    iconName: "Code2",
  },
  {
    step: "05",
    title: "SEO & Security Setup",
    description: "Integrating technical SEO, Search Console, and hardening security.",
    detail:
      "We set up structured data (JSON-LD), canonical URLs, robots.txt, sitemap, and connect Google Search Console. Security headers are configured via Vercel so your site is protected from day one.",
    iconName: "ShieldCheck",
  },
  {
    step: "06",
    title: "Testing & Deployment",
    description: "Rigorous device testing followed by a secure Vercel deployment.",
    detail:
      "We run Lighthouse audits targeting 90+ across performance, accessibility, and SEO. Final deployment is on Vercel's global edge network with automatic HTTPS and CDN distribution.",
    iconName: "Rocket",
  },
];
