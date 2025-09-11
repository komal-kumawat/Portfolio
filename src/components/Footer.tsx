import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Icons from "./Icons"
import { useTheme } from "../app/context/ThemeContext"

const Footer = () => {
  const { dark } = useTheme()

  return (
    <footer className={`w-full flex justify-center mt-10`}>
      <div
        className={`
          w-full  flex flex-col items-center 
          rounded-lg p-10 mx-10  md:mx-25  border-b-0 
          border-2 ${dark ? "border-gray-700" : "border-gray-300"} 
          ${dark ? "bg-black text-white" : "bg-white text-black"} 
          shadow-lg 
        `}
      >
        <h2 className="text-3xl font-bold mb-6">KOMAL</h2>
        <div className="flex space-x-6 text-2xl py-10">
          <Icons
            href="https://www.linkedin.com/in/komal-kumawat-7032662a0/"
            icon={<FaLinkedin />}
            color={dark ? "white" : "black"}
            hoverColor={dark ? "black" : "white"}
            hoverBgColor={dark ? "white" : "black"}
            borderColor={dark ? "white" : "black"}
          />
          <Icons
            href="https://github.com/komal-kumawat"
            icon={<FaGithub />}
            color={dark ? "white" : "black"}
            hoverColor={dark ? "black" : "white"}
            hoverBgColor={dark ? "white" : "black"}
            borderColor={dark ? "white" : "black"}
          />
          <Icons
            href="https://x.com/KomalKumawat112"
            icon={<FaTwitter />}
            color={dark ? "white" : "black"}
            hoverColor={dark ? "black" : "white"}
            hoverBgColor={dark ? "white" : "black"}
            borderColor={dark ? "white" : "black"}
          />
          <Icons
            href="mailto:kumawatkomal17122004@gmail.com"
            icon={<MdEmail />}
            color={dark ? "white" : "black"}
            hoverColor={dark ? "black" : "white"}
            hoverBgColor={dark ? "white" : "black"}
            borderColor={dark ? "white" : "black"}
          />
        </div>

        <hr className={`w-full border-t-2 ${dark ? "border-gray-700" : "border-gray-300"} mb-4 `} />

        <p className="text-sm mb-0 pb-0">
          © All rights reserved 2025
        </p>
      </div>
      
    </footer>
  )
}

export default Footer
