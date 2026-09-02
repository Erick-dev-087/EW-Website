"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, projectCategories } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
              Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-text-muted text-base md:text-lg max-w-lg leading-relaxed mt-2">
              Selected projects and digital products. Each one built to solve a
              real problem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300
                    ${
                      activeFilter === cat.value
                        ? "border-accent text-accent bg-accent/5"
                        : "border-border text-text-muted hover:border-text-dim hover:text-text-primary"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} index={0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
