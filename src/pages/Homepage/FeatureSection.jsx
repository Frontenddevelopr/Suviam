import { features } from "../../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20  min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3    gap-2  mt-10 lg:mt-20  ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full shadow-lg px-6 rounded-2xl py-6 m-2"
          >
            <div className="flex flex-col justify-center items-center">
              <h5 className="mt-1 mb-2 text-xl">{feature.text}</h5>
              <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
