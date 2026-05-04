export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlight: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "school-website",
    title: "Premium School Website",
    category: "Website Development",
    description:
      "Full institutional website with admission inquiry forms, faculty profiles, event calendar, and technical SEO setup for a private CBSE school.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Forms"],
    highlight: "Designed to increase admission inquiries through structured forms, clear CTAs, and local SEO setup.",
  },
  {
    id: "clinic-dashboard",
    title: "Multi-Specialty Clinic Portal",
    category: "App Development",
    description:
      "Patient management dashboard with appointment booking, doctor profiles, and WhatsApp notification integration for a private clinic group.",
    tags: ["React", "Dashboard", "WhatsApp API", "Database"],
    highlight: "Designed to reduce manual appointment handling through booking forms, WhatsApp notifications, and admin workflows.",
  },
  {
    id: "real-estate-ai",
    title: "Real Estate AI Agent",
    category: "AI Agents",
    description:
      "An AI-powered property enquiry agent integrated into a rental listing website, qualifying leads 24/7 and routing hot prospects to the sales team.",
    tags: ["AI Agent", "Lead Qualification", "Real Estate"],
    highlight: "Captured and qualified leads automatically outside business hours.",
  },
  {
    id: "salon-booking",
    title: "Salon Booking Flow",
    category: "Website Development",
    description:
      "Online service catalog and appointment booking flow for a premium hair salon, with WhatsApp confirmation and Google Maps integration.",
    tags: ["Booking System", "WhatsApp", "Local SEO"],
    highlight: "Walk-in traffic converted to pre-scheduled appointments.",
  },
  {
    id: "jewellery-ecommerce",
    title: "Jewellery E-Commerce UX",
    category: "UI/UX Design",
    description:
      "End-to-end UX design for a jewellery e-commerce experience, including product zoom, smart filter system, and a trust-first checkout flow.",
    tags: ["E-Commerce", "UI/UX", "Design System", "Figma"],
    highlight: "Cart abandonment reduced through trust-focused checkout redesign.",
  },
  {
    id: "workflow-automation",
    title: "Internal Operations Automation",
    category: "Workflow Automation",
    description:
      "Automated a 6-step manual onboarding flow for a B2B services company using webhook integrations, email sequences, and a CRM connector.",
    tags: ["Automation", "CRM", "Webhooks", "Email"],
    highlight: "Designed to reduce repetitive administrative work through webhook integrations, email automation, and CRM sync.",
  },
];
