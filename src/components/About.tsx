import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-cyan-400 font-semibold">Computer Science student</span> at The City College of New York, 
              specializing in <span className="text-purple-400 font-semibold">AI automation, data engineering, and full-stack development</span>. 
              Currently working as a <span className="text-cyan-400 font-semibold">Web Accessibility & Digital Systems Intern at Baxter St. Camera Club</span>, 
              where I implement WCAG 2.1 AA compliance and build scalable API workflows with modern cloud technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This past summer, I worked as a <span className="text-purple-400 font-semibold">Data Engineering Intern at Thrift Label (Blackstone)</span>, 
              where I built scalable ETL pipelines processing 10K+ listings daily and integrated Algolia search data into MongoDB and GCP pipelines. 
              I developed automation solutions that saved 16 hours of manual reporting per week across multiple teams.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As the <span className="text-purple-400 font-semibold">Chief Technical Officer of D.S Tutoring Center</span>, I've generated over 
              <span className="text-cyan-400 font-semibold"> $25K in revenue</span> in 18 months while building automated grading dashboards 
              and scaling operations for 120+ students. I combine technical expertise with entrepreneurial leadership to create innovative solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My recent work includes building a <span className="text-cyan-400 font-semibold">machine learning fraud detection system</span> 
              with 99.7% accuracy, developing <span className="text-purple-400 font-semibold">AI-powered RAG systems</span> with Retrieval-Augmented 
              Generation, and creating full-stack applications that leverage modern technologies like React, Python, and cloud platforms.
            </p>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Current Focus</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Web Accessibility & Digital Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-300">Machine Learning & AI Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="text-gray-300">Entrepreneurship & Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;