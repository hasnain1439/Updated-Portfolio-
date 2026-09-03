import React from "react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FiArrowUpRight, FiDownload, FiCheckCircle } from "react-icons/fi";
import IconWrapper from "../common/IconWrapper";
import profileImg from "../../assets/profile.png";
import resume from "../../assets/Doc/resume.pdf";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { label: "Hands-on Experience", value: "1+ Year" },
    { label: "Completed Projects", value: "8+" },
    { label: "Technologies Mastered", value: "10+" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-light-bg dark:bg-dark"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-purple/10 dark:bg-accent-purple/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-fit"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Available for New Projects & Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <div>
              <p className="text-primary dark:text-primary-light font-bold text-lg tracking-wide uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.1] mt-1">
                Hasnain <span className="text-gradient-blue">Iqbal</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mt-3 flex items-center flex-wrap gap-2">
                <span>React & React Native Developer</span>
                <span className="text-primary font-light">|</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">MERN Stack</span>
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Passionate about building production-grade web applications with modern architectures, clean code, and seamless user experiences. Experienced in the complete lifecycle from database schema design to responsive UI deployment.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-2xl shadow-lg shadow-primary/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <FiArrowUpRight size={18} />
              </motion.button>

              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <FiDownload size={18} />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Connect With Me
              </p>
              <div className="flex items-center gap-3">
                <IconWrapper
                  iconName={LuGithub}
                  link="https://github.com/hasnain1439"
                  tooltip="GitHub Profile"
                  label="GitHub"
                />
                <IconWrapper
                  iconName={FaLinkedinIn}
                  link="https://www.linkedin.com/in/hasnain-iqbal-73043326a"
                  tooltip="LinkedIn Profile"
                  label="LinkedIn"
                />
                <IconWrapper
                  iconName={MdOutlineMailOutline}
                  link="mailto:hasnainiqbal7860a@gmail.com"
                  tooltip="Email Hasnain"
                  label="Email"
                />
                <IconWrapper
                  iconName={FaWhatsapp}
                  link="https://wa.me/923204698158"
                  tooltip="Chat on WhatsApp"
                  label="WhatsApp"
                />
              </div>
            </div>

            {/* Key Metrics Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Image & Floating Tech Badges */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent-purple/30 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div className="relative w-full max-w-[420px] rounded-3xl p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/5]">
                <img
                  src={profileImg}
                  alt="Hasnain Iqbal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle dark gradient overlay at bottom of photo for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-semibold text-primary-light">Full Stack Engineer</p>
                    <p className="text-sm font-bold">Hasnain Iqbal</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FaReact size={20} className="animate-spin-slow" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Frontend</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">React.js</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Node.js / Mongo (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <SiMongodb size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Database & API</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">MERN Stack</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Verified Status (Top Right) */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-6 -right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5"
              >
                <FiCheckCircle size={13} />
                <span>Verified</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
