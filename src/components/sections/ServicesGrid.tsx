"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, index) => (
        <ServiceCard key={service.id} {...service} delay={index * 0.1} />
      ))}
    </div>
  );
}
