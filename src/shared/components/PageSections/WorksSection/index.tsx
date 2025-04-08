"use client";

import { useState } from "react";
import AppTab from "../../AppTab";
import SectionContainer from "../../Container/SectionContainer";
import { ITab } from "@/shared/interfaces";
import { Person, Work } from "@mui/icons-material";
import ProfessionalBoard from "./Boards/ProfessionalBoard";
import PersonalBoard from "./Boards/PersonalBoard";
import { useLanguageStore } from "@/Store";
import { ShowWorksText } from "@/constants";
import SectionTitle from "../../SectionTitle";

const WorksSection = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const { language } = useLanguageStore();
  const tabList: ITab[] = [
    {
      label: ShowWorksText(language, "text2"),
      icon: <Work />,
    },
    {
      label: ShowWorksText(language, "text3"),
      icon: <Person />,
    },
  ];
  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <SectionTitle>{ShowWorksText(language, "text1")}</SectionTitle>
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
