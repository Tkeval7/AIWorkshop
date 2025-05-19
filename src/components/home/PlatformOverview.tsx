import React from "react";
import Button from "../Button";
import Container from "../Container";

const PlatformOverview: React.FC = () => {
  const topics = [
    "Data Strategy & Consultation",
    "Data Storage & Processing Solutions",
    "Data Migrations",
    "Real World Data Insights",
    "Conversational AI",
    "Agentic chatbot",
  ];

  const radius = 200;

  return (
    <section id="platform" className="py-20 bg-white relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            AI-Driven Pharma Success, Simplified
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ValenceAI transforms unstructured data from field interactions,
            voice recordings, and documents into domain-specific insights for
            pharmaceutical teams. Our platform helps field representatives,
            brand managers, and executives make data-driven decisions by
            surfacing actionable insights in real-time.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[500px] mb-24">
          {/* SVG Lines */}
          <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            viewBox="0 0 800 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {topics.map((_, index) => {
              const angle = (index * Math.PI * 2) / topics.length;
              const x = 400 + Math.cos(angle) * radius;
              const y = 250 + Math.sin(angle) * radius;

              return (
                <line
                  key={index}
                  x1="400"
                  y1="250"
                  x2={x}
                  y2={y}
                  stroke="#bfdbfe" // Tailwind's blue-200
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold z-10 transform -translate-x-1/2 -translate-y-1/2">
            ValenceAI
          </div>

          {/* Topic Cards */}
          {topics.map((topic, index) => {
            const angle = (index * Math.PI * 2) / topics.length;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute bg-white p-4 rounded-lg shadow-md transform -translate-x-1/2 -translate-y-1/2 w-48 text-center z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <div className="text-sm font-medium text-gray-800">{topic}</div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button variant="primary">Explore the Platform</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
};

export default PlatformOverview;
