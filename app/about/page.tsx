import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";
import Image from "next/image";
import type { Metadata } from "next";
import logoImage from "@/media/logo.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "E&W Software Agency, our story, philosophy, approach, and values. We build software that solves real problems for real businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              About E&W
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
              We build software
              <br />
              that matters.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed mt-2">
              Not software that looks good in a pitch deck. Software that works
              in the real world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Logo Visual */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden bg-bg-surface border border-border flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,83,22,0.08)_0%,transparent_60%)]" />
              <Image
                src={logoImage}
                alt="E&W Software Agency"
                width={180}
                height={180}
                className="relative z-10 opacity-80"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 space-y-16">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Our Story
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-4">
                E&W started with a simple observation: too many businesses are
                held back by bad software. Tools that don&apos;t fit. Systems
                that don&apos;t scale. Vendors who disappear after deployment.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                We set out to change that. To build a software agency that treats
                every project like its own product, with the same attention to
                design, engineering quality, and long-term thinking that the best
                tech companies apply internally.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Our Philosophy
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-4">
                We believe great software starts with understanding. Not with
                code. Before we write a single line, we invest the time to
                understand your business, your users, and the real challenges you
                face.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Then we design intentionally, build carefully, and stay
                accountable through launch and beyond. We don&apos;t do
                throwaway work.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Deep Understanding",
                    desc: "We ask the right questions before building the right solution.",
                  },
                  {
                    title: "Iterative Design",
                    desc: "We show you working software early and often, not just mockups.",
                  },
                  {
                    title: "Clean Engineering",
                    desc: "Maintainable, scalable code that your team can build on.",
                  },
                  {
                    title: "Long-Term Partnership",
                    desc: "We stay after launch. Software is a living product.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-border/50 bg-bg-surface/30
                               transition-all duration-300 hover:border-accent/30 group"
                  >
                    <h3 className="font-heading text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Our Values
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Quality over speed",
                    desc: "We'd rather build it right than build it fast. Cutting corners creates technical debt that always comes back.",
                  },
                  {
                    title: "Honesty over hype",
                    desc: "We'll tell you what we think, even if it means saying no. Trust is more important than a contract.",
                  },
                  {
                    title: "Outcomes over output",
                    desc: "Lines of code don't matter. What matters is whether the software solves the problem.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="flex gap-4 items-start p-4 rounded-lg
                               transition-colors duration-300 hover:bg-bg-surface/30"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h3 className="font-heading text-base font-semibold text-text-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-secondary border-t border-border/30">
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Want to work with us?
            </h2>
            <p className="text-text-muted mb-8">
              Tell us about your project. No pitch decks required.
            </p>
            <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
              Start a Conversation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
