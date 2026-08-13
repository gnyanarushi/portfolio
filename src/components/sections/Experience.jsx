import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Enterprise Application Developer Intern',
      company: 'KEPL (Koyya Enterprises Pvt. Ltd.)',
      location: 'Online/Remote',
      period: 'Jul 2026 - Present',
      type: 'Internship',
      description: 'Assisting in feature development on mobile and Firebase platforms for enterprise application delivery.',
      achievements: [
        'Building features using Flutter and Firebase for enterprise application delivery',
        'Supporting mobile app build and deployment tasks while collaborating with the engineering team'
      ],
      technologies: ['Flutter', 'Firebase', 'Mobile']
    },
    {
      title: 'Software Engineer Intern',
      company: 'KK Consultancy',
      location: 'Remote',
      period: 'Apr 2026 - Jul 2026',
      type: 'Internship',
      description: 'Developed RESTful APIs for a Docker-deployed multi-tenant ERP using FastAPI and PostgreSQL.',
      achievements: [
        'Built RESTful APIs for Admissions, Academics, Examinations and Student Management, enabling a multi-tenant ERP with 4 modules',
        'Automated cross-module workflows with FastAPI integrations, reducing manual data handling by 60% across ERP operations',
        'Reviewed code with 5+ engineers using Git, maintaining 95%+ merge accuracy across 20+ pull requests'
      ],
      technologies: ['FastAPI', 'PostgreSQL', 'Docker', 'REST APIs']
    },
    {
      title: 'Mobile Application Developer',
      company: 'KK Consultancy',
      location: 'Remote',
      period: 'Sep 2025 - Apr 2026',
      type: 'Full-time',
      description: 'Delivered Cittasya, a Flutter app for Android and iOS, contributing to 1,000+ downloads and a 4.5+ star rating.',
      achievements: [
        'Integrated Firebase Authentication, Cloud Firestore, push notifications and a payment gateway SDK',
        'Improved user retention by 30% over 3 months through integrations and performance optimization'
      ],
      technologies: ['Flutter', 'Firebase', 'Firestore', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-400 mb-2">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs border border-blue-800">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white text-sm">B.Tech Information Technology</h4>
                    <p className="text-gray-400 text-xs">SASI Institute of Technology and Engineering</p>
                    <p className="text-blue-400 text-xs font-medium">Aug 2023 - Jun 2027 · CGPA 8.73/10</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-2xl shadow-blue-500/20">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="font-medium">Software Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roles Held</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technologies</span>
                    <span className="font-medium">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="font-medium">1+ Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;