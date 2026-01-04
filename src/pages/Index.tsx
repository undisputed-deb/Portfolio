import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import QuickFacts from '../components/QuickFacts';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialNav from '../components/SocialNav';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Debashrestha Nandi - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Debashrestha Nandi - Computer Science student at CCNY, SWE Intern at Mutual of Omaha. Specializing in full-stack development, data engineering, machine learning, and scalable systems. Featured projects: Credit Card Fraud Detection (99.7% accuracy), Food Waste Management, AI RAG systems, and more."
        />
        <meta
          name="keywords"
          content="Debashrestha Nandi, Software Engineer, Full Stack Developer, Data Engineer, Machine Learning, React, Python, Spring Boot, PostgreSQL, AI, CCNY, Computer Science"
        />
        <link rel="canonical" href="https://debportfolio.vercel.app/" />
      </Helmet>

      <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <AnimatedBackground />
        <SocialNav />
        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <QuickFacts />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;
