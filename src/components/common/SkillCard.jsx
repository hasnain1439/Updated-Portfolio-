import React from "react";

// One cell of the skills grid: hairline borders instead of shadows.
export default function SkillCard({ skill, description, category, icon: Icon }) {
  return (
    <div className="group h-full p-6 border-r border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-dark hover:bg-slate-50 dark:hover:bg-neutral-900/60 transition-colors">
      <div className="flex items-center justify-between">
        {Icon && (
          <Icon className="text-xl text-slate-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-white transition-colors" />
        )}
        {category && (
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400 dark:text-neutral-500">
            {category}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-base font-semibold tracking-tight text-slate-900 dark:text-white">{skill}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}
