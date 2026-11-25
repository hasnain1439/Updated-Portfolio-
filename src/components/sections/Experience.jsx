import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";

export default function ExperienceSection() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Metaviz",
      type: "Full-Time",
      isCurrent: true,
      date: "Jul 2026 – Present",
      location: "Lahore • Full Stack Web & E-Commerce",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "BigCommerce",
        "SSR / SSG",
        "REST APIs",
      ],
      description: [
        "Architecting and maintaining high-performance, full-stack web applications using Next.js, React.js, and Node.js/Express, leveraging SSR and SSG for optimal load times and SEO.",
        "Customizing enterprise e-commerce solutions on BigCommerce — engineering custom storefront workflows, widgets, and integrating headless storefronts with backend APIs.",
        "Designing robust server-side microservices and RESTful API endpoints with Node.js and Express.js, enforcing secure authentication, rate-limiting, and middleware optimization.",
        "Modeling and optimizing schemas using MongoDB for document-driven dynamic data and PostgreSQL for relational transactional integrity, complex joins, and analytical reporting.",
        "Fine-tuning database queries, managing asynchronous workloads, and ensuring seamless data synchronization between BigCommerce and internal database systems.",
      ],
    },
    {
      id: 2,
      role: "Front End & Mobile Developer",
      company: "mCode Technology",
      type: "Part-Time",
      isCurrent: true,
      date: "Jul 2026 – Present",
      location: "Lahore • Web & Mobile Development",
      tech: [
        "React Native",
        "React.js",
        "Redux Toolkit",
        "Redux Saga",
        "Axios",
        "REST APIs",
      ],
      description: [
        "Engineering and optimizing high-performance mobile application workflows using React Native, ensuring smooth cross-platform compatibility and native device feature integration.",
        "Developing key customer-facing and delivery modules for the MEG Ecosystem with React.js and React Native for real-time order tracking and updates.",
        "Handling complex state and asynchronous operations across web and mobile layouts using Redux Toolkit and Redux Saga.",
        "Connecting secure RESTful APIs via Axios to keep real-time synchronization between the web ERP and React Native mobile clients.",
      ],
    },
    {
      id: 3,
      role: "Front End Developer",
      company: "mCode Technology",
      type: "Full-Time",
      isCurrent: false,
      date: "Jan 2026 – Jul 2026",
      location: "Lahore • ERP & Food Delivery",
      tech: [
        "React.js",
        "React Native",
        "Redux Toolkit",
        "Redux Saga",
        "Reactstrap",
        "Bootstrap",
        "Formik & Yup",
        "Axios",
      ],
      description: [
        "Spearheaded the front-end development of Pizza Online Management (ERP) and the MEG (Food Delivery & ERP) ecosystem — scalable React.js web interfaces and React Native mobile apps.",
        "Implemented robust state management architectures with Redux Toolkit for predictable data flow and Redux Saga for complex asynchronous side-effects.",
        "Crafted enterprise-grade, pixel-perfect responsive interfaces using Reactstrap and Bootstrap, with complex form controls and strict schema validation via Formik and Yup.",
        "Architected secure data communication pipelines using Axios for RESTful API consumption and real-time sync between web dashboards and mobile clients.",
      ],
    },
    {
      id: 4,
      role: "Front End Developer",
      company: "Senew Tech",
      type: "Full-Time",
      isCurrent: false,
      date: "Jul 2025 – Oct 2025",
      location: "Lahore • React Web Applications",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Redux Saga",
        "Formik & Yup",
        "Axios",
      ],
      description: [
        "Developed and maintained dynamic, large-scale web applications using React.js and Tailwind CSS.",
        "Contributed to multiple live production projects, ensuring high performance, clean code, and pixel-perfect UI/UX.",
        "Built interactive and secure forms with complex validation logic using Formik and Yup.",
        "Managed complex application states and asynchronous workflows using Redux Toolkit and Redux Saga, with Axios for RESTful API consumption.",
      ],
    },
    {
      id: 5,
      role: "Front End Developer Intern",
      company: "StacksMind (Pvt) Ltd.",
      type: "Internship",
      isCurrent: false,
      date: "Jul 2024 – Oct 2024",
      location: "Lahore • Frontend Web Development",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "Figma to Code",
      ],
      description: [
        "Built 10+ responsive, high-fidelity web pages using HTML5, CSS3, JavaScript, and Bootstrap, ensuring a seamless experience across all devices.",
        "Converted complex Figma and PSD designs into pixel-perfect, clean, and semantic code, significantly improving UI consistency.",
        "Leveraged Tailwind CSS and Bootstrap grid systems to create mobile-first, fully responsive layouts.",
      ],
    },
  ];

  const filterOptions = [
    { key: "all", label: "All Experience", count: experiences.length },
    {
      key: "Full-Time",
      label: "Full-Time",
      count: experiences.filter((e) => e.type === "Full-Time").length,
    },
    {
      key: "Part-Time",
      label: "Part-Time",
      count: experiences.filter((e) => e.type === "Part-Time").length,
    },
    {
      key: "Internship",
      label: "Internships",
      count: experiences.filter((e) => e.type === "Internship").length,
    },
  ];

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === filter);

  // Default display 3 items when filter is "all" and not expanded
  const displayedExperiences =
    filter === "all" && !showAll
      ? filteredExperiences.slice(0, 3)
      : filteredExperiences;

  const hiddenCount = filteredExperiences.length - displayedExperiences.length;

  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#111111] transition-colors"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Experience" title="Where I've built and shipped." />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => {
                  setFilter(opt.key);
                  if (opt.key !== "all") setShowAll(true);
                }}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                    : "bg-transparent text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {opt.label}
                <span className="font-mono text-xs opacity-60">{opt.count}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Rail + progress line that draws as you scroll */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 dark:bg-neutral-800" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-primary dark:bg-white"
          />

          <ol>
            <AnimatePresence mode="popLayout" initial={false}>
              {displayedExperiences.map((exp, index) => (
                <motion.li
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  className="group relative pl-8 sm:pl-10 pb-12 last:pb-0"
                >
                  {/* Node on the rail */}
                  <span
                    className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                      exp.isCurrent
                        ? "bg-emerald-500 border-emerald-500 ring-4 ring-emerald-500/15"
                        : "bg-white dark:bg-[#111111] border-slate-300 dark:border-neutral-600 group-hover:border-slate-500 dark:group-hover:border-neutral-400 transition-colors"
                    }`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10">
                    {/* Meta column */}
                    <div className="md:col-span-3 space-y-1.5">
                      <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-400">
                        {exp.date}
                      </p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-neutral-400">
                        {exp.location.split(" • ")[1] || exp.location}
                      </p>
                      <span
                        className={`inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-md border font-mono text-xs uppercase tracking-[0.1em] ${
                          exp.isCurrent
                            ? "border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-500/5"
                            : "border-slate-200 dark:border-neutral-700 text-slate-500 dark:text-neutral-400"
                        }`}
                      >
                        {exp.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                        {exp.isCurrent ? `Current · ${exp.type}` : exp.type}
                      </span>
                    </div>

                    {/* Content column */}
                    <div className="md:col-span-9 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/40 p-5 sm:p-6 group-hover:border-slate-300 dark:group-hover:border-neutral-700 transition-colors">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {exp.description.map((point) => (
                          <li
                            key={point}
                            className="relative pl-5 text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300 before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-slate-400 dark:before:bg-neutral-500"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-neutral-800 flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md border border-slate-200 dark:border-neutral-700 font-mono text-xs text-slate-600 dark:text-neutral-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ol>
        </div>

        {/* Show more / less */}
        {filter === "all" && experiences.length > 3 && (
          <div className="mt-10 pl-8 sm:pl-10 md:pl-0 md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-start-4 md:col-span-9 md:pl-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-neutral-700 hover:border-slate-900 dark:hover:border-neutral-400 text-slate-800 dark:text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
              >
                {showAll ? "Show less" : "Show all experience"}
                {!showAll && hiddenCount > 0 && (
                  <span className="font-mono text-xs text-slate-500">+{hiddenCount}</span>
                )}
                {showAll ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
