
import React from 'react';

const AnimatedBackground = () => {
  // Generate binary code strings
  const generateBinaryString = () => {
    return Array.from({ length: 40 }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f2e] to-[#0f1419]">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent" />
      
      {/* Vertical Binary Code Rain */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/30 font-mono text-xs select-none binary-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          >
            {generateBinaryString()}
          </div>
        ))}
      </div>

      {/* Additional floating binary for more density */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 font-mono text-xs select-none binary-rain-slow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
            }}
          >
            {generateBinaryString()}
          </div>
        ))}
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div 
              className="w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating glowing orbs for depth */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6'} 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Stars scattered across */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
