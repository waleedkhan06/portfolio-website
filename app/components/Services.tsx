"use client";

import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaCss3Alt, FaChartLine } from 'react-icons/fa';

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

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-300">
          My Services
        </h2>
        <p className="mb-8 text-black dark:text-cyan-300">
          Here are the services I offer:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
              <h3 className="text-2xl  text-black font-semibold mb-2">
                {service.title}
              </h3>
              <p className=" text-black mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

           