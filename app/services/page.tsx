import { services } from "@/lib/data";
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
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start scroll-mt-24 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3 block">
                    {service.number} — {service.title}
                  </span>

                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-text-muted text-base leading-[1.85] mb-8">
                    {service.description}
                  </p>

                  {/* For Who */}
                  <div className="mb-6">
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

                {/* Features + Workflow */}
                <div
                  className={`space-y-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* What We Provide */}
                  <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8">
                    <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-4">
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
                  <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8">
                    <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary mb-4">
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
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="mt-20 md:mt-28 border-t border-border/30" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

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
