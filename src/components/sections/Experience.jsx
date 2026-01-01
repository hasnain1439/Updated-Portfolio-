import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import SectionTitle from "../common/SectionTitle"; // Assuming you have this from previous code

export default function ExperienceSection() {
  // 1. EDIT THIS ARRAY: Add your 3 experiences here
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern (React)",
      company: "Senew Tech",
      date: "29 July – 29 November",
      description: [
        "Learned React fundamentals including components, props, state, and hooks.",
        "Developed small to medium-scale projects using React and modern JavaScript.",
        "Built reusable UI components and followed best practices for clean code.",
        "Improved problem-solving skills by working on real-world frontend tasks.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Evonicsoft",
      date: "1 January – 1 April",
      description: [
        "Worked as a Frontend Developer building real-world projects using HTML, CSS, JavaScript, and Bootstrap.",
        "Converted design requirements into responsive and user-friendly web interfaces.",
        "Implemented reusable components and optimized UI for different screen sizes.",
        "Collaborated with team members to deliver projects on time.",
      ],
    },
    {
      id: 1,
      role: "Web Development Intern",
      company: "Stack Mind",
      date: "18 July – 18 October",
      description: [
        "Learned and practiced core web technologies including HTML, CSS, JavaScript, and Bootstrap.",
        "Developed responsive web pages and basic UI components.",
        "Gained hands-on experience in frontend development fundamentals.",
        "Improved understanding of layouts, forms, and reusable components.",
      ],
    },
  ];

  return (
    <section
      className="py-12 md:py-24 bg-white overflow-hidden"
      id="experience"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Professional Experience" />
        </motion.div>

        {/* Timeline Container */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="flex flex-col md:flex-row gap-6 md:gap-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* --- LEFT SIDE: Icon & Line --- */}
              <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 shrink-0 relative">
                {/* The Blue Icon Box */}
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 z-10">
                  <FaBriefcase size={22} />
                </div>

                {/* The Vertical Line (Draws only if it's NOT the last item) */}
                {index !== experiences.length - 1 && (
                  <div className="hidden md:block w-1 bg-blue-100 absolute top-14 bottom-[-48px] -z-0 rounded-b-full"></div>
                )}

                {/* Mobile Date (Visible only on small screens next to icon) */}
                <span className="md:hidden font-semibold text-gray-500">
                  {exp.date}
                </span>
              </div>

              {/* --- RIGHT SIDE: Content Card --- */}
              <div className="w-full">
                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow duration-300 relative">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>

                    {/* Desktop Date Badge */}
                    <div className="hidden md:flex items-center gap-2 text-gray-500 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">
                      <BsCalendarDate />
                      <span className="text-sm font-medium">{exp.date}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
