"use client";

import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
  myWorks,
  ShowWorksText,
} from "@/constants";
import WorksCard from "../../WorksCard";
import { useLanguageStore } from "@/Store";
import BoardDescriptionText from "@/shared/components/BoardDescriptionText";
import { motion } from "framer-motion";

const ProfessionalBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <BoardDescriptionText>
        {ShowWorksText(language, "text4")}
      </BoardDescriptionText>
      <BoardDescriptionText>
        {ShowWorksText(language, "text5")}
      </BoardDescriptionText>
      <motion.div
        className="flex gap-5 flex-wrap mt-5"
        initial={defaultInitialMotion}
        animate={defaultAnimeteMotion}
        transition={defaultTransitionMotion}
      >
        {myWorks
          .filter((work) => work.type === "professional")
          .map((work) => (
            <WorksCard key={work.name} work={work} />
          ))}
      </motion.div>
    </div>
  );
};

export default ProfessionalBoard;
