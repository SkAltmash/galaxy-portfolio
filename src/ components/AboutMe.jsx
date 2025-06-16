import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import avatar from '/public/assets/astronaut.png';
import StoryTimelineModal from './StoryTimelineModal';
export default function AboutMe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
const [showModal, setShowModal] = useState(false); 
  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20 overflow-hidden"
      id="about"
    >
      {/* Stars background */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-10 z-0" />

      {/* Glowing blur layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 via-indigo-700 to-transparent opacity-20 blur-2xl z-0" />

      {inView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Floating Avatar */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-44 h-44 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-30 z-0" />
            <img
              src={avatar}
              alt="Altamash Avatar"
              className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-xl z-10"
            />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-6">
            Who Am I?
          </h2>

          {/* Text */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Altamash</span> from <span className="text-indigo-400">Wardha, Maharashtra</span>,
            currently in my final year of <span className="text-pink-400">BCA at RTMNU</span>.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed">
            I love building modern web experiences using <span className="text-purple-400">React</span>, <span className="text-pink-400">Tailwind</span>, and <span className="text-indigo-400">Firebase</span>.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed">
            Let’s create something <span className="italic text-white font-bold">out of this world</span> together 🌠.
          </p>

          {/* Popup Button */}
          <div className="mt-8">
            <button
            onClick={() => setShowModal(true)}
            className="mt-10 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 text-white rounded-full shadow-lg"
           >
            View My Story
          </button>
          </div>
        {showModal && <StoryTimelineModal onClose={() => setShowModal(false)} />}

        </motion.div>

      )}

  

    </section>
  );
}
