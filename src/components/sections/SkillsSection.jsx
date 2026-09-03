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
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiPostman,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "../common/SkillCard";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & Database" },
    { id: "tools", label: "Tools & Workflow" },
  ];

  const allSkills = [
    {
      id: 1,
      category: "frontend",
      skill: "React.js",
      description: "Developing dynamic, component-driven user interfaces with modern React hooks and state architectures.",
      icon: FaReact,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10",
      level: "Proficient",
    },
    {
      id: 2,
      category: "backend",
      skill: "Node.js",
      description: "Building scalable backend services, asynchronous event-driven architectures, and RESTful APIs.",
      icon: FaNodeJs,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
      level: "Proficient",
    },
    {
      id: 3,
      category: "backend",
      skill: "Express.js",
      description: "Architecting modular API endpoints, middleware pipelines, error handlers, and authentication systems.",
      icon: SiExpress,
      iconColor: "text-slate-800 dark:text-slate-200",
      iconBg: "bg-slate-500/10",
      level: "Proficient",
    },
    {
      id: 4,
      category: "backend",
      skill: "MongoDB",
      description: "Designing flexible NoSQL database schemas, CRUD operations, indexing, and Mongoose ODM modeling.",
      icon: SiMongodb,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-600/10",
      level: "Proficient",
    },
    {
      id: 5,
      category: "frontend",
      skill: "Tailwind CSS",
      description: "Crafting modern, bespoke responsive layouts with utility-first CSS and fluid animations.",
      icon: SiTailwindcss,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-400/10",
      level: "Advanced",
    },
    {
      id: 6,
      category: "frontend",
      skill: "TypeScript",
      description: "Adding static type safety, interfaces, and autocompletion to scale JavaScript web applications.",
      icon: SiTypescript,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      level: "Intermediate",
    },
    {
      id: 7,
      category: "frontend",
      skill: "Redux Toolkit",
      description: "Managing predictable global state for large-scale applications with slices and async thunks.",
      icon: SiRedux,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      level: "Proficient",
    },
    {
      id: 8,
      category: "frontend",
      skill: "JavaScript (ES6+)",
      description: "Deep understanding of closures, asynchronous JS (async/await), event loops, and DOM manipulation.",
      icon: FaJs,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-400/10",
      level: "Advanced",
    },
    {
      id: 9,
      category: "backend",
      skill: "SQL / Relational DBs",
      description: "Relational schema design, table normalization, complex JOIN queries, and structured data handling.",
      icon: SiMysql,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600/10",
      level: "Intermediate",
    },
    {
      id: 10,
      category: "tools",
      skill: "Git & Version Control",
      description: "Feature branch workflows, pull requests, merge conflict resolution, and collaborative repo management.",
      icon: FaGitAlt,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      level: "Proficient",
    },
    {
      id: 11,
      category: "tools",
      skill: "Postman & API Testing",
      description: "Endpoint testing, environment variables, authentication header simulation, and payload verification.",
      icon: SiPostman,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-600/10",
      level: "Proficient",
    },
    {
      id: 12,
      category: "frontend",
      skill: "HTML5 & Semantic CSS",
      description: "Accessible, SEO-friendly HTML structures with CSS Grid, Flexbox, and responsive design systems.",
      icon: SiHtml5,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      level: "Advanced",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const additionalTags = [
    { name: "GitHub", icon: FaGithub },
    { name: "REST APIs", icon: FaDatabase },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Framer Motion", icon: FaReact },
    { name: "CSS Grid & Flexbox", icon: SiCss3 },
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
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
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
