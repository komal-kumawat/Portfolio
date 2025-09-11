"use client";

import React, { useState } from "react";
import { useTheme } from "../app/context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Icons from "./Icons";

interface IProject {
    projectName: string;
    title: string;
    deployedLink: string;
    githubLink: string;
    backgroundImage: string;
}

const ProjectComponent = ({
    projectName,
    title,
    deployedLink,
    githubLink,
    backgroundImage,
}: IProject) => {
    const { dark } = useTheme();
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`w-[90%] max-w-4xl min-h-[250px] mx-auto my-6 rounded-lg border shadow-lg overflow-hidden relative flex flex-col items-center justify-center text-center transition-all duration-300 ${dark ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"} `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background image overlay */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            {/* Semi-transparent overlay */}
            <div
                className={`absolute inset-0 transition-colors duration-300 ${hovered ? "bg-black/20" : dark ? "bg-black/70" : "bg-white/70"}`}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full">
                {/* Project Name and Title */}
                <div
                    className={`transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
                >
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${dark ? "text-white" : "text-black"}`}>
                        {projectName}
                    </h3>
                    <p className={`mt-2 text-lg transition-colors duration-300 ${dark ? "text-gray-300" : "text-gray-800"}`}>
                        {title}
                    </p>
                </div>

                {/* Icons always visible */}
                <div className="mt-4 flex gap-4 text-xl">
                    <Icons icon={<FiExternalLink />} href={deployedLink} />
                    <Icons icon={<FaGithub />} href={githubLink} />
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
