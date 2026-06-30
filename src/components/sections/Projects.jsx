import React from 'react';
import { Github, Mouse, Video, Image, Sparkles, Database, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DeployShield',
      description: 'A deployment monitoring application that tracks and surfaces the health and status of an application\'s deployments in real time.',
      icon: <ShieldCheck size={36} />,
      technologies: ['TypeScript', 'Python', 'REST APIs'],
      github: 'https://github.com/rushinandigam/deploysheild-frontend'
    },
    {
      title: 'Smart Content Generator',
      description: 'An AI-assisted content generation tool that helps draft and refine written content through a clean, responsive web interface.',
      icon: <Sparkles size={36} />,
      technologies: ['TypeScript', 'Next.js'],
      github: 'https://github.com/gnyanarushi/Smart-Content-Generator'
    },
    {
      title: 'CSV Query Engine',
      description: 'A custom Python query engine that lets you run structured queries directly against CSV files, no database required.',
      icon: <Database size={36} />,
      technologies: ['Python'],
      github: 'https://github.com/rushinandigam/csv_query_engine'
    },
    {
      title: 'Mobile Mouse Controller',
      description: 'A cross-platform Flutter app that turns a smartphone into a wireless mouse and keyboard using TCP, UDP and WebSocket communication.',
      icon: <Mouse size={36} />,
      technologies: ['Flutter', 'Dart', 'WebSocket'],
      github: 'https://github.com/gnyanarushi/mobile-mouse-mobile-app'
    },
    {
      title: 'Any Video Downloader',
      description: 'A modern video downloader built with Next.js supporting URL validation, media download and a responsive UI for platforms like YouTube and Instagram.',
      icon: <Video size={36} />,
      technologies: ['Next.js', 'React'],
      github: 'https://github.com/gnyanarushidev/any-video-downloader'
    },
    {
      title: 'Wallpaper Application',
      description: 'A Flutter application for browsing, downloading and applying wallpapers with a clean, intuitive mobile interface.',
      icon: <Image size={36} />,
      technologies: ['Flutter', 'Dart'],
      github: 'https://github.com/gnyanarushi/WallpaperApplication'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A few things I've built outside of work — spanning mobile, web and backend.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group border border-gray-700 animate-fadein-slideup hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-700/20 border-b border-gray-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
