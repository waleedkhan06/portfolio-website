"use client";

import { useEffect, useState } from 'react';

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

 
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-soft-gold dark:text-cyan-300">
          Contact Me</h2>
        <p className="mb-8 text-black dark:text-cyan-300">
          I'd love to hear from you! Feel free to reach out for collaborations
           or just a friendly hello.</p>
        
        <form className="max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full mb-4 px-4 py-2 bg-gray-600 border border-gray-300
             rounded-lg 
            dark:bg-gray-800 dark:border-gray-700" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full mb-4 px-4 py-2 bg-gray-600 border border-gray-300 rounded-lg
             dark:bg-gray-800 dark:border-gray-700" 
          />
          <textarea 
            placeholder="Message" 
            className="w-full mb-4 px-4 py-2 bg-gray-600 border border-gray-300 rounded-lg
             dark:bg-gray-800 dark:border-gray-700" 
            rows={5} 
          ></textarea>

          
          {isClient && (
            <button
              className="px-6 py-3 rounded-lg transition-colors duration-300 
               text-black bg-soft-gold hover:bg-[#FFC300]
               dark:bg-bright-cyan dark:hover:bg-[#00ccff]"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
