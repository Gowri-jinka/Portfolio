import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      bg-gradient-to-b
      from-[#07152e]
      to-[#020817]
      text-white
      pt-20
      pb-8
      px-8
      border-t
      border-cyan-500/30
      "
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-14">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold text-cyan-400 mb-5">
              Gowri Jinka
            </h2>

            <p className="text-gray-300 leading-8">
              Passionate Full Stack Developer creating
              modern responsive and user-friendly web
              applications with strong problem solving
              and design skills.
            </p>

            <div className="flex gap-5 mt-8">

              {/* Github */}

              <a
                href="https://github.com/Gowri-jinka"
                target="_blank"
                rel="noreferrer"
                className="
                bg-cyan-500/20
                p-4
                rounded-full
                hover:bg-cyan-400
                hover:text-black
                transition
                duration-300
                hover:scale-110
                shadow-lg
                "
              >
                <FaGithub size={22}/>
              </a>


              {/* Linkedin */}

              <a
                href="https://www.linkedin.com/in/gowri-j-b022052a0"
                target="_blank"
                rel="noreferrer"
                className="
                bg-cyan-500/20
                p-4
                rounded-full
                hover:bg-cyan-400
                hover:text-black
                transition
                duration-300
                hover:scale-110
                shadow-lg
                "
              >
                <FaLinkedin size={22}/>
              </a>


              {/* Email */}

              <a
                href="mailto:jinkagowri@gmail.com"
                className="
                bg-cyan-500/20
                p-4
                rounded-full
                hover:bg-cyan-400
                hover:text-black
                transition
                duration-300
                hover:scale-110
                shadow-lg
                "
              >
                <FaEnvelope size={22}/>
              </a>

            </div>

          </div>


          {/* CENTER */}

          <div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  className="hover:text-cyan-400 transition"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* RIGHT */}

          <div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5 text-gray-300">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400"/>
                jinkagowri@gmail.com
              </p>


              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400"/>
                Andhra Pradesh, India
              </p>

              <p>
               <p>
  Passionate about Full Stack Development,
  DSA and creating real-world solutions
</p>
              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div
          className="
          border-t
          border-gray-700
          mt-14
          pt-8
          text-center
          text-gray-400
          "
        >

          <p className="flex justify-center items-center gap-2">

            Built with
            <FaHeart className="text-red-500 animate-pulse"/>
            by Gowri Jinka © 2026

          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;