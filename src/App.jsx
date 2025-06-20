import { useState } from 'react';
import Navbar from './ components/Navbar';
import Hero from './ components/GalaxyHero';
import AboutMe from './ components/AboutMe';
import Skills from './ components/Skills';
import Projects from './ components/Projects';
import Services from './ components/Services';
import Contact from './ components/Contact';
import Footer from './ components/Footer';
import BackToTopRocket from './ components/BackToTopRocket';
function App() {

  return (
    <>
    <Navbar />
     <Hero />
     <AboutMe />
     <Projects />
     <Skills />
     <Services />
     <Contact />
     <Footer />
     <BackToTopRocket />     
    </>
  );
}

export default App;
