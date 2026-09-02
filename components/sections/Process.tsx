"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            label="Our Process"
            title="How we work."
            description="A clear, collaborative process that turns ideas into products. No surprises, no black boxes."
          />
        </ScrollReveal>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          {/* Progress Line Container */}
          <div className="relative mb-16">
            {/* Background line */}
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-border" />

            {/* Orange progress line */}
            <motion.div
              className="absolute top-4 left-0 h-[2px] bg-accent origin-left"
              style={{
                scaleX: scrollYProgress,
                width: "100%",
              }}
            />

            {/* Step dots */}
            <div className="relative grid grid-cols-4 gap-4">
              {processSteps.map((step, index) => {
                const stepProgress = (index + 1) / processSteps.length;
                return (
                  <StepDot
                    key={step.number}
                    step={step}
                    index={index}
                    scrollProgress={scrollYProgress}
                    threshold={stepProgress}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="flex gap-5">
                {/* Vertical line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-accent bg-bg-primary flex items-center justify-center">
                    <span className="text-xs font-heading font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Step Dot Component ────────────────────────
function StepDot({
  step,
  index,
  scrollProgress,
  threshold,
}: {
  step: (typeof processSteps)[number];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  threshold: number;
}) {
  const isActive = useTransform(scrollProgress, (v) => v >= threshold - 0.1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-start"
    >
      {/* Dot */}
      <motion.div
        className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-5 transition-colors duration-400"
        style={{
          borderColor: useTransform(isActive, (v) =>
            v ? "#D65316" : "#252A35"
          ),
          backgroundColor: useTransform(isActive, (v) =>
            v ? "rgba(214, 83, 22, 0.1)" : "transparent"
          ),
        }}
      >
        <motion.span
          className="text-xs font-heading font-bold transition-colors duration-400"
          style={{
            color: useTransform(isActive, (v) => (v ? "#D65316" : "#5A5F6B")),
          }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="font-heading text-lg font-semibold mb-2 transition-colors duration-400"
        style={{
          color: useTransform(isActive, (v) => (v ? "#F5F5F2" : "#969BA6")),
        }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed max-w-[260px]">
        {step.description}
      </p>
    </motion.div>
  );
}
