"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaAward } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      id: "ai-fluency",
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      date: "2024",
      pdfUrl: "/certificates/ai-fluency.pdf",
    },
    {
      id: "python-basic",
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2024",
      pdfUrl: "/certificates/python-basic.pdf",
    },
    {
      id: "react-basic",
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "2024",
      pdfUrl: "/certificates/react-basic.pdf",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-violet-900/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Verified credentials highlighting technical expertise and continuous professional learning.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 flex flex-col justify-between transition-all duration-300 card-glow group"
            >
              <div className="mb-6">
                <div className="mb-4 p-3 rounded-xl bg-slate-800/50 group-hover:bg-violet-950/40 transition-colors duration-300 w-fit">
                  <FaAward className="text-2xl text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-violet-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-300 font-semibold text-sm">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-2">
                <span className="text-xs text-slate-400 font-medium">
                  Issued in {cert.date}
                </span>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 transition duration-300"
                >
                  <FaFilePdf className="text-sm" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
