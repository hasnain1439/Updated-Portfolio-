import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, description, iconColor = "text-primary", iconBg = "bg-primary/10", icon: Icon, level }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-slate-850 dark:bg-[#131B2E] border border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-black/30 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col justify-between"
    >
      {/* Top Accent Gradient on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-start justify-between mb-4">
          {/* Icon Box */}
          <div className={`w-14 h-14 rounded-2xl ${iconBg} ${iconColor} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300`}>
            {Icon && <Icon />}
          </div>

          {level && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              {level}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {skill}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span className="group-hover:text-primary font-medium transition-colors">Learn more &rarr;</span>
      </div>
    </motion.div>
  );
}