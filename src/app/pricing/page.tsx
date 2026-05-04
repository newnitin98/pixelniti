import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { pricingData } from "@/data/pricing";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing | PixelNiti Engagement Models",
  description:
    "Transparent engagement models for websites, web applications, and AI automation. All projects are scoped individually — get a custom quote.",
  alternates: {
    canonical: "https://pixelniti.com/pricing",
  },
  openGraph: {
    url: "https://pixelniti.com/pricing",
    title: "Pricing | PixelNiti Engagement Models",
    description:
      "No rigid packages. Custom quotes scoped to your actual requirements. Business websites, web apps, and AI workflows.",
  },
};

const decisionGuide = [
  { condition: "Need a professional business presence online?", tier: "Business Website" },
  { condition: "Need a booking system, portal, or dashboard?", tier: "Premium Web Application" },
  { condition: "Want to automate manual work or deploy an AI agent?", tier: "AI & Automation" },
  { condition: "Not sure what you need?", tier: "Contact us — we will help you figure it out" },
];

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <SectionHeader
          badge="Transparent Pricing"
          heading="Engagement Models That Fit Your Business"
          subheading="We do not use rigid package pricing. Every project is scoped based on your actual requirements. All quotes are custom — always honest, never padded."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {pricingData.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} delay={index * 0.1} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto mb-24 p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-6">Not sure which fits you?</h3>
          <ul className="space-y-4">
            {decisionGuide.map((item) => (
              <li key={item.condition} className="flex items-start gap-3 text-sm">
                <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <span className="text-muted-foreground">{item.condition} </span>
                  <span className="font-semibold text-foreground">{item.tier}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border">
            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
              Send us a message — we respond within 24 hours →
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <SectionHeader
            heading="Common Questions"
            subheading="Straightforward answers to things people ask before starting a project."
          />
          <FAQAccordion items={faqsData} />
        </div>
      </div>

      <CTASection
        heading="Let us scope your project"
        subheading="Fill out the contact form and we will send you a clear proposal — scope, timeline, and cost — within 2 business days. No sales calls unless you want one."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "How We Work", href: "/process" }}
      />
    </>
  );
}
