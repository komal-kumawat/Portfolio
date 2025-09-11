import Link from "next/link";

interface IButton {
  text: string;
  href?: string;
  color?: "white" | "black";
  bgColor?: "white" | "black";
  hColor?: "white" | "black";
  hbgColor?: "white" | "black";
}

const Button = ({
  text,
  href,
  color = "white",
  bgColor = "black",
  hColor = "black",
  hbgColor = "white",
}: IButton) => {
  const colors: Record<string, string> = {
    white: "text-white",
    black: "text-black",
  };

  const bgColors: Record<string, string> = {
    white: "bg-white",
    black: "bg-black",
  };

  const hoverTextColors: Record<string, string> = {
    white: "hover:text-white",
    black: "hover:text-black",
  };

  const hoverBgColors: Record<string, string> = {
    white: "hover:bg-white",
    black: "hover:bg-black",
  };

  const baseClasses = "p-2 rounded-[20px] transition border-1 px-5";

  const colorClasses = `
    ${colors[color]} ${bgColors[bgColor]} 
    ${hoverTextColors[hColor]} ${hoverBgColors[hbgColor]}
  `;

  

  return(
    href? <button className={`${baseClasses} ${colorClasses}`}><a href={href}>{text}</a></button>:
   <button className={`${baseClasses} ${colorClasses}`}>{text}</button>
  )
};

export default Button;
