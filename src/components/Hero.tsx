import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const titles = [
    'Computer Science Student at CCNY',
    'Web Accessibility & Digital Systems Intern @Baxter St. Camera Club',
    'Data Engineering Intern @Thrift Label(Blackstone)',
    'Software Developer',
    'Chief Technical Officer @ D.S Tutoring Center'
  ];

  useEffect(() => {
    const currentString = titles[currentTitle];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitle, titles]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Floating elements for extra tech feel */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {Math.random() > 0.5 ? '{ }' : '< />'}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Glitch Name Effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 relative">
          <span className="glitch-text text-white font-mono tracking-wider text-glow">
            Debashrestha Nandi
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="h-16 mb-12 flex items-center justify-center">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide min-h-[2rem] text-center">
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full font-semibold text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 pulse-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-black border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 glow-border"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full relative mb-2 glow-border">
          <div className="w-1 h-3 bg-cyan-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
        <ArrowDown size={20} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;