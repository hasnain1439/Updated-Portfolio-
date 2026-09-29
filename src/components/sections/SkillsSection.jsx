import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiPostman,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../common/SkillCard";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "backend", label: "Backend & Database" },
    { id: "tools", label: "Tools & Workflow" },
  ];

  const allSkills = [
    {
      id: 1,
      category: "frontend",
      skill: "React.js",
      description: "Developing modular, component-driven user interfaces with modern hooks, context, and state architectures.",
      icon: FaReact,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10",
      level: "Advanced",
    },
    {
      id: 2,
      category: "frontend",
      skill: "Next.js",
      description: "Building production-grade SSR & SSG full-stack web applications with App Router, server actions, and SEO optimization.",
      icon: SiNextdotjs,
      iconColor: "text-slate-900 dark:text-white",
      iconBg: "bg-slate-500/10",
      level: "Proficient",
    },
    {
      id: 3,
      category: "frontend",
      skill: "React Native",
      description: "Crafting cross-platform native mobile applications for iOS & Android with custom native components and navigation.",
      icon: FaReact,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-400/10",
      level: "Proficient",
    },
    {
      id: 4,
      category: "backend",
      skill: "Node.js",
      description: "Building scalable backend services, asynchronous event-driven architectures, and high-throughput RESTful APIs.",
      icon: FaNodeJs,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
      level: "Advanced",
    },
    {
      id: 5,
      category: "backend",
      skill: "Express.js",
      description: "Architecting modular API endpoints, middleware pipelines, JWT auth, request validation, and error handlers.",
      icon: SiExpress,
      iconColor: "text-slate-800 dark:text-slate-200",
      iconBg: "bg-slate-500/10",
      level: "Advanced",
    },
    {
      id: 6,
      category: "backend",
      skill: "PostgreSQL",
      description: "Designing relational database schemas, structured data models, complex queries, indexing, and connection pools.",
      icon: SiPostgresql,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      level: "Proficient",
    },
    {
      id: 7,
      category: "backend",
      skill: "MongoDB",
      description: "Designing flexible NoSQL database schemas, CRUD operations, indexing, and Mongoose ODM modeling.",
      icon: SiMongodb,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-600/10",
      level: "Proficient",
    },
    {
      id: 8,
      category: "frontend",
      skill: "Tailwind CSS",
      description: "Crafting modern, bespoke responsive layouts with utility-first CSS, custom design tokens, and fluid animations.",
      icon: SiTailwindcss,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-400/10",
      level: "Advanced",
    },
    {
      id: 9,
      category: "frontend",
      skill: "Bootstrap",
      description: "Developing rapid responsive grid systems, accessible UI components, and clean mobile-first web layouts.",
      icon: SiBootstrap,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-600/10",
      level: "Proficient",
    },
    {
      id: 10,
      category: "frontend",
      skill: "Redux Toolkit",
      description: "Managing predictable global state for large-scale applications with slices, custom hooks, and async thunks.",
      icon: SiRedux,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      level: "Proficient",
    },
    {
      id: 11,
      category: "frontend",
      skill: "JavaScript (ES6+) & TS",
      description: "Deep mastery of asynchronous JS, async/await, closures, interfaces, types, and modern language paradigms.",
      icon: FaJs,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-400/10",
      level: "Advanced",
    },
    {
      id: 12,
      category: "backend",
      skill: "REST APIs & JWT Auth",
      description: "Creating secure RESTful API architectures with JSON Web Tokens, role-based access control, and payload security.",
      icon: FaServer,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-500/10",
      level: "Advanced",
    },
    {
      id: 13,
      category: "tools",
      skill: "Git & GitHub",
      description: "Feature branch workflows, pull requests, merge conflict resolution, CI/CD hooks, and repository management.",
      icon: FaGitAlt,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      level: "Proficient",
    },
    {
      id: 14,
      category: "tools",
      skill: "Postman & API Testing",
      description: "Comprehensive endpoint testing, automated request collections, environment variables, and authentication simulations.",
      icon: SiPostman,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-600/10",
      level: "Proficient",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const additionalTags = [
    { name: "Next.js App Router", icon: SiNextdotjs },
    { name: "PostgreSQL & SQL", icon: SiPostgresql },
    { name: "Bootstrap 5", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Mongoose & NoSQL", icon: SiMongodb },
    { name: "JWT Authentication", icon: FaServer },
    { name: "GitHub Collaboration", icon: FaGithub },
    { name: "RESTful Endpoints", icon: FaDatabase },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg dark:bg-dark relative overflow-hidden transition-colors" id="skills">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="My Expertise" title="Technical Skills & Proficiencies" />
        </motion.div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:text-primary dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard
                  skill={item.skill}
                  description={item.description}
                  icon={item.icon}
                  iconColor={item.iconColor}
                  iconBg={item.iconBg}
                  level={item.level}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Tools Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-6">
            Complementary Tools & Libraries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {additionalTags.map((tag, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm hover:border-primary/50 hover:text-primary dark:hover:text-primary-light transition-all cursor-default"
              >
                <tag.icon className="text-primary text-base" />
                <span>{tag.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
