import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp, FaHeart } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import IconWrapper from "../common/IconWrapper";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#080C14] text-slate-300 py-16 relative overflow-hidden border-t border-slate-800/80">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-secondary opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent-purple flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary/30">
                H
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Hasnain<span className="text-primary">.dev</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              MERN Stack Developer dedicated to building scalable web applications, robust APIs, and responsive, interactive user experiences.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">
                Open for full-time roles & freelance opportunities
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rsaquo;</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Connect With Me
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Feel free to connect on GitHub, LinkedIn, or reach out directly on WhatsApp or Email.
            </p>
            <div className="flex items-center gap-3 flex-wrap pt-1">
              <IconWrapper
                iconName={LuGithub}
                link="https://github.com/hasnain1439"
                tooltip="GitHub"
                label="GitHub"
              />
              <IconWrapper
                iconName={FaLinkedinIn}
                link="https://www.linkedin.com/in/hasnain-iqbal-73043326a"
                tooltip="LinkedIn"
                label="LinkedIn"
              />
              <IconWrapper
                iconName={MdOutlineMailOutline}
                link="mailto:hasnainiqbal7860a@gmail.com"
                tooltip="Email"
                label="Email"
              />
              <IconWrapper
                iconName={FaWhatsapp}
                link="https://wa.me/923204698158"
                tooltip="WhatsApp"
                label="WhatsApp"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-850 border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Hasnain Iqbal. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <FaHeart className="text-red-500 inline" /> using React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/30 cursor-pointer border border-white/10"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}