import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { Monitor, Brain, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About PixelNiti | Digital Strategy Studio",
  description:
    "PixelNiti builds websites, apps, AI agents, and automation workflows with a focus on business strategy, clean design, SEO, and long-term maintainability.",
  alternates: {
    canonical: "https://pixelniti.com/about",
  },
  openGraph: {
    url: "https://pixelniti.com/about",
    title: "About PixelNiti | Digital Strategy Studio",
    description:
      "Learn about PixelNiti — our mission, values, and why we build digital products with strategy at the core.",
  },
};

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We do not overcomplicate solutions. Clean, simple, and maintainable always wins over impressive-looking but fragile.",
  },
  {
    title: "Strategy before design",
    description:
      "Every visual decision is grounded in a business reason. We ask why before we decide how.",
  },
  {
    title: "Delivered, not promised",
    description:
      "We set honest timelines and meet them. If something changes, you will know immediately — not at the deadline.",
  },
];

const industries = [
  "Clinics & Healthcare",
  "Schools & Education",
  "Salons & Wellness",
  "Real Estate",
  "E-Commerce",
  "Consultants & Freelancers",
  "Startups",
  "Local Businesses",
];

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About PixelNiti</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            PixelNiti was built on a simple belief: a business website should do more than look good.
            It should earn trust, generate leads, support operations, and grow with your business. We
            combine clean design with practical strategy to build digital products that actually work.
          </p>
        </div>

        {/* Brand meaning */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            The Meaning Behind Our Name
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Monitor size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Pixel</h3>
              <p className="text-muted-foreground leading-relaxed">
                Represents the digital layer — websites, design, interfaces, digital products, visual
                identity, and user experience. Everything you can see and interact with.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Brain size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Niti</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Sanskrit-origin word representing strategy, planning, business thinking, and
                structured execution. The logic behind every decision we make.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="border-l-4 border-primary pl-8 py-2">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              &ldquo;We build digital products that serve a business purpose — not just something that
              looks good in a portfolio. Every project starts with understanding your customers and
              ends with a product that earns their trust.&rdquo;
            </p>
            <p className="mt-4 text-muted-foreground text-sm font-medium">— PixelNiti</p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
                <CheckCircle2 size={22} className="text-primary" aria-hidden="true" />
                <h3 className="font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Who We Work With</h2>
          <p className="text-muted-foreground mb-8">
            We serve businesses of all sizes across industries. If you have a business problem that
            needs a digital solution, we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground border border-border"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Footer credit */}
        <div
          id="footer-credit"
          className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">The PixelNiti Mark</h3>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            When we build a digital product for a client, we stand behind it. You may have seen our
            footer credit on websites we have built. It is a mark of quality and accountability — a
            signal to visitors that the site was crafted with care.
          </p>
          <div className="inline-block px-5 py-2.5 bg-background rounded-lg border border-border">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Website crafted by PixelNiti
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        heading="Work with a team that takes your business seriously"
        subheading="We take on a limited number of projects at a time so every client gets our full attention. If you are ready to build something real, let us talk."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "See Our Services", href: "/services" }}
      />
    </>
  );
}
