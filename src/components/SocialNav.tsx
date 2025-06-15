
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialNav = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <a
        href="https://github.com/undisputed-deb"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110 glow-border-subtle"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/debashrestha-nandi-a789a1340"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110 glow-border-subtle"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:deb86011@gmail.com"
        className="p-3 bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110 glow-border-subtle"
      >
        <Mail size={20} />
      </a>
    </div>
  );
};

export default SocialNav;
