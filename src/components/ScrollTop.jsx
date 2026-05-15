import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    });

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    visible && (

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-cyan-400 text-black p-5 rounded-full shadow-[0_0_25px_cyan] hover:scale-110 transition duration-300 z-50"
      >

        <FaArrowUp />

      </button>

    )
  );
};

export default ScrollTop;