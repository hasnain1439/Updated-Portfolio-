import React from "react";
import { motion } from "framer-motion";
// Import icons
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiJquery,
  SiMysql,
} from "react-icons/si";

import SectionTitle from "../common/SectionTitle";
import SkillCard from "../common/SkillCard";

export default function SkillsSection() {
  // 1. Main Skills (Cards)
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

  // 2. Additional Skills (Pills below cards)
  const additionalSkills = [
    { name: "GitHub", icon: FaGithub },
    { name: "JavaScript (ES6+)", icon: FaJs },
    { name: "SQL", icon: SiMysql }, // or FaDatabase
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "jQuery", icon: SiJquery },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Technical Skills" />
          </motion.div>

          <p className="text-center mb-10 text-gray-500">
            A comprehensive skill set covering the full MERN stack development
            lifecycle
          </p>

          {/* Main Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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

          {/* Additional Skills Section */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg mb-6">Also experienced with:</p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {additionalSkills.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-sm border border-gray-200 font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <item.icon className="text-xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />

                  <span>{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
