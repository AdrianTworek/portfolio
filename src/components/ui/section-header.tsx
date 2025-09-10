import type * as React from "react";

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-12">
      <h2 className="inline-block font-space-grotesk text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {children}
      </h2>
    </div>
  );
};
