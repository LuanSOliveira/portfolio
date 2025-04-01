"use client";

import { useState } from "react";
import SectionContainer from "../../Container/SectionContainer";
import FavoriteBoard from "./Boards/FavoriteBoard";
import OthersBoard from "./Boards/OthersBoard";
import AppTab from "../../AppTab";
import { DeveloperBoard, StarRate } from "@mui/icons-material";
import { ITab } from "@/shared/interfaces";

const KnowledgeSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const tabList: ITab[] = [
    {
      label: "favoritos",
      icon: <StarRate />,
    },
    {
      label: "outros",
      icon: <DeveloperBoard />,
    },
  ];

  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <h2 className="text-4-title-size">Meus Conhecimentos</h2>
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
