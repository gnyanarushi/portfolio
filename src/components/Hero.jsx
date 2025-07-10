import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-start  bg-gradient-to-bl from-blue-800 to-black-900">
      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl animate-hero-entrance text-left">
          <h2 className="text-2xl text-gray-300 mb-2 font-medium">Hi, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Gnyana Rushi</h1>
          <h3 className="text-lg text-gray-400 mb-8 font-medium">Full-Stack Web and Mobile App Developer</h3>
          <div className="flex space-x-6 mb-12">
            <a href="gnyanarushi@gmail.com" target="_blank"  className="p-3 bg-gray-800 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl animate-hero-icon" style={{ animationDelay: '0.2s' }}><span className="sr-only">Email</span><Mail size={24} className="text-gray-200" /></a>
            <a href="https://github.com/gnyanarushi-nandigam" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl animate-hero-icon" style={{ animationDelay: '0.4s' }}><span className="sr-only">GitHub</span><Github size={24} className="text-gray-200" /></a>
            <a href="https://www.linkedin.com/in/rushi-nandigam" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl animate-hero-icon" style={{ animationDelay: '0.6s' }}><span className="sr-only">LinkedIn</span><Linkedin size={24} className="text-gray-200" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;