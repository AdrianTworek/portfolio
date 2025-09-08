"use client";

import { AnimatedSection } from "./animations/animated-section";
import { SectionHeader } from "./ui/section-header";

export const Projects = () => {
  return (
    <AnimatedSection
      id="projects"
      className="max-w-3xl min-h-screen mx-auto px-8 py-12 lg:py-16"
      animation="slideLeft"
    >
      <SectionHeader>&lt;projects /&gt;</SectionHeader>
    </AnimatedSection>
  );
};
