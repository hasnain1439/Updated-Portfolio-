import React from "react";

// Left-aligned editorial heading: mono eyebrow, large tight title, optional lead text.
export default function SectionTitle({ title, subtitle, description, center = false }) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start text-left"} mb-12 max-w-3xl ${center ? "mx-auto" : ""}`}>
      {subtitle && (
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary dark:text-neutral-400 mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
