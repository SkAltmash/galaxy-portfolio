import React from 'react';
import { motion } from 'framer-motion';

export default function JourneyTimeline({ storyPhases }) {
  return (
    <div className="relative border-l-2 border-white/10 pl-6 md:pl-10 space-y-12">
      {storyPhases.map((phase, index) => (
        <motion.div
          key={index}
          className={`relative md:flex ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-start gap-6`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Line connector dot */}
          <div className="absolute left-[-16px] top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-md md:left-1/2 md:transform md:-translate-x-1/2" />

          {/* Content box */}
          <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl w-full max-w-md shadow-lg">
            <div className="flex items-center gap-3 mb-2 text-white/90 text-lg font-semibold">
              <span className="text-indigo-400 text-xl">{phase.icon}</span>
              {phase.title}
            </div>
            <p className="text-white/70 leading-relaxed">{phase.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
