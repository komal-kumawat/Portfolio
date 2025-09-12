import { Typography } from "@mui/material";
import { useTheme } from "@/app/context/ThemeContext";

interface IGrad{
    text:string;
}
export default function GradientHeading({text}:IGrad) {
  const { dark } = useTheme();

  return (
    <Typography
      variant="h3"
      sx={{
        // fontWeight: "bold",
        margin:5,
        color: dark ? "#f3f4f6" : "#374151", // gray-100 for dark, gray-700 for light
      }} 
      
      
    >
      {text}
    </Typography>
  );
}
