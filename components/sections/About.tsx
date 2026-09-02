import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          {/* Label */}
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-8">
              About E&W
            </span>
          </ScrollReveal>

          {/* Strong Statement */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-12">
              Good software isn&apos;t just
              <br />
              about code.
            </h2>
          </ScrollReveal>

          {/* Philosophy */}
          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10">
              It&apos;s about understanding the problem, designing the right
              solution, and building something people actually want to use. We
              believe great software starts with listening, understanding your
              business, your users, and the real challenges you face.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-16">
              E&W exists because we saw too many businesses stuck with tools that
              don&apos;t work, software that doesn&apos;t scale, and technology
              partners who disappear after deployment. We do things differently.
            </p>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal delay={0.35}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Intentional",
                  desc: "Every decision serves a purpose. No bloat, no unnecessary complexity.",
                },
                {
                  title: "Collaborative",
                  desc: "You know your business. We know software. Together we build right.",
                },
                {
                  title: "Reliable",
                  desc: "We ship on time, communicate clearly, and stay until it works.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="group p-5 rounded-xl border border-border/50 transition-all duration-300
                             hover:border-accent/30 hover:bg-bg-surface/30"
                >
                  <h4 className="font-heading text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
