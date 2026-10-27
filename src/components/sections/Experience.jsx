import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaMobileAlt,
  FaGraduationCap,
  FaBuilding,
  FaCode,
} from "react-icons/fa";
import { BsCalendar3, BsCheck2Circle } from "react-icons/bs";
import { FiLayers, FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";

export default function ExperienceSection() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Metaviz",
      type: "Full-Time",
      isCurrent: true,
      date: "Jul 2026 – Present",
      location: "Lahore • Full Stack Web & E-Commerce",
      icon: FaLaptopCode,
      colorTheme: "emerald",
      badge: "Current • Full-Time",
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
      icon: FaMobileAlt,
      colorTheme: "purple",
      badge: "Current • Part-Time",
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
      icon: FaBriefcase,
      colorTheme: "blue",
      badge: "Full-Time",
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
      date: "Jun 2025 – Nov 2025",
      location: "Lahore • React Web Applications",
      icon: FaCode,
      colorTheme: "amber",
      badge: "Front End",
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
      date: "Jun 2024 – Nov 2024",
      location: "Lahore • Frontend Web Development",
      icon: FaGraduationCap,
      colorTheme: "cyan",
      badge: "Internship",
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

  const getThemeStyles = (theme) => {
    switch (theme) {
      case "emerald":
        return {
          iconBg:
            "bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 ring-4 ring-emerald-500/20",
          badgeBg:
            "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
          cardBorder: "hover:border-emerald-500/40",
          glow: "from-emerald-500/5 to-teal-500/5",
        };
      case "purple":
        return {
          iconBg:
            "bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-purple-500/30 ring-4 ring-purple-500/20",
          badgeBg:
            "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
          cardBorder: "hover:border-purple-500/40",
          glow: "from-purple-500/5 to-indigo-500/5",
        };
      case "blue":
        return {
          iconBg:
            "bg-gradient-to-tr from-blue-600 to-cyan-600 text-white shadow-blue-500/30 ring-4 ring-blue-500/20",
          badgeBg:
            "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
          cardBorder: "hover:border-blue-500/40",
          glow: "from-blue-500/5 to-cyan-500/5",
        };
      case "amber":
        return {
          iconBg:
            "bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-amber-500/30 ring-4 ring-amber-500/20",
          badgeBg:
            "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
          cardBorder: "hover:border-amber-500/40",
          glow: "from-amber-500/5 to-orange-500/5",
        };
      case "cyan":
        return {
          iconBg:
            "bg-gradient-to-tr from-cyan-500 to-teal-500 text-white shadow-cyan-500/30 ring-4 ring-cyan-500/20",
          badgeBg:
            "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
          cardBorder: "hover:border-cyan-500/40",
          glow: "from-cyan-500/5 to-teal-500/5",
        };
      default:
        return {
          iconBg: "bg-primary text-white",
          badgeBg: "bg-primary/10 text-primary border-primary/20",
          cardBorder: "hover:border-primary/40",
          glow: "from-primary/5 to-primary/5",
        };
    }
  };

  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0E1322] transition-colors relative overflow-hidden"
      id="experience"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="Career & Journey"
            title="Professional Work Experience"
          />
        </motion.div>

        {/* Quick Highlights Summary Bar - Adjusted to Container Width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-primary dark:text-primary-light">
              2+ Years
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Hands-on Experience
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-500">
              Full & Part Time
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Engagements
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-accent-purple">
              Full Stack
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Web & Mobile Apps
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 dark:text-slate-200">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Production Ready
            </div>
          </div>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-2xl mx-auto"
        >
          {filterOptions.map((opt) => {
            const isActive = filter === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => {
                  setFilter(opt.key);
                  if (opt.key !== "all") setShowAll(true);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/30 ring-2 ring-primary/40 scale-105"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-primary/40"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Timeline Container - Expanded to Container Width */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-primary to-slate-200 dark:to-slate-800 z-0" />

          <div className="space-y-8 sm:space-y-10">
            <AnimatePresence mode="popLayout">
              {displayedExperiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const styles = getThemeStyles(exp.colorTheme);

                return (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative flex flex-col md:flex-row gap-5 md:gap-8 items-start"
                  >
                    {/* Timeline Node Icon */}
                    <div className="shrink-0 flex items-center justify-center relative">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 transition-transform duration-300 hover:scale-110 ${styles.iconBg}`}
                      >
                        <IconComponent className="text-xl sm:text-2xl" />
                      </div>

                      {/* Current Pulsing Beacon with z-20 */}
                      {exp.isCurrent && (
                        <span className="absolute -top-1 -right-1 z-20 flex h-4 w-4 pointer-events-none">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-white dark:ring-slate-900 shadow-sm"></span>
                        </span>
                      )}
                    </div>

                    {/* Main Content Card */}
                    <div
                      className={`flex-1 w-full bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${styles.cardBorder}`}
                    >
                      {/* Subtle Ambient Background Gradient Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      />

                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                        <div>
                          {/* Role & Badges */}
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-2xs ${styles.badgeBg}`}
                            >
                              {exp.isCurrent && (
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              )}
                              <span>{exp.badge}</span>
                            </span>
                          </div>

                          {/* Company Name & Mode */}
                          <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                            <span className="text-lg font-bold text-primary dark:text-primary-light flex items-center gap-1.5">
                              <FaBuilding className="text-sm opacity-80" />
                              <span>{exp.company}</span>
                            </span>
                            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">
                              •
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <FiLayers className="text-xs opacity-70" />
                              <span>{exp.location}</span>
                            </span>
                          </div>
                        </div>

                        {/* Date Duration Badge */}
                        <div className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/90 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold shadow-xs w-fit shrink-0">
                          <BsCalendar3 className="text-primary" />
                          <span>{exp.date}</span>
                        </div>
                      </div>

                      {/* Bullet Point Descriptions */}
                      <ul className="space-y-2.5 mb-6 relative z-10">
                        {exp.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                          >
                            <BsCheck2Circle
                              className="text-secondary shrink-0 mt-1"
                              size={17}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap gap-2 relative z-10">
                        {exp.tech.map((techItem, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-primary/50 hover:text-primary dark:hover:text-primary-light transition-all"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Show More / Show Less Toggle Button */}
          {filter === "all" && experiences.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent-purple hover:from-primary-dark hover:to-accent-purple text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>
                  {showAll
                    ? "Show Less Experience"
                    : `View All Experience (${experiences.length})`}
                </span>
                {showAll ? (
                  <FiChevronUp
                    size={18}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                ) : (
                  <FiChevronDown
                    size={18}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                )}
                {!showAll && hiddenCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                    +{hiddenCount} More
                  </span>
                )}
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
