"use client";

import { ShowPresentationText } from "@/constants/texts";
import SectionContainer from "../../Container/SectionContainer";
import { useLanguageStore } from "@/Store";

const PresentationSection = () => {
  const { language } = useLanguageStore();
  return (
    <SectionContainer>
      <div className="flex flex-col gap-4 max-w-3xl">
        <div>
          <span className="bg-[#72ec3a7c] p-3 rounded-2xl text-title-size">
            {ShowPresentationText(language, "text1")}
          </span>
        </div>
        <h1 className="mx-2 font-semibold text-4-title-size text-[#2bff00] text-center">
          {ShowPresentationText(language, "text2")}
        </h1>
        <h2 className="text-2-title-size text-center">
          {ShowPresentationText(language, "text3")}
        </h2>
        <h2>{ShowPresentationText(language, "text4")}</h2>
      </div>

      <img src="/avatar.png" alt="avatar" />
    </SectionContainer>
  );
};

export default PresentationSection;
