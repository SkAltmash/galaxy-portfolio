import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';

export default function OpenSourceRadar() {
  return (
    <section className=" rounded-2xl relative z-10 py-20 px-4 md:px-16 text-white bg-gradient-to-b from-black via-[#0c0c2c] to-black overflow-hidden">
      
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
Dev Orbit Tracker	        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white/70 max-w-2xl mx-auto mb-10 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Scanning the open-source galaxy for contributions. Every commit is a signal. Every repo a star.
        </motion.p>

        {/* GitHub Contribution Graph */}
        <motion.div
          className="max-w-6xl mx-auto overflow-auto rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-lg w-fit mx-auto">
            <GitHubCalendar
              username="SkAltmash"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              theme={{
                dark: ['#1f1f1f', '#166534', '#22c55e', '#4ade80', '#86efac'], // Custom green shades
              }}
              colorScheme="dark"
              style={{
                color: '#fff',
                background: 'transparent',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
