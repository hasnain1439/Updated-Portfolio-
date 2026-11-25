import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiElectron,
  SiJavascript,
} from "react-icons/si";

const STACK = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Native", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Electron", icon: SiElectron },
  { name: "Git", icon: FaGitAlt },
];

// Slow, infinite strip of the stack (list rendered twice for a seamless loop).
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="border-y border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-neutral-400">
          Stack I ship with
        </p>
        <div className="marquee-mask relative overflow-hidden flex-1">
          <ul className="marquee-track flex w-max gap-10">
            {[...STACK, ...STACK].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                aria-hidden={i >= STACK.length}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                <t.icon className="text-base" />
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
