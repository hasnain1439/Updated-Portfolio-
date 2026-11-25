import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaRocket } from "react-icons/fa";
import { FiDownload, FiSend } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import profileImg from "../../assets/profile.webp";

const resume = "/resume.pdf";

const highlights = [
  {
    icon: FaUserGraduate,
    title: "BS Software Engineering",
    meta: "2022 – 2026",
    text: "The Islamia University of Bahawalpur. Intermediate in Computer Science, GC University Lahore (80%).",
  },
  {
    icon: FaAward,
    title: "CGPA 3.43 / 4.0",
    meta: "Academics",
    text: "Strong grounding in data structures, object-oriented programming and database management.",
  },
  {
    icon: FaRocket,
    title: "End-to-end ownership",
    meta: "How I work",
    text: "From schema design and secure APIs to responsive interfaces — I ship the whole feature.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#111111] transition-colors" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal}>
          <SectionTitle subtitle="About" title="Turning complex requirements into reliable products." />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch">
          {/* Photo */}
          {/* Photo card: stretches to the full height of the text column */}
          <motion.figure
            {...reveal}
            className="lg:col-span-4 max-w-sm lg:max-w-none w-full flex flex-col rounded-xl overflow-hidden border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900"
          >
            <div className="aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-[400px]">
              <img
                src={profileImg}
                alt="Hasnain Iqbal, Full Stack Developer"
                width="900"
                height="806"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <figcaption className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#111111] font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
              <span>Hasnain Iqbal</span>
              <span>Lahore · UTC+5</span>
            </figcaption>
          </motion.figure>

          {/* Narrative */}
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="lg:col-span-8 space-y-5">
            <p className="text-slate-700 dark:text-neutral-300 leading-relaxed text-lg sm:text-xl">
              I'm a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</strong> with 2+ years of
              hands-on experience. I currently work full-time at <strong className="text-slate-900 dark:text-white font-semibold">Metaviz</strong> and
              part-time at <strong className="text-slate-900 dark:text-white font-semibold">mCode Technology</strong>, building on earlier roles at
              Senew Tech and StacksMind.
            </p>
            <p className="text-slate-600 dark:text-neutral-400 leading-relaxed text-base sm:text-lg">
              I've engineered multi-tenant SaaS platforms, enterprise ERP systems and e-commerce solutions — designing
              databases on PostgreSQL and MongoDB, building secure Node.js and Express APIs, managing complex state with
              Redux Toolkit and Saga, and turning Figma designs into production-ready interfaces with React, Next.js and
              React Native.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <FiDownload size={15} />
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-slate-800 dark:text-neutral-200 px-5 py-3 rounded-lg text-sm font-semibold border border-slate-300 dark:border-neutral-700 hover:border-slate-900 dark:hover:border-neutral-400 transition-colors"
              >
                <FiSend size={15} />
                Get in touch
              </a>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 dark:bg-neutral-800 rounded-xl overflow-hidden border border-slate-200 dark:border-neutral-800 !mt-10">
              {highlights.map((h) => (
                <div key={h.title} className="bg-white dark:bg-[#111111] p-5">
                  <div className="flex items-center justify-between">
                    <h.icon className="text-primary dark:text-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
                      {h.meta}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
