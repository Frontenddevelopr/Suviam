import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function About() {
  return (
    <div className="relative m border-b border-neutral-800 min-h-[800px]">
      {/* <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          About Us{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"></span>
        </h2>
      </div> */}

      <div className="bg-gray-800 text-white py-10 px-4">
        {/* Header Section */}
        <section className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">About Us</h1>
          <p className="text-gray-300 text-lg">
            SUVIAM INFRA PRIVATE LIMITED is a premier manufacturer of Reinforced
            Cement Concrete (RCC) pipes, dedicated to providing high-quality
            products for various infrastructure applica􀆟ons. With a vision to
            enhance urban and rural development, we specialize in producing RCC
            pipes that are designed for durability, strength, and reliability.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {/* Image Block */}
          <div
            className="bg-cover bg-center h-64 md:h-full rounded-md"
            style={{
              backgroundImage: "url('https://via.placeholder.com/500')",
            }}
          ></div>
          {/* Content Block */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-100 text-lg mb-4">
              "To deliver innovative construction solutions and manufacturing
              excellence by leveraging cutting-edge technology, while
              prioritizing customer satisfaction and sustainable practices."
            </p>
            <ul className="space-y-4">
              {[
                "Innovative Construction Solutions",
                "High-Quality Manufacturing",
                "Sustainability and Customer Satisfaction",
                "Cutting-edge Technology",
              ].map((point) => (
                <li key={point} className="flex items-center">
                  <IoMdCheckmarkCircleOutline
                    size={24}
                    className="text-yellow-500 mr-3"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            Our Expert Team
          </h2>
          <p className="text-gray-300 text-lg">
            Meet the dedicated professionals who bring expertise and innovation
            to every project we undertake.
          </p>

          {/* Example Team Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-800 p-6 rounded-md text-center"
              >
                <div
                  className="w-24 h-24 bg-gray-700 mx-auto rounded-full mb-4"
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/150')",
                  }}
                ></div>
                <h3 className="text-xl font-semibold text-yellow-500">
                  Team Member {item}
                </h3>
                <p className="text-sm text-gray-400">Role Title</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
