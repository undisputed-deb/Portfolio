
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import QuickFacts from '../components/QuickFacts';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialNav from '../components/SocialNav';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <SocialNav />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <QuickFacts />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
