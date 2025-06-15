
import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-cyan-400 font-semibold">Computer Science student at The City College of New York</span> with a perfect <span className="text-purple-400 font-semibold">4.0 GPA</span>. 
              Currently serving as a <span className="text-green-400 font-semibold">Data Engineering Intern at Thrift Label (Blackstone)</span>, where I architect 
              scalable data pipelines that process millions of records efficiently.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My expertise spans <span className="text-cyan-400 font-semibold">full-stack development, data engineering, and AI automation</span>. 
              I build production-ready applications using Python, JavaScript/TypeScript, React, and Flask, with experience in 
              <span className="text-purple-400 font-semibold"> cloud platforms, databases, and REST APIs</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              As <span className="text-yellow-400 font-semibold">Founder & CEO of D.S Tutoring Center</span>, I've generated <span className="text-green-400 font-semibold">$25K+ revenue</span> 
              with a <span className="text-purple-400 font-semibold">95% student success rate</span> across 100+ students. I bring a unique combination of 
              <span className="text-cyan-400 font-semibold">technical skills, business acumen, and leadership experience</span> to drive measurable results.
            </p>

            <div className="flex gap-6">
              <a
                href="https://github.com/undisputed-deb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/debashrestha-nandi-a789a1340"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:deb86011@gmail.com"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Mail size={24} />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="animate-scale-in flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring with rotating gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 animate-spin opacity-75" style={{ animationDuration: '8s' }}></div>
              
              {/* Inner container */}
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center border border-cyan-500/30">
                
                {/* Tech icons floating around */}
                <div className="absolute top-8 left-12 text-cyan-400 animate-float">
                  <Code size={24} />
                </div>
                <div className="absolute top-12 right-8 text-purple-400 animate-float" style={{ animationDelay: '1s' }}>
                  <Database size={24} />
                </div>
                <div className="absolute bottom-8 left-8 text-blue-400 animate-float" style={{ animationDelay: '2s' }}>
                  <Cpu size={24} />
                </div>
                
                {/* Center content */}
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    DN
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Data Engineer
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Full-Stack Developer
                  </div>
                  
                  {/* Pulse indicator */}
                  <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mt-3 animate-pulse"></div>
                  <div className="text-xs text-green-400 mt-1">Available</div>
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
