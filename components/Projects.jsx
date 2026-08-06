"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const featuredProjects = [
    {
      id: "voidrift",
      title: "VoidRift – Full Stack Video Streaming Platform",
      description: "A full-featured video platform supporting user uploads, cloud transcoding to multiple resolutions, adaptive streaming, user profiles, likes, and comment systems.",
      image: "/projects/voidrift.jpeg",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
      github: "https://github.com/AVINAASH-2/VoidRift",
      demo: "#", // Coming Soon
      comingSoon: true,
      hero: true,
    },
    {
      id: "kyc-bharat",
      title: "Lightweight KYC for Bharat",
      description: "A digital identity and document verification solution built to support low-bandwidth rural conditions with offline-first retry functionality. Integrated with simulated DigiLocker and biometric authorization.",
      image: "/projects/kyc.jpeg",
      tech: ["Next.js", "MongoDB", "JWT", "Cloudinary"],
      github: "https://github.com/AVINAASH-2/KYC-APP",
      demo: "",
      hero: false,
    },
    {
      id: "retail-bi",
      title: "Retail Sales Performance & BI Dashboard",
      description: "An interactive business intelligence reporting suite analyzing retail sales, revenue trends, customer segments, and regional KPIs. Built with advanced DAX equations and responsive visualizations.",
      image: "/projects/retail.jpeg",
      tech: ["Power BI", "Power Query", "DAX"],
      github: "https://github.com/AVINAASH-2/Retail-Sales-Performance-BI",
      demo: "",
      hero: false,
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            A curated showcase of my core engineering works, spanning full-stack web applications and data analytics.
          </p>
        </motion.div>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 overflow-hidden transition-all duration-300 card-glow group ${
                project.hero ? "lg:col-span-2 lg:flex-row h-auto" : ""
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${
                project.hero ? "lg:w-1/2 min-h-[300px]" : "h-56 w-full"
              }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={project.hero ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                  priority={project.hero}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Text Container */}
              <div className={`p-8 flex flex-col justify-between ${
                project.hero ? "lg:w-1/2" : "flex-1"
              }`}>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-950/50 hover:bg-slate-950 px-4 py-2.5 rounded-lg transition duration-300"
                    >
                      <FaGithub className="text-base" />
                      Code
                    </a>

                    {project.comingSoon ? (
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest py-2 px-3 border border-dashed border-slate-850 rounded-lg cursor-default">
                        Demo (Coming Soon)
                      </span>
                    ) : (
                      project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white px-4 py-2.5 rounded-lg transition duration-300"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}