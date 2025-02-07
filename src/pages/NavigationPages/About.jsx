import { AboutUs } from "../../constants/About";
import { FaRegBuilding } from "react-icons/fa";
import { SiRenovate } from "react-icons/si";
import { FaPersonDigging } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
      <div className="flex-1 flex justify-center items-center p-10 mx-2 md:m-4">
        <img src="	https://thewebmax.org/constrot/images/pic-c-1.png" alt="" />
      </div>
      <div className="flex-1 p-4 ">
        <h1 className="text-center text-blue-700 font-bold uppercase">
          About Us
        </h1>
        <div className="text-xs mt-2 p-2 text-gray-700">
          {AboutUs?.companyInfo?.description_para1}
        </div>
        <div className="text-xs p-2 text-gray-700">
          {AboutUs?.companyInfo?.description_para2}
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-2 p-4 justify-center items-center">
          <div className="flex flex-col md:flex-col gap-6 justify-center items-center">
            <div className="flex flex-col md:flex-row gap-6  rounded-lg px-4 py-2  shadow-xl justify-center items-center">
              <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                <FaRegBuilding />
              </div>
              <div className="text-xs text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                odit, eveniet architecto sint fugiat eligendi numquam, eaque
                nobis at.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6  rounded-lg px-4 py-2  shadow-xl justify-center items-center">
              <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                <SiRenovate />
              </div>
              <div className="text-xs text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                odit, eveniet architecto sint fugiat eligendi numquam, eaque
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-col gap-6 justify-center items-center">
            <div className="flex flex-col md:flex-row gap-6  rounded-lg px-4 py-2  shadow-xl justify-center items-center">
              <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                <FaPersonDigging />
              </div>
              <div className="text-xs text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                odit, eveniet architecto sint fugiat eligendi numquam, eaque
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6  rounded-lg px-4 py-2  shadow-xl justify-center items-center">
              <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                <AiOutlinePicture />
              </div>
              <div className="text-xs text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                odit, eveniet fugiat eligendi numquam, eaque
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
