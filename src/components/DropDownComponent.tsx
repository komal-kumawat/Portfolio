import { useTheme } from '@/app/context/ThemeContext';
import React, { ReactNode, useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IDropDownComponent {
  title: string;
  startDate?: string;
  endDate?: string;
  icon?: ReactNode;
  location?: string;
  name: string;
  details: ReactNode;
}

const DropDownComponent = ({ title, startDate, endDate, icon, location, name, details }: IDropDownComponent) => {
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();

  return (
    <div
      className={`w-[90%] mx-auto my-6 rounded-2xl border shadow-md overflow-hidden transition-all duration-300
        ${dark ? "border-gray-700 text-white" : "border-gray-200 text-gray-900"} bg-transparent`}
    >
      <div>
        {/* Title */}
        <h1 className="text-xl font-semibold px-6 pt-4 text-left">{title}</h1>

        {/* Clickable row */}
        <div
          onClick={() => setOpen(!open)}
          className={`flex justify-between items-center px-6 py-4 m-2 rounded-md cursor-pointer transition-colors duration-200
            ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
        >
          <div>
            <div className="flex items-center gap-2 mt-2 text-md">
              {icon}
              <span className="font-medium">{name}</span>
            </div>

            <div className="text-sm mt-1 opacity-80">
              {startDate} - {endDate} | {location}
            </div>
          </div>

          {/* Chevron icon */}
          <div
            className={`p-2 rounded-full transition-all duration-200 shadow-sm 
              ${dark
                ? "hover:bg-gray-700 hover:shadow-md hover:shadow-blue-500/50"
                : "hover:bg-gray-100 hover:shadow-md hover:shadow-blue-300/50"
              }`}
          >
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {/* Dropdown content */}
        {open && (
          <div
            className={`px-6 py-4 text-sm transition-all duration-300 ease-in-out text-left
              ${dark ? "border-t border-gray-700 text-gray-300" : "border-t border-gray-200 text-gray-700"} bg-transparent`}
          >
            {details}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownComponent;
