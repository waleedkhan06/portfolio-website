"use client";

import { useEffect, useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Resume Builder',
    description: 'An interactive, user-friendly resume builder with inline editing, real-time preview, and customizable designs.',
    link: 'https://hackathon-milestone-5-1830wiyu6-waleed0248s-projects.vercel.app'
  },
  {
    id: 2,
    title: 'Countdown Timer App',
    description: 'A sleek, fully functional countdown timer built with Next.js, offering real-time updates and customizable time settings.',
    link: 'https://countdown-timer-aqslz8nv9-waleed0248s-projects.vercel.app'
  },
  {
    id: 3,
    title: 'Weather Widget App',
    description: 'A dynamic weather widget built with Next.js, displaying real-time weather data using API integration.',
    link: 'https://weather-widgit-app-9yhc-jce62ih8z-waleed0248s-projects.vercel.app'
  },
  {
    id: 4,
    title: 'Birthday Wish App',
    description: 'A birthday wish app built with Next.js, featuring candles, balloons, and a lively celebration.',
    link: 'https://birthday-wish-3fp2jq3s5-waleed0248s-projects.vercel.app'
  },
  {
    id: 5,
    title: 'Class Assignment 1',
    description: 'This Assignment organizes and manages Next.js pages.',
    link: 'https://class-assignments-o8ptdgvei-waleed0248s-projects.vercel.app' 
  },
  {
    id: 6,
    title: 'Class Assignment 2',
    description: 'This Assignment class focuses on developing components with proper styling using CSS.',
    link: 'https://class-assignments2-mvkkdudb3-waleed0248s-projects.vercel.app' 
  },
  {
    id: 7,
    title: 'Class Assignment 3',
    description: 'This Assignment organizes various components while utilizing Tailwind CSS for responsive design and consistent styling across the Next.js application.',
    link: 'https://class-assignment-3-rhrt7qpi0-waleed0248s-projects.vercel.app' 
  },
];

const Projects = () => {
  const [darkMode] = useState(false);  // Remove setDarkMode to avoid the error

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-400">
          My Projects
        </h2>
        <p className="mb-8 text-black dark:text-cyan-300">
          Explore some of my recent work below:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition
               transform hover:scale-105 cursor-pointer
               bg-gold-gradient dark:bg-cyan-gradient 
               bg-[length:800%_800%] animate-gradient-move
               text-black dark:text-white"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-black">
                {project.title}
              </h3>
              <p className="mb-4 text-black dark:text-black">
                {project.description}
              </p>
              <a
                href={project.link}
                className="px-6 py-3 rounded-lg transition-colors duration-300 
               text-white bg-black hover:bg-[#FFC300]
               dark:bg-black text-white dark:hover:bg-[#00ccff]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

