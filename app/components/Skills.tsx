"use client";

import { useEffect, useState } from 'react';

const skillsData = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Python (AI & Gen AI)', level: 'Beginner' },
  { name: 'Bootstrap', level: 'Beginner' },
];

const Skills = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto">
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={() => setDarkMode(prev => !prev)}
          className="mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg">
          Toggle Dark Mode
        </button>

        <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-400">
          Skills
        </h2>
        <p className="mb-8 text-black dark:text-cyan-300">
          A summary of my technical expertise and proficiency level in each skill.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition
               transform hover:scale-105 cursor-pointer
               bg-gold-gradient dark:bg-cyan-gradient 
               bg-[length:800%_800%] animate-gradient-move
               text-black dark:text-white"
            >
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-black">
                {skill.name}
              </h3>
              <p className="text-black dark:text-black">Proficiency: {skill.level}</p>
              <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className={`bg-black dark:bg-black h-full ${
                    skill.level === 'Expert' ? 'w-full' :
                    skill.level === 'Advanced' ? 'w-3/4' :
                    'w-1/2'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

