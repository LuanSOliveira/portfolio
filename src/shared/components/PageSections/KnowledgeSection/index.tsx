"use client";

import { useState } from "react";
import SectionContainer from "../../Container/SectionContainer";
import FavoriteBoard from "./Boards/FavoriteBoard";
import OthersBoard from "./Boards/OthersBoard";
import AppTab from "../../AppTab";
import { DeveloperBoard, StarRate } from "@mui/icons-material";
import { ITab } from "@/shared/interfaces";
import { useLanguageStore } from "@/Store";
import { ShowKnowledgeText } from "@/constants/texts/KnowledgeTexts";

const KnowledgeSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const { language } = useLanguageStore();
  const tabList: ITab[] = [
    {
      label: ShowKnowledgeText(language, "text2"),
      icon: <StarRate />,
    },
    {
      label: ShowKnowledgeText(language, "text3"),
      icon: <DeveloperBoard />,
    },
  ];

  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <h2 className="text-4-title-size">
          {ShowKnowledgeText(language, "text1")}
        </h2>
        <AppTab
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabsList={tabList}
        />
        {tabValue === 0 && <FavoriteBoard />}
        {tabValue === 1 && <OthersBoard />}
      </div>
    </SectionContainer>
  );
};

export default KnowledgeSection;
