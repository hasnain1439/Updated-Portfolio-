import React from "react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import IconWrapper from "../common/IconWrapper";
import Terminal from "../common/Terminal";

const resume = "/resume.pdf";

const stats = [
  { label: "Years of experience", value: "2+" },
  { label: "Companies", value: "4" },
  { label: "Enterprise SaaS & ERP builds", value: "3" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-light-bg dark:bg-dark"
    >
      {/* Subtle grid backdrop, faded at the edges */}
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: intro */}
          <div className="lg:col-span-7 flex flex-col space-y-7">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-600 dark:text-neutral-300">
                Available · Lahore, PK · Remote & On-site
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold font-heading text-slate-900 dark:text-white tracking-tighter leading-[1.02]">
                Hasnain Iqbal
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-neutral-300 tracking-tight">
                Full Stack Developer building{" "}
                <span className="text-primary dark:text-white">SaaS, ERP & e-commerce</span>{" "}
                products for web and mobile.
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.16)}
              className="text-slate-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              2+ years shipping production apps with React, Next.js, React Native and Node.js — from
              multi-tenant backends on PostgreSQL and MongoDB to pixel-perfect interfaces.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-5 py-3 bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
              >
                View projects
                <FiArrowUpRight size={16} />
              </button>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white dark:bg-transparent text-slate-800 dark:text-neutral-200 text-sm font-semibold rounded-lg border border-slate-300 dark:border-neutral-700 hover:border-slate-900 dark:hover:border-neutral-400 transition-colors flex items-center gap-2"
              >
                <FiDownload size={16} />
                Resume
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <IconWrapper iconName={LuGithub} link="https://github.com/hasnain1439" tooltip="GitHub" label="GitHub" />
                <IconWrapper iconName={FaLinkedinIn} link="https://www.linkedin.com/in/hasnain-iqbal-73043326a" tooltip="LinkedIn" label="LinkedIn" />
                <IconWrapper iconName={MdOutlineMailOutline} link="mailto:hasnainiqbal7860a@gmail.com" tooltip="Email" label="Email" />
                <IconWrapper iconName={FaWhatsapp} link="https://wa.me/923204698158" tooltip="WhatsApp" label="WhatsApp" />
              </div>
            </motion.div>

            <motion.dl
              {...fadeUp(0.32)}
              className="grid grid-cols-3 max-w-xl pt-7 border-t border-slate-200 dark:border-neutral-800"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="pr-4">
                  <dd className="text-3xl sm:text-4xl font-semibold font-heading tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: live terminal */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
