"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      id: "email",
      icon: <FaEnvelope className="text-2xl text-violet-400" />,
      label: "Email",
      value: "avinaashadeesh@gmail.com",
      href: "mailto:avinaashadeesh@gmail.com"
    },
    {
      id: "location",
      icon: <FaMapMarkerAlt className="text-2xl text-violet-400" />,
      label: "Location",
      value: "Tirunelveli, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Tirunelveli,Tamil+Nadu"
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="text-2xl text-violet-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/avinaash-a-01a9382a0",
      href: "https://www.linkedin.com/in/avinaash-a-01a9382a0"
    },
    {
      id: "github",
      icon: <FaGithub className="text-2xl text-violet-400" />,
      label: "GitHub",
      value: "github.com/AVINAASH-2",
      href: "https://github.com/AVINAASH-2"
    },
    {
      id: "resume",
      icon: <FaFileDownload className="text-2xl text-violet-400" />,
      label: "Resume",
      value: "Download Resume PDF",
      href: "/resume.pdf"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-900/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-pulse">Amazing</span> Together
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Have a project, an internship opportunity, or just want to chat? Reach out through any channel below.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 max-w-6xl mx-auto">
          {contactDetails.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.id !== "email" && item.id !== "location" ? "_blank" : undefined}
              rel={item.id !== "email" && item.id !== "location" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/50 flex flex-col justify-between items-center text-center transition-all duration-300 card-glow group"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-800/60 group-hover:bg-violet-950/40 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.label}
                </h3>
                <p className="text-white text-sm font-bold group-hover:text-violet-400 transition-colors duration-300 break-all leading-tight">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Massive Mail Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="mailto:avinaashadeesh@gmail.com"
            className="group flex items-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-extrabold text-lg px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-600/20 hover:shadow-violet-600/35"
          >
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Send Direct Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}