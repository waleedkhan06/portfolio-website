// page.tsx

"use client";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCss3Alt, FaChartLine }
 from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Home = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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

  const servicesData = [
    {
      title: 'Web Development',
      description: 'Building responsive, fast-loading, and interactive websites.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and aesthetically pleasing user interfaces.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility with strategic SEO practices.',
      icon: <FaSearch />,
    },
    {
      title: 'Responsive Web Design',
      description: 'Creating responsive websites that look great on any device ensuring the best user experience.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Tailwind CSS Integration',
      description: 'Utilizing Tailwind CSS for clean, modern, and responsive designs with minimal code.',
      icon: <FaCss3Alt />,
    },
    {
      title: 'SEO Friendly Websites',
      description: 'Developing websites with SEO best practices to help your site rank higher in search engine results.',
      icon: <FaChartLine />,
    },
  ];
  

  return (
    <div>
      <Navbar />
      <Hero />

      <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-5xl font-semibold mb-8 text-soft-gold dark:text-cyan-400">
              About Me
            </h2>

            <p className="max-w-4xl mx-auto text-lg text-black dark:text-cyan-300
             mb-6 leading-relaxed">
              Hi, I’m <span className="text-2xl font-bold text-soft-gold dark:text-cyan-300">
                Waleed Khan
              </span>, a dedicated frontend developer with a strong foundation in 
              modern web technologies. My expertise includes creating visually appealing 
              and highly functional user interfaces, combining technical skills with creativity
               to deliver exceptional digital experiences.
            </p>

            <p className="max-w-4xl mx-auto text-lg text-black dark:text-cyan-300
             mb-6 leading-relaxed">
              I have experience with HTML, CSS, JavaScript, and TypeScript, and I’m proficient in
               frameworks like React and Next.js. My journey into web development has been fueled
                by a passion for learning and adapting to the latest advancements in frontend
                 development, allowing me to build websites and applications that are not only
                  visually striking but also optimized for performance.
            </p>

            <p className="max-w-4xl mx-auto text-lg text-black dark:text-cyan-300
             leading-relaxed">
              I’m constantly advancing my skills, currently focused on mastering Next.js and 
              deepening my understanding of responsive design principles, accessibility standards, 
              and performance optimization. My goal is to contribute meaningfully to the tech 
              community by building applications that are user-centric and engaging.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto">
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
                  <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3 
                  overflow-hidden">
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

        {/* Services Section */}
        <section id="services" className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-300">
              My Services
            </h2>
            <p className="mb-8 text-black dark:text-cyan-300">
              Here are the services I offer:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg transition
                   transform hover:scale-105 cursor-pointer
                   bg-gold-gradient dark:bg-cyan-gradient 
                   bg-[length:800%_800%] animate-gradient-move
                   text-black dark:text-white"
                >
                  <div className="text-4xl text-black mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-black dark:text-black">
                    {service.title}
                  </h3>
                  <p className="text-black dark:text-black">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-300">
              Contact Me
            </h2>
            <p className="mb-8 text-black dark:text-cyan-300">
              I&apos;d love to hear from you! Feel free to reach out for collaborations 
              or just a friendly hello.
            </p>
            
            <form className="max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full mb-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg 
                dark:bg-gray-800 dark:border-gray-700 dark:text-cyan-300" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full mb-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg 
                dark:bg-gray-800 dark:border-gray-700 dark:text-cyan-300" 
              />
              <textarea 
                placeholder="Message" 
                className="w-full mb-4 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg 
                dark:bg-gray-800 dark:border-gray-700 dark:text-cyan-300" 
                rows={5} 
              ></textarea>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg transition-colors duration-300 
                text-black bg-soft-gold hover:bg-[#FFC300] dark:text-black
                 dark:bg-bright-cyan dark:hover:bg-[#00ccff]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;


