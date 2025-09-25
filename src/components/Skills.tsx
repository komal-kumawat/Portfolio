import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiBun,
  SiExpress,
  SiDocker,
  SiNginx,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    icon: SiJavascript,
    color: "text-yellow-500",
    name: "JavaScript (ES6+)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    color: "text-blue-600",
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  { icon: SiPython, color: "text-blue-400", name: "Python", url: "https://www.python.org/" },
  { icon: SiC, color: "text-gray-700", name: "C", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { icon: SiCplusplus, color: "text-blue-500", name: "C++", url: "https://isocpp.org/" },
  { icon: SiMysql, color: "text-orange-500", name: "SQL", url: "https://www.mysql.com/" },
  { icon: SiReact, color: "text-cyan-400", name: "React", url: "https://reactjs.org/" },
  { icon: SiRedux, color: "text-purple-600", name: "Redux", url: "https://redux.js.org/" },
  { icon: SiNextdotjs, color: "text-black dark:text-white", name: "Next.js", url: "https://nextjs.org/" },
  { icon: SiTailwindcss, color: "text-sky-400", name: "TailwindCSS", url: "https://tailwindcss.com/" },
  { icon: SiNodedotjs, color: "text-green-600", name: "Node.js", url: "https://nodejs.org/" },
  { icon: SiBun, color: "text-black dark:text-yellow-400", name: "Bun", url: "https://bun.sh/" },
  { icon: SiExpress, color: "text-gray-600 dark:text-white", name: "Express", url: "https://expressjs.com/" },
  { icon: SiPostgresql, color: "text-sky-700", name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { icon: SiMongodb, color: "text-green-600", name: "MongoDB", url: "https://www.mongodb.com/" },
  { icon: SiRedis, color: "text-red-500", name: "Redis", url: "https://redis.io/" },
  { icon: SiDocker, color: "text-blue-500", name: "Docker", url: "https://www.docker.com/" },
  { icon: SiNginx, color: "text-green-500", name: "Nginx", url: "https://www.nginx.com/" },
  { icon: SiGit, color: "text-red-600", name: "Git", url: "https://git-scm.com/" },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-20 mb-20 mt-20 w-full overflow-x-hidden">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 w-full max-w-6xl">
        {skills.map(({ icon: Icon, color, name, url }, idx) => (
          <div
            key={idx}
            className="relative group flex justify-center items-center overflow-visible"
          >
            {/* Tooltip */}
            <span
              className={`absolute z-200 px-2 py-2 text-xs rounded-lg bg-gray-800 text-white whitespace-nowrap max-w-[140px] truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none
              ${idx < 8 ? "top-full mt-2" : "-top-10"}`}
            >
              {name}
            </span>

            {/* Clickable Icon */}
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon
                className={`text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform duration-200 cursor-pointer ${color}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
