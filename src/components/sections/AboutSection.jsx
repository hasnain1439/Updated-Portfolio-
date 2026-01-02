import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaDownload } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import resume from "../../assets/Doc/resume.pdf"

// DELETE THIS LINE:
// import resumePDF from "../../assets/Doc/resume_hasnain_iqbal (2) (1).pdf";

export default function AboutProfile() {
  return (
    <section className="py-12 bg-white overflow-hidden" id="about">
      {/* Title Animation */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="About Me" />
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          
          {/* LEFT SIDE */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Building Scalable{" "}
              <span className="text-blue-600">Web Solutions</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              I am Hasnain Iqbal, a <strong>MERN Stack Developer</strong>{" "}
              focused on transforming complex requirements into seamless digital
              products. With professional internship experience at Senew Tech, I
              have moved beyond basic coding to{" "}
              <strong>architecting full-stack applications</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Currently, I am finalizing a comprehensive{" "}
              <strong>Learning Management System (LMS)</strong>, handling
              everything from secure Node.js authentication to dynamic React
              interfaces.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* --- FIXED BUTTON SECTION --- */}
            <div className="pt-4">
              <motion.a
                // 1. Point to the file in the public folder (start with /)
                href={resume} 
                
                // 2. This forces the browser to just open it nicely
                target="_blank"
                rel="noopener noreferrer"
                
                // Animation props
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 cursor-pointer w-fit"
              >
                <FaDownload /> Download CV
              </motion.a>
            </div>
            {/* --------------------------- */}

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Card 1: Education */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-blue-50 p-6 rounded-2xl flex items-start gap-5 border border-blue-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-200 shrink-0">
                <FaUserGraduate size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Bachelor's Degree
                </h3>
                <p className="text-blue-700 font-medium">Computer Science</p>
                <div className="mt-2 inline-flex items-center gap-2 bg-white px-3 py-1 rounded-md text-sm text-gray-600 shadow-sm">
                  <span>📅</span>
                  <span className="font-medium">Jan 2026</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Performance */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 rounded-2xl flex items-start gap-5 border border-slate-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-slate-700 p-3 rounded-xl text-white shadow-lg shadow-slate-200 shrink-0">
                <FaAward size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Academic Performance
                </h3>
                <p className="text-slate-700 font-medium">CGPA: 3.43 / 4.00</p>
                <p className="text-gray-500 text-sm mt-2 leading-snug">
                  Consistent excellence in Data Structures, Algorithms, and Web
                  Engineering.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}