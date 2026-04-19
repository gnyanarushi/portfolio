import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImg from '../../assets/images/rishi.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-bl from-blue-900 via-gray-950 to-black"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left — Text Content */}
          <div className="flex-1 text-left animate-hero-entrance">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Gnyana Rushi
            </h1>
            <h3 className="text-lg md:text-xl text-gray-400 mb-10 font-medium">
              Full-Stack Web &amp; Mobile App Developer
            </h3>

            {/* Social Links */}
            <div className="flex space-x-4 mb-10">
              <a
                href="mailto:gnyanarushi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/70 backdrop-blur rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 animate-hero-icon"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="sr-only">Email</span>
                <Mail size={22} className="text-gray-200" />
              </a>
              <a
                href="https://github.com/gnyanarushi-nandigam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/70 backdrop-blur rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 animate-hero-icon"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="sr-only">GitHub</span>
                <Github size={22} className="text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/rushi-nandigam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/70 backdrop-blur rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30 animate-hero-icon"
                style={{ animationDelay: '0.6s' }}
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={22} className="text-gray-200" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('about')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40 animate-hero-icon"
              style={{ animationDelay: '0.8s' }}
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right — Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-hero-entrance">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 blur-3xl scale-125 pointer-events-none" />

              {/* Decorative dots */}
              <span className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-blue-500 opacity-80 animate-ping" />
              <span className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-500 opacity-70" />
              <span className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-blue-400 opacity-50" />

              {/* Gradient border + float animation */}
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-800 animate-float shadow-2xl shadow-blue-900/50">
                <div className="rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-900">
                  <img
                    src={profileImg}
                    alt="Gnyana Rushi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
