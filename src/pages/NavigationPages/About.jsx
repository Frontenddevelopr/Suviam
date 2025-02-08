import React from "react";
import { Card } from "antd";
import { AboutUs } from "../../constants/About";
import { FaRegBuilding } from "react-icons/fa";
import { SiRenovate } from "react-icons/si";
import { FaPersonDigging } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";

import VisionaryLeaders from "../../components/Aboutus/VisionaryLeaders";

const iconData = [
  {
    icon: <FaRegBuilding />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit, eveniet architecto sint fugiat eligendi numquam, eaque nobis at.",
  },
  {
    icon: <SiRenovate />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit, eveniet architecto sint fugiat eligendi numquam, eaque.",
  },
  {
    icon: <FaPersonDigging />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit, eveniet architecto sint fugiat eligendi numquam, eaque.",
  },
  {
    icon: <AiOutlinePicture />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit, eveniet fugiat eligendi numquam, eaque.",
  },
];

function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-8 gap-12">
      {/* Image Section */}
      <div>
        <div className="flex-1 flex justify-center mb-150 items-center">
          <img
            src="src/assets/pipes/img5.png"
            alt="About Us Image"
            className="max-w-full lg:max-w-sm object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* About Us Content */}
      <div className="w-full">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">
          About Us
        </h1>
        <div className="text-md mt-2 p-2 text-gray-700">
          {AboutUs?.companyInfo?.description_para1}
        </div>
        <div className="text-md p-2 text-gray-700">
          {AboutUs?.companyInfo?.description_para2}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {iconData.map((item, index) => (
            <Card
              key={index}
              hoverable
              className="shadow-lg p-4 rounded-lg flex items-center"
            >
              <div className="text-[#00afe9] text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 mr-4 transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                {item.icon}
              </div>
              <div className="text-md text-gray-700">{item.text}</div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          {/* Visionary Leaders Section */}
          <VisionaryLeaders />
        </div>
      </div>
    </div>
  );
}

export default About;
