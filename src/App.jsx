import { useState } from 'react';
import Navbar from './ components/Navbar';
import Hero from './ components/GalaxyHero';
import AboutMe from './ components/AboutMe';
import Skills from './ components/Skills';
import Projects from './ components/Projects';
import Services from './ components/Services';
import Contact from './ components/Contact';
function App() {

  return (
    <>
    <Navbar />
     <Hero></Hero>
     <AboutMe />
     <Projects />
     <Skills />
     <Services />
     <Contact />
    </>
  );
}

export default App;
