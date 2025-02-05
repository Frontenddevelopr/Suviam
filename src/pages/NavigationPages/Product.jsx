import React from "react";
import ImageCarousel from "../../components/Carousel/ImageCarousel";

const Product = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Cement Pipes - High Quality & Durable
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose from a variety of sizes combinations for your construction
          needs
        </p>
      </header>
      <div className="flex gap-6 pl-25">
        <div className="row pl-2 w-80 h-80">
          <img src="/src/assets/pipe.png" alt="Pipes" className="w-80 h-80" />
        </div>
        <div className="row pl-2 bg-amber-300 w-80 h-80 gap-1">Pipes</div>
        <div className="row pl-2 bg-amber-300 w-80 h-80">Pipes</div>
      </div>

      <div className="flex gap-6 pl-25">
        <h1>Product</h1>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Product;
