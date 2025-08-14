import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Thrift Label (Blackstone)",
      period: "June 2025 – August 2025",
      highlights: [
        "Built custom web scrapers for e-commerce data extraction, automated data cleaning processes, and deployed scalable pipelines with CI/CD workflows—transforming raw web data into business-ready insights",
        "Developed 15+ Scrapy spiders processing 10K+ product listings daily, accelerating backend performance by 25%",
        "Built automated data cleaning workflows reducing inconsistencies by 85% and ensuring 99.7% data accuracy",
        "Restructured JSON architecture cutting backend-to-frontend latency by 35% for 10K+ daily users",
        "Integrated PMWeb dashboards eliminating 16 hours/week manual reporting for 3 cross-functional teams",
        "Implemented PyTest/Selenium CI/CD workflows achieving 30% improvement in defect detection rates"
      ],
      techStack: {
        "Languages & Core Technologies": [
          "Python", "SQL", "JavaScript/TypeScript"
        ],
        "Web Scraping & Data Extraction": [
          "Scrapy (custom spiders)", "BeautifulSoup", "Requests", "Selenium", "Regular Expressions (Regex)", "Playwright"
        ],
        "Data Processing & Analysis": [
          "Pandas", "NumPy", "JSON"
        ],
        "Testing & Quality Assurance": [
          "PyTest", "Selenium WebDriver"
        ],
        "Cloud & Database": [
          "Google Cloud Platform", "MongoDB Atlas", "Algolia"
        ],
        "DevOps & Integration": [
          "Git/GitHub", "CI/CD Pipelines", "PMWeb"
        ],
        "Data Formats & Storage": [
          "JSON", "CSV"
        ]
      }
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
              
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Section */}
              {exp.techStack && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Tech Stack & Tools</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(exp.techStack).map(([category, tools]) => (
                      <div key={category} className="bg-gray-900/30 rounded-lg p-4">
                        <h5 className="text-sm font-medium text-purple-400 mb-2">{category}</h5>
                        <div className="flex flex-wrap gap-1">
                          {tools.map((tool, toolIdx) => (
                            <span
                              key={toolIdx}
                              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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