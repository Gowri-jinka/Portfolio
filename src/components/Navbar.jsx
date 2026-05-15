import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#031633]/90 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="flex items-center gap-3 cursor-pointer group">

  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_cyan] group-hover:scale-110 transition duration-300">

    <img
      src="/profile.jpg"
      alt="profile"
      className="w-full h-full object-cover"
    />

  </div>

  <h1 className="text-3xl font-bold tracking-wide">

    <span className="text-cyan-400 group-hover:text-white transition duration-300">
      
    </span>

    <span className="text-white group-hover:text-cyan-400 transition duration-300">

    </span>

  </h1>

</div>

        <ul className="hidden md:flex gap-10 font-semibold text-lg">

          {[
            "home",
            "about",
            "education",
            "skills",
            "projects",
            "resume",
            "contact",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;