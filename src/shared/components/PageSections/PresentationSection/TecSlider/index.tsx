"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { myTechnologies } from "@/constants";

const TecSlider = () => {
  return (
    <Swiper
      slidesPerView={6}
      freeMode={true}
      loop={true}
      navigation={false}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, FreeMode, Autoplay]}
      className="mySwiper max-w-[1000px] bg-[#0f0f0f7c] rounded-4xl mt-20"
    >
      {myTechnologies.map((tec) => (
        <SwiperSlide key={tec.name} className="pl-10">
          <img
            className="py-3"
            width={50}
            height={50}
            src={tec.image}
            title={tec.name}
            alt={`icon-${tec.name}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TecSlider;
