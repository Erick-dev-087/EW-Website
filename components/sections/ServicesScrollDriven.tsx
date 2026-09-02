"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ── Individual Service Scene ────────────────────────────

function ServiceScene({
  service,
  index,
  scrollYProgress,
  total,
}: {
  service: (typeof services)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const center = start + segmentSize / 2;
  const end = start + segmentSize;

  // Fade in from 0 → 1, hold, then fade out 1 → 0
  const opacity = useTransform(scrollYProgress, (v) => {
    // Before this scene
    if (v < start - segmentSize * 0.1) return 0;
    // After this scene
    if (v > end + segmentSize * 0.1) return 0;

    // Fade in zone: start → start + 20% of segment
    if (v < start + segmentSize * 0.2) {
      return Math.max(0, Math.min(1, (v - start) / (segmentSize * 0.2)));
    }

    // Fade out zone: end - 20% of segment → end
    if (v > end - segmentSize * 0.2) {
      return Math.max(0, Math.min(1, (end - v) / (segmentSize * 0.2)));
    }

    // Fully visible in the middle
    return 1;
  });

  // Subtle vertical movement: enters from below, exits upward
  const y = useTransform(scrollYProgress, (v) => {
    const progress = (v - center) / segmentSize;
    return progress * -40;
  });

  // Slight scale for depth feel
  const scale = useTransform(scrollYProgress, (v) => {
    const dist = Math.abs(v - center) / segmentSize;
    return Math.max(0.96, 1 - dist * 0.04);
  });

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="max-w-3xl mx-auto px-6 md:px-10 w-full pointer-events-auto"
        style={{ y, scale }}
      >
        {/* Service number + title */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            {service.number} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button href={`/services#${service.id}`}>
          Explore Service
        </Button>
      </motion.div>
    </motion.div>
  );
}

// ── Progress Indicator (right side dots) ─────────────────

function ProgressIndicator({
  scrollYProgress,
  total,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  return (
    <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <ProgressDot
          key={index}
          index={index}
          scrollYProgress={scrollYProgress}
          total={total}
        />
      ))}
    </div>
  );
}

function ProgressDot({
  index,
  scrollYProgress,
  total,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const isActive = useTransform(scrollYProgress, (v) => v >= start && v < end);
  const dotScale = useTransform(isActive, (active) => (active ? 1 : 0.5));
  const dotOpacity = useTransform(isActive, (active) => (active ? 1 : 0.3));
  const dotBg = useTransform(isActive, (active) =>
    active ? "#D65316" : "#252A35"
  );

  return (
    <motion.div
      className="w-2 h-2 rounded-full transition-colors"
      style={{
        scale: dotScale,
        opacity: dotOpacity,
        backgroundColor: dotBg,
      }}
    />
  );
}

// ── Desktop: Full-Screen Scroll-Driven ──────────────────

function DesktopServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const total = services.length;

  return (
    <div ref={sectionRef} className="relative" style={{ height: `${total * 100}vh` }}>
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section label — always visible, top-left */}
        <div className="absolute top-24 left-6 md:left-10 z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-dim">
            What We Do
          </span>
        </div>

        {/* Progress dots — right side */}
        <ProgressIndicator scrollYProgress={scrollYProgress} total={total} />

        {/* Service scenes — stacked, only one visible at a time */}
        {services.map((service, index) => (
          <ServiceScene
            key={service.id}
            service={service}
            index={index}
            scrollYProgress={scrollYProgress}
            total={total}
          />
        ))}

        {/* Bottom progress bar */}
        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 z-10">
          <div className="h-[1px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent origin-left rounded-full"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile: Stacked Layout ──────────────────────────────

function MobileServices() {
  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <ScrollReveal key={service.id} delay={index * 0.08}>
          <div className="border border-border rounded-xl p-6">
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                {service.number} / {String(services.length).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {service.title}
              </h3>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {service.description}
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
      {/* Desktop: full-screen scroll-driven scenes */}
      <div className="hidden lg:block">
        {prefersReducedMotion ? (
          <div className="py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="mb-12">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  What We Do
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
                  Services built around your needs.
                </h2>
                <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
                  We don&apos;t just write code. We solve business problems with well-designed software.
                </p>
              </div>
              <MobileServices />
            </div>
          </div>
        ) : (
          <DesktopServices />
        )}
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-12">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-[1.1]">
                Services built around your needs.
              </h2>
              <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
                We don&apos;t just write code. We solve business problems with well-designed software.
              </p>
            </div>
          </ScrollReveal>
          <MobileServices />
        </div>
      </div>
    </section>
  );
}
