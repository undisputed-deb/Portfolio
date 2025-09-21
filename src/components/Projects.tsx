import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Credit Card Fraud Detection System",
      githubUrl: "https://github.com/undisputed-deb/Credit-Card-Fraud-Detection-System",
      description: "Built a comprehensive machine learning system achieving 99.7% accuracy in detecting fraudulent credit card transactions using ensemble methods and advanced algorithms across 284,807 transactions.",
      tech: ["Python", "scikit-learn", "XGBoost", "SMOTE", "Pandas", "Matplotlib"],
      features: [
        "99.7% accuracy across 9 ML models including Random Forest, XGBoost, and Gradient Boosting with ensemble voting classifier",
        "97% ROC-AUC score achieving 91.8% fraud detection rate while maintaining only 2.4% false positive rate on imbalanced dataset",
        "Implemented 9 different algorithms with SMOTE balancing, cross-validation, and hyperparameter optimization for robust performance",
        "Real-time prediction capability processing transactions in under 2 seconds with automated model monitoring and drift detection",
        "Comprehensive business impact analysis showing $6,570 savings per 100 fraud attempts with detailed cost-benefit calculations"
      ],
      metrics: "99.7% accuracy • 91% detection rate"
    },
    {
      title: "IceBrAIker - AI RAG Project",
      githubUrl: "https://github.com/undisputed-deb/IceBrAIker",
      description: "Built Retrieval-Augmented Generation pipeline achieving 70% improved context retrieval accuracy using Gemini, Tavily API, and Supabase/pgvector for tone-aware AI icebreaker generation.",
      tech: ["React", "TypeScript", "Supabase", "Gemini", "Tavily API", "pgvector"],
      features: [
        "70% improved context retrieval accuracy through Retrieval-Augmented Generation pipeline integrating Gemini AI with Tavily search API",
        "80% reduction in generic outputs by implementing tone-aware AI icebreaker generation with advanced LLM optimization techniques",
        "45% increase in user engagement through React + Tailwind UI featuring animated backgrounds and responsive design patterns",
        "40% query latency reduction by deploying Supabase Edge Functions with optimized RESTful API integration and pgvector embeddings",
        "Scalable vector database architecture supporting real-time semantic search and contextual conversation starter recommendations"
      ],
      metrics: "70% retrieval accuracy • 80% less generic outputs"
    },
    {
      title: "AI Meeting Notes Automation",
      githubUrl: "https://github.com/undisputed-deb/AI-Meeting-Notes",
      description: "Increased team productivity by 40% by engineering a full-stack dashboard that transcribes audio and uses Google Gemini to generate executive summaries and sentiment analysis, converting raw conversations into actionable intelligence.",
      tech: ["Python", "React", "Google Gemini AI", "MongoDB", "TypeScript"],
      features: [
        "40% increase in team productivity by automating 85% of manual meeting documentation tasks with 92% accuracy across 50+ hours of audio",
        "95% reduction in time-to-share insights through architected responsive React/TypeScript frontend with one-click PDF report download feature", 
        "99.9% data reliability by implementing scalable MongoDB Atlas schema to securely store and index meeting transcripts, summaries, and sentiment scores",
        "Advanced sentiment analysis integration with intelligent summary generation extracting key action items and decision points automatically",
        "Real-time transcription processing with automated speaker identification and timestamp synchronization for enhanced meeting tracking"
      ],
      metrics: "40% productivity boost • 95% faster insights"
    },
    {
      title: "D.S Tutoring Center Exam App", 
      githubUrl: "https://github.com/undisputed-deb/DS-Tutoring-Exam-App",
      description: "Decreased administrative overhead by 90% by developing a secure, mobile-first web app that automates quiz generation, real-time grading, and result notifications via email.",
      tech: ["React", "TypeScript", "Flask", "Tailwind CSS"],
      features: [
        "90% reduction in administrative overhead by developing secure mobile-first web app automating quiz generation, real-time grading, and email notifications",
        "40% boost in student engagement by implementing rich text quiz interface with countdown timer, auto-submission, and gamified testing environment", 
        "70% faster content creation process through custom rich text editor in React enabling rapid creation and formatting of diverse quiz questions",
        "Streamlined Excel-compatible result storage with automated email delivery system reducing manual grading time from hours to minutes",
        "Advanced security features with user authentication, session management, and encrypted data transmission for student privacy protection"
      ],
      metrics: "90% admin time saved • 40% engagement boost"
    },
    {
      title: "AI Resume Analyzer",
      githubUrl: "https://github.com/undisputed-deb/AI-Resume-Analyzer",
      description: "Optimized candidate evaluation by achieving 95% accuracy in resume analysis using advanced NLP algorithms for ATS compatibility and keyword matching.",
      tech: ["Flask", "Python", "NLP", "Google Gemini AI", "Bootstrap", "jQuery"],
      features: [
        "95% accuracy in resume evaluation using advanced NLP algorithms for ATS compatibility scoring and keyword matching analysis",
        "60% reduction in recruiter screening time by designing dynamic Flask dashboard providing instant visual scoring with tailored feedback",
        "35% improvement in candidate match quality by integrating personalized keyword suggestions to better align resumes with target roles", 
        "Automated ATS compatibility assessment with detailed scoring breakdown identifying formatting issues and optimization opportunities",
        "Interactive dashboard with bounce-in scorecards, real-time analysis updates, and comprehensive enhancement recommendations for applicants"
      ],
      metrics: "95% accuracy • 60% faster screening"
    },
    {
      title: "Hustle Hubbub - Community Forum",
      githubUrl: "https://github.com/undisputed-deb/Hustle-Hubbub",
      description: "Increased user engagement by 40% by developing a Next.js/Supabase community forum with 13+ features including post creation/editing, comments, upvotes, search/sort, tagging, responsive dark-mode UI, and real-time updates.",
      tech: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
      features: [
        "40% increase in user engagement by developing Next.js/Supabase community forum with 13+ comprehensive features for startup collaboration",
        "Real-time updates and seamless collaboration through post creation/editing, threaded comments, upvote system, and live notification system",
        "Advanced search and tagging system with sorting capabilities, category filters, and trending content discovery for enhanced user experience",
        "Responsive dark-mode interface with mobile-optimized design ensuring consistent experience across all devices and screen sizes",
        "Scalable architecture with Supabase backend providing real-time database synchronization, user authentication, and secure data management"
      ],
      metrics: "40% engagement boost • 13+ features"
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