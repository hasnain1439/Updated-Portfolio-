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
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 2,
      category: "frontend",
      skill: "Next.js",
      description: "Building production-grade SSR & SSG full-stack web applications with App Router, server actions, and SEO optimization.",
      icon: SiNextdotjs,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 3,
      category: "frontend",
      skill: "React Native",
      description: "Crafting cross-platform native mobile applications for iOS & Android with custom native components and navigation.",
      icon: FaReact,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 4,
      category: "backend",
      skill: "Node.js",
      description: "Building scalable backend services, asynchronous event-driven architectures, and high-throughput RESTful APIs.",
      icon: FaNodeJs,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 5,
      category: "backend",
      skill: "Express.js",
      description: "Architecting modular API endpoints, middleware pipelines, JWT auth, request validation, and error handlers.",
      icon: SiExpress,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 6,
      category: "backend",
      skill: "PostgreSQL",
      description: "Designing relational database schemas, structured data models, complex queries, indexing, and connection pools.",
      icon: SiPostgresql,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 7,
      category: "backend",
      skill: "MongoDB",
      description: "Designing flexible NoSQL database schemas, CRUD operations, indexing, and Mongoose ODM modeling.",
      icon: SiMongodb,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 8,
      category: "frontend",
      skill: "Tailwind CSS",
      description: "Crafting modern, bespoke responsive layouts with utility-first CSS, custom design tokens, and fluid animations.",
      icon: SiTailwindcss,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 9,
      category: "frontend",
      skill: "Bootstrap",
      description: "Developing rapid responsive grid systems, accessible UI components, and clean mobile-first web layouts.",
      icon: SiBootstrap,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 10,
      category: "frontend",
      skill: "Redux Toolkit & Saga",
      description: "Managing predictable global state with Redux Toolkit slices and complex asynchronous side-effects with Redux Saga across web and mobile.",
      icon: SiRedux,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 11,
      category: "frontend",
      skill: "JavaScript (ES6+) & TS",
      description: "Deep mastery of asynchronous JS, async/await, closures, interfaces, types, and modern language paradigms.",
      icon: FaJs,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 12,
      category: "backend",
      skill: "REST APIs & JWT Auth",
      description: "Creating secure RESTful API architectures with JSON Web Tokens, role-based access control, and payload security.",
      icon: FaServer,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Advanced",
    },
    {
      id: 13,
      category: "tools",
      skill: "Git, GitHub & GitLab",
      description: "Feature branch workflows, pull requests and merge requests, merge conflict resolution, and repository management.",
      icon: FaGitAlt,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
    {
      id: 14,
      category: "tools",
      skill: "Postman & API Testing",
      description: "Comprehensive endpoint testing, automated request collections, environment variables, and authentication simulations.",
      icon: SiPostman,
      iconColor: "text-primary dark:text-white",
      iconBg: "bg-primary/10 dark:bg-white/5",
      level: "Proficient",
    },
  ];

  const categoryLabel = { frontend: "Frontend", backend: "Backend", tools: "Tooling" };

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const additionalTags = [
    { name: "Next.js SSR & SSG", icon: SiNextdotjs },
    { name: "PostgreSQL & SQL", icon: SiPostgresql },
    { name: "Prisma ORM", icon: FaDatabase },
    { name: "Mongoose & NoSQL", icon: SiMongodb },
    { name: "Axios", icon: FaServer },
    { name: "Formik & Yup", icon: FaJs },
    { name: "Zod Validation", icon: SiTypescript },
    { name: "JWT Authentication", icon: FaServer },
    { name: "Swagger / OpenAPI", icon: FaServer },
    { name: "Context API", icon: FaReact },
    { name: "Reactstrap & Bootstrap 5", icon: FaBootstrap },
    { name: "BigCommerce", icon: FaDatabase },
    { name: "Electron (Desktop Apps)", icon: FaReact },
    { name: "Nodemailer & IMAP", icon: FaServer },
    { name: "GitHub Collaboration", icon: FaGithub },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg dark:bg-dark relative overflow-hidden transition-colors" id="skills">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Skills" title="Technical Skills & Proficiencies" description="The tools I reach for to take a product from schema to screen." />
        </motion.div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                  : "bg-transparent text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200 dark:border-neutral-800"
        >
          <AnimatePresence>
            {filteredSkills.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <SkillCard
                  skill={item.skill}
                  description={item.description}
                  icon={item.icon}
                  category={categoryLabel[item.category]}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Tools Section */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-neutral-400 mb-5">
            Complementary Tools & Libraries
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {additionalTags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 text-[13px] hover:border-slate-400 dark:hover:border-neutral-600 transition-colors"
              >
                <tag.icon className="text-slate-400 dark:text-neutral-500 text-sm" />
                {tag.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
