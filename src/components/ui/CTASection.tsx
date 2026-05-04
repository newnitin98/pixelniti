"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTALink {
  label: string;
  href: string;
}

interface CTASectionProps {
  heading: string;
  subheading: string;
  primaryCTA: CTALink;
  secondaryCTA?: CTALink;
}

export function CTASection({ heading, subheading, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden border-t border-border">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-card p-8 md:p-14 rounded-3xl border border-border shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{heading}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            >
              {primaryCTA.label}
              <ArrowRight size={18} />
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-xl transition-all"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
