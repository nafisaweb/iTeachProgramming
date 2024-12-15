import Navbar from "./components/navbar";
import Main from "./components/main/banner";
import Animation from "./components/main/animation";
import Services from "./components/main/servis";
import WorkProcess from "./components/main/work";
import Portfolio from "./components/main/potfolio";
import Card from "./components/main/card";
import Think from "./components/main/think";
import Avto from "./components/main/avto";

import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div>
      <Navbar />
      <Animation />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${
              index + 1
            }</span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Main /></SwiperSlide>
        <SwiperSlide><Services /></SwiperSlide>
        <SwiperSlide><WorkProcess /></SwiperSlide>
        <SwiperSlide><Portfolio /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Think /></SwiperSlide>
        <SwiperSlide><Avto /></SwiperSlide>
      </Swiper>
    </div>
  );
}
