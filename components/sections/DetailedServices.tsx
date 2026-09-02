"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";

// ── Single Detailed Service Row ─────────────────────────

function DetailedServiceRow({
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
  const opacity = useTransform(scrollYProgress, (v) => {
    const distFromCenter = Math.abs(v - 0.45);
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
      id={service.id}
      ref={rowRef}
      className="py-16 md:py-24 border-b border-border/30 last:border-b-0 scroll-mt-24"
      style={{ opacity, scale, filter: blur }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
        {/* Big number */}
        <span className="hidden lg:block font-heading text-6xl lg:text-8xl font-bold text-text-primary/10 leading-none select-none sticky top-32">
          {service.number}
        </span>

        {/* Content */}
        <div className="pt-1 md:pt-3">
          <div className="lg:hidden flex items-center gap-4 mb-4">
            <span className="font-heading text-4xl font-bold text-text-primary/20 leading-none">
              {service.number}
            </span>
            <h2 className="font-heading text-2xl font-bold text-text-primary leading-tight">
              {service.title}
            </h2>
          </div>
          
          <h2 className="hidden lg:block font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
            {service.title}
          </h2>

          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {/* What We Provide */}
            <div className="bg-bg-surface border border-border/50 rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-5">
                What we provide
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Workflow */}
            <div className="bg-bg-surface border border-border/50 rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-5">
                Typical workflow
              </h3>
              <ol className="space-y-3">
                {service.workflow.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="font-heading text-xs font-bold text-accent mt-0.5 shrink-0">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* For Who */}
          <div className="mb-10 max-w-2xl">
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              Who it&apos;s for
            </h3>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              {service.forWho}
            </p>
          </div>

          <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
            Discuss This Service
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Mobile Services ─────────────────────────────────────

function MobileServices() {
  return (
    <div className="space-y-12">
      {services.map((service, index) => (
        <ScrollReveal key={service.id} delay={index * 0.08}>
          <div id={service.id} className="scroll-mt-24 pb-12 border-b border-border/30 last:border-b-0">
            <div className="flex items-start gap-4 mb-4">
              <span className="font-heading text-4xl font-bold text-text-primary/20 leading-none">
                {service.number}
              </span>
              <h3 className="font-heading text-2xl font-bold text-text-primary pt-1">
                {service.title}
              </h3>
            </div>

            <p className="text-base text-text-muted leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-bg-surface border border-border/50 rounded-xl p-5">
                <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-4">
                  What we provide
                </h3>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-dim"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-bg-surface border border-border/50 rounded-xl p-5">
                <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-4">
                  Typical workflow
                </h3>
                <ol className="space-y-2.5">
                  {service.workflow.map((step, stepIndex) => (
                    <li
                      key={step}
                      className="flex items-start gap-2 text-sm text-text-dim"
                    >
                      <span className="font-heading text-xs font-bold text-accent mt-0.5 shrink-0">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Who it&apos;s for
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {service.forWho}
              </p>
            </div>

            <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
              Discuss This Service
            </Button>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// ── Exported Component ──────────────────────────────────

export function DetailedServices() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pb-24 md:pb-32">
      {/* Desktop */}
      <div className="hidden lg:block">
        {prefersReducedMotion ? (
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <MobileServices />
          </div>
        ) : (
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {services.map((service, index) => (
              <DetailedServiceRow
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <MobileServices />
        </div>
      </div>
    </section>
  );
}
