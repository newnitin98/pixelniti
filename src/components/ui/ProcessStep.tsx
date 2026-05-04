"use client";

import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "@/data/process";

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast: boolean;
}

export function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-6"
    >
      {/* Step indicator + connector */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-primary">{step.step}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2 min-h-[2rem]" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "" : ""}`}>
        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
        <p className="text-muted-foreground mb-4">{step.description}</p>
        <div className="p-4 rounded-xl bg-muted/40 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}
