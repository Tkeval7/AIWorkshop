import React from "react";
import Container from "../components/Container";

const clients = [
  { name: "Verizon", logo: "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png" },
  { name: "Netflix", logo: "https://i.ibb.co/J399KDg/api-partner-netflix.png" },
  { name: "Yelp", logo: "https://i.ibb.co/TKT0F5L/api-partner-yelp.png" },
  { name: "Adobe", logo: "https://i.ibb.co/HG6KR89/api-partner-adobe.png" },
  { name: "Ring", logo: "https://i.ibb.co/hMSJ1sg/api-partner-ring.png" },
  {
    name: "Nespresso",
    logo: "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png",
  },
];
const AboutUs: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About ValenceAI
            </h1>
            <p className="text-lg text-gray-600">
              Transforming pharmaceutical data into actionable insights through
              innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What We Believe
              </h3>
              <p className="text-gray-600">
                We believe in the power of AI to transform healthcare data into
                meaningful insights that drive better patient outcomes and
                business decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global leader in AI-powered insights for the
                pharmaceutical industry, enabling data-driven decision making at
                every level.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower pharmaceutical companies with real-time, actionable
                insights through innovative AI solutions that enhance patient
                care and business outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Trusted Clients
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-48 mx-8 flex items-center justify-center"
                >
                  <div className="bg-gray-100 p-6 rounded-lg w-full h-24 flex items-center justify-center">
                    <span className="text-gray-800 font-medium">
                      <img src={client.logo} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
