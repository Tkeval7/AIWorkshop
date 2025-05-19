import React from 'react';
import Button from '../Button';
import Container from '../Container';

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-blue-50 opacity-40 blur-3xl"></div>
          
          {/* Animated data flow lines */}
          <div className="hidden lg:block absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-10 animate-flow"
                style={{
                  top: `${15 + i * 20}%`,
                  left: '-10%',
                  right: '-10%',
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${7 + i * 1}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              AI-Powered Field Insights for Life Sciences
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Empower your teams to build stronger relationships with healthcare professionals, provide enhanced support to your field force, and accelerate brand growth—all through real-time insights and AI-driven engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="group">
                <span>Learn More</span>
                <svg 
                  width="20" 
                  height="20"
                  className="ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-30 group-hover:opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;