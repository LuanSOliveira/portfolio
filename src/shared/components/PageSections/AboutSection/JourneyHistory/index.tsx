"use client";

import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguageStore } from "@/Store";
import { ShowAboutText } from "@/constants";

const JourneyHistory = () => {
  const { language } = useLanguageStore();

  return (
    <div className="w-[40%] p-5 bg-default-board rounded-2xl">
      <h2 className="text-2-title-size">{ShowAboutText(language, "text7")}</h2>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper h-[90%]"
      >
        <SwiperSlide className="bg-green/60 backdrop-blur-md p-4 rounded-lg">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="text-center mb-2 text-title-size">
                {ShowAboutText(language, "text8")}
              </h3>
              <h3 className="text-justify text-mini-size">
                {ShowAboutText(language, "text9")}
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img src="/avatar_5.png" alt="avatar" className="w-[150px]" />
            </div>
            <div className="text-end">
              <p>{`${ShowAboutText(language, "text16")} >`}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green/60 backdrop-blur-lg p-4 rounded-lg">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="text-center mb-2 text-title-size">
                {ShowAboutText(language, "text10")}
              </h3>
              <h3 className="text-justify text-mini-size">
                {ShowAboutText(language, "text11")}
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img src="/avatar_5.png" alt="avatar" className="w-[150px]" />
            </div>
            <div className="flex justify-between">
              <p>{`< ${ShowAboutText(language, "text16")}`}</p>
              <p>{`${ShowAboutText(language, "text16")} >`}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green/60 backdrop-blur-lg p-4 rounded-lg">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="text-center mb-2 text-title-size">
                {ShowAboutText(language, "text12")}
              </h3>
              <h3 className="text-justify text-mini-size">
                {ShowAboutText(language, "text13")}
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img src="/avatar_5.png" alt="avatar" className="w-[120px]" />
            </div>
            <div className="flex justify-between">
              <p>{`< ${ShowAboutText(language, "text16")}`}</p>
              <p>{`${ShowAboutText(language, "text16")} >`}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green/60 backdrop-blur-lg p-4 rounded-lg">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="text-center mb-2 text-title-size">
                {ShowAboutText(language, "text14")}
              </h3>
              <h3 className="text-justify text-mini-size">
                {ShowAboutText(language, "text15")}
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <img src="/avatar_3.png" alt="avatar" className="w-[200px]" />
            </div>
            <div>
              <p>{`< ${ShowAboutText(language, "text16")}`}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default JourneyHistory;
