import React from "react";
import { List, Card, Carousel, Grid } from "antd";

const products = [
  {
    title: "Plain And Socket Type RCC Pipes",
    // price: "$49.99",
    description:
      "Suitable for various cross drainage and sewerage applica􀆟ons.",
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "Reinforced RCC Pipes Various Classes",
    // price: "$89.99",
    description: "Designed for high-pressure applica􀆟ons and heavy loads",
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "Specialized Ar􀆟cles:",
    // price: "$29.99",
    description: `Custom-designed solu􀆟ons for unique project requirements that Includes
Box Culverts, Ready to Install Manhole Chambers, U-Shape drains, etc.`,
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "U-Shape drains",
    // price: "$99.99",
    description: "Top-tier product with premium features.",
    imageUrl: "src/assets/pipes/img6.png",
  },
];

const Product = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <div className="p-6">
      <h1 className="text-4xl text-blue-600 font-bold text-center mb-6">
        Product
      </h1>
      <h1 className="text-center text-gray-800 font-semibold">
        We offer a comprehensive range of RCC pipes, including:
      </h1>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product List */}
        <div>
          <List
            grid={{
              gutter: 16,
              column: screens.lg ? 2 : 1,
            }}
            dataSource={products}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.title}
                  extra={<span className="text-blue-500">{item.price}</span>}
                >
                  <p>{item.description}</p>
                </Card>
              </List.Item>
            )}
          />
        </div>

        {/* Image Carousel */}
        <div>
          <Carousel autoplay>
            {products.map((product, index) => (
              <div key={index}>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Product;
