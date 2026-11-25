import React from "react";
import { motion } from "framer-motion";

export default function IconWrapper({ iconName: Icon, link, tooltip, label }) {
  const isLink = Boolean(link);
  const isMail = isLink && link.startsWith("mailto:");

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
      whileTap={{ scale: 0.95 }}
      aria-label={label || tooltip || "Social Link"}
      title={tooltip || label}
      className="relative group p-2.5 rounded-lg bg-white dark:bg-transparent text-slate-600 dark:text-neutral-400 border border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 cursor-pointer flex items-center justify-center"
    >
      <Icon className="text-lg" />
      {tooltip && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-xs font-medium bg-slate-900 text-white dark:bg-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
          {tooltip}
        </span>
      )}
    </motion.a>
  );
}