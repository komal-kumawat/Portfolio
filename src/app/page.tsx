"use client";
import Image from "next/image";

import Header from "@/components/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dashboard from "@/components/Dashboard";
import { useTheme } from "./context/ThemeContext";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";
import Projects from "@/components/Projects";
export default function Home() {
  const { dark } = useTheme();
  return (
    <div className={` ${dark ? "bg-black text-white border-gray-700" : "bg-white text-black border-gray-300"}`}>
      <Header />
      <Dashboard />
      <Projects/>
      <Footer/>

    </div>
  );
}
