import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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
    slug: 'trendora-ecommerce',
    title: 'Trendora E-commerce',
    image: '/assets/trendora.png',
    screenshots: [ /* ... */ ],
    description:
      'Modern E-commerce app built with React and Firebase. Admin panel, product management, cart, coupon system and responsive design.',
    link: 'https://astrendora.netlify.app/',
    github: 'https://github.com/SkAltmash/Trendora',
    technologies: [faReact, faGithub, faCss3Alt, faJs],
  },
  {
    slug: 'flickstream-v2',
    title: 'FlickStream V2',
    image: '/assets/flickstreamV2.png',
    screenshots: [ /* ... */ ],
    description:
      'TMDB‑powered movie streaming app with login, watchlist, comments, chat using Firebase & React.',
    link: 'https://flickstreamvtwo.netlify.app',
    github: 'https://github.com/SkAltmash/FlickStreamV2',
    technologies: [faReact, faGithub, faCss3Alt, faJs, faServer],
  },
  {
    slug: 'flickstream-v1',
    title: 'FlickStream V1',
    image: '/assets/flickstreamV1.png',
    screenshots: [ /* ... */ ],
    description:
      'TMDB movie explorer using vanilla JS. Search, details, trailers, watchlist—lightweight & fast.',
    link: 'https://flickstreamvtwo.netlify.app',
    github: 'https://github.com/SkAltmash/flickstreembysk',
    technologies: [faHtml5, faCss3Alt, faJs, faGithub, faServer],
  },
];

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
      settings: { arrows: false },
    },
  ],
};

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects from Another Galaxy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {projects.map((project, idx) => (
          <Link to={`/projects/${project.slug}`} key={idx}>
            <motion.div
              className="relative group cursor-pointer bg-white/5 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 h-full w-full bg-black/60 py-4 text-center flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-blue-600 text-lg font-semibold">{project.title}</p>
                <p>{project.description}</p>
                <p className="text-blue-400 text-lg font-semibold">
                  Explore Project →
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description.substring(0, 70)}...
                </p>
                <div className="flex gap-3">
                  {project.technologies.map((tech, i) => (
                    <FontAwesomeIcon key={i} icon={tech} className="text-lg text-white/80" />
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
