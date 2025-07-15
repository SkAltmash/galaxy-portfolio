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
      'Modern E-commerce app built with React & Firebase. Full Admin Panel, Cart, Coupon System, Product Manager – fully responsive!',
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
      ' Movie streaming app with TMDB, Firebase chat, real-time comments, and watchlist. Built in React + Tailwind.',
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
      'FlickStream V1 – a simple TMDB movie explorer using vanilla JS, trailers, search, and fast performance!',
    link: 'https://asflickstream.netlify.app/',
    github: 'https://github.com/SkAltmash/flickstreembysk',
    technologies: [faHtml5, faCss3Alt, faJs, faGithub],
  },
  {
  slug: 'pathan-tutorials',
  title: 'Pathan Tutorials of Mathematics',
  image: '/assets/pathan-tutorials.png',
   screenshots: [
      '/assets/pathan-tutorials/pathan-tutorials1.png',
      '/assets/pathan-tutorials/pathan-tutorials2.png',
      '/assets/pathan-tutorials/pathan-tutorials3.png',
      '/assets/pathan-tutorials/pathan-tutorials4.png',
      '/assets/pathan-tutorials/pathan-tutorials5.png',
      '/assets/pathan-tutorials/pathan-tutorials6.png',
      '/assets/pathan-tutorials/pathan-tutorials7.png',
      '/assets/pathan-tutorials/pathan-tutorials8.png',

    ],
  description:
    'A real-world educational website built for Pathan Tutorials of Mathematics (Hinganghat). Showcases batches, contact info, courses, and modern design. Built with React and MailJS.',
  link: 'https://pathan-tutorials.netlify.app/',
  github: 'https://github.com/SkAltmash/PathanTutorials', 
  technologies: [faReact, faCss3Alt, faJs, faGithub],
},
{
  slug: 'zap-split',
  title: 'ZapSplit ',
  image: '/assets/ZapSplit.jpg',
   screenshots: [
      '/assets/ZapSplit/s1.jpg',
      '/assets/ZapSplit/s2.jpg',
      '/assets/ZapSplit/s3.jpg',
      '/assets/ZapSplit/s4.jpg',
      '/assets/ZapSplit/s5.jpg',
      '/assets/ZapSplit/s6.jpg',
      '/assets/ZapSplit/s7.jpg',

      ],
  description:
    'ZapSplit is your all-in-one money management solution. Top up your wallet, split bills, earn rewards, pay later, and stay on top of your finances — all in one app.',
  link: 'https://zapsplit.netlify.app/',
  github: 'https://github.com/SkAltmash/PathanTutorials', 
  technologies: [faReact, faCss3Alt, faJs, faGithub],
},
];

const iconColors = {
  [faReact.iconName]: 'text-blue-400',
  [faJs.iconName]: 'text-yellow-400',
  [faHtml5.iconName]: 'text-orange-500',
  [faCss3Alt.iconName]: 'text-blue-500',
  [faGithub.iconName]: 'text-gray-300',
  [faServer.iconName]: 'text-green-400',
};

// ...imports remain the same

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [showPreview, setShowPreview] = useState(false); // NEW

  useEffect(() => {
    setIframeLoaded(false);
    setShowPreview(false); // Reset preview on slug change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [slug]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    lazyLoad: 'ondemand',
    responsive: [{ breakpoint: 768, settings: { arrows: false } }],
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }

  const otherProjects = projects.filter(p => p.slug !== slug);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/#projects" className="text-blue-400 hover:underline text-sm">
            ← Back to Projects
          </Link>
        </div>

        {/* Project Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {project.title}
        </motion.h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
          {project.description}
        </p>

        {/* Tech Stack Icons */}
        <div className="flex gap-4 justify-center mb-16 flex-wrap text-xl">
          {project.technologies.map((tech, i) => (
            <FontAwesomeIcon
              key={i}
              icon={tech}
              className={`${iconColors[tech.iconName] || 'text-white/80'} text-2xl`}
            />
          ))}
        </div>

        {/* Screenshots */}
        <h2 className="text-xl font-semibold text-center mb-4">⟡ Project Screenshots ⟡</h2>
        <div className="max-w-[850px] mx-auto mb-10">
          <Slider {...sliderSettings}>
            {project.screenshots.map((src, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={src}
                  alt={`screenshot-${i}`}
                  className="rounded-lg border border-white/20 max-h-[400px] object-cover m-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Live Preview Button */}
        <div className="flex justify-center mb-6">
          {!showPreview && (
            <button
              onClick={() => {
                setShowPreview(true);
                setTimeout(() => setIframeLoaded(true), 2000);
              }}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition"
            >
              Show Live Preview
            </button>
          )}
        </div>

        {/* Live Preview */}
        {showPreview && (
          <>
            <h2 className="text-xl font-semibold text-center mb-3">⟡ Live Preview ⟡</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl mb-6 overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-mono border-b border-white/10">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-green-400 rounded-full mr-4" />
                <span className="truncate">{project.link}</span>
              </div>

              {!iframeLoaded ? (
                <div className="flex flex-col items-center justify-center h-[350px] bg-black animate-pulse text-white gap-3">
                  <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm">Launching live preview...</p>
                </div>
              ) : (
                <div className={`w-full flex justify-center ${previewMode === 'mobile' ? 'overflow-x-auto px-2' : ''}`}>
                  <div className={`${previewMode === 'mobile' ? 'w-[390px] h-[667px]' : 'w-full max-w-[1024px] h-[500px]'} bg-white transition-all duration-300 rounded overflow-hidden`}>
                    <iframe
                      src={project.link}
                      title="Live Preview"
                      loading="lazy"
                      allow="fullscreen"
                      onLoad={() => setIframeLoaded(true)}
                      className="w-full h-full border-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Toggle Mode */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setPreviewMode(prev => prev === 'desktop' ? 'mobile' : 'desktop')}
                className="px-4 py-1 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 transition"
              >
                Switch to {previewMode === 'desktop' ? 'Mobile' : 'Desktop'} View
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center mb-10 flex-wrap">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm font-medium transition">Open Fullscreen</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium transition">GitHub Repo</a>
            </div>
          </>
        )}

        {/* Other Projects */}
        <h2 className="text-xl font-semibold text-center mb-4">⟡ Explore Other Projects ⟡</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p, idx) => (
            <Link to={`/projects/${p.slug}`} key={idx}>
              <div className="bg-white/5 rounded-xl shadow-md overflow-hidden transition hover:scale-105">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{p.description.slice(0, 80)}...</p>
                  <div className="flex gap-3 text-white/80 text-xl flex-wrap">
                    {p.technologies.map((tech, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={tech}
                        className={`${iconColors[tech.iconName] || 'text-white/80'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
