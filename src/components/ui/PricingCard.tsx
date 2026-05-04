"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
  delay?: number;
}

export function PricingCard({ tier, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative flex flex-col p-8 rounded-2xl border bg-card shadow-sm",
        tier.highlighted
          ? "border-primary ring-2 ring-primary shadow-primary/20 shadow-xl"
          : "border-border"
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wide shadow">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{tier.tagline}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-border">
        <p className="text-2xl font-bold text-foreground">{tier.priceLabel}</p>
        {tier.startingFrom && (
          <p className="text-sm font-medium text-primary mt-1">{tier.startingFrom}</p>
        )}
        <p className="text-xs text-muted-foreground mt-1">{tier.priceNote}</p>
      </div>

      <ul className="space-y-3 mb-10 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
            <CheckCircle2
              size={16}
              className="text-emerald-500 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={cn(
          "w-full text-center py-3 rounded-xl font-semibold text-sm transition-all",
          tier.highlighted
            ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-primary/25"
            : "bg-secondary text-foreground hover:bg-secondary/80"
        )}
      >
        {tier.cta}
      </Link>
    </motion.div>
  );
}
