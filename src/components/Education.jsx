import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    place: "Srinivasa Ramanujan Institute Of Technology",
    course: "Computer Science & Engineering (CSE)",
    year: "2022 - 2026",
    score: "CGPA: 8.78",
  },

  {
    title: "Intermediate",
    place: "S.V Junior College For Girls",
    course: "MPC (Mathematics, Physics, Chemistry)",
    year: "2020 - 2022",
    score: "Percentage: 88%",
  },

  {
    title: "SSC",
    place: "MPL Girls High School",
    course: "Secondary School Education",
    year: "2019 - 2020",
    score: "Percentage: 98%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto bg-[#0f172a] rounded-3xl p-12 shadow-[0_0_50px_rgba(0,255,255,0.08)]"
      >

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-20"
        >
          Education
        </motion.h2>

        {/* Timeline */}

        <div className="relative border-l-4 border-cyan-400 ml-6 space-y-20">

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              className="relative"
            >

              {/* Animated Timeline Dot */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px cyan",
                    "0 0 25px cyan",
                    "0 0 10px cyan",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute -left-[42px] top-10 w-8 h-8 rounded-full bg-cyan-400 border-4 border-[#0f172a]"
              ></motion.div>

              {/* Card */}

              <motion.div
                whileHover={{
                  boxShadow: "0 0 40px rgba(0,255,255,0.25)",
                }}
                className="bg-[#111827] ml-10 rounded-3xl p-10 border-l-4 border-cyan-400 transition duration-300"
              >

                <h3 className="text-4xl font-bold text-cyan-400">
                  {item.place}
                </h3>

                <p className="text-2xl text-slate-300 mt-5">
                  {item.title}
                </p>

                <p className="text-xl text-slate-400 mt-3">
                  {item.course}
                </p>

                <p className="mt-6 text-cyan-300 text-xl font-semibold">
                  {item.year} | {item.score}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Education;