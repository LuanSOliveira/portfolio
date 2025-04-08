"use client";

import { useLanguageStore } from "@/Store";
import SectionContainer from "../../Container/SectionContainer";
import { ShowAboutText } from "@/constants";
import { useState } from "react";
import { ITab } from "@/shared/interfaces";
import { Description, Timeline } from "@mui/icons-material";
import AppTab from "../../AppTab";
import PresentationBoard from "./Boards/PresentationBoard";
import JourneyBoard from "./Boards/JourneyBoard";
import SectionTitle from "../../SectionTitle";

const AboutSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const { language } = useLanguageStore();
  const tabList: ITab[] = [
    {
      label: ShowAboutText(language, "text17"),
      icon: <Description />,
    },
    {
      label: ShowAboutText(language, "text7"),
      icon: <Timeline />,
    },
  ];
  return (
    <SectionContainer>
      <div className="w-full h-[85%] max-h-[85%]">
        <SectionTitle>{ShowAboutText(language, "text1")}</SectionTitle>
        <AppTab
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabsList={tabList}
        />
        {tabValue === 0 && <PresentationBoard />}
        {tabValue === 1 && <JourneyBoard />}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
