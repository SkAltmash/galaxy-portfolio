import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiNetlify } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, label: 'HTML5', color: '#e34c26' },
  { icon: <FaCss3Alt />, label: 'CSS3', color: '#264de4' },
  { icon: <FaJs />, label: 'JavaScript', color: '#f0db4f' },
  { icon: <FaReact />, label: 'React', color: '#61dafb' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38bdf8' },
  { icon: <SiFirebase />, label: 'Firebase', color: '#ffa611' },
  { icon: <FaGithub />, label: 'GitHub', color: '#fff' },
  { icon: <FaGitAlt />, label: 'Git', color: '#f1502f' },
  { icon: <SiNetlify />, label: 'Netlify', color: '#00c7b7' },
  { icon: <FaNodeJs />, label: 'Node.js', color: '#8cc84b' },
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a23] to-black text-white py-20 relative overflow-hidden"
    id='skills'>
      <h2 className="text-4xl font-bold text-center mb-12">Tech Galaxy</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-lg transition-all duration-300 shadow-lg border border-white/10"
          >
            <div
              className="text-5xl mb-3 glow-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="text-white text-sm tracking-wide">{skill.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Glow Aura Background */}
      <div className="absolute -z-10 blur-3xl opacity-30 w-full h-full pointer-events-none">
        <div className="absolute w-80 h-80 bg-cyan-400 rounded-full top-10 left-10 mix-blend-screen animate-pulse" />
        <div className="absolute w-60 h-60 bg-purple-600 rounded-full bottom-10 right-10 mix-blend-screen animate-ping" />
      </div>
    </section>
  );
}
