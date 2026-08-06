"use client";

import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaChartBar, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiFigma, SiCloudinary } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, fast, and interactive user interfaces.",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400 text-xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      ],
    },
    {
      title: "Databases",
      description: "Managing secure, persistent, and scalable data storage.",
      skills: [
        { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-500 text-xl" /> },
      ],
    },
    {
      title: "Business Intelligence",
      description: "Analyzing operational KPIs and data visualizations.",
      skills: [
        { name: "Power BI", icon: <FaChartBar className="text-yellow-500 text-xl" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Utilities, design systems, and hardware routing tools.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-xl" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-400 text-xl" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-sky-300 text-xl" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-400 text-xl" /> },
        { name: "EasyEDA", icon: <span className="text-violet-400 font-extrabold text-sm">EDA</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/30 transition-all duration-300 card-glow flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium text-sm hover:border-violet-500/40 hover:text-white transition-all duration-300"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}