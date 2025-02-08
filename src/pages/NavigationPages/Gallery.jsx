import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "src/assets/pipes/img1.png",
      alt: "Image 1",
      description: "Laying OF RCC Pipes",
    },
    {
      src: "src/assets/pipes/img2.png",
      alt: "Image 2",
      description: "Canal Sectioning",
    },
    {
      src: "src/assets/pipes/img3.png",
      alt: "Image 3",
      description: "RCC Pipes",
    },
    {
      src: "src/assets/pipes/img4.png",
      alt: "Image 4",
      description: "RCC Pipes",
    },
    {
      src: "src/assets/pipes/img5.png",
      alt: "Image 4",
      description: "RCC Pipes",
    },
    {
      src: "src/assets/pipes/img6.png",
      alt: "Image 4",
      description: "RCC Pipes",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] p-8">
      <h1 className="text-4xl text-blue-600 font-bold text-center mb-6">
        Image Gallery
      </h1>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        Explore our curated collection of stunning images capturing the beauty
        of nature and urban landscapes. Each image tells a unique story and
        brings a fresh perspective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-1xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800 font-semibold mb-2">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
