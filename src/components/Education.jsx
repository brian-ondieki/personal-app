// frontend/src/components/Education.jsx
import React from 'react';
import { GraduationCap, CalendarDays, BookOpen, Award } from 'lucide-react';
import EducationCanvas from './EducationCanvas'; // Import the new 3D canvas

// Sample education data - replace with your actual educational background
const educationData = [
  {
    id: 1,
    institution: 'Masinde Muliro University of Science and Technology',
    degree: 'M.Sc. in Computer Science',
    period: '2020 - 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Completed a thesis on Natural Language Processing applications in software development.',
    icon: <GraduationCap size={24} className="text-sky-400" />,
  },
  {
    id: 2,
    institution: 'State College of Engineering',
    degree: 'B.Sc. in Software Engineering',
    period: '2016 - 2020',
    description: 'Graduated with First Class Honors. Key coursework included Data Structures, Algorithms, Web Development, and Database Management. Capstone project involved developing a full-stack mobile application.',
    icon: <GraduationCap size={24} className="text-sky-400" />,
  },
  {
    id: 3,
    institution: 'Online Learning Platform (e.g., Coursera, Udemy)',
    degree: 'Full-Stack Web Development Certification',
    period: '2019',
    description: 'Completed an intensive bootcamp covering MERN stack technologies, RESTful API design, and modern frontend frameworks.',
    icon: <Award size={24} className="text-sky-400" />,
  },
  // Add more educational qualifications or certifications as needed
];

const EducationCard = ({ item }) => {
  return (
    // Added bg-opacity and backdrop-blur for readability over the 3D canvas
    <div className="bg-gray-700 bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300 flex z-10">
      <div className="pr-4 sm:pr-6 mt-1">
        {item.icon || <BookOpen size={24} className="text-sky-400" />}
      </div>
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-1">{item.degree}</h3>
        <p className="text-md sm:text-lg text-gray-200 font-medium mb-1">{item.institution}</p>
        <div className="flex items-center text-xs text-gray-400 mb-3">
          <CalendarDays size={14} className="mr-2" />
          <span>{item.period}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section 
      id="education" 
      className="min-h-screen bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center items-center overflow-hidden" // Added relative and overflow-hidden
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <EducationCanvas />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto relative z-10"> {/* Ensure content is above canvas */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            Educational Background
          </h2>
          {/* Added slight bg for readability */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto bg-gray-800 bg-opacity-50 p-2 rounded-md">
            My academic qualifications and relevant certifications that have shaped my expertise.
          </p>
        </div>

        {educationData.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-8">
            {educationData.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">Educational background coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default Education;
