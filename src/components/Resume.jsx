import { motion } from "framer-motion";
import { FaFileAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-[#0f172a] rounded-3xl p-14 text-center shadow-[0_0_40px_rgba(0,255,255,0.08)]"
      >

        <h2 className="text-6xl font-bold text-cyan-400 mb-12">
          Resume
        </h2>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#111827] border border-cyan-400 rounded-3xl p-12 shadow-[0_0_25px_rgba(0,255,255,0.15)]"
        >

          <div className="flex justify-center mb-8">

            <div className="bg-cyan-400 p-6 rounded-full shadow-[0_0_25px_rgba(0,255,255,0.6)]">

              <FaFileAlt className="text-5xl text-black" />

            </div>

          </div>

          <h3 className="text-4xl font-bold text-white mb-4">
            My Resume
          </h3>

          <p className="text-slate-300 text-lg leading-8 max-w-2xl mx-auto">
            View my professional resume to explore my technical skills,
            projects, certifications, education, and development experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-cyan-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:bg-cyan-300 transition duration-300 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
            >
              <FaExternalLinkAlt />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 border border-cyan-400 text-cyan-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Resume;