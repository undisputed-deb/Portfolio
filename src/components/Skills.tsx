
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 80 },
        { name: "HTML/CSS", level: 92 }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", level: 90 },
        { name: "Flask", level: 92 },
        { name: "Django", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Git", level: 88 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "Data Engineering", level: 95 },
        { name: "Web Scraping", level: 92 },
        { name: "NLP", level: 88 },
        { name: "AI Automation", level: 90 },
        { name: "REST APIs", level: 87 },
        { name: "Full-stack Dev", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full skill-progress-bar"
                        style={{ 
                          '--target-width': `${skill.level}%`,
                          animationDelay: `${(index * 0.2) + (idx * 0.1)}s`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
