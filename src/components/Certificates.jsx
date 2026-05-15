import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import servicenow from "../assets/Certificates/servicenow.png";
import dsa from "../assets/Certificates/dsa.png";
import ignite from "../assets/Certificates/ignite.png";
import unstop from "../assets/Certificates/unstop.png";

const certificates = [
  {
    title: "Certified Application Developer",

    organization: "ServiceNow",

    desc:
      "Successfully completed ServiceNow Certified Application Developer certification.",

    image: servicenow,
  },

  {
    title: "Smart Interviews DSA Certification",

    organization: "Smart Interviews",

    desc:
      "Completed Data Structures and Algorithms course with strong problem solving foundations and coding practice.",

    image: dsa,
  },

  {
    title: "30 Days DSA Bootcamp",

    organization: "Unstop",

    desc:
      "Successfully completed DSA Bootcamp program with algorithm and coding fundamentals.",

    image: unstop,
  },

  {
    title: "Ignite 7.0 Entrepreneurship Program",

    organization: "AIC-SKU Confederation",

    desc:
      "Completed entrepreneurship and innovation training program conducted by AIC-SKU Confederation.",

    image: ignite,
  },
];

const Certificates = () => {
  return (
    <section
      className="py-24 px-6"
      id="certifications"
    >

      <div
        className="
        max-w-7xl
        mx-auto
        bg-[#0f172a]
        rounded-3xl
        p-12
        "
      >

        <h2
          className="
          text-5xl
          font-bold
          text-center
          mb-6
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          text-transparent
          bg-clip-text
          "
        >
          Certifications
        </h2>

        <p
          className="
          text-center
          text-slate-400
          mb-16
          max-w-3xl
          mx-auto
          leading-8
          "
        >
          Professional certifications and training
          programs completed in development,
          problem solving and technology domains.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}

          navigation={true}

          pagination={{
            clickable: true
          }}

          spaceBetween={30}

          slidesPerView={3}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {certificates.map((item,index)=>(

            <SwiperSlide key={index}>

              <div

              className="
              bg-[#111827]
              rounded-2xl
              overflow-hidden
              hover:scale-105
              transition
              duration-300
              border
              border-white/5
              h-full
              "

              >

                <div
                className="
                h-64
                overflow-hidden
                "
                >

                  <img

                  src={item.image}

                  alt={item.title}

                  className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-700
                  "

                  />

                </div>


                <div className="p-6">

                  <h3
                  className="
                  text-xl
                  font-bold
                  text-cyan-400
                  "
                  >

                  {item.title}

                  </h3>

                  <p
                  className="
                  text-purple-400
                  mt-2
                  "
                  >

                  {item.organization}

                  </p>

                  <p
                  className="
                  text-slate-300
                  mt-5
                  leading-7
                  min-h-[120px]
                  "
                  >

                  {item.desc}

                  </p>

                  <a

                  href={item.image}

                  target="_blank"

                  rel="noreferrer"

                  className="
                  mt-6
                  inline-block
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  px-6
                  py-3
                  rounded-full
                  text-black
                  font-bold
                  hover:scale-105
                  transition
                  duration-300
                  "

                  >

                  View Certificate

                  </a>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Certificates;