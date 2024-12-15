import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card2 } from "../../assets/images";

const portfolioData = Array(10).fill({
  image: Card2, // Rasm joylashgan joyga yo'l
  title: '"Iteach academy" dizaynini qayta ishlash',
  link: "#",
});
const links = [
  { title: "Barchasi" },
  { title: "Veb saytlar" },
  { title: "Mobil dasturlar" },
  { title: "Telegram bot" },
  { title: "SEO" },
  { title: "Tizimlar" },
  { title: "Dizayn" },
  { title: "Marketing" },
  { title: "SMM" },
];
const PortfolioSlider = () => {
  return (
    <div className=" text-white py-10">
      <h2 className="text-4xl font-bold text-center mb-8 ">
        Portfolio
      </h2>
      <ul className="flex justify-center gap-[30px] text-bold mb-6">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-gray-400 text-bold cursor-pointer hover:text-[#20DDA4] transition duration-300"
          >
            {link.title}
          </li>
        ))}
      </ul>

      <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          
        }}
        
        className="max-w-6xl mx-auto "
      >
        {portfolioData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className=" p-[30px] border border-[#20DDA4] bg-gray-800 rounded-lg shadow-lg  transition-transform duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover h-[366px] w-[320px]"
              />
              <h3 className="mt-4 text-xl font-semibold">
                {project.title}
              </h3>
              <div className="text-sm mt-2">
                <a
                  href={project.link}
                  className="text-green-400 hover:underline"
                >
                  Batafsil →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
