import AboutSection from "../../components/sections/AboutSection";
import Experience from "../../components/sections/Experience";
import HeroSection from "../../components/sections/HeroSection";
import SkillsSection from "../../components/sections/SkillsSection";
import Project from "../../components/sections/Project";
import Footer from "../../components/sections/Footer";

export default function Portfolio() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <Experience/>
            <Project/>
            <Footer/>
        </>
    )
}