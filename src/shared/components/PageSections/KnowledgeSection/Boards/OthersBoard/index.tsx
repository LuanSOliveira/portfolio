"use client";

import { myTechnologies } from "@/constants";
import TechnologiesCard from "../../TechnologiesCard";
import { useLanguageStore } from "@/Store";
import { ShowKnowledgeText } from "@/constants/texts/KnowledgeTexts";

const OthersBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3>{ShowKnowledgeText(language, "text6")}</h3>
      <p>{ShowKnowledgeText(language, "text7")}</p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myTechnologies
          .filter((tec) => tec.section === "other")
          .map((tec) => (
            <TechnologiesCard key={tec.name} technology={tec} />
          ))}
      </div>
    </div>
  );
};

export default OthersBoard;
