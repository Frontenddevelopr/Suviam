import React from "react";
import { Row, Col, Card } from "antd";
import {
  CrownOutlined,
  BulbOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const leadersData = [
  {
    name: "John Doe",
    title: "Chief Visionary Officer",
    icon: <CrownOutlined style={{ fontSize: "40px", color: "#00afe9" }} />,
    image: "https://via.placeholder.com/150",
    description:
      "John is a pioneer in innovation, leading Suviam with foresight and a commitment to excellence.",
  },
  {
    name: "Jane Smith",
    title: "Creative Director",
    icon: <BulbOutlined style={{ fontSize: "40px", color: "#00afe9" }} />,
    image: "https://via.placeholder.com/150",
    description:
      "Jane drives creative projects, inspiring the team to deliver outstanding results.",
  },
  {
    name: "Alex Johnson",
    title: "Global Strategist",
    icon: <GlobalOutlined style={{ fontSize: "40px", color: "#00afe9" }} />,
    image: "https://via.placeholder.com/150",
    description:
      "Alex's expertise in global markets ensures Suviam's success worldwide.",
  },
  {
    name: "Emily Davis",
    title: "People Operations Manager",
    icon: <TeamOutlined style={{ fontSize: "40px", color: "#00afe9" }} />,
    image: "https://via.placeholder.com/150",
    description:
      "Emily cultivates a positive and collaborative work environment at Suviam.",
  },
];

function VisionaryLeaders() {
  return (
    <div className="bg-gray-100 py-16 px-4 flex justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Visionary Leaders
        </h1>
        <Row gutter={[24, 24]} justify="center">
          {leadersData.map((leader, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card hoverable className="rounded-xl shadow-md mx-auto max-w-sm">
                <Row align="middle">
                  <Col xs={8} className="flex justify-center">
                    <img
                      alt={leader.name}
                      src={leader.image}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </Col>
                  <Col xs={16}>
                    <div className="ml-4">
                      <div className="flex items-center mb-2">
                        {leader.icon}
                        <h2 className="text-xl font-semibold ml-2">
                          {leader.name}
                        </h2>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {leader.title}
                      </p>
                      <p className="text-md text-gray-700">
                        {leader.description}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default VisionaryLeaders;
