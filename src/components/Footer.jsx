// frontend/src/components/Footer.jsx
import React from 'react';
// We'll import icons later if needed, e.g., from lucide-react
// import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-6">
        {/* Social Links (Optional - Add your actual links) */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/[your-username]" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            {/* <Github size={24} /> Placeholder for Icon */}
            GitHub
          </a>
          <a href="https://linkedin.com/in/[your-profile]" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            {/* <Linkedin size={24} /> Placeholder for Icon */}
            LinkedIn
          </a>
          <a href="mailto:brianbossy254@gmail.com" className="hover:text-sky-400 transition-colors">
            {/* <Mail size={24} /> Placeholder for Icon */}
            Email
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Brian. All rights reserved.</p>
        <p className="text-xs mt-1">
          Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
