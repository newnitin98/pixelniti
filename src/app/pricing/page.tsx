import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { pricingData, maintenancePlan, pricingFactors } from "@/data/pricing";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing | PixelNiti — Websites, Apps & AI Automation",
  description:
    "Transparent starting prices for PixelNiti services — business websites from ₹10,000, web apps from ₹25,000. All projects receive a custom quote scoped to your requirements.",
  alternates: {
    canonical: "https://pixelniti.com/pricing",
  },
  openGraph: {
    url: "https://pixelniti.com/pricing",
    title: "Pricing | PixelNiti — Websites, Apps & AI Automation",
    description:
      "Starting prices and engagement models for websites, web applications, AI agents, and automation. All quotes are custom-scoped.",
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
          subheading="Every project is scoped based on your actual requirements. Starting prices below give you a reference — your final quote will reflect your exact scope."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {pricingData.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} delay={index * 0.1} />
          ))}
        </div>

        {/* Maintenance Plan */}
        <div className="max-w-5xl mx-auto mb-12 p-8 rounded-2xl bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Add-on
              </p>
              <h3 className="text-xl font-bold text-foreground mb-1">{maintenancePlan.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{maintenancePlan.startingFrom}</p>
              <p className="text-sm text-muted-foreground">{maintenancePlan.description}</p>
            </div>
            <ul className="flex-1 space-y-2">
              {maintenancePlan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm hover:bg-secondary/80 transition-all"
              >
                Add to Project
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing factors note */}
        <div className="max-w-5xl mx-auto mb-20 p-6 rounded-2xl bg-muted/40 border border-border">
          <p className="text-sm font-semibold text-foreground mb-3">
            Final pricing depends on:
          </p>
          <div className="flex flex-wrap gap-2">
            {pricingFactors.map((factor) => (
              <span
                key={factor}
                className="px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
              >
                {factor}
              </span>
            ))}
          </div>
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
