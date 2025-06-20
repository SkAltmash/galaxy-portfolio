import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Trendora E-commerce',
    image: '/assets/trendora.png',
    screenshots: [
      '/assets/Trendora/trendora0.png',
      '/assets/Trendora/trendora1.png',
      '/assets/Trendora/trendora2.png',
      '/assets/Trendora/trendora4.png',
      '/assets/Trendora/trendora5.png',
      '/assets/Trendora/trendora6.png',
      '/assets/Trendora/trendora7.png',
      '/assets/Trendora/trendora8.png',
      '/assets/Trendora/trendora9.png',
      '/assets/Trendora/trendora10.png',
      '/assets/Trendora/trendora11.png',
      '/assets/Trendora/trendora12.png',
      '/assets/Trendora/trendora13.png',
      '/assets/Trendora/trendora14.png',
    ],
    description:
      'Modern E-commerce app built with React and Firebase. Admin panel, product management, cart, coupon system and responsive design.',
    link: 'https://astrendora.netlify.app/',
    github: 'https://github.com/SkAltmash/Trendora',
    technologies: [faReact, faGithub, faCss3Alt, faJs],
  },
  {
    title: 'FlickStream V2',
    image: '/assets/flickstreamV2.png',
    screenshots: [
      '/assets/FlickstreamV2/FlickstreamVtwo0.png',
      '/assets/FlickstreamV2/FlickstreamVtwo1.png',
      '/assets/FlickstreamV2/FlickstreamVtwo2.png',
      '/assets/FlickstreamV2/FlickstreamVtwo3.png',
      '/assets/FlickstreamV2/FlickstreamVtwo4.png',
      '/assets/FlickstreamV2/FlickstreamVtwo5.png',
      '/assets/FlickstreamV2/FlickstreamVtwo6.png',
      '/assets/FlickstreamV2/FlickstreamVtwo7.png',
      '/assets/FlickstreamV2/FlickstreamVtwo8.png',
      '/assets/FlickstreamV2/FlickstreamVtwo9.png',
      '/assets/FlickstreamV2/FlickstreamVtwo10.png',
      '/assets/FlickstreamV2/FlickstreamVtwo11.png',
      '/assets/FlickstreamV2/FlickstreamVtwo12.png',
      '/assets/FlickstreamV2/FlickstreamVtwo13.png',
      '/assets/FlickstreamV2/FlickstreamVtwo14.png',
      '/assets/FlickstreamV2/FlickstreamVtwo15.png',
      '/assets/FlickstreamV2/FlickstreamVtwo16.png',
      '/assets/FlickstreamV2/FlickstreamVtwo17.png',
      '/assets/FlickstreamV2/FlickstreamVtwo18.png',
      '/assets/FlickstreamV2/FlickstreamVtwo19.png',
      '/assets/FlickstreamV2/FlickstreamVtwo20.png',
      '/assets/FlickstreamV2/FlickstreamVtwo21.png',
      '/assets/FlickstreamV2/FlickstreamVtwo22.png',
      '/assets/FlickstreamV2/FlickstreamVtwo23.png',
      '/assets/FlickstreamV2/FlickstreamVtwo24.png',
      '/assets/FlickstreamV2/FlickstreamVtwo25.png',
      '/assets/FlickstreamV2/FlickstreamVtwo26.png',
    ],
    description:
      'TMDB-powered movie streaming app with login, watchlist, comments, chat using Firebase & React.',
    link: 'https://flickstreamvtwo.netlify.app',
    github: 'https://github.com/SkAltmash/FlickStreamV2',
    technologies: [faReact, faGithub, faCss3Alt, faJs, faServer],
  },
  {
    title: 'FlickStream V1',
    image: '/assets/flickstreamV1.png',
    screenshots: [
      '/assets/FlickstreamV1/flickstream1.png',
      '/assets/FlickstreamV1/flickstream2.png',
      '/assets/FlickstreamV1/flickstream3.png',
      '/assets/FlickstreamV1/flickstream4.png',
      '/assets/FlickstreamV1/flickstream5.png',
      '/assets/FlickstreamV1/flickstream6.png',
      '/assets/FlickstreamV1/flickstream7.png',
      '/assets/FlickstreamV1/flickstream8.png',
      '/assets/FlickstreamV1/flickstream9.png',
      '/assets/FlickstreamV1/flickstream10.png',
      '/assets/FlickstreamV1/flickstream12.png',
      '/assets/FlickstreamV1/flickstream13.png',
      '/assets/FlickstreamV1/flickstream14.png',
      '/assets/FlickstreamV1/flickstream15.png',
      '/assets/FlickstreamV1/flickstream16.png',
      '/assets/FlickstreamV1/flickstream17.png',
      '/assets/FlickstreamV1/flickstream18.png',
      '/assets/FlickstreamV1/flickstream19.png',
    ],
    description:
      'FlickStream V1 is a TMDB movie explorer using vanilla JS. Search, details, trailers, and watchlist – all lightweight & fast.',
    link: 'https://flickstreamvtwo.netlify.app',
    github: 'https://github.com/SkAltmash/flickstreembysk',
    technologies: [faHtml5, faCss3Alt, faJs, faGithub, faServer],
  },
];


export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('screenshots');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

return (
  <section className="py-20 bg-black text-white" id="projects">
    <h2 className="text-4xl font-bold text-center mb-12">
      Projects from Another Galaxy
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => {
            setSelected(project);
            setActiveTab('screenshots');
            setIframeLoaded(false);
          }}
          className="relative group cursor-pointer bg-white/5 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 h-full w-full bg-black/60 py-4 text-center flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-blue-600 text-lg font-semibold">
              {project.title}
            </p>
            <p>{project.description}</p>
            <p className="text-blue-400 text-lg font-semibold">
              Click for more →
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-3">
              {project.description.substring(0, 70)}...
            </p>
            <div className="flex gap-3">
              {project.technologies.map((tech, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={tech}
                  className="text-lg text-white/80"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Modal */}
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
            <p className="text-sm text-gray-200 mb-4 whitespace-pre-line">
              {selected.description}
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 justify-center">
              {['screenshots', 'preview'].map((tab) => (
                <motion.button
                  key={tab}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-1 rounded-md border text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-black shadow-md'
                      : 'border-white/50 text-white hover:border-white'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'screenshots' ? '🖼️ Screenshots' : '🌐 Live Preview'}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'screenshots' ? (
              <Slider {...sliderSettings}>
                {selected.screenshots.map((src, i) => (
                  <div key={i} className="flex justify-center">
                    <img
                      src={src}
                      alt={`screenshot-${i}`}
                      loading="lazy"
                      className="rounded-lg border border-white/20 max-h-[350px] mx-auto"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="mt-2 mx-auto max-w-[850px] rounded-xl overflow-hidden bg-white/5 border shadow-xl">
  {/* Header */}
  <div className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-mono border-b border-white/10">
    <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
    <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
    {selected.link}
  </div>

  {/* Loader */}
  {!iframeLoaded && (
    <div className="flex flex-col items-center justify-center h-[350px] bg-black/50 text-white font-mono gap-3">
      <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p>🚀 Preparing server...</p>
    </div>
  )}

  {/* iFrame */}
  <div className="bg-black flex justify-center items-center">
    <iframe
      src={selected.link}
      className={`transition-opacity duration-500 rounded-none w-full h-[350px] md:h-[400px] ${
        iframeLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      loading="lazy"
      onLoad={() => setIframeLoaded(true)}
      title="Live Preview"
    />
  </div>
</div>

            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 justify-center flex-wrap">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-sm font-medium"
              >
                Open Fullscreen
              </a>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium"
              >
                GitHub Repo
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 flex gap-3 flex-wrap justify-center">
              {selected.technologies.map((tech, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={tech}
                  className="text-xl text-white/80"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
);

}
