import React from "react";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import IconWrapper from "../common/IconWrapper";
import profileImg from "../../assets/profile.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section with id 'projects' not found!");
    }
  };
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-24 overflow-hidden" id="home">
      <div className="container mx-auto px-4">
        {/* ADDED: max-w-6xl wrapper to match Skills/About alignment */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT CONTENT: Animate sliding in from the Left */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }} // Start state: invisible and 50px to the left
            animate={{ opacity: 1, x: 0 }} // End state: visible and in original position
            transition={{ duration: 1 }} // Animation speed: 1 second
          >
            <div>
              <h6 className="text-primary font-semibold mb-2 text-lg">
                Hello, I'm
              </h6>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Hasnain Iqbal
              </h1>
              <h2 className="text-dark-lighter text-xl md:text-2xl font-semibold mt-3">
                Full Stack Developer{" "}
                <span className="hidden sm:inline">||</span>{" "}
                <span className="block sm:inline mt-1 sm:mt-0">
                  MERN Stack Developer
                </span>
              </h2>
            </div>

            <p className="text-dark-lighter leading-relaxed text-lg max-w-xl">
              Dedicated MERN Stack Developer passionate about building modern,
              scalable web applications. Committed to writing clean code and
              creating exceptional user experiences.
            </p>

            {/* BUTTONS: Add hover scales */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }} // Scale up slightly on hover
                whileTap={{ scale: 0.95 }} // Scale down slightly on click
                className="px-4 sm:px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-colors"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-8 py-3 bg-transparent border-2 border-dark text-dark font-semibold rounded-xl shadow-sm hover:bg-dark hover:text-white transition-colors"
              >
                Contact Me
              </motion.button>
            </div>

            {/* Social Icons - Staggered Fade In */}
            <motion.div
              className="flex gap-5 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
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
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE: Animate sliding in from the Right */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 50 }} // Start: invisible and 50px to the right
            animate={{ opacity: 1, x: 0 }} // End: visible and in place
            transition={{ duration: 1 }}
          >
            <img
              src={profileImg}
              className="rounded-2xl border-2 border-white shadow-2xl shadow-primary/20 object-cover w-full max-w-[450px] lg:max-w-[550px] transform hover:scale-[1.02] transition-transform duration-500"
              alt="Hasnain Iqbal"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
