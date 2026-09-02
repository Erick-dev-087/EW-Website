"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ── Single Service Row ──────────────────────────────────

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  // Opacity peaks when the element is in the center of the viewport
  // and fades as it moves away (above or below)
  const opacity = useTransform(scrollYProgress, (v) => {
    // v = 0 means top of element is at bottom of viewport
    // v = 0.5 means element is centered
    // v = 1 means bottom of element is at top of viewport
    const distFromCenter = Math.abs(v - 0.45);
    // Sharp falloff: fully visible within a tight band, fading outside
    return Math.max(0.15, 1 - distFromCenter * 2.8);
  });

  // Subtle scale for depth
  const scale = useTransform(scrollYProgress, (v) => {
    const distFromCenter = Math.abs(v - 0.45);
    return Math.max(0.97, 1 - distFromCenter * 0.06);
  });

  // Subtle blur for non-focused items
  const blur = useTransform(scrollYProgress, (v) => {
    const distFromCenter = Math.abs(v - 0.45);
    const blurAmount = Math.max(0, (distFromCenter - 0.15) * 6);
    return `blur(${blurAmount}px)`;
  });

  return (
    <motion.div
      ref={rowRef}
      className="py-12 md:py-16 border-b border-border/30 last:border-b-0"
      style={{ opacity, scale, filter: blur }}
    >
      <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
        {/* Big number */}
        <span className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary/20 leading-none select-none">
          {service.number}
        </span>

        {/* Content */}
        <div className="pt-1 md:pt-3">
          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-3 leading-tight">
            {service.title}
          </h3>

          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mb-5">
            {service.description}
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-1.5 mb-5">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-text-dim">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href={`/services#${service.id}`} variant="secondary">
            Explore Service
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Desktop Services ────────────────────────────────────

function DesktopServices() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section heading */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Services
            </h2>
          </div>
        </ScrollReveal>

        {/* Service rows — all visible, opacity driven by scroll position */}
        <div>
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile Services ─────────────────────────────────────

function MobileServices() {
  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <ScrollReveal key={service.id} delay={index * 0.08}>
          <div className="border border-border/30 rounded-xl p-5">
            <div className="flex items-start gap-4 mb-3">
              <span className="font-heading text-3xl font-bold text-text-primary/20 leading-none">
                {service.number}
              </span>
              <h3 className="font-heading text-lg font-bold text-text-primary pt-1">
                {service.title}
              </h3>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {service.description}
            </p>

            <ul className="space-y-1.5 mb-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs text-text-dim"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href={`/services#${service.id}`} variant="secondary">
              Explore Service
            </Button>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// ── Exported Component ──────────────────────────────────

export function ServicesScrollDriven() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative">
      {/* Desktop */}
      <div className="hidden lg:block">
        {prefersReducedMotion ? (
          <div className="py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="mb-12">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  What We Do
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
                  Services
                </h2>
              </div>
              <MobileServices />
            </div>
          </div>
        ) : (
          <DesktopServices />
        )}
      </div>

      {/* Mobile */}
      <div className="lg:hidden py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-12">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-[1.1]">
                Services
              </h2>
            </div>
          </ScrollReveal>
          <MobileServices />
        </div>
      </div>
    </section>
  );
}
