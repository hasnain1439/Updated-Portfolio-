import React from "react";
import { motion } from "framer-motion";

export default function IconWrapper({ iconName: Icon, link, tooltip, label }) {
  const isLink = Boolean(link);
  const isMail = isLink && (link.startsWith("mailto:") || link.includes("mail.google.com"));

  const linkProps = isLink
    ? {
        href: link,
        target: isMail ? undefined : "_blank",
        rel: isMail ? undefined : "noopener noreferrer",
      }
    : {};

  return (
    <motion.a
      {...linkProps}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label || tooltip || "Social Link"}
      title={tooltip || label}
      className="relative group p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-md shadow-slate-900/5 dark:shadow-black/20 hover:border-primary/60 hover:text-primary dark:hover:text-primary-light hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-center backdrop-blur-sm"
    >
      <Icon className="text-xl transition-colors duration-300 group-hover:scale-110" />
      {tooltip && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
          {tooltip}
        </span>
      )}
    </motion.a>
  );
}