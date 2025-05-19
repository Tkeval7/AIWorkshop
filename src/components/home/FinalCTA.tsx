import React from "react";
import Button from "../Button";
import Container from "../Container";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Pharma Operations?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Contact our team today to learn how ValenceAI can help you unlock
            the full potential of your data.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button variant="primary" size="lg" className=" text-blue-700 ">
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
