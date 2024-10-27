"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row 
      items-center justify-between px-4">
        
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold text-soft-gold dark:text-cyan-400 mb-2">
            HELLO
          </h1>
          <h1 className="text-8xl font-bold text-soft-gold dark:text-cyan-400 mb-2">
            I&apos;m <span className="text-soft-gold dark:text-cyan-400 ">Waleed Khan</span>
          </h1>
          <h2 className="text-5xl font-bold text-soft-gold dark:text-cyan-400  mb-4">
            Frontend Developer
          </h2>

          <p className="mt-4 text-2xl text-black dark:text-cyan-300">
            Welcome to my portfolio! I&rsquo;m Waleed, a creative and dedicated
             frontend developer with a passion for building responsive, 
             user-friendly websites.
          </p>

          <div className="mt-6 space-x-4 animate-opacity-fade delay-600">
            <Link 
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="px-6 py-3 rounded-lg transition-colors duration-300 
               text-black bg-soft-gold hover:bg-[#FFC300]
               dark:bg-bright-cyan dark:hover:bg-[#00ccff]"
            >
              View My Work
            </Link>
            <Link 
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="px-6 py-3 rounded-lg transition-colors duration-300 
               text-black bg-soft-gold hover:bg-[#FFC300]
               dark:bg-bright-cyan dark:hover:bg-[#00ccff]"
            >
              Get Started
            </Link>
          </div>
        </div>

       {/*image*/}
        <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
          <Image
            src="/animated.gif" 
            alt="Profile"
            width={450}
            height={280}
            className="object-cover shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
