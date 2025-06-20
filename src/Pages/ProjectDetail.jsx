import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    slug: 'trendora-ecommerce',
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
      '🌌 Modern E-commerce app built with React & Firebase. Full Admin Panel, Cart, Coupon System, Product Manager – fully responsive!',
    link: 'https://astrendora.netlify.app/',
    github: 'https://github.com/SkAltmash/Trendora',
    technologies: [faReact, faGithub, faCss3Alt, faJs],
  },
  {
    slug: 'flickstream-v2',
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
    ],
    description:
      '🚀 Movie streaming app with TMDB, Firebase chat, real-time comments, and watchlist. Built in React + Tailwind.',
    link: 'https://flickstreamvtwo.netlify.app',
    github: 'https://github.com/SkAltmash/FlickStreamV2',
    technologies: [faReact, faGithub, faCss3Alt, faJs, faServer],
  },
  {
    slug: 'flickstream-v1',
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
    ],
    description:
      '🛰 FlickStream V1 – a simple TMDB movie explorer using vanilla JS, trailers, search, and fast performance!',
    link: 'https://asflickstream.netlify.app/',
    github: 'https://github.com/SkAltmash/flickstreembysk',
    technologies: [faHtml5, faCss3Alt, faJs, faGithub],
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [iframeLoaded, setIframeLoaded] = useState(false);
const [previewMode, setPreviewMode] = useState('desktop');

  useEffect(() => {
    setIframeLoaded(false);
    const timer = setTimeout(() => setIframeLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, [slug]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    lazyLoad: 'ondemand',
    responsive: [{ breakpoint: 768, settings: { arrows: false } }],
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-black">
        <p className="text-xl"> Project not found</p>
      </div>
    );
  }

 return (
  <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10 md:px-16">
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/#projects" className="text-blue-400 hover:underline text-sm">
          ← Back to Projects
        </Link>
      </div>

      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 text-center text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8 whitespace-pre-line leading-relaxed">
        {project.description}
      </p>

      {/* Heading: Screenshots */}
      <h2 className="text-xl font-semibold text-center text-white/90 mb-4 tracking-wide">
        ⟡ Project Screenshots ⟡
      </h2>

      {/* Screenshot Slider */}
     <motion.div
  className="mb-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <div className="mx-auto max-w-[850px] w-full px-4">
    <Slider {...sliderSettings}>
      {project.screenshots.map((src, i) => (
        <div key={i} className="flex justify-center items-center">
          <img
            src={src}
            alt={`screenshot-${i}`}
            loading="lazy"
            className="rounded-lg border border-white/20 max-h-[400px] w-auto h-auto object-contain mx-auto"
          />
        </div>
      ))}
    </Slider>
  </div>
</motion.div>


      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setPreviewMode(prev => (prev === 'desktop' ? 'mobile' : 'desktop'))}
          className="px-4 py-1 bg-white text-black rounded-md text-sm font-medium shadow-md hover:bg-gray-100 transition"
        >
          Switch to {previewMode === 'desktop' ? 'Mobile' : 'Desktop'} View
        </button>
      </div>

      {/* Heading: Live Preview */}
      <h2 className="text-xl font-semibold text-center text-white/90 mb-3 tracking-wide">
        ⟡ Live Preview ⟡
      </h2>

      {/* Live Preview Box */}
      <div className="bg-white/5 border border-white/10 rounded-xl shadow-xl mb-10 overflow-hidden">
        {/* Fake Browser Header */}
        <div className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-mono border-b border-white/10">
          <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
          <span className="w-3 h-3 bg-green-400 rounded-full mr-4" />
          <span className="truncate">{project.link}</span>
        </div>

        {/* Iframe or Loader */}
        {!iframeLoaded ? (
          <div className="flex flex-col items-center justify-center h-[350px] bg-gradient-to-r from-black via-gray-900 to-black animate-pulse text-white font-mono gap-3">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm tracking-wide">Launching live preview...</p>
          </div>
        ) : (
          <div className={`w-full ${previewMode === 'mobile' ? 'overflow-x-auto' : ''}`}>
            <iframe
              src={project.link}
              title="Live Preview"
              loading="lazy"
              className={`transition-opacity duration-500 border-0 bg-white ${
                previewMode === 'mobile'
                  ? 'w-[375px] h-[667px] rounded-md shadow-xl mx-auto'
                  : 'w-full h-[450px]'
              } ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center flex-wrap mb-10">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-sm font-medium transition"
        >
          Open Fullscreen
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium transition"
        >
          GitHub Repo
        </a>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex gap-4 justify-center flex-wrap text-white/80">
        {project.technologies.map((tech, i) => (
          <FontAwesomeIcon key={i} icon={tech} className="text-2xl" />
        ))}
      </div>
    </div>
  </section>
);


}
