"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function AnalyticsProjects() {
  const analyticsProjects = [
    {
      id: "zomato-bi",
      title: "Zomato Food Performance Dashboard",
      description: "An interactive restaurant analytics dashboard visualizing ratings distribution, dining trends, pricing tiers, and delivery performance metrics across diverse regions.",
      image: "/projects/zomato.jpeg",
      tech: ["Power BI", "Power Query", "Excel", "Data Modeling"],
      github: "https://github.com/AVINAASH-2/Zomato-Food-Performance-Analytics",
    },
    {
      id: "hr-bi",
      title: "HR Interview Analytics Dashboard",
      description: "A high-fidelity reporting dashboard tracking recruiter performance, interview pipelines, candidate flow, conversion ratios, and onboarding milestones. Built to optimize human resource operations.",
      image: "/projects/hr-dashboard.jpeg",
      tech: ["Power BI", "Power Query", "Excel", "DAX Formulas"],
      github: "https://github.com/AVINAASH-2/HR-Recruitment-Analytics-Dashboard",
    },
  ];

  return (
    <section id="analytics-projects" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Data Analytics & <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Power BI</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Interactive analytical dashboards converting raw business data into actionable operational insights.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {analyticsProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/40 overflow-hidden transition-all duration-300 card-glow group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
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
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-950 text-slate-400 border border-slate-850"
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
                      View Dashboard Repository
                    </a>
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
