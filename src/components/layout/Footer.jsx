import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

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
        { name: 'Web Development', action: () => scrollToSection('contact') },
        { name: 'Code Review', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'React & Next.js', action: () => scrollToSection('skills') },
        { name: 'Node.js & Python', action: () => scrollToSection('skills') },
        { name: 'Mobile Development', action: () => scrollToSection('skills') }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/gnyana',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gnyana',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: 'https://twitter.com/gnyana',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'gnyanarushi@gmail.com',
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
              Full-Stack Developer passionate about creating
              innovative digital experiences that make a difference.
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
              <span>© {currentYear} Gnyana. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in Tadepalligudem</span>
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