import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Our Work | PixelNiti Portfolio",
  description:
    "A showcase of websites, business applications, AI agents, and automation workflows built by PixelNiti for real business outcomes.",
  alternates: {
    canonical: "https://pixelniti.com/portfolio",
  },
  openGraph: {
    url: "https://pixelniti.com/portfolio",
    title: "Our Work | PixelNiti Portfolio",
    description:
      "Digital products built with strategy — see how PixelNiti approaches websites, apps, AI agents, and workflow automation.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <SectionHeader
          badge="Our Work"
          heading="Digital Products Built with Strategy"
          subheading="Each project below demonstrates our strategic approach to a real business problem — the design thinking, technology choices, and outcomes that matter."
        />

        <div className="mb-12 p-5 rounded-xl bg-muted/40 border border-border text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> These are strategic concept
            demonstrations showcasing our approach and capabilities. Contact us for case studies,
            references, or to discuss a real project.
          </p>
        </div>

        <PortfolioFilter items={portfolioData} />
      </div>

      <CTASection
        heading="Have a real project in mind?"
        subheading="Bring us your business challenge. We will tell you how we would approach it, what it would take, and what success looks like."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "See Our Services", href: "/services" }}
      />
    </>
  );
}
