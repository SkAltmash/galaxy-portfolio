import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden border-t border-white/10">
      {/* Glowing stars background */}
      <div className="absolute inset-0 bg-[url('/assets/stars.jpg')] bg-cover bg-center opacity-10 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold tracking-wider text-indigo-400">
            Out of This World          
            </h3>
          <p className="text-sm text-gray-400 mt-1">
            Crafting interfaces that go beyond limits 
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-2xl text-white">
          <a
            href="https://github.com/SkAltmash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/altamash-sheikh-1ba6a72aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:skaltmash3@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Star Trail Divider */}
      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Bottom Text */}
      <div className="relative z-10 text-center text-gray-500 text-sm mt-4 px-6">
        © {new Date().getFullYear()} Altamash Sheikh. Traveling through code and stars.
      </div>
    </footer>
  );
}
