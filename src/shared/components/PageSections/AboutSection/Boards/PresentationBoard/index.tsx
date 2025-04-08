"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ShowAboutText } from "@/constants";
import { useLanguageStore } from "@/Store";

const PresentationBoard = () => {
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
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text2")}
          </h3>
          <h3 className="my-4 text-title-size">
            {ShowAboutText(language, "text3")}
          </h3>
          <h3 className="mt-2 text-title-size">
            {ShowAboutText(language, "text4")}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="mb-2 text-title-size">
            {ShowAboutText(language, "text5")}
          </h3>
          <h3 className="my-5 text-title-size">
            {ShowAboutText(language, "text6")}
          </h3>
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

export default PresentationBoard;
