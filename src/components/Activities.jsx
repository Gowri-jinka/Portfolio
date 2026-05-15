import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const activities = [

  {
    title: "Competitive Programming",
    description:
      "Solved coding challenges consistently on LeetCode and earned problem-solving badges through regular DSA practice.",
  },

  {
    title: "Data Visualization",
    description:
      "Created interactive Power BI dashboards and worked on data visualization techniques for better analytical insights.",
  },

  {
    title: "Carroms Achievement",
    description:
      "Won First Prize in a college-level carroms competition, demonstrating focus, strategy, and consistency.",
  },

  {
    title: "Poster Presentation",
    description:
      "Participated in the Pixel event at JNTUA and presented technical ideas through creative poster presentations.",
  },

  {
    title: "Creative Activities",
    description:
      "Actively participated in drawing and rangoli competitions, showcasing creativity and artistic skills.",
  },

];

const Activities = () => {
  return (

    <section id="activities" className="py-24 px-6">

      <div className="max-w-7xl mx-auto bg-[#0f172a] rounded-3xl p-12 shadow-[0_0_40px_rgba(0,255,255,0.08)]">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">
          Activities
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {activities.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="bg-[#111827] border border-cyan-500/30 p-10 rounded-2xl h-[320px] flex flex-col justify-center hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">

                <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-8 text-lg">
                  {item.description}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );
};

export default Activities;