import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Monitor, Target, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
  description:
    "PixelNiti builds premium websites, business applications, AI agents, and automation workflows for growing businesses. Strategy-first. Design-second.",
  alternates: {
    canonical: "https://pixelniti.com",
  },
  openGraph: {
    url: "https://pixelniti.com",
  },
};

const differentiators = [
  {
    icon: Monitor,
    title: "No Generic Templates",
    description:
      "Every site is designed from scratch around your business. We do not pick a theme and fill in the blanks.",
  },
  {
    icon: Target,
    title: "Strategy Before Design",
    description:
      "We start with your customers and business goals, not color palettes. Design decisions follow strategic decisions.",
  },
  {
    icon: Search,
    title: "Built for Google",
    description:
      "Technical SEO, structured data, and Core Web Vitals are included in every project — not offered as an add-on.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Services"
            heading="Strategic Digital Services"
            subheading="We do not use generic templates. Every project is designed around your specific business outcomes — combining clean design with practical strategy."
          />
          <ServicesGrid />
        </div>
      </section>

      <StatsStrip />

      {/* Why PixelNiti */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            heading="Why businesses choose PixelNiti"
            subheading="We are not the cheapest option, and we are not the biggest agency. We are a focused team that does fewer projects with more care."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to upgrade your business?"
        subheading="Whether you need a new website, a custom application, or an AI workflow, PixelNiti is ready to build it with strategy. Tell us what you need."
        primaryCTA={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "See Our Work", href: "/portfolio" }}
      />
    </>
  );
}
