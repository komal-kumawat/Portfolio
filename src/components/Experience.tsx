import React from "react";
import DropDownComponent from "./DropDownComponent";
import { FaBuilding } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="flex flex-col items-center md:ml-20 md:mr-20 mb-20 space-y-6">
      
      {/* IBM Internship */}
      <DropDownComponent
        title="IBM Software Intern"
        name="Web Development Intern"
        startDate="June 2024"
        endDate="August 2024"
        location="Remote"
        icon={<FaBuilding />}
        details={
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Built a full-stack <b>MERN</b> web application with <b>Tailwind CSS</b> to
              promote SDG-3: Good Health & Well-being.
            </li>
            <li>
              Designed & deployed an interactive UI that improved content
              accessibility, achieving <b>30% faster navigation</b> and higher user
              engagement.
            </li>
            <li>
              Implemented a scalable backend with <b>MongoDB & Express</b>, supporting{" "}
              <b>100+ daily active users</b>.
            </li>
          </ul>
        }
      />

      {/* IIT Ropar Internship */}
      <DropDownComponent
        title="IIT Ropar Research Intern"
        name="Deep Learning Research Intern"
        startDate="March 2024"
        endDate="March 2024"
        location="Ropar, India"
        icon={<FaBuilding />}
        details={
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Developed <b>ConvSFNet</b>, a novel deep learning architecture combining
              ConvNeXt, SE blocks, and FPN for disaster image analysis.
            </li>
            <li>
              Benchmarked on the <b>MEDIC dataset</b>, outperforming models like{" "}
              DenseNet121, ResNet50, and EfficientNet-B1.
            </li>
            <li>
              Improved average F1-score by <b>2.41%</b>, excelling in severe damage
              classification for real-time disaster response.
            </li>
          </ul>
        }
      />
    </div>
  );
};

export default Experience;
