import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { motion } from "framer-motion";

const techSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Render", icon: <SiRender className="text-purple-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
];

const professionalSkills = [
  { name: "Communication", icon: "🗣️" },
  { name: "Problem Solving", icon: "🧠" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Adaptability", icon: "⚡" },
  { name: "Leadership", icon: "🚀" },
  { name: "Time Management", icon: "⏰" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto bg-[#0f172a] rounded-3xl p-12 shadow-[0_0_50px_rgba(0,255,255,0.08)]"
      >

        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-20">
          Skills
        </h2>

        {/* TECH SKILLS */}

        <div className="mb-20">

          <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
            Tech Skills
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">

            {techSkills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 bg-[#111827] px-8 py-5 rounded-2xl shadow-lg hover:shadow-cyan-500/40 border border-cyan-500/10 transition duration-300"
              >

                <div className="text-4xl">
                  {skill.icon}
                </div>

                <span className="text-2xl text-white font-semibold">
                  {skill.name}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

        {/* TOOLS */}

        <div className="mb-20">

          <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
            Tools & Platforms
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">

            {tools.map((tool, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 bg-[#111827] px-8 py-5 rounded-2xl shadow-lg hover:shadow-cyan-500/40 border border-cyan-500/10 transition duration-300"
              >

                <div className="text-4xl">
                  {tool.icon}
                </div>

                <span className="text-2xl text-white font-semibold">
                  {tool.name}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

        {/* PROFESSIONAL SKILLS */}

        <div>

          <h3 className="text-3xl font-bold text-cyan-300 mb-10 text-center">
            Professional Skills
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">

            {professionalSkills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 bg-[#111827] px-8 py-5 rounded-2xl shadow-lg hover:shadow-cyan-500/40 border border-cyan-500/10 transition duration-300"
              >

                <div className="text-4xl">
                  {skill.icon}
                </div>

                <span className="text-2xl text-white font-semibold">
                  {skill.name}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Skills;