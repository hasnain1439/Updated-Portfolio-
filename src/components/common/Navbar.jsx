import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiSend } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-neutral-800/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <Logo size={40} className="shrink-0 rounded-xl group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[17px] text-slate-900 dark:text-white tracking-tight leading-none">
                Hasnain Iqbal
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-neutral-400 tracking-[0.12em] uppercase mt-1">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-primary dark:bg-white"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-200 border border-slate-200 dark:border-neutral-700 hover:border-slate-400 dark:hover:border-neutral-500 transition-colors cursor-pointer shadow-sm"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} className="text-slate-700" />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 text-sm font-semibold rounded-lg transition-all cursor-pointer"
            >
              <FiSend size={14} />
              <span>Let's Talk</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white border border-slate-200 dark:border-neutral-700 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-neutral-800 px-6 py-5"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                        : "text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 rounded-lg font-semibold text-center"
              >
                <FiSend size={16} />
                <span>Let's Talk</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
