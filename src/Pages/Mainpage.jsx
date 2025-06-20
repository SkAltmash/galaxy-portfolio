import Navbar from '../ components/Navbar';
import Hero from '../ components/GalaxyHero';
import AboutMe from '../ components/AboutMe';
import Skills from '../ components/Skills';
import Projects from '../ components/Projects';
import Services from '../ components/Services';
import Contact from '../ components/Contact';
import BackToTopRocket from '../ components/BackToTopRocket';
function Mainpage() {

  return (
    <>
    <Navbar />
     <Hero />
     <AboutMe />
     <Projects />
     <Skills />
     <Services />
     <Contact />
     <BackToTopRocket />     
    </>
  );
}

export default Mainpage;
