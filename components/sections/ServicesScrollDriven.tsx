"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ── Desktop: Scroll-Driven Storytelling ─────────────────

function ServiceListItem({
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
  // Each service occupies 1/total of the scroll range
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const center = start + segmentSize / 2;
  const end = start + segmentSize;

  // Opacity: peaks at 1 when this service is centered, fades to 0.35 otherwise
  const opacity = useTransform(scrollYProgress, (v) => {
    const dist = Math.abs(v - center);
    const maxDist = segmentSize * 0.8;
    return Math.max(0.35, 1 - (dist / maxDist) * 0.65);
  });

  // Whether this is the "active" service (closest to center)
  const isActiveValue = useTransform(scrollYProgress, (v) => {
    return v >= start && v < end;
  });

  // Orange indicator scale
  const indicatorScale = useTransform(scrollYProgress, (v) => {
    return v >= start && v < end ? 1 : 0;
  });

  // Text color
  const titleColor = useTransform(isActiveValue, (active) =>
    active ? "#F5F5F2" : "#969BA6"
  );
  const numberColor = useTransform(isActiveValue, (active) =>
    active ? "#D65316" : "#5A5F6B"
  );

  return (
    <motion.div
      className="flex items-center gap-4 py-3.5"
      style={{ opacity }}
    >
      {/* Number */}
      <motion.span
        className="font-heading text-sm font-semibold w-6 shrink-0 transition-colors"
        style={{ color: numberColor }}
      >
        {service.number}
      </motion.span>

      {/* Orange indicator line */}
      <motion.span
        className="w-[2px] h-5 rounded-full bg-accent origin-center"
        style={{ scaleY: indicatorScale }}
      />

      {/* Title */}
      <motion.span
        className="font-heading text-lg font-semibold transition-colors"
        style={{ color: titleColor }}
      >
        {service.title}
      </motion.span>
    </motion.div>
  );
}

function DesktopServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Determine the active index from scroll progress
  const total = services.length;

  return (
    <div ref={sectionRef} className="relative" style={{ height: `${total * 100}vh` }}>
      {/* Sticky container that pins the two-column layout */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          {/* Section heading */}
          <div className="mb-10">
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

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-16">
            {/* Left: Service list */}
            <div>
              {/* Progress indicator */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center relative">
                  {/* Vertical track */}
                  <div
                    className="w-[2px] bg-border rounded-full"
                    style={{ height: `${total * 44 + (total - 1) * 4}px` }}
                  />
                  {/* Orange progress fill */}
                  <motion.div
                    className="absolute top-0 left-0 w-[2px] bg-accent rounded-full origin-top"
                    style={{
                      height: `${total * 44 + (total - 1) * 4}px`,
                      scaleY: scrollYProgress,
                    }}
                  />
                </div>

                {/* Service items */}
                <div>
                  {services.map((service, index) => (
                    <ServiceListItem
                      key={service.id}
                      service={service}
                      index={index}
                      scrollYProgress={scrollYProgress}
                      total={total}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Service description */}
            <div className="relative min-h-[340px]">
              {services.map((service, index) => (
                <ServiceDescription
                  key={service.id}
                  service={service}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  total={total}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceDescription({
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
  const end = start + segmentSize;

  // Opacity: 0 when not active, fading in/out at the edges
  const opacity = useTransform(scrollYProgress, (v) => {
    if (v < start - segmentSize * 0.3 || v > end + segmentSize * 0.3) return 0;

    // Fade in: start-0.3*seg → start+0.15*seg
    if (v < start + segmentSize * 0.15) {
      const fadeInProgress = (v - (start - segmentSize * 0.3)) / (segmentSize * 0.45);
      return Math.max(0, Math.min(1, fadeInProgress));
    }

    // Fade out: end-0.15*seg → end+0.3*seg
    if (v > end - segmentSize * 0.15) {
      const fadeOutProgress = (v - (end - segmentSize * 0.15)) / (segmentSize * 0.45);
      return Math.max(0, Math.min(1, 1 - fadeOutProgress));
    }

    return 1;
  });

  // Subtle Y movement
  const y = useTransform(scrollYProgress, (v) => {
    const center = start + segmentSize / 2;
    const dist = v - center;
    return dist * 60; // subtle vertical offset
  });

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, y }}
    >
      <div className="bg-bg-surface border border-border rounded-xl p-8 xl:p-10">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3 block">
          {service.number}. {service.title}
        </span>

        <p className="text-text-primary text-base md:text-lg leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button href={`/services#${service.id}`}>
          Explore Service
        </Button>
      </div>
    </motion.div>
  );
}

// ── Mobile: Simple stacked layout ──────────────────────

function MobileServices() {
  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <ScrollReveal key={service.id} delay={index * 0.08}>
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-sm font-semibold text-accent">
                {service.number}
              </span>
              <span className="w-[2px] h-4 rounded-full bg-accent" />
              <span className="font-heading text-lg font-semibold text-text-primary">
                {service.title}
              </span>
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
      {/* Desktop: scroll-driven */}
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
