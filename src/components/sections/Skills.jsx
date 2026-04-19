import React from 'react';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'TypeScript',
    'Java',
    'React',
    'Tailwind CSS',
    'Flutter',
    'Node.js',
    'MongoDB',
    'Express.js'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills & Technologies
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-black-800">
              <h3 className="text-2xl font-semibold mb-8 text-white text-center">Core Technologies</h3>
              <div className="overflow-x-hidden hide-scrollbar">
                <div className="flex flex-nowrap gap-4 animate-marquee whitespace-nowrap">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-200 border border-blue-400/30 animate-popin"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                  {/* Repeat for seamless loop */}
                  {skills.map((skill, index) => (
                    <span
                      key={`repeat-${index}`}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-200 border border-blue-400/30 animate-popin"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600">
              <h4 className="text-lg font-semibold mb-4 text-white text-center">Currently Learning</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Spring Boot', 'System Design', 'Devops'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-600 text-gray-200 rounded-full text-sm border border-gray-500 hover:bg-gray-500 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;