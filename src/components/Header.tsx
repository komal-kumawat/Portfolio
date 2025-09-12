"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";
import { useTheme } from "../app/context/ThemeContext";
import Button from "./Button";
import Icons from "./Icons";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { dark, toggleDark } = useTheme();

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 md:px-20 md:border-b shadow-md 
      bg-white text-black border-gray-300 dark:bg-black dark:text-white dark:border-gray-700"
    >
      <div
        className="flex justify-between items-center px-6 py-4 border-b 
         border-gray-300 dark:border-gray-700 md:border-none "
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700 dark:text-gray-300"><a href="/">KOMAL</a></div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg mx-auto justify-between">
          <Link
            href="#about"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#Education"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Education
          </Link>
        </nav>

        <div className="flex items-center justify-between gap-5">
          {/* Dark/Light Toggle */}
          <button className="md:block text-xl flex items-center" onClick={toggleDark}>
            {dark?<Icons icon={<HiMoon/>}/>:<Icons icon={<HiSun/>}/> }
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
          <div className="hidden md:block ml-5">
            <Button
              text="Connect"
              href="#About"
              bgColor={dark ? "white" : "black"}
              color={dark ? "black" : "white"}
              hColor={dark ? "white" : "black"}
              hbgColor={dark ? "black" : "white"}
            />
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col items-center py-4 space-y-4 border-b shadow-md
          bg-white border-gray-300 text-black dark:bg-black dark:border-gray-700 dark:text-white ml-2 mr-2"
        >
          <Link
            href="#about"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#Education"
            className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 no-underline"
            onClick={() => setOpen(false)}
          >
            Education
          </Link>
          <Button
            text="Connect"
            href="#About"
            bgColor={dark ? "white" : "black"}
            color={dark ? "black" : "white"}
            hColor={dark ? "white" : "black"}
            hbgColor={dark ? "black" : "white"}
          />



        </div>
      )}
    </header>
  );
};

export default Header;
