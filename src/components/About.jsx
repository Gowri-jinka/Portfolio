import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiCodechef, SiHackerrank, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto bg-[#0f172a] rounded-3xl p-12 shadow-[0_0_50px_rgba(0,255,255,0.08)]"
      >

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-10">
          About Me
        </h2>

        <p className="text-xl text-slate-300 leading-10 text-center">
  I am an enthusiastic Full Stack Developer and aspiring Data Analyst passionate about building modern, scalable, and user-friendly applications. Skilled in Python, Java (Basics), SQL, and the MERN Stack, I also work with tools like Git, GitHub, Postman, MySQL, Render, and Vercel. I hold certifications in ServiceNow and Smart Interviews DSA, and I continuously focus on improving my coding and problem-solving skills. Beyond technology, I enjoy drawing, playing carroms, and learning new things. My long-term goal is to become a successful software professional and build an old age home through my own earnings to support society.
</p>

        {/* Competitive Programming */}

        <h3 className="text-4xl font-bold text-cyan-400 text-center mt-20 mb-12">
          Competitive Programming
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LeetCode */}

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://leetcode.com/u/Gowri_Jinka/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#111827] border border-cyan-400 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-cyan-500/40 transition duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto shadow-[0_0_20px_cyan]">

              <SiLeetcode className="text-5xl text-yellow-400" />

            </div>

            <h4 className="text-3xl font-bold text-cyan-400 mt-8">
              LeetCode
            </h4>

            <p className="text-cyan-300 mt-3 text-xl">
              Gowri_Jinka
            </p>

            <p className="text-slate-300 mt-3">
              150+ Problems Solved
            </p>

          </motion.a>

          {/* CodeChef */}

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.codechef.com/users/srit224g1a0521"
            target="_blank"
            rel="noreferrer"
            className="bg-[#111827] border border-cyan-400 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-cyan-500/40 transition duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto shadow-[0_0_20px_cyan]">

              <SiCodechef className="text-5xl text-blue-400" />

            </div>

            <h4 className="text-3xl font-bold text-cyan-400 mt-8">
              CodeChef
            </h4>

            <p className="text-cyan-300 mt-3 text-xl">
             srit224g1a0521
            </p>

            <p className="text-slate-300 mt-3">
              100+ Problems Solved
            </p>

          </motion.a>

          {/* HackerRank */}

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.hackerrank.com/profile/224g1a0521"
            target="_blank"
            rel="noreferrer"
            className="bg-[#111827] border border-cyan-400 rounded-2xl p-10 text-center shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-cyan-500/40 transition duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto shadow-[0_0_20px_cyan]">

              <SiHackerrank className="text-5xl text-green-400" />

            </div>

            <h4 className="text-3xl font-bold text-cyan-400 mt-8">
              HackerRank
            </h4>

            <p className="text-cyan-300 mt-3 text-xl">
              224g1a0521
            </p>

            <p className="text-slate-300 mt-3">
              150+ Problems Solved
            </p>

          </motion.a>

        </div>

      </motion.div>

    </section>
  );
};

export default About;