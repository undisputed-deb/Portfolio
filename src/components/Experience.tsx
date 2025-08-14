import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Thrift Label (Blackstone)",
      location: "Manhattan, NY",
      period: "June 2025 – August 2025",
      highlights: [
        "Built custom web scrapers for e-commerce data extraction, automated data cleaning processes, and deployed scalable pipelines with CI/CD workflows transforming raw web data into business-ready insights",
        "Developed 15+ Scrapy spiders processing 10K+ product listings daily, accelerating backend performance by 25%",
        "Built automated data cleaning workflows reducing inconsistencies by 85% and ensuring 99.7% data accuracy",
        "Restructured JSON architecture cutting backend-to-frontend latency by 35% for 10K+ daily users",
        "Integrated PMWeb dashboards eliminating 16 hours/week manual reporting for 3 cross-functional teams",
        "Implemented PyTest/Selenium CI/CD workflows achieving 30% improvement in defect detection rates",
        "Architected Firebase/Google Cloud pipelines supporting 300% increase in data processing capacity"
      ],
      techStack: {
        "Languages & Core Technologies": [
          "Python",
          "SQL", 
          "JavaScript/TypeScript"
        ],
        "Web Scraping & Data Extraction": [
          "Scrapy (custom spiders)",
          "BeautifulSoup",
          "Requests",
          "Selenium",
          "Regular Expressions (Regex)",
          "Playwright"
        ],
        "Data Processing & Analysis": [
          "Pandas",
          "NumPy",
          "JSON"
        ],
        "Testing & Quality Assurance": [
          "PyTest",
          "Selenium WebDriver"
        ],
        "Cloud & Database": [
          "Google Cloud Platform",
          "MongoDB Atlas",
          "Algolia"
        ],
        "DevOps & Integration": [
          "Git/GitHub",
          "CI/CD Pipelines",
          "PMWeb"
        ],
        "Data Formats & Storage": [
          "JSON",
          "CSV"
        ]
      }
    },
    {
      title: "Web Accessibility & Digital Systems Intern",
      company: "Baxter St. Camera Club",
      location: "Manhattan, NY", 
      period: "September 2025 – Present",
      highlights: [
        "Developed web accessibility compliance systems by implementing WCAG 2.1 AA standards and creating automated alt-text generation for 500+ digital gallery assets",
        "Built content management workflows for multimedia archives, implementing video transcription APIs and digital asset organization using database normalization",
        "Engineered structured CRM databases for alumni tracking and partnership management, improving data retrieval efficiency by 60%",
        "Integrated mobile application features through Bloomberg Connects platform APIs, enhancing user engagement metrics by 45%",
        "Created digital exhibition platforms including responsive online viewing rooms with cross-browser compatibility and mobile optimization",
        "Designed automated documentation systems for event management using workflow automation tools, reducing manual processing time by 70%",
        "Developed cross-platform content distribution strategies implementing RESTful APIs for multi-channel arts programming delivery"
      ],
      techStack: {
        "Web Development": [
          "HTML5", "CSS3", "JavaScript", "Responsive Design"
        ],
        "Accessibility & Standards": [
          "WCAG 2.1 AA", "ARIA", "Screen Reader Testing", "Accessibility Auditing"
        ],
        "Content Management": [
          "CMS Development", "Database Design", "Digital Asset Management"
        ],
        "API Integration": [
          "RESTful APIs", "Bloomberg Connects API", "Video Transcription APIs"
        ],
        "Database & Backend": [
          "SQL", "Database Normalization", "CRM Systems"
        ],
        "Tools & Platforms": [
          "Git", "Cross-browser Testing", "Workflow Automation"
        ]
      }
    },
    {
      title: "Founder & CEO",
      company: "D.S Tutoring Center",
      location: "Bronx, NY",
      period: "December 2023 – Present",
      highlights: [
        "Increased student test scores by an average of 180 points by delivering personalized SAT, ACT, and AP Math instruction to 100+ students, achieving a 95% pass rate",
        "Generated $25K+ revenue in 9 months by developing curriculum frameworks and building a client base through referrals, achieving an 85% student retention rate",
        "Oversaw 7 teachers and staff while tracking progress for 120+ students using automated Excel dashboards",
        "Developed a secure, mobile-first web application that automates quiz generation, real-time grading, and result notifications, reducing administrative overhead by 90%"
      ],
      techStack: {
        "Full-Stack Development": [
          "React", "TypeScript", "Flask", "Tailwind CSS"
        ],
        "Business Analytics": [
          "Excel Automation", "Dashboard Creation", "Data Visualization"
        ],
        "Project Management": [
          "Team Leadership", "Process Optimization", "Client Relations"
        ]
      }
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
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <span className="text-gray-400 text-lg mt-2 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start group/item">
                    <span className="text-cyan-400 mr-3 mt-1 group-hover/item:text-cyan-300 transition-colors">▶</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Section */}
              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2">⚡</span>
                  Tech Stack & Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(exp.techStack).map(([category, tools]) => (
                    <div key={category} className="bg-gray-900/40 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                      <h5 className="text-sm font-medium text-purple-400 mb-3 uppercase tracking-wide">
                        {category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool, toolIdx) => (
                          <span
                            key={toolIdx}
                            className="text-xs bg-gray-700/60 text-gray-300 px-3 py-1.5 rounded-full border border-gray-600/30 hover:bg-gray-600/60 hover:text-white transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500"></span>
            <span className="text-sm font-medium">3 Professional Experiences</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;