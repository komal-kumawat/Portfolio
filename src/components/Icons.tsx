"use client"
import React from "react"
import { useTheme } from "../app/context/ThemeContext"

interface IIcons {
  href?: string
  icon: React.ReactNode
  color?: string
  hoverBgColor?: string
  hoverColor?: string
  borderColor?: string
}

const Icons = ({
  href,
  icon,
  color,
  hoverBgColor,
  hoverColor,
  borderColor,
}: IIcons) => {
  const { dark } = useTheme()

  // Defaults depend on theme
  const finalColor = color || (dark ? "white" : "black")
  const finalHoverBg = hoverBgColor || (dark ? "white" : "black")
  const finalHoverColor = hoverColor || (dark ? "black" : "white")
  const finalBorder = borderColor || (dark ? "white" : "black")

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center w-9 h-9
        rounded-full border border-${finalBorder}
        text-${finalColor}
        bg-transparent
        transition-colors duration-300
        hover:text-${finalHoverColor} hover:bg-${finalHoverBg}
      `}
    >
      {icon}
    </a>
  )
}

export default Icons
