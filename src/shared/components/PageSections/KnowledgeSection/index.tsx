"use client";

import { useState } from "react";
import SectionContainer from "../../Container/SectionContainer";
import KnowledgeTabs from "./KnowledgeTabs";
import FavoriteBoard from "./Boards/FavoriteBoard";
import OthersBoard from "./Boards/OthersBoard";
import PackagesBoard from "./Boards/PackagesBoard";

const KnowledgeSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <h2 className="text-4-title-size">Meus Conhecimentos</h2>
        <KnowledgeTabs tabValue={tabValue} setTabValue={setTabValue} />
        {tabValue === 0 && <FavoriteBoard />}
        {tabValue === 1 && <OthersBoard />}
        {tabValue === 2 && <PackagesBoard />}
      </div>
    </SectionContainer>
  );
};

export default KnowledgeSection;
