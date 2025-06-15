import React from "react";
import astronaut from "/src/assets/astronaut.png";
import galaxy from "/src/assets/stars.jpg"; // any galaxy/star bg image

export default function GalaxyHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Galaxy Background */}
      <img
        src={galaxy}
        className="absolute inset-0 w-full h-full object-cover opacity-40 animate-pulse"
        alt="Galaxy Background"
      />

      {/* Floating Avatar */}
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
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-white/10 px-6 py-2 rounded-xl border border-white text-white hover:bg-white/20 transition backdrop-blur-md"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
