import React from 'react';
import { Clock, FlaskRound as Flask, RefreshCw, Layers } from 'lucide-react';
import Container from '../Container';

interface DifferentiatorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Differentiator: React.FC<DifferentiatorProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both' 
      }}
    >
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Differentiators: React.FC = () => {
  const differentiators = [
    {
      icon: <Clock size={24} />,
      title: "Real-Time Insights",
      description: "Get immediate feedback and analysis from field interactions, allowing your team to make informed decisions faster than competitors."
    },
    {
      icon: <Flask size={24} />,
      title: "AI Trained for Pharma",
      description: "Our specialized models understand pharmaceutical terminology, regulations, and healthcare provider dynamics for unmatched accuracy."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Seamless CRM/ERP Integration",
      description: "Integrates with your existing systems, enriching your data ecosystem without disrupting workflows or requiring new infrastructure."
    },
    {
      icon: <Layers size={24} />,
      title: "Powerful Yet Simple UI",
      description: "Complex data analysis presented through an intuitive interface that anyone on your team can use without technical expertise."
    }
  ];

  return (
    <section id="differentiators" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why ValenceAI Stands Apart
          </h2>
          <p className="text-lg text-gray-600">
            Our unique approach to pharmaceutical data analysis delivers advantages that generic AI solutions simply can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <Differentiator
              key={index}
              icon={diff.icon}
              title={diff.title}
              description={diff.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Differentiators;