"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  delay?: number;
}

export function PortfolioCard({ item, delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors shadow-sm hover:shadow-md"
    >
      {/* Visual Panel */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-end p-4 overflow-hidden">
        {/* Fallback grid pattern — shows when no image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        {item.image && (
          <Image
            src={item.image}
            alt={`Mockup of ${item.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            unoptimized
          />
        )}

        {/* Bottom gradient so category pill stays readable over any image */}
        {item.image && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        )}

        <span className="relative z-10 inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/20 backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

        {/* Outcome callout */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-500/8 border border-emerald-500/15">
          <TrendingUp size={14} className="text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-emerald-400 font-medium leading-relaxed">{item.highlight}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
