"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-24 pb-16 bg-slate-950">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6 cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <h3 className="text-slate-400 text-lg md:text-xl font-medium mb-3">
            👋 Hello, I'm
          </h3>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-white mb-2">
            AVINAASH{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              A
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-bold tracking-tight mb-6">
            Frontend Developer
          </h2>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Building responsive, scalable and intuitive web applications using React, Next.js and JavaScript. Passionate about creating premium SaaS-like user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-violet-600/20"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="flex items-center gap-2 border border-slate-800 hover:border-violet-500 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Resume
              <FaDownload className="text-sm" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AVINAASH-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/avinaash-a-01a9382a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:avinaashadeesh@gmail.com"
              className="text-2xl text-slate-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Soft Ambient Shadow behind Photo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

            {/* Glowing Accent Border Container */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-800 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-500 shadow-2xl animate-float">
              <div className="relative overflow-hidden rounded-[20px] bg-slate-950">
                <Image
                  src="/images/profile.jpeg"
                  alt="Avinaash A"
                  width={380}
                  height={480}
                  priority
                  className="object-cover w-[280px] sm:w-[320px] md:w-[360px] h-[360px] sm:h-[420px] md:h-[460px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}