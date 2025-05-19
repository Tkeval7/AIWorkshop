import React from 'react';
import Header from './components/Header';
import Hero from './components/home/Hero';
import PlatformOverview from './components/home/PlatformOverview';
import KeyFeatures from './components/home/KeyFeatures';
import Differentiators from './components/home/Differentiators';
import FinalCTA from './components/home/FinalCTA';
import Footer from './components/Footer';
import './utils/animations.css';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PlatformOverview />
        <KeyFeatures />
        <Differentiators />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;