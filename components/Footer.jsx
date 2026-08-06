"use client";

import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Side: Copyright */}
        <div className="text-slate-400 text-sm font-medium">
          <p>© 2026 Avinaash A. All rights reserved.</p>
        </div>

        {/* Center: Tech details */}
        <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
          <span>Built using </span>
          <span className="text-slate-300 font-bold hover:text-violet-400 transition">Next.js</span>
          <span> • </span>
          <span className="text-slate-300 font-bold hover:text-violet-400 transition">Tailwind CSS</span>
          <span> • </span>
          <span className="text-slate-300 font-bold hover:text-violet-400 transition">Framer Motion</span>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-900 text-slate-400 hover:text-violet-400 transition duration-300 group shadow-lg hover:scale-105"
          aria-label="Scroll back to top"
          id="scroll-to-top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
}