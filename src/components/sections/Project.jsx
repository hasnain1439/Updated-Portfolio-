import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { FiGithub, FiArrowUpRight, FiLock, FiMousePointer } from "react-icons/fi";
import lmsImg from "../../assets/projectsImg/lms.webp";
import cryptoImg from "../../assets/projectsImg/crypto.webp";
import shoesWeb from "../../assets/projectsImg/shoesWeb.webp";
import clearQuick from "../../assets/projectsImg/clearQuick.webp";
import constructionSaas from "../../assets/projectsImg/constructionSaas.webp";
import programmingBridge from "../../assets/projectsImg/programmingBridge.webp";
import applyReach from "../../assets/projectsImg/applyReach.webp";
import erpPos from "../../assets/projectsImg/erpPos.webp";

const projectsData = [
  {
    id: 101,
    category: "professional",
    title: "Multi-Tenant Construction Management SaaS",
    description: "Web + desktop + offline mobile SaaS. Multi-tenant backend with Row-Level Security isolating each company's data, covering projects, procurement & stock, labour payroll, site cash and client billing — with a Next.js web app, an Electron desktop app for Windows & macOS, and an offline-first React Native (Expo) mobile app using encrypted SQLite and background sync.",
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Next.js", "Redux Toolkit", "React Native (Expo)", "Electron", "SQLite", "Swagger"],
    image: constructionSaas,
  },
  {
    id: 102,
    category: "professional",
    title: "Multi-Tenant SaaS E-Commerce Platform",
    status: "In Progress",
    description: "Enterprise-grade REST API with tenant resolution middleware for isolated storefronts and custom domains, coupon validation & per-user usage limits, transactional order processing, merchant analytics, Cloudinary uploads, JWT auth and Nodemailer password resets.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Zod", "Cloudinary", "Swagger UI"],
  },
  {
    id: 103,
    category: "professional",
    title: "Multi-Brand Enterprise ERP Ecosystem",
    status: "Ongoing",
    description: "Scalable multi-brand ERP deployed across major chains like MEG Burger and Pizza Online — React.js web dashboard and React Native mobile app optimizing multi-tenant order and inventory workflows.",
    tech: ["React.js", "React Native", "Redux Toolkit", "Redux Saga", "Axios", "Formik & Yup"],
    image: erpPos,
    scrollPreview: 2.5,
  },
  {
    id: 104,
    category: "professional",
    title: "Programming Bridge – Software & AI Agency",
    description: "Official web presence for a software agency offering web, mobile, and AI development — modular reusable components, dark/light themes, lead-generation pipelines, and Node.js/Express endpoints for secure inquiry handling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    image: programmingBridge,
    scrollPreview: 9,
  },
  {
    id: 105,
    category: "personal",
    title: "ApplyReach – Automated Outreach Platform",
    description: "Multi-user platform that schedules and sends personalised emails to professors and companies from each user's own Gmail (SMTP/IMAP), with daily send limits, randomised spacing, AES-GCM-encrypted credentials, CSV/XLSX bulk import, automatic reply detection, same-thread follow-ups, and an analytics dashboard (reply rate by week, template and country).",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL (Neon)", "Nodemailer", "ImapFlow", "Tailwind CSS"],
    image: applyReach,
    liveLink: "https://applyreach.vercel.app/",
  },
  {
    id: 1,
    category: "personal",
    title: "LMS Platform",
    description: "A comprehensive Learning Management System allowing educators and students to create courses, track progress, and manage interactive quizzes with secure authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: lmsImg,
    liveLink: "https://lms-ia21z5309-hasnainiqbal7860b-6751s-projects.vercel.app/",
    repoLink: "https://github.com/hasnain1439/LMS-UI.git",
  },
  {
    id: 3,
    category: "personal",
    title: "Crypto Hunter",
    description: "Real-time cryptocurrency analytics tracker displaying live pricing charts, market capitalization, trending tokens, and coin detail views via CoinGecko API.",
    tech: ["React", "Context API", "Chart.js", "Axios", "Material UI"],
    image: cryptoImg,
    liveLink: "https://crypto-app-tau-two.vercel.app/",
    repoLink: "https://github.com/hasnain1439/crypto-app.git",
  },
  {
    id: 4,
    category: "personal",
    title: "Shoes Store E-Commerce",
    description: "A sleek footwear storefront featuring catalog filtering, product spotlight modals, responsive cart management, and fluid motion animations.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    image: shoesWeb,
    liveLink: "https://shoes-web-five.vercel.app/",
    repoLink: "https://github.com/hasnain1439/shoes-web.git",
  },
  {
    id: 5,
    category: "personal",
    title: "Clear Quick Landing Page",
    description: "Professional business web presence for cleaning services, featuring interactive service tiers, testimonial showcases, and booking contact forms.",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    image: clearQuick,
    liveLink: "https://quick-start-omega.vercel.app/",
    repoLink: "https://github.com/hasnain1439/quick_start.git",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "professional", label: "SaaS & Enterprise" },
    { id: "personal", label: "Personal Projects" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-light-bg dark:bg-dark transition-colors" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="Projects"
            title="Featured Projects & Applications"
            description="Client platforms I've built at work, and products I've shipped on my own."
          />
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${
                activeTab === cat.id
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                  : "bg-transparent text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
              <span className="ml-2 font-mono text-xs opacity-60">
                {cat.id === "all" ? projectsData.length : projectsData.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isClient = project.category === "professional";
              const visibleTech = project.tech.slice(0, 5);
              const extraTech = project.tech.length - visibleTech.length;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                  className="group flex flex-col rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden hover:border-slate-400 dark:hover:border-neutral-600 transition-colors"
                >
                  {/* Preview */}
                  <div className="relative h-52 overflow-hidden border-b border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900">
                    {project.image && project.scrollPreview ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          decoding="async"
                          style={{ transitionDuration: `${project.scrollPreview}s` }}
                          className="absolute inset-x-0 top-0 w-full h-auto transition-transform ease-in-out group-hover:-translate-y-[calc(100%-13rem)]"
                        />
                        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-neutral-950/80 text-neutral-200 font-mono text-xs uppercase tracking-[0.1em] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                          <FiMousePointer size={10} />
                          Hover to scroll
                        </span>
                      </>
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center hero-grid-static">
                        <FiLock className="text-slate-400 dark:text-neutral-500" size={22} />
                        <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
                          Confidential · Preview unavailable
                        </span>
                      </div>
                    )}

                    {project.status && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-neutral-950/80 text-emerald-400 font-mono text-xs uppercase tracking-[0.1em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
                      {isClient ? "Client project" : "Personal project"}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-neutral-400 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {visibleTech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md border border-slate-200 dark:border-neutral-700 font-mono text-xs text-slate-600 dark:text-neutral-400"
                        >
                          {t}
                        </span>
                      ))}
                      {extraTech > 0 && (
                        <span className="px-2 py-0.5 font-mono text-xs text-slate-400 dark:text-neutral-500">
                          +{extraTech}
                        </span>
                      )}
                    </div>

                    {/* Footer links */}
                    <div className="mt-auto pt-5">
                      <div className="pt-4 border-t border-slate-200 dark:border-neutral-800 flex items-center gap-5 font-mono text-[13px] uppercase tracking-[0.12em]">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-primary dark:text-white hover:underline underline-offset-4"
                          >
                            Live demo <FiArrowUpRight size={13} />
                          </a>
                        )}
                        {project.repoLink && (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white"
                          >
                            <FiGithub size={13} /> Source
                          </a>
                        )}
                        {!project.liveLink && !project.repoLink && (
                          <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-neutral-400">
                            <FiLock size={12} /> Under NDA
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <div className="mt-12">
          <a
            href="https://github.com/hasnain1439"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 hover:border-slate-900 dark:hover:border-neutral-400 text-slate-800 dark:text-neutral-200 text-sm font-medium transition-colors"
          >
            <FiGithub size={16} />
            More on GitHub
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
