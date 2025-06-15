
import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:deb86011@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Message Prepared!",
        description: "Your email client should open with the message ready to send.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-bounce">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Get in Touch</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, or just connect with fellow developers. 
              Whether you're looking for a data engineer, full-stack developer, or someone passionate about AI automation, 
              let's start a conversation!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail size={24} className="text-cyan-400" />
                <span>deb86011@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MessageSquare size={24} className="text-cyan-400" />
                <span>Available for freelance projects</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <User size={24} className="text-cyan-400" />
                <span>Open to full-time opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-500/30 hover:scale-105 transition-transform duration-300">
            <span className="text-gray-300">Ready to build something amazing together?</span>
            <span className="text-cyan-400 font-semibold">Let's make it happen! 🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
