import { Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@/app/context/ThemeContext";

const Dashboard = () => {
  const { dark } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Typography
        variant="h1"
        className={`font-extrabold tracking-tight ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Hi, I am
      </Typography>

      <Typography
        variant="h2"
        className={`font-bold mt-4 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Komal Kumawat
      </Typography>
    </div>
  );
};

export default Dashboard;
