"use client";

import { motion } from "motion/react";
import { aboutData } from "@/content/data";
import { AnimatedSection } from "./animations/animated-section";
import { SectionHeader } from "./ui/section-header";

export const AboutMe = () => {
  const { intro, paragraphs, skills, values, currentFocus, funFacts } =
    aboutData;

  return (
    <AnimatedSection
      id="about"
      className="max-w-3xl min-h-screen mx-auto px-8 py-12 lg:py-16"
      animation="slideLeft"
    >
      <SectionHeader>&lt;about /&gt;</SectionHeader>
      <div className="space-y-10">
        {/* Intro Statement */}
        <motion.p
          className="text-xl lg:text-2xl font-medium text-text leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {intro}
        </motion.p>

        {/* Story Paragraphs */}
        <div className="space-y-4">
          {paragraphs.map((paragraph, idx) => (
            <motion.p
              key={paragraph}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
            <span className="text-secondary font-mono">{">"}</span>
            Tech Stack I enjoy and trust
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skillGroup, groupIdx) => (
              <motion.div
                key={skillGroup.category}
                className="p-4 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + groupIdx * 0.1 }}
              >
                <h4 className="text-sm font-semibold text-primary mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-background border border-muted/30 text-muted-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values / Philosophy */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
            <span className="text-primary font-mono">{"{"}</span>
            What I believe in
            <span className="text-primary font-mono">{"}"}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                className="group p-4 rounded-xl border border-secondary/20 hover:border-secondary/50 bg-gradient-to-br from-secondary/5 to-transparent transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{value.icon}</span>
                  <h4 className="font-semibold text-text group-hover:text-secondary transition-colors">
                    {value.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus Callout */}
        <motion.div
          className="relative p-6 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {/* Decorative gradient blob */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-accent">
                currently_focused_on
              </span>
            </div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {currentFocus}
            </p>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
            <span className="text-muted-foreground font-mono">{"/*"}</span>
            Quick facts
            <span className="text-muted-foreground font-mono">{"*/"}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={fact.text}
                className="flex items-center gap-3 p-3 rounded-lg border border-muted/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 + idx * 0.05 }}
              >
                <span className="text-lg shrink-0">{fact.icon}</span>
                <span className="text-sm text-muted-foreground">
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
