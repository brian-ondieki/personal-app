
import React from 'react';
import HeroCanvas from './HeroCanvas'; // Import the 3D scene component


const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Home = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col relative overflow-hidden pt-16" 
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col flex-grow justify-center items-center text-center text-white p-4 sm:p-6">
        {/* Add a semi-transparent overlay to make text more readable if needed */}
        <div className="bg-gray-900 bg-opacity-60 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Hello, I'm <span className="text-sky-400">Brian</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            A Passionate Full Stack Developer & Tech Enthusiast.
            <br />
            Crafting digital experiences with code.
          </p>
          <button
            onClick={() => smoothScrollTo('projects')}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
