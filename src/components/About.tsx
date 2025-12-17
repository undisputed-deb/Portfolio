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
              I'm a <span className="text-cyan-400 font-semibold">Computer Science student</span> at The City College of New York,
              specializing in <span className="text-purple-400 font-semibold">backend engineering and full-stack development</span>.
              I'll be joining <span className="text-cyan-400 font-semibold">Mutual of Omaha as a Software Engineering Intern</span> for Spring/Summer 2026.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work across the stack building backend APIs with <span className="text-cyan-400 font-semibold">Spring Boot and Flask</span>,
              designing frontends with <span className="text-purple-400 font-semibold">React and Vue.js</span>, and deploying with
              <span className="text-cyan-400 font-semibold"> Docker and PostgreSQL</span>. My recent projects include a food waste management platform
              with JWT authentication and a fraud detection system using <span className="text-purple-400 font-semibold">Python, XGBoost, and scikit-learn</span>
              that hit 99.7% accuracy across 284K transactions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Previously, I worked as a <span className="text-cyan-400 font-semibold">Data Engineering Intern at Thrift Label (Blackstone)</span>,
              building ETL pipelines processing 10K+ listings daily. As <span className="text-purple-400 font-semibold">CTO of D.S Tutoring Center</span>,
              I've generated <span className="text-cyan-400 font-semibold">$35K+ in revenue</span> while serving 85+ students through automated platforms
              I built from scratch.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving real problems with code, whether that's stopping fraud, reducing food waste, or helping students learn.
              Always looking for opportunities to build systems that scale and make an impact.
            </p>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Tech Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Spring Boot, Flask, REST APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-300">React, Vue.js, TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-gray-300">PostgreSQL, MongoDB, Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="text-gray-300">Python, Java, Machine Learning</span>
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