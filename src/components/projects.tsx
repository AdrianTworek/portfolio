"use client";

import { ExternalLink, FileText, Github, Package } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { projectsData } from "@/content/data";
import { AnimatedSection } from "./animations/animated-section";
import { SectionHeader } from "./ui/section-header";

const linkIcons = {
  github: Github,
  live: ExternalLink,
  npm: Package,
  docs: FileText,
} as const;

const linkLabels = {
  github: "Source",
  live: "Live Demo",
  npm: "npm",
  docs: "Docs",
} as const;

const statusColors = {
  active: "bg-green-500",
  wip: "bg-yellow-500",
  archived: "bg-muted",
} as const;

const statusLabels = {
  active: "Active",
  wip: "In Progress",
  archived: "Archived",
} as const;

export const Projects = () => {
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (b.year ?? "0").localeCompare(a.year ?? "0");
  });

  return (
    <AnimatedSection
      id="projects"
      className="max-w-3xl min-h-screen mx-auto px-8 py-12 lg:py-16"
      animation="slideLeft"
    >
      <SectionHeader>&lt;projects /&gt;</SectionHeader>
      <div className="space-y-12">
        {sortedProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="group relative p-6 rounded-xl shadow-lg border border-primary/50 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute -top-3 left-[50%] -translate-x-1/2">
                <span className="px-2 py-0.5 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            )}

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.status && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${statusColors[project.status]}`}
                      />
                      <span className="text-xs text-muted-foreground">
                        {statusLabels[project.status]}
                      </span>
                    </div>
                  )}
                </div>
                {project.year && (
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                {project.links.map((link) => {
                  const Icon = linkIcons[link.type];
                  return (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground border border-muted/30 rounded-lg hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                      aria-label={`${linkLabels[link.type]} for ${project.title}`}
                      title={linkLabels[link.type]}
                    >
                      <Icon size={14} />
                      <span className="hidden sm:inline">
                        {linkLabels[link.type]}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Image */}
            {project.image && (
              <div className="relative mb-4 sm:mx-6 mt-6 rounded-t-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top"
                  width={800}
                  height={400}
                />
              </div>
            )}

            {/* Description */}
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Long description */}
            {project.longDescription && (
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 pl-3 border-l-2 border-secondary/30 italic">
                {project.longDescription}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Call to action for more projects */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://github.com/AdrianTworek?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={16} />
          View more on GitHub
          <ExternalLink size={12} />
        </a>
      </motion.div>
    </AnimatedSection>
  );
};
