"use client";
import { useEffect, useState } from 'react';

const About = () => {
  return (
    <section id="about" className=" py-16 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold mb-8 text-soft-gold dark:text-cyan-400">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-4xl text-black dark:text-cyan-300
        mb-12 leading-relaxed">
          Hi, I’m <strong className=" text-4xl text-soft-gold dark:text-cyan-300">
            Waleed Khan
            </strong>, 
          a passionate front-end developer with expertise in HTML, CSS, 
          JavaScript, and TypeScript. 
          I specialize in creating modern, responsive designs using Tailwind CSS
           and am continuously advancing 
          my skills in Next.js and React to build high-performance web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
