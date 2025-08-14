import React from 'react';
import { GraduationCap, Code, MapPin, Briefcase, Star, Trophy } from 'lucide-react';

const QuickFacts = () => {
  const facts = [
    {
      icon: <GraduationCap size={24} />,
      text: "Computer Science @ CCNY",
      subtext: "4.0 GPA • Fall 2028"
    },
    {
      icon: <Code size={24} />,
      text: "AI + Automation Enthusiast", 
      subtext: "Python • React • TypeScript"
    },
    {
      icon: <Briefcase size={24} />,
      text: "Data Engineering Intern",
      subtext: "Thrift Label (Blackstone)"
    },
    {
      icon: <Trophy size={24} />,
      text: "Founder & CEO",
      subtext: "D.S Tutoring Center"
    },
    {
      icon: <MapPin size={24} />,
      text: "Based in New York City",
      subtext: "Bronx, NY"
    },
    {
      icon: <Star size={24} />,
      text: "$25K+ Revenue Generated",
      subtext: "100+ Students Tutored"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-white/90 animate-fade-in hover:text-white transition-colors duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white/80 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                  {fact.icon}
                </div>
                <div className="flex-1">
                  <span className="text-lg font-medium block mb-1">{fact.text}</span>
                  <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">{fact.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;