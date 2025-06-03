// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
// We'll import icons later if needed, e.g., from lucide-react
// import { HomeIcon, User, Code, GraduationCap, MessageSquare } from 'lucide-react';

// Helper function for smooth scrolling (can be moved to a utils.js file later)
const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-30 top-0 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
     
        <a 
          href="#home" 
          onClick={(e) => { 
            e.preventDefault(); 
            smoothScrollTo('home'); 
          }} 
          className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors"
        >
          Brian Bossy
        </a>

        
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(link.id);
              }}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-500 hover:text-gray-900 transition-colors"
            >
              {/* Icon can go here */} {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id);
                  setIsOpen(false); // Close menu on click
                }}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-sky-500 hover:text-gray-900 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
