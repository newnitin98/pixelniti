import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ServicesDetailSection } from "@/components/sections/ServicesDetailSection";

export const metadata: Metadata = {
  title: "Services | PixelNiti — Web, App & AI Development",
  description:
    "Explore PixelNiti's services: Website Development, Custom Business Apps, AI Agents, Workflow Automation, UI/UX Design, and SEO & Security.",
  alternates: {
    canonical: "https://pixelniti.com/services",
  },
  openGraph: {
    url: "https://pixelniti.com/services",
    title: "Services | PixelNiti — Web, App & AI Development",
    description:
      "Premium digital services for businesses that want to grow — websites, apps, AI agents, and automation.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <SectionHeader
          badge="What We Build"
          heading="Strategic Digital Services"
          subheading="Every service we offer is built around one idea: your business outcomes matter more than our portfolio aesthetics. We combine clean design with practical strategy."
        />

        <ServicesDetailSection />

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Looking for pricing?{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              View our engagement models →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Ready to build something that works?"
        subheading="Tell us about your business and what you need. We will design a digital product that fits your goals — not a generic template."
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ label: "See Our Work", href: "/portfolio" }}
      />
    </>
  );
}
