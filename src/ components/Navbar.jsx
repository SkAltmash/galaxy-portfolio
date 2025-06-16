import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
   { name: 'Skills', to: 'skills' },
   { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-purple-400">
          Out of This World 
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 uppercase text-sm">
          {navItems.map((item, i) => (
            <li key={i}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-pink-500 transition"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white backdrop-blur-xl absolute top-full w-full left-0 px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item, i) => (
              <li key={i}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 border-b border-white/10 hover:text-pink-500 transition"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
