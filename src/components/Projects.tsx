
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "Achieved 95% accuracy in resume evaluation with NLP-based keyword scanning and ATS compatibility scoring. Reduced recruiter screening time by 60% with an animated dashboard featuring bounce-in scorecards and tailored feedback.",
      tech: ["Flask", "Python", "Google Gemini AI", "Bootstrap", "jQuery", "NLP"],
      features: [
        "95% accuracy in resume evaluation",
        "60% reduction in recruiter screening time",
        "Animated dashboard with bounce-in effects",
        "ATS compatibility scoring",
        "Tailored feedback and enhancement tips"
      ]
    },
    {
      title: "AI Meeting Notes Automation",
      description: "Built an automation tool that transcribes audio meetings and extracts action items using Gemini AI. Automates 85% of manual meeting documentation tasks with 92% accuracy across 50+ hours of audio.",
      tech: ["Python", "Google Gemini AI", "MongoDB"],
      features: [
        "85% automation of manual tasks",
        "92% accuracy across 50+ hours of audio",
        "Sentiment analysis integration",
        "Intelligent summary generation",
        "Action-item extraction"
      ]
    },
    {
      title: "D.S Tutoring Center Exam App",
      description: "Full-featured platform delivering custom quizzes to students. Built with rich text editor, countdown timer with auto-submit, real-time score feedback, and automatic email results. Reduces admin time by 90%.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Flask"],
      features: [
        "90% reduction in admin time",
        "40% increase in student engagement",
        "Rich text editor for teachers",
        "Real-time score feedback",
        "Excel-compatible result storage"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
