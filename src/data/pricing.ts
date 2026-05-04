export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceLabel: string;
  priceNote: string;
  startingFrom?: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricingData: PricingTier[] = [
  {
    id: "starter",
    name: "Business Website",
    tagline:
      "For local businesses, clinics, salons, and startups that need a credible online presence.",
    priceLabel: "Custom Quote",
    priceNote: "Scoped based on pages and requirements.",
    startingFrom: "Starting from ₹10,000",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form with WhatsApp CTA",
      "Google Search Console setup",
      "On-page SEO and sitemap",
      "Vercel edge deployment",
      "1 revision round included",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
  {
    id: "premium",
    name: "Premium Web Application",
    tagline:
      "For businesses that need custom logic, dashboards, booking systems, or client portals.",
    priceLabel: "Custom Quote",
    priceNote: "Scoped per project. Discovery call required.",
    startingFrom: "Starting from ₹25,000",
    features: [
      "Custom business logic and workflows",
      "Database design and integration",
      "Admin dashboard or client portal",
      "User authentication (if required)",
      "API and third-party integrations",
      "Full SEO and performance setup",
      "2 revision rounds included",
    ],
    cta: "Start Discovery",
    highlighted: true,
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    tagline:
      "For teams ready to automate repetitive work and deploy intelligent agents.",
    priceLabel: "Custom Quote",
    priceNote: "Scoped after workflow review.",
    startingFrom: "Scoped after workflow review",
    features: [
      "AI chatbot or agent design and deployment",
      "Workflow automation (custom or integration platform)",
      "CRM, email, or WhatsApp integration",
      "Lead qualification logic",
      "Handoff protocols to human agents",
      "Documentation and team training",
    ],
    cta: "Discuss Your Workflow",
    highlighted: false,
  },
];

export const maintenancePlan = {
  name: "Maintenance Plan",
  startingFrom: "Starting from ₹4,000/year",
  description:
    "Keep your website secure, up to date, and running at peak performance after launch.",
  features: [
    "Monthly security and dependency updates",
    "Uptime monitoring",
    "Minor content edits (up to 2/month)",
    "Performance checks",
    "Priority email support",
  ],
};

export const pricingFactors = [
  "Number of pages and sections",
  "Design complexity and custom animations",
  "Content readiness (text, images, copy)",
  "Third-party integrations (CRM, payments, APIs)",
  "Hosting, domain, and deployment setup",
  "Additional modules (blog, e-commerce, booking)",
];
