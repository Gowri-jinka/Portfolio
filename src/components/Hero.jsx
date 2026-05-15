import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-6
      pt-24
      relative
      overflow-hidden
      "
    >

      {/* Background glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full"></div>


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-4xl font-semibold text-white">
            Hello, It's Me
          </p>

          <h1
            className="
            text-7xl
            font-black
            mt-3
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            text-transparent
            bg-clip-text
            "
          >
            Jinka Gowri
          </h1>


          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,

              "MERN Developer",
              1500,

              "Data Analyst",
              1500,

              "ServiceNow Certified",
              1500
            ]}
            speed={40}
            repeat={Infinity}
            className="
            text-3xl
            text-cyan-300
            font-semibold
            mt-5
            block
            min-h-[50px]
            "
          />

          <p
            className="
            text-slate-300
            mt-8
            leading-8
            text-lg
            max-w-xl
            "
          >
            Passionate Full Stack Developer creating scalable,
            responsive and user-friendly applications with strong
            problem-solving skills and modern technologies.
          </p>


          {/* Social Icons */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/Gowri-jinka"
              target="_blank"
              rel="noreferrer"
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400
              flex
              justify-center
              items-center
              hover:bg-cyan-400
              hover:text-black
              hover:scale-110
              transition
              duration-300
              "
            >

              <FaGithub size={25}/>

            </a>


            <a
              href="https://www.linkedin.com/in/gowri-j-b022052a0"
              target="_blank"
              rel="noreferrer"
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400
              flex
              justify-center
              items-center
              hover:bg-cyan-400
              hover:text-black
              hover:scale-110
              transition
              duration-300
              "
            >

              <FaLinkedin size={25}/>

            </a>


            <a
              href="mailto:jinkagowri@gmail.com"
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400
              flex
              justify-center
              items-center
              hover:bg-cyan-400
              hover:text-black
              hover:scale-110
              transition
              duration-300
              "
            >

              <FaEnvelope size={25}/>

            </a>

          </div>


          {/* Buttons */}

          <div className="flex gap-6 mt-10">

            <a
              href="#projects"
              className="
              bg-cyan-400
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              hover:scale-105
              transition
              "
            >

              View Projects

            </a>


            <a
              href="#contact"
              className="
              border
              border-cyan-400
              px-8
              py-4
              rounded-full
              hover:bg-cyan-400
              hover:text-black
              transition
              "
            >

              Contact Me

            </a>

          </div>

        </motion.div>


        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400
              blur-[60px]
              opacity-30
              animate-pulse
              "
            ></div>

            <img
              src="/profile.jpg"
              alt="profile"
              className="
              relative
              w-[350px]
              h-[350px]
              rounded-full
              object-cover
              border-[6px]
              border-cyan-400
              shadow-[0_0_60px_cyan]
              hover:scale-105
              transition
              duration-500
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;