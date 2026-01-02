import React from "react";
import { motion } from "framer-motion";
// Importing specific icons
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp, FaHeart } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

// --- 1. Helper Component for Icons ---
const IconWrapper = ({ iconName: Icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-lg cursor-pointer flex items-center justify-center"
    >
      <Icon size={20} />
    </motion.a>
  );
};

const Footer = () => {
  // --- 2. Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#0f172a] text-white py-12 relative font-sans overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Bio */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Hasnain Iqbal
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer passionate about creating elegant solutions to
              complex problems. Turning ideas into scalable web applications.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div className="md:pl-10" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-blue-100">
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-400">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Connect With Me (Using your specific links) */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-blue-100">
              Connect With Me
            </h3>
            <div className="flex gap-4 flex-wrap">
              {/* 1. GitHub */}
              <IconWrapper
                iconName={LuGithub}
                link="https://github.com/hasnain1439"
              />

              {/* 2. LinkedIn */}
              <IconWrapper
                iconName={FaLinkedinIn}
                link="https://www.linkedin.com/in/hasnain-iqbal-73043326a"
              />

              {/* 3. Email */}
              <IconWrapper
                iconName={MdOutlineMailOutline}
                link="https://mail.google.com/mail/?view=cm&fs=1&to=hasnainiqbal7860a@gmail.com"
              />

              {/* 4. WhatsApp */}
              <IconWrapper
                iconName={FaWhatsapp}
                link="https://wa.me/923204698158"
              />
            </div>
          </motion.div>
        </div>

        {/* Separator Line */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 my-8"
        />

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="text-center text-slate-400 text-sm flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <span>&copy; 2026 Hasnain Iqbal. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500 animate-pulse" /> using
            React & Tailwind
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Help Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl shadow-blue-500/30 transition-colors"
          title="Contact Me"
          onClick={() => window.location.href = "mailto:hasnainiqbal7860a@gmail.com"}
        >
          <FiHelpCircle size={24} />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;