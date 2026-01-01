import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import lmsImg from "../../assets/projectsImg/lms.png";
export default function project() {
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
            <SectionTitle title="Featured Projects" />
          </motion.div>

          <p className="text-center mb-10 text-gray-500">
            Showcasing my work in building modern, scalable web applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image Container with Hover Zoom */}
            <div className="h-52 overflow-hidden relative">
              <img
                src={lmsImg}
                alt="LMS Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Learning Management System
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A full-stack platform for managing courses, student enrollments,
                and quizzes using the MERN stack.
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                  MongoDB
                </span>
              </div>

              {/* Action Button */}
              <button className="text-blue-600 font-semibold text-sm hover:underline">
                View Project &rarr;
              </button>
            </div>
          </div>

          {/* Project Card 2 (Duplicate for demo) */}
          <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-52 overflow-hidden relative">
              <img
                src={lmsImg}
                alt="E-Commerce Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                E-Commerce Dashboard
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Admin dashboard for managing products, orders, and analytics
                with real-time data updates.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-cyan-50 text-cyan-600 rounded-full">
                  Tailwind
                </span>
              </div>

              <button className="text-blue-600 font-semibold text-sm hover:underline">
                View Project &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
