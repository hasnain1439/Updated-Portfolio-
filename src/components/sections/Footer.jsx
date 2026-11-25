import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import IconWrapper from "../common/IconWrapper";
import Logo from "../common/Logo";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
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
    <footer className="bg-[#0A0A0A] text-neutral-300 py-16 relative overflow-hidden border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Logo size={40} variant="onDark" className="shrink-0 rounded-xl" />
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Hasnain Iqbal
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Full Stack Developer dedicated to building scalable web applications, mobile apps, robust RESTful APIs, and modern database architectures.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-emerald-400">
                Available for work · Remote & On-site
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">&rsaquo;</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">
              Connect With Me
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
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

        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="select-none w-full text-center whitespace-nowrap font-heading font-semibold tracking-tighter leading-none text-[13vw] lg:text-[10rem] text-neutral-800/60 -mb-2"
        >
          Hasnain Iqbal
        </p>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Hasnain Iqbal</p>
          <p>Built with React · Tailwind CSS · Framer Motion</p>
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
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 cursor-pointer border border-white/10"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}