"use client";

import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
  myWorks,
  ShowWorksText,
} from "@/constants";
import { useLanguageStore } from "@/Store";
import WorksCard from "../../WorksCard";
import BoardDescriptionText from "@/shared/components/BoardDescriptionText";
import { motion } from "framer-motion";

const PersonalBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <BoardDescriptionText>
        {ShowWorksText(language, "text6")}
      </BoardDescriptionText>
      <BoardDescriptionText>
        {ShowWorksText(language, "text7")}
      </BoardDescriptionText>
      <motion.div
        className="flex gap-5 flex-wrap mt-5"
        initial={defaultInitialMotion}
        animate={defaultAnimeteMotion}
        transition={defaultTransitionMotion}
      >
        {myWorks
          .filter((work) => work.type === "personal")
          .map((work) => (
            <WorksCard key={work.name} work={work} />
          ))}
      </motion.div>
    </div>
  );
};

export default PersonalBoard;
