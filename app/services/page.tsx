import { DetailedServices } from "@/components/sections/DetailedServices";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, mobile apps, custom software, automation & AI, and UI/UX design. Explore what E&W Software Agency can build for you.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              What We Build
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
              Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-text-muted text-base md:text-lg max-w-lg leading-relaxed mt-2">
              What we can build for you. Every service is backed by a clear
              process and a commitment to quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <DetailedServices />

      {/* CTA */}
      <section className="py-20 bg-bg-secondary border-t border-border/30">
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-text-muted mb-8">
              Tell us about your project. We&apos;ll recommend the right
              approach.
            </p>
            <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
              Chat With Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
