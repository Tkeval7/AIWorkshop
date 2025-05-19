import React from 'react';
import { BarChart3, MessageSquare, Upload, Shield, Settings } from 'lucide-react';
import Container from '../Container';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
        <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 size={28} />,
      title: "Dynamic Insights at Scale",
      description: "Process and analyze thousands of field interactions to identify trends and opportunities."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Conversational AI Interface",
      description: "Interact with your data through natural language queries and receive instant answers."
    },
    {
      icon: <Upload size={28} />,
      title: "Seamless Media Upload",
      description: "Easily upload voice recordings, documents, and other unstructured data for immediate analysis."
    },
    {
      icon: <Shield size={28} />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading encryption and access controls."
    },
    {
      icon: <Settings size={28} />,
      title: "Customizable and Scalable",
      description: "Tailor the platform to your specific needs and scale as your organization grows."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Powerful Features That Drive Results
          </h2>
          <p className="text-lg text-gray-600">
            ValenceAI provides the tools your pharmaceutical team needs to transform data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyFeatures;