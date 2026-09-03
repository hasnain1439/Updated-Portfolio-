import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaDownload, FaCode, FaRocket } from "react-icons/fa";
import { FiExternalLink, FiSend } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import resume from "../../assets/Doc/resume.pdf";

export default function AboutSection() {
  const techStack = [
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "RESTful APIs",
    "Git & GitHub",
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0E1322] transition-colors relative overflow-hidden" id="about">
      {/* Background Subtle Gradient */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="About Me" title="Passion for Code & Problem Solving" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Narrative & Stack */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 dark:text-white">
                Architecting Modern Web Solutions with the <span className="text-primary">MERN Stack</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
                I am Hasnain Iqbal, a dedicated <strong>MERN Stack & React Native Developer</strong> focused on transforming complex requirements into reliable, responsive digital products. Currently working at <strong>Mcode Technology</strong> as a <strong>React & React Native Developer</strong> and building on professional internship experience at <strong>Senew Tech</strong>, I build applications with high performance, clean structure, and seamless usability.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
                I specialize in developing complete full-stack web solutions—from designing optimized MongoDB schemas and robust Node.js REST APIs with secure authentication, to crafting interactive, state-driven React interfaces with Tailwind CSS.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Core Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/25 transition-all cursor-pointer"
              >
                <FaDownload size={15} />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-3.5 rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer"
              >
                <FiSend size={15} />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Experience Cards & Academic Credentials */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Card 1: Education */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:text-primary-light flex items-center justify-center shrink-0 text-xl shadow-inner">
                <FaUserGraduate />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-white">
                    Bachelor's Degree
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Graduation 2026
                  </span>
                </div>
                <p className="text-primary dark:text-primary-light font-medium text-sm mt-0.5">
                  Computer Science (BSCS)
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                  Focusing on Web Technologies, Software Architecture, and Distributed Systems.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Academic Performance */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary dark:text-secondary-light flex items-center justify-center shrink-0 text-xl shadow-inner">
                <FaAward />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-white">
                    Academic Standing
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                    CGPA 3.43 / 4.0
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mt-0.5">
                  Consistently Strong Performance
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                  Strong grasp of Data Structures, Object Oriented Programming, and Database Management.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Engineering Philosophy */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 text-accent-purple flex items-center justify-center shrink-0 text-xl shadow-inner">
                <FaRocket />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-white">
                  Continuous Growth & Quality
                </h4>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mt-0.5">
                  Modern Clean Code Standards
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                  Writing maintainable, well-documented code with an emphasis on performance and responsiveness.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}