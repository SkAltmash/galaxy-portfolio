import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaCode } from 'react-icons/fa';

const journey = [
  {
    title: 'FlickStream V1: The Beginning',
    desc: 'Started with basic HTML/CSS/JS. Built a movie browser using TMDB API. Realized how powerful even vanilla JS can be.',
    tech: [FaHtml5, FaCss3Alt, FaJs],
  },
  {
    title: 'FlickStream V2: Upgraded with React',
    desc: 'Rebuilt using React + Firebase. Added login, comments, chat. First step into real-time web apps.',
    tech: [FaReact, FaJs, FaGithub],
  },
  {
    title: 'Trendora: Full-Stack E-commerce',
    desc: 'Modern UI, product management, coupons, user auth, admin panel. Learned architecture + scale.',
    tech: [FaReact, FaJs, FaGithub],
  },
  {
    title: 'Pathan Tutorials: First Real-World Client',
    desc: 'Designed and built a clean, responsive site for a real coaching center. Understood client needs, revisions, live deployment.',
    tech: [FaHtml5, FaCss3Alt, FaReact],
  },
];

export default function ProjectJourney() {
  return (
    <section className="relative px-4 py-20 md:px-16 bg-gradient-to-b from-black via-[#0e0e2c] to-black text-white overflow-hidden">

   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 drop-shadow-lg">
          My Project Journey
        </h2>

        <div className="border-l-2 border-white/10 pl-5 sm:pl-7 md:pl-10">
          {journey.map((step, i) => (
            <motion.div
              key={i}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-6 sm:-left-7 md:-left-10 top-1.5 w-7 h-7 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-md">
                <FaCode className="text-sm" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">{step.desc}</p>

              {/* Tech Icons */}
              <div className="flex gap-3 mt-1 text-white/80">
                {step.tech.map((Icon, idx) => (
                  <Icon key={idx} className="text-xl" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
