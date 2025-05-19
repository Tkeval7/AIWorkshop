import React from 'react';
import Hero from '../components/home/Hero';
import PlatformOverview from '../components/home/PlatformOverview';
import KeyFeatures from '../components/home/KeyFeatures';
import Differentiators from '../components/home/Differentiators';
import FinalCTA from '../components/home/FinalCTA';
import '../utils/animations.css';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <PlatformOverview />
      <KeyFeatures />
      <Differentiators />
      <FinalCTA />
    </main>
  );
};

export default HomePage;