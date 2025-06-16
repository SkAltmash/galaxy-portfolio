import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaSchool,
  FaUserGraduate,
  FaRocket,
  FaCodeBranch,
  FaSatelliteDish,
} from 'react-icons/fa';

const storyPhases = [
  {
    title: 'Launch: School Days',
    desc: 'From nursery to 10th at Sanjay Gandhi High School – where the dream began and scored 79.60%,',
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

export default function StoryTimelineModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="max-w-5xl w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 relative shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-center text-white mb-10 tracking-wide">
          <span className="text-indigo-400">My Journey</span> – Time Travel Timeline
        </h2>

        <div className="relative border-l-4 border-indigo-600 ml-4 space-y-16">
          {storyPhases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xl shadow-lg z-10">
                  {phase.icon}
                </div>

                {/* Line and Dot */}
                <div className="absolute left-[1.5rem] top-6 w-0.5 h-full bg-indigo-500 z-0 hidden md:block" />

                {/* Content Box */}
                <div
                  className={`bg-gray-800 text-white rounded-lg p-5 shadow-lg w-full md:w-1/2 ${
                    isLeft ? 'md:mr-auto md:ml-12' : 'md:ml-auto md:mr-12'
                  } mt-6 md:mt-0`}
                >
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm">{phase.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
