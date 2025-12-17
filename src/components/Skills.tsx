import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 80 }
      ]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Flask", level: 92 },
        { name: "Django", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "JWT Auth", level: 88 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92 },
        { name: "Vue.js", level: 88 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Supabase", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "Google Cloud", level: 82 },
        { name: "AWS", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Git/GitHub", level: 92 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Maven", level: 85 },
        { name: "Vite", level: 88 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "scikit-learn", level: 92 },
        { name: "XGBoost", level: 88 },
        { name: "Google Gemini AI", level: 88 },
        { name: "NLP", level: 88 },
        { name: "RAG Systems", level: 85 },
        { name: "Vector DBs", level: 85 }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "ETL Pipelines", level: 92 },
        { name: "Pandas", level: 92 },
        { name: "Web Scraping", level: 90 },
        { name: "Algolia Search", level: 85 },
        { name: "Data Analysis", level: 90 },
        { name: "PyTest", level: 88 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 90 },
        { name: "Time Management", level: 92 },
        { name: "Adaptability", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors">
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