// frontend/src/components/About.jsx
import React from 'react';
import { Briefcase, Zap, Award, Linkedin, Github, UserCircle2 } from 'lucide-react'; // Updated UserCircle icon

const About = () => {
  const skills = [
    { name: 'JavaScript (ES6+)', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Advanced' },
    { name: 'React & Next.js', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Advanced' },
    { name: 'Node.js & Express', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Intermediate' },
    { name: 'MongoDB & SQL', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Advanced' },
    { name: 'Git & GitHub', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Advanced' },
    { name: 'Python', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Intermediate' },
    { name: 'RESTful APIs', icon: <Zap size={18} className="mr-2 text-sky-400" />, level: 'Proficient' },
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into my journey, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Profile Image Section */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-sky-600 to-blue-700 p-1 shadow-2xl mb-6 transform transition-all duration-500 hover:scale-105">
            
              <img
                src="https://placehold.co/256x256/7dd3fc/1e293b?text=Me&font=Inter" // Placeholder image
                alt="[Brian]"
                className="w-full h-full rounded-full object-cover border-4 border-gray-800"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x256/7f8c8d/ffffff?text=Img+Error"; }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-sky-300 mb-1">Brian</h3>
            <p className="text-gray-400 mb-4">Full Stack Developer</p>
            <div className="flex space-x-4">
              <a 
                href="[Your LinkedIn URL]" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-sky-400 transition-colors p-2 bg-gray-700 rounded-full hover:bg-sky-600"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="[Your GitHub URL]" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-sky-400 transition-colors p-2 bg-gray-700 rounded-full hover:bg-sky-600"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

        
          <div className="md:col-span-8">
            <div className="bg-gray-750 p-6 sm:p-8 rounded-xl shadow-xl bg-opacity-50 backdrop-blur-md border border-gray-700">
              <h3 className="text-2xl font-semibold text-sky-400 mb-4 flex items-center">
                <UserCircle2 size={28} className="mr-3 text-sky-500" /> Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello! I'm Brian, a passionate and results-driven Full Stack Developer with a strong foundation in creating dynamic and user-friendly web applications. My journey into the world of code began with a fascination for how technology can solve real-world problems and has since evolved into a deep-seated passion for building elegant and efficient digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                I thrive in collaborative environments and enjoy the challenge of learning new technologies and methodologies. I'm dedicated to writing clean, maintainable code and continuously improving my skill set to deliver high-quality products. When I'm not coding, I enjoy [mention a hobby or two, e.g., exploring new tech trends, hiking, or playing a musical instrument].
              </p>

              <h3 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center">
                <Briefcase size={28} className="mr-3 text-sky-500" /> My Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-gray-700 p-3 rounded-lg flex items-center shadow-md hover:shadow-sky-500/30 transition-shadow duration-300"
                  >
                    {skill.icon}
                    <span className="text-gray-200 text-sm sm:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
