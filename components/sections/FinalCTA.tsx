import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle orange glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative bg-bg-surface/50 border border-border/50 rounded-2xl px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <ScrollReveal direction="none">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              Ready to move forward?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-4">
              Tell us where you want your
              <br />
              business to go.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-heading text-lg md:text-xl text-text-muted mb-3">
              You don&apos;t need to know exactly what you need.
            </p>
            <p className="text-text-dim text-base mb-10">
              We&apos;ll help you figure out what to build.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Button
              href={WHATSAPP_URL_WITH_MESSAGE}
              external
              className="!px-8 !py-3.5 !text-base"
            >
              Start a Conversation
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
