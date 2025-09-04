import * as React from 'react';
import { experienceData } from '@/content/data';
import { SectionHeader } from './ui/section-header';
import { cn } from '@/lib/utils';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-3xl min-h-screen mx-auto px-8 py-12 lg:py-16"
    >
      <SectionHeader>&lt;experience /&gt;</SectionHeader>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

        {/* Experience items */}
        <div className="max-w-3xl flex flex-col gap-12 ml-12">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative border border-transparent hover:border-primary/50 rounded-xl transition-all duration-500 ease-in-out"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(3rem+0.33rem)] top-0 z-10 flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"></div>
                <div className="absolute -left-1.5 -top-1.25 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content card */}
              <div className="flex-1 border border-primary/20 rounded-xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 ease-in-out">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <div className="flex flex-col justify-center gap-1.5">
                      <h3 className="text-xl font-bold text-text mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-primary font-medium mt-2">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex shrink-0 justify-end items-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>

                {item.entries.map((entry, idx) => (
                  <React.Fragment key={entry.id}>
                    {/* Description */}
                    <div className="flex flex-col gap-2">
                      {entry.descriptions.map((desc) => (
                        <p
                          key={desc}
                          className="text-muted-foreground font-semibold"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <div className="flex flex-col gap-2 mt-8">
                      <p className="text-muted-foreground font-medium">
                        🔎 Responsibilities:
                      </p>
                      <ul className="flex flex-col gap-2 list-disc pl-4 text-sm">
                        {entry.responsibilities.map((resp) => (
                          <li key={resp} className="text-muted-foreground">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div
                      className={cn(
                        'flex flex-wrap gap-2 my-8',
                        idx !== item.entries.length - 1
                          ? 'border-b border-accent/20 pb-10'
                          : 'border-0'
                      )}
                    >
                      {entry.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
