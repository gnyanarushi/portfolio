import { Code, Smartphone, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, well-structured code with clean architecture'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Cross-Platform',
      description: 'Shipping production Android & iOS apps from a single Flutter codebase'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing app performance and responsiveness across platforms'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working cross-functionally with code reviews and Git workflows'
    }
  ];

  return (
    <section id="about" className="relative w-full bg-gradient-to-bl from-gray-900 to-gray-900 overflow-hidden pt-0 pb-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="space-y-8 text-center md:text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a backend and mobile software engineer working across Java, Python, Flutter,
                React, FastAPI, PostgreSQL and Docker. I've designed a multi-tenant ERP covering
                Admissions, Academics, Examinations and Student Management, and shipped production
                Android/iOS apps like Cittasya with Firebase, push notifications and payment gateways.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently a Software Engineer at KK Consultancy and an Enterprise Application
                Developer Intern at KEPL, I apply Data Structures, Algorithms and OOP to solve real
                problems. I care about clean architecture, performance, and writing code that's easy
                for a team to review and build on through testing and Git-based collaboration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-10 text-white shadow-2xl shadow-blue-500/20 flex flex-col items-center animate-fadein-slideup" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4 w-full">
                <div className="flex justify-between w-full text-lg">
                  <span>Role</span>
                  <span className="font-medium">Software Engineer</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>Focus</span>
                  <span className="font-medium">Backend &amp; Mobile</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>Education</span>
                  <span className="font-medium">B.Tech IT, SASI</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>CGPA</span>
                  <span className="font-medium">8.73</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>ERP Modules Built</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between w-full text-lg">
                  <span>Apps Shipped</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group border border-gray-700 animate-fadein-slideup"
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