import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL_WITH_MESSAGE } from "@/lib/constants";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-300 mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L3 12m0 0l4-5m-4 5h18"
                />
              </svg>
              Back to Work
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              {project.categoryTag}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Visual */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border bg-bg-surface">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 space-y-20">
          {/* Overview */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Overview
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </ScrollReveal>

          {/* The Challenge */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                The Challenge
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* The Solution */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                The Solution
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* The Process */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                The Process
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {project.process}
              </p>
            </div>
          </ScrollReveal>

          {/* The Result */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                The Result
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {project.result}
              </p>
            </div>
          </ScrollReveal>

          {/* Technology */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Technology
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-text-muted border border-border rounded-md
                               transition-colors duration-300 hover:border-accent/40 hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="pt-8 border-t border-border/50">
              <p className="text-text-muted text-sm mb-4">
                Interested in building something similar?
              </p>
              <Button href={WHATSAPP_URL_WITH_MESSAGE} external>
                Start a Project
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-bg-secondary border-t border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-text-dim mb-4 block">
            Next Project
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 font-heading text-2xl md:text-3xl font-bold text-text-primary
                       hover:text-accent transition-colors duration-300 group"
          >
            {nextProject.title}
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
