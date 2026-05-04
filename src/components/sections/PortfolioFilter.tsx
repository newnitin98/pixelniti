"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioFilterProps {
  items: PortfolioItem[];
}

const ALL = "All";

export function PortfolioFilter({ items }: PortfolioFilterProps) {
  const categories = [ALL, ...Array.from(new Set(items.map((i) => i.category)))];
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filtered =
    activeFilter === ALL ? items : items.filter((i) => i.category === activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === cat
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <PortfolioCard key={item.id} item={item} delay={index * 0.07} />
        ))}
      </div>
    </div>
  );
}
