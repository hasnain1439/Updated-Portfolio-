import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/common/SectionTitle"; 
import { FiGithub, FiExternalLink, FiShare2 } from "react-icons/fi";
import lmsImg from "../../assets/projectsImg/lms.png"
import cryptoImg from "../../assets/projectsImg/image.png"
import todoList from "../../assets/projectsImg/todoList.png"
import stopWatch from "../../assets/projectsImg/stopWatch.png"
import shoesWeb from "../../assets/projectsImg/shoesWeb.png"
import clearQuick from "../../assets/projectsImg/clearQuick.png"
import calculator from "../../assets/projectsImg/calculator.png"
import animals from "../../assets/projectsImg/animals.png"

const projectsData = [
  {
    id: 1,
    title: "LMS Platform",
    description: "A comprehensive Learning Management System allowing users to create courses, track progress, and manage quizzes.",
    tech: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    image: lmsImg,
    liveLink: "https://lms-ia21z5309-hasnainiqbal7860b-6751s-projects.vercel.app/",
    repoLink: "https://github.com/hasnain1439/LMS-UI.git",
  },
  {
    id: 2,
    title: "Crypto Hunter",
    description: "A cryptocurrency tracker providing real-time market data, trending coins, and historical price charts using the CoinGecko API.",
    tech: ["React", "Context API", "Material UI", "Chart.js", "Axios"],
    image: cryptoImg,
    liveLink: "https://crypto-app-tau-two.vercel.app/",
    repoLink: "https://github.com/hasnain1439/crypto-app.git",
  },
  {
    id: 3,
    title: "Todo List",
    description: "A task management application enabling users to add, edit, delete, and mark tasks as complete with local storage persistence.",
    tech: ["React", "Tailwind CSS", "Local Storage", "JavaScript"],
    image: todoList,
    liveLink: "https://todo-list-omega-neon-61.vercel.app/",
    repoLink: "https://github.com/hasnain1439/TodoList-.git",
  },
  {
    id: 4,
    title: "Stop Watch",
    description: "A precise stopwatch application featuring start, stop, reset, and lap functionalities with a clean and responsive user interface.",
    tech: ["React", "Hooks (useEffect)", "CSS3", "JavaScript"],
    image: stopWatch,
    liveLink: "https://stop-watch-tan-eight.vercel.app/",
    repoLink: "https://github.com/hasnain1439/stop-watch.git",
  },
  {
    id: 5,
    title: "Shoes Store",
    description: "An e-commerce frontend for a footwear brand featuring product grids, responsive design, and a modern shopping cart interface.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    image: shoesWeb, // Note: You might want to check if this image matches the title
    liveLink: "https://quick-start-omega.vercel.app/",
    repoLink: "https://github.com/hasnain1439/quick_start.git",
  },
  {
    id: 6,
    title: "Clear Quick Web",
    description: "A professional landing page for a cleaning service business, showcasing services, pricing tiers, and contact information.",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    image: clearQuick, // Note: You might want to check if this image matches the title
    liveLink: "https://shoes-web-five.vercel.app/",
    repoLink: "https://github.com/hasnain1439/shoes-web.git",
  },
  {
    id: 7,
    title: "Calculator",
    description: "A fully functional calculator supporting basic arithmetic operations with a responsive grid layout and keyboard support.",
    tech: ["React", "JavaScript", "CSS Grid"],
    image: calculator,
    liveLink: "https://calculator-pi-seven-84.vercel.app/",
    repoLink: "https://github.com/hasnain1439/calculator.git",
  },
  {
    id: 8,
    title: "PetsM4",
    description: "A web application displaying a gallery of different animal breeds with details, focusing on API integration and layout.",
    tech: ["React", "Tailwind CSS", "Rest API"],
    image: animals,
    liveLink: "https://animals-two-liart.vercel.app/",
    repoLink: "https://github.com/hasnain1439/animals.git",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-24 overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Featured Projects" />
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Showcasing my work in building modern, scalable web applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  {/* Overlay with Quick Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:text-blue-600 hover:scale-110 transition-all shadow-lg"
                      title="View Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:text-blue-600 hover:scale-110 transition-all shadow-lg"
                      title="View Source Code"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, index) => (
                      <span key={index} className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* --- NEW BUTTONS SECTION --- */}
                  <div className="mt-auto flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                    >
                      <FiExternalLink className="group-hover/btn:scale-110 transition-transform"/>
                      <span className="font-medium">Live Demo</span>
                    </a>
                    
                    <a 
                      href={project.repoLink}
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-white rounded-xl hover:bg-black transition-all shadow-lg shadow-slate-300"
                    >
                      <FiGithub size={18}/>
                      <span className="font-medium hidden sm:inline">Code</span>
                    </a>

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