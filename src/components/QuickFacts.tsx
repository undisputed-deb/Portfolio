
import React from 'react';
import { GraduationCap, Code, MapPin, Briefcase, Star, Trophy } from 'lucide-react';

const QuickFacts = () => {
  const facts = [
    {
      icon: <GraduationCap size={24} />,
      text: "Computer Science @ CCNY"
    },
    {
      icon: <Code size={24} />,
      text: "Software Developer"
    },
    {
      icon: <MapPin size={24} />,
      text: "New York, NY"
    },
    {
      icon: <Briefcase size={24} />,
      text: "Data Engineering Intern"
    },
    {
      icon: <Trophy size={24} />,
      text: "Founder & CEO"
    },
    {
      icon: <Star size={24} />,
      text: "4.0 GPA Student"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white/90 animate-fade-in hover:text-white transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white/80">
                  {fact.icon}
                </div>
                <span className="text-lg font-medium">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
