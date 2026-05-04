import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { processSteps } from "@/data/process";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | The PixelNiti Process",
  description:
    "Discover PixelNiti's structured delivery workflow — from discovery and strategy to SEO setup and Vercel deployment.",
  alternates: {
    canonical: "https://pixelniti.com/process",
  },
  openGraph: {
    url: "https://pixelniti.com/process",
    title: "How We Work | The PixelNiti Process",
    description:
      "A structured, strategic approach to building your digital product — from first call to live deployment.",
  },
};

const promises = [
  {
    title: "Clear communication at every stage",
    description:
      "You will always know where your project stands. We send updates before you have to ask.",
  },
  {
    title: "No scope creep without discussion",
    description:
      "If requirements change mid-project, we discuss impact on timeline and cost before making any changes.",
  },
  {
    title: "Delivered on the agreed timeline",
    description:
      "We set realistic timelines upfront. If something changes, we tell you immediately — not at the deadline.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <SectionHeader
          badge="How We Work"
          heading="Our Delivery Workflow"
          subheading="Every PixelNiti project follows a structured sequence. Strategy first, design second, development third. No shortcuts, no surprises."
        />

        <div className="max-w-3xl mx-auto mb-24">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionHeader
            heading="What you can expect"
            subheading="Beyond the technical workflow, here is how we operate as a partner."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4"
              >
                <CheckCircle2 size={24} className="text-primary" aria-hidden="true" />
                <h3 className="font-bold text-foreground">{promise.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        heading="Start a project with a team that delivers"
        subheading="We follow this process on every project — regardless of size. Your business deserves strategic thinking whether it is a 3-page website or a full web application."
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
