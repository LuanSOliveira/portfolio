"use client";

import { useLanguageStore } from "@/Store";
import SectionContainer from "../../Container/SectionContainer";
import { ShowAboutText } from "@/constants";
import JourneyHistory from "./JourneyHistory";

const AboutSection = () => {
  const { language } = useLanguageStore();
  return (
    <SectionContainer>
      <div className="w-full h-[85%] max-h-[85%]">
        <h2 className="text-4-title-size">
          {ShowAboutText(language, "text1")}
        </h2>
        <div className="flex gap-20 h-[85%] max-h-[85%] ">
          <div className="w-full overflow-y-auto flex flex-col gap-3 text-justify p-5 bg-[#0000006b] rounded-2xl">
            <h3>{ShowAboutText(language, "text2")}</h3>
            <h3>{ShowAboutText(language, "text3")}</h3>
            <h3>{ShowAboutText(language, "text4")}</h3>
            <h3>{ShowAboutText(language, "text5")}</h3>
            <h3>{ShowAboutText(language, "text6")}</h3>
          </div>
          <JourneyHistory />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
