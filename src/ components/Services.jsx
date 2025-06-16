import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket, FaFire } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-3xl text-indigo-400" />,
    title: 'Frontend Development',
    description: 'Modern, performant UI with React, Tailwind, and responsive design.',
  },
  {
    icon: <FaFire className="text-3xl text-yellow-400" />,
    title: 'Firebase Integration',
    description: 'Realtime database, auth, and storage powered by Firebase.',
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-400" />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful interfaces with pixel-perfect precision.',
  },
  {
    icon: <FaRocket className="text-3xl text-green-400" />,
    title: 'Performance & SEO',
    description: 'Optimized web experiences that are fast, accessible, and SEO-friendly.',
  },
];

export default function Services() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    id='services'>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Galactic Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/10 hover:border-indigo-400 hover:shadow-indigo-500/20 transition group"
            >
              <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
