// frontend/src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import ProjectsCanvas from './ProjectsCanvas'; // Import the new 3D canvas

// Sample project data - replace with your actual projects
const projectData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, shopping cart, user authentication, and order processing. Built using the MERN stack.',
    imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=E-commerce+Project&font=Inter',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
    liveLink: '#', // Replace with actual link
    repoLink: '#', // Replace with actual link
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative tool to help teams organize, track, and manage tasks and projects effectively with real-time updates and notifications.',
    imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Task+Manager&font=Inter',
    tech: ['React', 'Firebase', 'Material UI', 'Context API'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website V2',
    description: 'This very portfolio website, designed to showcase my skills and projects. Built with React, Vite, and Tailwind CSS, featuring 3D animations.',
    imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=My+Portfolio&font=Inter',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'R3F'],
    liveLink: '#', // Link to the current site if deployed
    repoLink: '#',
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-700 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/40 z-10"> {/* Ensure cards are above canvas */}
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-52 sm:h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/7f8c8d/ffffff?text=Image+Not+Found&font=Inter"; }}
      />
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-sky-400">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-200 mb-2 uppercase tracking-wider flex items-center">
            <Layers size={16} className="mr-2 text-sky-500" /> Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techItem, index) => (
              <span 
                key={index} 
                className="bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex space-x-3">
          {project.liveLink && project.liveLink !== '#' && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white py-2.5 px-4 rounded-md transition-colors text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <ExternalLink size={16} className="mr-2" /> Live Demo
            </a>
          )}
          {project.repoLink && project.repoLink !== '#' && (
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white py-2.5 px-4 rounded-md transition-colors text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <Github size={16} className="mr-2" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center items-center overflow-hidden" // Added relative and overflow-hidden
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <ProjectsCanvas />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto relative z-10"> {/* Ensure content is above canvas */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto bg-gray-900 bg-opacity-50 p-2 rounded-md"> {/* Added slight bg for readability */}
            Here are some of the projects I've worked on. Explore them to see my skills in action.
          </p>
        </div>

        {projectData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">Projects coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
