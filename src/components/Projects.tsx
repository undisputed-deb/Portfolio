import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "IceBrAIker - AI RAG Project",
      githubUrl: "https://deb-icebraiker.netlify.app/",
      description: "Built Retrieval-Augmented Generation pipeline using Gemini + Tavily + Supabase/pgvector, improving context retrieval accuracy by 70% and reducing generic outputs from 80% to 20% through tone-aware AI icebreaker generation.",
      tech: ["React", "TypeScript", "Supabase", "Gemini AI", "Tavily API", "Tailwind CSS"],
      features: [
        "70% improvement in context retrieval accuracy",
        "80% reduction in generic AI outputs", 
        "45% increase in user engagement",
        "40% reduction in query latency",
        "Real-time tone-aware generation",
        "Supabase Edge Functions integration"
      ],
      metrics: "70% accuracy boost • 80% better personalization"
    },
    {
      title: "AI Resume Analyzer",
      githubUrl: "https://github.com/undisputed-deb/AI-Resume-Analyzer",
      description: "Optimized candidate evaluation by achieving 95% accuracy in resume analysis using advanced NLP algorithms for ATS compatibility and keyword matching.",
      tech: ["Flask", "Python", "NLP", "Google Gemini AI", "Bootstrap", "jQuery"],
      features: [
        "95% accuracy in resume evaluation",
        "60% reduction in recruiter screening time",
        "35% improvement in candidate match quality", 
        "Dynamic Flask dashboard with visual scoring",
        "Personalized keyword suggestions"
      ],
      metrics: "95% accuracy • 60% faster screening"
    },
    {
      title: "AI Meeting Notes Automation",
      githubUrl: "https://github.com/undisputed-deb/AI-Meeting-Notes",
      description: "Increased team productivity by 40% by engineering a full-stack dashboard that transcribes audio and uses Google Gemini to generate executive summaries and sentiment analysis, converting raw conversations into actionable intelligence.",
      tech: ["Python", "React", "Google Gemini AI", "MongoDB", "TypeScript"],
      features: [
        "40% increase in team productivity",
        "95% reduction in time-to-share insights", 
        "99.9% data reliability with MongoDB Atlas",
        "One-click PDF report generation",
        "Real-time sentiment analysis integration"
      ],
      metrics: "40% productivity boost • 95% faster insights"
    },
    {
      title: "Collaborative Design Studio",
      githubUrl: "https://sketch-together.netlify.app/",
      description: "Engineered 60fps canvas rendering with optimized drawing algorithms and AI magic studio integration, achieving 3x performance improvement over standard implementations with real-time collaboration via WebSockets.",
      tech: ["React", "TypeScript", "Next.js", "Canvas API", "WebSockets", "AI Integration"],
      features: [
        "60fps canvas rendering performance",
        "3x faster than standard implementations", 
        "85% increase in user retention",
        "Zero data loss with auto-save",
        "Real-time collaborative editing",
        "AI-powered magic studio tools"
      ],
      metrics: "3x performance boost • 85% retention increase"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors hover:underline cursor-pointer"
                  >
                    {project.title}
                  </a>
                  <div className="text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                    {project.metrics}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Key Impact & Features
                  </h4>
                  <div className="grid gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-start group/feature">
                        <span className="text-cyan-400 mr-3 mt-1 group-hover/feature:text-cyan-300 transition-colors">▶</span>
                        <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-500/25 hover:to-purple-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500"></span>
            <span className="text-sm font-medium">View more on GitHub</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;