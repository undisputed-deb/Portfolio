
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Thrift Label (Blackstone)",
      period: "June 2025 – August 2025",
      highlights: [
        "Built and maintained scalable data pipelines and web scrapers using Python, Scrapy, and Playwright, processing over 10,000 product listings daily",
        "Optimized backend infrastructure to boost performance by 25%, and contributed to UI modules using React and JavaScript",
        "Increased product categorization accuracy by 20% through efficient data cleaning and transformation logic",
        "Contributed across the full data flow — from extraction to transformation to insight"
      ]
    },
    {
      title: "Founder & CEO",
      company: "D.S Tutoring Center",
      period: "December 2023 – Present",
      highlights: [
        "Founded and operate a private tutoring center serving 100+ students across NYC, with a 95% exam pass rate",
        "Specialize in Regents, SHSAT, SAT, and AP Math prep, customizing lesson plans for different learning styles",
        "Created a full-fledged exam web app to streamline quiz creation, grading, and result communication",
        "Generated $25K+ in revenue in 12 months and maintained an 85% student retention rate"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-lg mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Loading Animation */}
        <div className="flex justify-center mt-12">
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full loading-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
