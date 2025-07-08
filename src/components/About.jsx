import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Learning to write maintainable, efficient code'
    },

    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Learning optimization techniques for better performance'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passion',
      description: 'Passionate about learning and creating digital solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900  ">
      <div className="container mx-auto px-6 animate-fadein">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 text-center md:text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate computer science student at SASI Institute of Technology and Engineering,
                specializing in full-stack development and mobile app development with Flutter.
                My journey began with a curiosity about how things work, which led me to explore
                the endless possibilities of code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                As a fresher in the tech industry, I'm eager to apply my knowledge in real-world projects.
                I have hands-on experience through internships and freelance work, focusing on creating
                user-friendly applications and responsive web interfaces.
              </p>

              
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-2xl shadow-blue-500/20 flex flex-col items-center animate-fadein-slideup" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4 w-full">
                <div className="flex justify-between w-full text-lg">
                  <span>Education</span>
                  <span className="font-medium">B.Tech IT</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>Institute</span>
                  <span className="font-medium">SASI</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>Internships</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group border border-gray-700 animate-fadein-slideup`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;