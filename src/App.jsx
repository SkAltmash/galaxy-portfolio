import { useState } from 'react';
import Hero from './ components/GalaxyHero';
import AboutMe from './ components/AboutMe';
import Skills from './ components/Skills';
import Projects from './ components/Projects';
function App() {

  return (
    <>
     <Hero></Hero>
     <AboutMe />
     <Projects />
     <Skills />
    </>
  );
}

export default App;
