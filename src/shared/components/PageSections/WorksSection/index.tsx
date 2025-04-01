"use client";

import { useState } from "react";
import AppTab from "../../AppTab";
import SectionContainer from "../../Container/SectionContainer";
import { ITab } from "@/shared/interfaces";
import { Person, Work } from "@mui/icons-material";
import ProfessionalBoard from "./Boards/ProfessionalBoard";
import PersonalBoard from "./Boards/PersonalBoard";

const WorksSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const tabList: ITab[] = [
    {
      label: "profissional",
      icon: <Work />,
    },
    {
      label: "pessoal",
      icon: <Person />,
    },
  ];
  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <h2 className="text-4-title-size">Meus Trabalhos</h2>
        <AppTab
          tabValue={tabValue}
          setTabValue={setTabValue}
          tabsList={tabList}
        />
        {tabValue === 0 && <ProfessionalBoard />}
        {tabValue === 1 && <PersonalBoard />}
      </div>
    </SectionContainer>
  );
};

export default WorksSection;
