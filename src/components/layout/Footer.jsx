import React from 'react';
import { ArrowUp, Github, Linkedin, Globe, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', action: () => scrollToSection('home') },
        { name: 'About', action: () => scrollToSection('about') },
        { name: 'Skills', action: () => scrollToSection('skills') },
        { name: 'Projects', action: () => scrollToSection('projects') },
        { name: 'Experience', action: () => scrollToSection('experience') },
        { name: 'Contact', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Mobile App Development', action: () => scrollToSection('contact') },
        { name: 'API & Backend Development', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'Flutter & Dart', action: () => scrollToSection('skills') },
        { name: 'FastAPI & React', action: () => scrollToSection('skills') },
        { name: 'Firebase & PostgreSQL', action: () => scrollToSection('skills') }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/rushinandigam',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gnyanarushi',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Globe size={20} />,
      name: 'Portfolio',
      url: 'https://gnyanarushi.tech',
      color: 'hover:text-purple-600'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'mailto:gnyanarushi@gmail.com',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Gnyana
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mobile Application Developer crafting cross-platform
              Flutter experiences and scalable backends.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Gnyana Rushi. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;