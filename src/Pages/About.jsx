import React, { useEffect } from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaSchool,
  FaUserGraduate,
  FaRocket,
  FaCodeBranch,
  FaSatelliteDish,
} from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiNetlify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectJourney from './ProjectJourney';
import JourneyTimeline from '../ components/JourneyTimeline';

const storyPhases = [
  {
    title: 'Launch: School Days',
    desc: 'From nursery to 10th at Sanjay Gandhi High School – where the dream began and scored 79.60%.',
    icon: <FaSchool />,
  },
  {
    title: 'Boosters Activated: 12th Grade',
    desc: 'Dr. Ambedkar Jr. College – scored 56%, but gained clarity that marks aren’t everything.',
    icon: <FaUserGraduate />,
  },
  {
    title: 'Orbit Entry: BCA Journey',
    desc: 'Started learning HTML, CSS, C, and fell in love with JS – RTMNU BCA!',
    icon: <FaRocket />,
  },
  {
    title: 'Mission Control: Building Projects',
    desc: 'Created FlickStream, Trendora. Participated in coding events & earned certificates.',
    icon: <FaCodeBranch />,
  },
  {
    title: 'Deep Space: Self-Taught Dev',
    desc: 'Learnt React, Firebase, Git, etc. Realized: College taught nothing, curiosity taught everything.',
    icon: <FaSatelliteDish />,
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen text-white px-4 py-16 md:px-16 overflow-hidden bg-gradient-to-br from-[#0a0a1f] via-[#1a103d] to-[#000000]">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

      {/* Back to Home */}
      <div className="relative z-10 max-w-5xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-block text-blue-400 hover:underline text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-20 relative z-10">

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.img 
            src="/assets/astronaut.png" 
            alt="Altamash Avatar"
            className="w-36 h-36 mx-auto rounded-full shadow-lg mb-4"
            initial={{ y: -10 }}
            animate={{ y: [ -10, 10, -10 ] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 drop-shadow-lg">
            About Me
          </h1>
          <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
            I'm Altamash, a self-taught front-end & Firebase developer who started with plain JavaScript. Now I build full-stack apps and real-world projects with passion and purpose.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Tech Stack</h2>
          <motion.div
            className="flex justify-center flex-wrap gap-6 text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
            <FaJs className="text-yellow-400" title="JavaScript" />
            <FaReact className="text-cyan-400" title="React" />
            <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />
            <SiFirebase className="text-yellow-500" title="Firebase" />
            <FaNode className="text-green-500" title="Node.js" />
            <FaGitAlt className="text-red-500" title="Git" />
            <FaGithub className="text-gray-300" title="GitHub" />
            <SiNetlify className="text-teal-400" title="Netlify" />
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">My Journey</h2>
          <div className="max-w-3xl mx-auto">
            <JourneyTimeline storyPhases={storyPhases} />
          </div>
        </div>

        {/* Project Evolution */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Project Evolution</h2>
          <ProjectJourney />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-white/80 mb-4">
            Want to collaborate or need a dev for your idea?
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white text-sm font-medium transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
