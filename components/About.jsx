"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaGraduationCap className="text-3xl text-violet-400" />,
      title: "Education",
      detail: "VIT Vellore",
      subDetail: "B.Tech ECE (CGPA: 7.81)",
    },
    {
      icon: <FaBriefcase className="text-3xl text-violet-400" />,
      title: "Current Status",
      detail: "Software Engineering Graduate",
      subDetail: "Frontend Developer",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-violet-400" />,
      title: "Location",
      detail: "Tirunelveli",
      subDetail: "Tamil Nadu, India",
    },
    {
      icon: <FaRocket className="text-3xl text-violet-400" />,
      title: "Specialty",
      detail: "Frontend Developer",
      subDetail: "React, Next.js, Tailwind",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/50 transition-all duration-300 card-glow flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-800/60 group-hover:bg-violet-950/40 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">
                {card.title}
              </h3>
              <p className="text-white text-lg font-bold mb-1">
                {card.detail}
              </p>
              <p className="text-slate-400 text-xs font-medium">
                {card.subDetail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
            I'm an Electronics & Communication Engineering undergraduate passionate about building modern web applications and interactive user experiences. I enjoy transforming ideas into responsive, user-friendly software using React, Next.js and JavaScript while continuously learning new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}