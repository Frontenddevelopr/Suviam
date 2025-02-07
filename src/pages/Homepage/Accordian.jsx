import React from "react";
import { Collapse } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const faqData = [
  {
    question: "What is SUVIAM INFRA PRIVATE LIMITED?",
    answer:
      "SUVIAM INFRA PRIVATE LIMITED is a leading manufacturer of Reinforced Cement Concrete (RCC) pipes and a construction company specializing in irrigation projects. Established in 2023, the company is dedicated to delivering high-quality products and services.",
  },
  {
    question: "What products does SUVIAM offer?",
    answer:
      "We offer a comprehensive range of RCC pipes, including plain and socket type pipes, reinforced pipes for high-pressure applications (NP3 and NP4 classes), and custom-designed precast cement articles.",
  },
  {
    question: "What industries does SUVIAM serve?",
    answer:
      "We serve government agencies, construction firms, and civil engineering contractors, primarily across the North Maharashtra region.",
  },
  {
    question: "What makes SUVIAM unique in the market?",
    answer:
      "SUVIAM is one of the few private limited companies that manufactures RCC pipes and consumes them in-house for construction projects. This provides a competitive advantage in project efficiency and cost management.",
  },
  {
    question: "What is SUVIAM's commitment to sustainability?",
    answer:
      "We prioritize eco-friendly manufacturing practices and produce RCC pipes designed to minimize environmental impact while maximizing performance and longevity.",
  },
  {
    question: "How can I contact SUVIAM INFRA PRIVATE LIMITED?",
    answer:
      "You can reach us at Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik, or call us at 9403455116 / 9403455280. You can also email us at suviaminfra@gmail.com.",
  },
];

const Accordion = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => (
          <InfoCircleOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {faqData.map((faq, index) => (
          <Panel
            header={faq.question}
            key={index}
            className="site-collapse-custom-panel"
          >
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Accordion;
