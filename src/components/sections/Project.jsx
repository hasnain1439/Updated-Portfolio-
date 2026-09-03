import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import lmsImg from "../../assets/projectsImg/lms.png";
import cryptoImg from "../../assets/projectsImg/image.png";
import taskMangementImg from "../../assets/projectsImg/taskMangement.png";
import todoList from "../../assets/projectsImg/todoList.png";
import stopWatch from "../../assets/projectsImg/stopWatch.png";
import shoesWeb from "../../assets/projectsImg/shoesWeb.png";
import clearQuick from "../../assets/projectsImg/clearQuick.png";
import calculator from "../../assets/projectsImg/calculator.png";
import animals from "../../assets/projectsImg/animals.png";

const projectsData = [
  {
    id: 1,
    category: "fullstack",
    title: "LMS Platform",
    description: "A comprehensive Learning Management System allowing educators and students to create courses, track progress, and manage interactive quizzes with secure authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: lmsImg,
    featured: true,
    liveLink: "https://lms-ia21z5309-hasnainiqbal7860b-6751s-projects.vercel.app/",
    repoLink: "https://github.com/hasnain1439/LMS-UI.git",
  },
  {
    id: 2,
    category: "fullstack",
    title: "Task Management System",
    description: "A modern workflow and task organization platform with dynamic status columns, priority markers, local persistence, and clean responsive design.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Local Storage"],
    image: taskMangementImg,
    featured: true,
    liveLink: "https://todo-list-omega-neon-61.vercel.app/",
    repoLink: "https://github.com/hasnain1439/TodoList-.git",
  },
  {
    id: 3,
    category: "react",
    title: "Crypto Hunter",
    description: "Real-time cryptocurrency analytics tracker displaying live pricing charts, market capitalization, trending tokens, and coin detail views via CoinGecko API.",
    tech: ["React", "Context API", "Chart.js", "Axios", "Material UI"],
    image: cryptoImg,
    featured: true,
    liveLink: "https://crypto-app-tau-two.vercel.app/",
    repoLink: "https://github.com/hasnain1439/crypto-app.git",
  },
  {
    id: 4,
    category: "frontend",
    title: "Shoes Store E-Commerce",
    description: "A sleek footwear storefront featuring catalog filtering, product spotlight modals, responsive cart management, and fluid motion animations.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    image: shoesWeb,
    liveLink: "https://shoes-web-five.vercel.app/",
    repoLink: "https://github.com/hasnain1439/shoes-web.git",
  },
  {
    id: 5,
    category: "frontend",
    title: "Clear Quick Landing Page",
    description: "Professional business web presence for cleaning services, featuring interactive service tiers, testimonial showcases, and booking contact forms.",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    image: clearQuick,
    liveLink: "https://quick-start-omega.vercel.app/",
    repoLink: "https://github.com/hasnain1439/quick_start.git",
  },
  {
    id: 6,
    category: "react",
    title: "Productive Todo List",
    description: "Productivity companion for task categorization, completion tracking, filtered views (active/completed), and browser persistent storage.",
    tech: ["React", "Tailwind CSS", "Local Storage", "JavaScript"],
    image: todoList,
    liveLink: "https://todo-list-omega-neon-61.vercel.app/",
    repoLink: "https://github.com/hasnain1439/TodoList-.git",
  },
  {
    id: 7,
    category: "react",
    title: "Precision Stopwatch",
    description: "High-precision timer tool featuring lap timing, pause, split calculations, and smooth millisecond tick animations with custom CSS.",
    tech: ["React", "Custom Hooks", "CSS3", "JavaScript"],
    image: stopWatch,
    liveLink: "https://stop-watch-tan-eight.vercel.app/",
    repoLink: "https://github.com/hasnain1439/stop-watch.git",
  },
  {
    id: 8,
    category: "react",
    title: "Interactive Calculator",
    description: "Responsive mathematical calculator with clean CSS grid layout, keyboard support, history calculations, and error boundary handling.",
    tech: ["React", "JavaScript", "CSS Grid"],
    image: calculator,
    liveLink: "https://calculator-pi-seven-84.vercel.app/",
    repoLink: "https://github.com/hasnain1439/calculator.git",
  },
  {
    id: 9,
    category: "react",
    title: "PetsM4 Breed Explorer",
    description: "Breed discovery gallery with dynamic search, filter tags, responsive image grids, and detailed attribute displays via REST API.",
    tech: ["React", "REST API", "Tailwind CSS"],
    image: animals,
    liveLink: "https://animals-two-liart.vercel.app/",
    repoLink: "https://github.com/hasnain1439/animals.git",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack & MERN" },
    { id: "react", label: "React Apps" },
    { id: "frontend", label: "Frontend & UI" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-light-bg dark:bg-dark transition-colors relative overflow-hidden" id="projects">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Portfolio" title="Featured Projects & Applications" />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:text-primary dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 dark:shadow-black/30 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Image Container with Hover Actions */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-primary text-white rounded-full hover:scale-110 shadow-lg transition-transform"
                      title="View Live Application"
                    >
                      <FiExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-white text-slate-900 rounded-full hover:scale-110 shadow-lg transition-transform"
                      title="View Source Code on GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-primary text-white shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded-xl shadow-md shadow-primary/20 transition-all cursor-pointer"
                    >
                      <FiExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                    >
                      <FiGithub size={14} />
                      <span>Code</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repository CTA */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/hasnain1439"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-md hover:border-primary hover:shadow-lg transition-all"
          >
            <FiFolder className="text-primary text-xl" />
            <span>Explore More Repositories on GitHub &rarr;</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}