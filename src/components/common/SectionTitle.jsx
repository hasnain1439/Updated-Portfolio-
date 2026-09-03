import React from "react";

export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start text-left"} mb-12`}>
      {subtitle && (
        <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary dark:text-primary-light border border-primary/20 mb-3 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <div className="flex items-center gap-2 mt-4">
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent-purple rounded-full"></span>
        <span className="w-2 h-1 bg-primary/60 rounded-full"></span>
        <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
      </div>
    </div>
  );
}