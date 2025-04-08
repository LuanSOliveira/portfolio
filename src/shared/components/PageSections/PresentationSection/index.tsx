"use client";

import { ShowPresentationText } from "@/constants/texts";
import SectionContainer from "../../Container/SectionContainer";
import { useLanguageStore } from "@/Store";
import TecSlider from "./TecSlider";
import { motion } from "framer-motion";
import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
} from "@/constants";

const PresentationSection = () => {
  const { language } = useLanguageStore();
  return (
    <SectionContainer itemCenter>
      <motion.div
        initial={defaultInitialMotion}
        animate={defaultAnimeteMotion}
        transition={defaultTransitionMotion}
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="text-center">
              <span className="bg-[#72ec3a7c] p-3 rounded-2xl text-3-title-size">
                {ShowPresentationText(language, "text1")}
              </span>
            </div>
            <h1 className="mx-2 font-semibold text-4-title-size text-[#2bff00] text-center">
              {ShowPresentationText(language, "text2")}
            </h1>
            <h2 className="text-2-title-size text-center">
              {ShowPresentationText(language, "text3")}
            </h2>
            <h2 className="text-center">
              {ShowPresentationText(language, "text4")}
            </h2>
          </div>
          <img src="/avatar_4.png" alt="avatar" className="w-[450px]" />
        </div>
        <div className="mt-5">
          <TecSlider />
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default PresentationSection;
