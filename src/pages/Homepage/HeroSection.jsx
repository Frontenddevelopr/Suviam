import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import { saveAs } from "file-saver";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl text-gray-800 sm:text-6xl lg:text-7xl text-center tracking-wide">
        SUVIAM INFRA
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          PRIVATE LIMITED
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Welcome to Suviam, a leading name in construction and manufacturing. We
        specialize in delivering innovative solutions for irrigation projects
        and producing high-quality RCC pipes and cement articles. Driven by
        cutting-edge technology, we are committed to customer satisfaction and
        sustainable practices. Experience excellence with our trusted
        construction and manufacturing expertise.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="src/assets/Suviam Infra Company Profile.pdf" // Path to your PDF file in the public folder
          download="Profile.pdf" // Suggested download filename
          className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 py-3 px-4 mx-3 rounded-md text-white font-semibold"
        >
          DOWNLOAD PROFILE
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-300 border border-[#3674B5] shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default HeroSection;
