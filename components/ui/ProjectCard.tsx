"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block bg-bg-surface border border-border rounded-xl overflow-hidden
                   transition-all duration-400
                   hover:border-accent/50
                   hover:shadow-[0_8px_40px_rgba(214,83,22,0.08)]
                   hover:-translate-y-1"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:translate-y-[-2px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Category Tag */}
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2 block">
            {project.categoryTag}
          </span>

          {/* Title */}
          <h3 className="font-heading text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* View Case Study Link */}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-text-muted group-hover:text-accent transition-colors duration-300">
            View Case Study
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
