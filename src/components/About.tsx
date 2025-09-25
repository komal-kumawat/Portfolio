"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "../app/context/ThemeContext";
import profile from "../app/Images/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.webp";
import { FaCode, FaPhoneAlt } from "react-icons/fa"; // icons

const About = () => {
  const { dark } = useTheme();

  return (
    <section
      id="about"
      className={`flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-40 py-16 w-full transition-colors duration-500 mb-20 ${
        dark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Left: Image + Info */}
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
          <Image src={profile} alt="Profile" fill className="object-cover" />
        </div>

        {/* Info below image */}
        <div className="mt-4 text-center md:text-left space-y-2">
          <h2
            className={`text-xl font-bold ${
              dark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Komal
          </h2>

          {/* Role */}
          <p
            className={`flex items-center gap-2 text-sm font-medium ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaCode className="" /> Software Engineer
          </p>

          {/* Phone */}
          <p
            className={`flex items-center gap-2 text-sm ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaPhoneAlt className="" /> 6350444789
          </p>
        </div>
      </div>

      {/* Right: Text */}
      <div className="flex-1 max-w-lg text-center md:text-left">
        <p
          className={`text-base md:text-lg leading-relaxed mb-4 ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hi, I’m{" "}
          <span className="font-semibold text-indigo-500">Komal Kumawat</span>, a
          Computer Science student at NIMS University with a passion for{" "}
          <span className="font-medium">Web Development</span> and{" "}
          <span className="font-medium">Problem Solving</span>. I enjoy building
          modern web applications, creating intuitive UI/UX, and exploring
          technologies that make an impact.
        </p>

        <p
          className={`text-base md:text-lg leading-relaxed ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Currently, I’m working with{" "}
          <span className="font-medium">React, Next.js, TypeScript, and MongoDB</span>.
          I love collaborating on innovative projects, contributing to open
          source, and continuously improving my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
