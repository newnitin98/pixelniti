"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export function ServicesDetailSection() {
  return (
    <div className="space-y-8">
      {servicesData.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 * (index % 3) }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors shadow-sm"
          >
            <div className="flex flex-col justify-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.fullDescription}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Start this project <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                What&apos;s included
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
