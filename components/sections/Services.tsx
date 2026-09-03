"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-bg-secondary"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            label="What You Get"
            title="How we can help."
            description="Every business has different challenges. Here's how we help you tackle yours."
          />
        </ScrollReveal>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-16">
          {/* Left, Service List */}
          <ScrollReveal direction="left">
            <div className="space-y-1">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full text-left px-5 py-4 rounded-lg flex items-center gap-4
                              transition-all duration-300 group
                              ${
                                index === activeIndex
                                  ? "bg-bg-surface border border-border"
                                  : "border border-transparent hover:bg-bg-surface/50"
                              }`}
                >
                  {/* Number */}
                  <span
                    className={`font-heading text-sm font-semibold transition-colors duration-300 ${
                      index === activeIndex
                        ? "text-accent"
                        : "text-text-dim group-hover:text-text-muted"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Indicator line */}
                  <span
                    className={`w-[2px] h-5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-accent"
                        : "bg-border group-hover:bg-text-dim"
                    }`}
                  />

                  {/* Title */}
                  <span
                    className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                      index === activeIndex
                        ? "text-text-primary"
                        : "text-text-muted group-hover:text-text-primary"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Right, Service Detail */}
          <ScrollReveal direction="right">
            <div className="relative min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-bg-surface border border-border rounded-xl p-8 xl:p-10"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3 block">
                    {activeService.number}. {activeService.title}
                  </span>

                  <p className="text-text-primary text-base md:text-lg font-medium italic leading-relaxed mb-3">
                    {activeService.hook}
                  </p>

                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                    {activeService.solution}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {activeService.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button href={`/services#${activeService.id}`}>
                    {activeService.cta}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden space-y-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.08}>
              <div className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? -1 : index)
                  }
                  className="w-full text-left px-5 py-4 flex items-center justify-between
                             transition-colors duration-300 hover:bg-bg-surface/50"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-heading text-sm font-semibold ${
                        index === activeIndex ? "text-accent" : "text-text-dim"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`font-heading text-base font-semibold ${
                        index === activeIndex
                          ? "text-text-primary"
                          : "text-text-muted"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 text-text-dim transition-transform duration-300 ${
                      index === activeIndex ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-accent text-xs font-medium italic mb-2">
                          {service.hook}
                        </p>

                        <p className="text-sm text-text-muted leading-relaxed mb-4">
                          {service.solution}
                        </p>

                        <ul className="space-y-2 mb-5">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-sm text-text-muted"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button href={`/services#${service.id}`}>
                          {service.cta}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
