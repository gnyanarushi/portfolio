import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Koyya Enterprises Private Limited',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Internship',
      description: 'Currently working as an intern, gaining hands-on experience in mobile application development and contributing to real-world projects.',
      achievements: [
        'Learning industry best practices and development workflows',
        'Contributing to team projects and gaining practical experience',
        'Developing skills in collaborative software development'
      ],
      technologies: ['Flutter', 'Bloc',  'Git']
    },
    {
      title: 'Data Analyst',
      company: 'Mainflow Technologies',
      location: 'Remote',
      period: '2024',
      type: 'Virtual Internship',
      description: 'Worked as a data analyst, learning to process and analyze data to derive meaningful insights for business decisions.',
      achievements: [
        'Analyzed datasets to identify trends and patterns',
        'Created data visualizations and reports',
        'Learned data processing and analysis techniques'
      ],
      technologies: [ 'Data Analysis', 'Python','Visualization']
    },
    {
      title: 'Web Developer',
      company: 'Apex Planet',
      location: 'Remote',
      period: '2024',
      type: 'Virtual Internship',
      description: 'Worked as a  web developer, creating responsive websites and learning modern web development practices.',
      achievements: [
        'Developed responsive websites using modern technologies',
        'Learned client communication and project management',
        'Gained experience in frontend development best practices'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript']
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
                    <p className="text-blue-400 text-xs font-medium">2023 </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-2xl shadow-blue-500/20">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="font-medium">Student</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Internships</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technologies</span>
                    <span className="font-medium">6+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Learning Mode</span>
                    <span className="font-medium">Active</span>
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