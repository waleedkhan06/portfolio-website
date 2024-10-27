

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero /> 
      
      <main>
        <About />
        <Skills/>
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;


