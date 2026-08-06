"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaFilePdf, FaGithub } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: "ramco",
      company: "Ramco Cements Limited",
      role: "Software Intern",
      period: "Jan 2026 – June 2026",
      location: "Chennai, TN (Onsite)",
      tech: ["React.js", "JavaScript", "Power BI", "Node.js", "MongoDB (Exposure)"],
      points: [
        "Developed and optimized frontend components using React.js and JavaScript for internal business applications.",
        "Consumed REST APIs and integrated secure JWT authentication workflow with HttpOnly cookies.",
        "Built interactive, high-fidelity Power BI dashboards to analyze operational KPIs and report business metrics."
      ],
      certificateUrl: "/certificates/ramco-internship.pdf"
    },
    {
      id: "chargemod",
      company: "ChargeMOD",
      role: "Hardware/PCB Design Intern",
      period: "May 2025 – June 2025",
      location: "Kerala (Hybrid)",
      tech: ["EasyEDA", "ESP32", "CAN Bus", "PCB Design", "Arduino"],
      points: [
        "Designed schematic and multi-layer PCB layout for an EV Type-1 Charger in EasyEDA.",
        "Performed signal and power routing, component selection, and bill-of-materials cost estimation.",
        "Implemented CAN bus communication protocol on ESP32 & MCP2515 transceiver using ACAN2515 library."
      ],
      certificateUrl: "/certificates/chargemod-internship.pdf",
      githubUrl: "https://github.com/AVINAASH-2"
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-violet-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Internship <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            My professional journey and industrial training in software development and embedded systems design.
          </p>
        </motion.div>

        {/* Experience Cards (Timeline structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 flex flex-col justify-between transition-all duration-300 card-glow group"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      <FaCalendarAlt className="text-violet-400 text-[10px]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      <FaMapMarkerAlt className="text-violet-400 text-[10px]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="space-y-3 mb-8 text-slate-400 text-sm leading-relaxed list-disc pl-4 marker:text-violet-500">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom Details (Tech stack + Actions) */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-950 text-slate-400 border border-slate-850"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold bg-violet-650 hover:bg-violet-750 text-white px-4 py-2.5 rounded-lg transition duration-300"
                    >
                      <FaFilePdf className="text-xs" />
                      View Certificate
                    </a>
                  )}
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-950/50 hover:bg-slate-950 px-4 py-2.5 rounded-lg transition duration-300"
                    >
                      <FaGithub className="text-sm" />
                      GitHub Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}