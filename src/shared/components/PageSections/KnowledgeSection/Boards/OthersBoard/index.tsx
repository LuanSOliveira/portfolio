"use client";

import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
  myTechnologies,
} from "@/constants";
import TechnologiesCard from "../../TechnologiesCard";
import { useLanguageStore } from "@/Store";
import { ShowKnowledgeText } from "@/constants/texts/KnowledgeTexts";
import BoardDescriptionText from "@/shared/components/BoardDescriptionText";
import { motion } from "framer-motion";

const OthersBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <BoardDescriptionText>
        {ShowKnowledgeText(language, "text6")}
      </BoardDescriptionText>
      <BoardDescriptionText>
        {ShowKnowledgeText(language, "text7")}
      </BoardDescriptionText>
      <motion.div
        className="flex gap-5 flex-wrap mt-5"
        initial={defaultInitialMotion}
        animate={defaultAnimeteMotion}
        transition={defaultTransitionMotion}
      >
        {myTechnologies
          .filter((tec) => tec.section === "other")
          .map((tec) => (
            <TechnologiesCard key={tec.name} technology={tec} />
          ))}
      </motion.div>
    </div>
  );
};

export default OthersBoard;
