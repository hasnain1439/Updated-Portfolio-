import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern (React)",
      company: "Senew Tech",
      date: "29 July – 29 November",
      badge: "Internship",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
      description: [
        "Mastered React core concepts including reusable components, props drilling resolution, custom hooks, and state management.",
        "Built and maintained responsive frontend modules for client projects with an emphasis on speed and clean code architecture.",
        "Collaborated with senior engineers to implement UI components and conduct code reviews.",
        "Enhanced problem-solving abilities by addressing real-world frontend layout and performance challenges.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Evonicsoft",
      date: "1 January – 1 April",
      badge: "Contract / Project",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      description: [
        "Developed cross-browser compatible and mobile-first web interfaces following pixel-perfect design specifications.",
        "Transformed wireframes and prototypes into performant HTML, CSS, and vanilla JavaScript layouts.",
        "Optimized website load times and asset delivery across mobile and desktop devices.",
        "Worked in an agile setting to deliver client deliverables on time with high client satisfaction.",
      ],
    },
    {
      id: 3,
      role: "Web Development Intern",
      company: "Stack Mind",
      date: "18 July – 18 October",
      badge: "Internship",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Basics"],
      description: [
        "Built foundational web pages using modern HTML5, CSS3, JavaScript, and Bootstrap framework.",
        "Constructed interactive forms with client-side validation and responsive navigation bars.",
        "Gained hands-on experience in layout structures, styling nuances, and DOM manipulation fundamentals.",
        "Strengthened understanding of web standards, responsive breakpoints, and web debugging.",
      ],
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0E1322] transition-colors relative overflow-hidden"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Career Journey" title="Work Experience & Growth" />
        </motion.div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-accent-purple to-slate-200 dark:to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                {/* Timeline Icon Node */}
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <FaBriefcase size={22} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-primary-light border border-primary/20">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-primary dark:text-primary-light font-semibold text-base mt-1">
                        {exp.company}
                      </p>
                    </div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold shadow-sm w-fit">
                      <BsCalendarDate className="text-primary" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                      >
                        <FiCheckCircle className="text-secondary shrink-0 mt-1" size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used Pills */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap gap-2">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
