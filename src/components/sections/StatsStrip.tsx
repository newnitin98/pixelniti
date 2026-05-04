"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "3+", label: "Countries Served" },
  { value: "90+", label: "Lighthouse Score" },
  { value: "100%", label: "Remote-Ready" },
];

export function StatsStrip() {
  return (
    <section className="py-16 border-y border-border bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
