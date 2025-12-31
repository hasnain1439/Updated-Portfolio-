import React from "react";
// Make sure to install react-icons: npm install react-icons
import { LuGithub} from "react-icons/lu";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Import your sub-component
import IconWrapper from "../../components/common/IconWrapper"; 
// Import your image
import profileImg from "../../assets/profile.png"; // Adjust path as needed
import { MdOutlineMailOutline } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="bg-[#F8FAFC] px-5 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-[57%_43%] gap-4 items-center">
      {/* Left Content */}
      <div className="flex flex-col justify-center gap-4">
        <h6 className="text-primary font-semibold">Hello, I'm</h6>
        <h1 className="text-4xl font-semibold">Hasnain Iqbal</h1>
        <h2 className="text-dark-lighter text-2xl font-semibold">
          Full Stack Developer || MERN Stack Developer
        </h2>
        <p className="text-dark-lighter leading-relaxed">
          Dedicated MERN Stack Developer passionate about building modern,
          scalable web applications. Committed to writing clean code and
          creating exceptional user experiences. Proven ability to deliver
          robust full-stack solutions, utilizing MongoDB, Express.js, React, and
          Node.js. Eager to contribute technical skills and problem-solving
          abilities to a dynamic development team.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 sm:px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-light hover:shadow-primary/50 hover:-translate-y-1 hover:shadow-xl">
            View My Work
          </button>
          <button className="px-4 sm:px-8 py-3 bg-transparent border-2 border-dark text-dark font-semibold rounded-xl shadow-lg hover:bg-dark hover:shadow-dark-lighter duration-300 hover:text-white hover:shadow-xl">
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          <IconWrapper iconName={LuGithub} />
          <IconWrapper iconName={FaLinkedinIn} />
          <IconWrapper iconName={MdOutlineMailOutline} />
          <IconWrapper iconName={FaInstagram} />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center lg:justify-end">
        <img
          src={profileImg}
          className="rounded-xl border border-gray-border shadow-xl shadow-primary/30 object-cover w-full max-w-md"
          alt="Hasnain Iqbal"
        />
      </div>
    </div>
  );
}