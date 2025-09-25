"use client";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import Header from "@/components/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dashboard from "@/components/Dashboard";
import { useTheme } from "./context/ThemeContext";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";
import Projects from "@/components/Projects";
import DropDownComponent from "@/components/DropDownComponent";
import Education from "@/components/Education";
import GradientHeading from "@/components/GradiantHeading";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  const { dark } = useTheme();
  return (
    <div
      className={`flex flex-col text-center ${dark
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black border-gray-300"
        }`}
    >
      <Header />
      <Dashboard />

      {/* About Section */}
      <section id="about">
        <GradientHeading text="About me" />
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <GradientHeading text="Projects" />
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <GradientHeading text="Experience" />
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <GradientHeading text="Skills" />
        <Skills />
      </section>
      {/* Education Section */}
      <section id="education">
        <GradientHeading text="Education" />
        <Education />
      </section>

      <Footer />
    </div>
  );
}
