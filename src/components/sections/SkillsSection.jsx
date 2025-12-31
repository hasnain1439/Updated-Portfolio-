import React from "react";
import { motion } from "framer-motion";
// Import icons (ensure you have react-icons installed)
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import SectionTitle from "../common/SectionTitle";
import SkillCard from "../common/SkillCard";

export default function SkillsSection() {
  // Data array for cleaner code
  const skills = [
    {
      id: 1,
      skill: "React.js",
      desc: "Building interactive, state-driven UIs with modern hooks and Redux.",
      bg: "bg-blue-600",
      icon: FaReact,
    },
    {
      id: 2,
      skill: "Node.js",
      desc: "Developing scalable backend services and RESTful APIs.",
      bg: "bg-green-600",
      icon: FaNodeJs,
    },
    {
      id: 3,
      skill: "Express.js",
      desc: "Fast, unopinionated, minimalist web framework for Node.js.",
      bg: "bg-gray-800",
      icon: SiExpress,
    },
    {
      id: 4,
      skill: "MongoDB",
      desc: "NoSQL database design for flexible and scalable data storage.",
      bg: "bg-green-700",
      icon: SiMongodb,
    },
    {
      id: 5,
      skill: "Tailwind CSS",
      desc: "Rapidly building custom designs without leaving your HTML.",
      bg: "bg-cyan-600",
      icon: SiTailwindcss,
    },
    {
      id: 6,
      skill: "TypeScript",
      desc: "Adding static type definitions to enhance code quality and safety.",
      bg: "bg-blue-500",
      icon: SiTypescript,
    },
  ];

  // Animation variants for Stagger Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each card showing up
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="bg-[#F8FAFC] py-12 md:py-24 overflow-hidden"
      id="skills"
    >
      {/* 1. Added Container and Max-Width to match About Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12" // Increased bottom margin for better spacing
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Technical Skills" />
          </motion.div>
          <p className="text-center mb-10 text-dark-lighter">
            A comprehensive skill set covering the full MERN stack development
            lifecycle
          </p>
          {/* Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Starts when 20% of grid is visible
          >
            {skills.map((item) => (
              <motion.div key={item.id} variants={cardVariants}>
                <SkillCard
                  skill={item.skill}
                  description={item.desc}
                  bgColor={item.bg}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <p className="text-dark-lighter text-lg ">Also experienced with:</p>
            <div className="flex justify-center items-center gap-8 mt-5">
                <div className="px-4 py-2 rounded-2xl bg-white shadow-lg border-[0.2px] border-dark-lighter">github</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
