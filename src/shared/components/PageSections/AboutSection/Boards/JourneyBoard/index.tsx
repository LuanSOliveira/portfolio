"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ShowAboutText } from "@/constants";
import { useLanguageStore } from "@/Store";

const JourneyBoard = () => {
  const { language } = useLanguageStore();

  return (
    <div className="w-full overflow-y-auto flex flex-col gap-3 text-justify p-5 cursor-grab">
      <Swiper
        className="mySwiper max-w-[85%]"
        style={{ paddingBottom: "30px" }}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <h2 className="text-center mb-2 text-2-title-size">
            {ShowAboutText(language, "text8")}
          </h2>
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text9")}
          </h3>
          <div className="flex justify-start my-5">
            <img src="/avatar_5.png" alt="avatar" className="w-[200px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="text-center mb-2 text-2-title-size">
            {ShowAboutText(language, "text10")}
          </h2>
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text11")}
          </h3>
          <div className="flex justify-center my-5">
            <img src="/avatar_5.png" alt="avatar" className="w-[200px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="text-center mb-2 text-2-title-size">
            {ShowAboutText(language, "text12")}
          </h2>
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text13")}
          </h3>
          <div className="flex justify-end my-5">
            <img src="/avatar_5.png" alt="avatar" className="w-[200px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="text-center mb-2 text-2-title-size">
            {ShowAboutText(language, "text14")}
          </h2>
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text15")}
          </h3>
          <div className="flex justify-center my-5">
            <img src="/avatar_3.png" alt="avatar" className="w-[200px]" />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #fff;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2bff00;
          opacity: 1;
          width: 14px;
          height: 14px;
        }
      `}</style>
    </div>
  );
};

export default JourneyBoard;
