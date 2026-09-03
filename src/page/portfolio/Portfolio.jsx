import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import SkillsSection from "../../components/sections/SkillsSection";
import Experience from "../../components/sections/Experience";
import Project from "../../components/sections/Project";
import ContactSection from "../../components/sections/ContactSection";
import Footer from "../../components/sections/Footer";

export default function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark text-light-text dark:text-dark-text transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Experience />
          <Project />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}