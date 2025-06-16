import React from "react";
import astronaut from "/public/assets/astronaut.png";
import galaxy from "/public/assets/stars.jpg";
import { FaGithub, FaLinkedin,FaRocket } from "react-icons/fa";

export default function GalaxyHero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black text-white"
      id="hero"
    >
      {/* Galaxy Background */}
      <img
        src={galaxy}
        className="absolute inset-0 w-full h-full object-cover opacity-40 animate-pulse"
        alt="Galaxy Background"
      />

      {/* Floating Avatar & Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <img
          src={astronaut}
          alt="Astronaut"
          className="w-40 md:w-56 animate-float drop-shadow-glow mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-glow mb-4">
          Altamash in Space
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-8">
          Crafting cosmic UIs with React, Firebase & imagination.
        </p>

        {/* Social Icons + Resume Button */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SkAltmash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/altamash-sheikh-1ba6a72aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        <a
         href="/Altamash_Resume.pdf"
         target="_blank"
         className="bg-white/10 px-5 py-2 flex gap-2 items-center justify-center text-sm md:text-base rounded-xl border border-white hover:bg-white hover:text-black transition backdrop-blur-md"
         >
         <FaRocket /> Launch Resume
        </a>

        </div>
      </div>
    </section>
  );
}
