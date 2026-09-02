import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="selected-work"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            label="Selected Work"
            title="Digital products we're proud of."
            description="Real projects. Real results. Each one built to solve a specific problem and deliver measurable impact."
          />
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={0.4} className="mt-12 flex justify-center">
          <Button href="/work" variant="secondary">
            View All Projects
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
