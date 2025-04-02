"use client";

import { myWorks, ShowWorksText } from "@/constants";
import WorksCard from "../../WorksCard";
import { useLanguageStore } from "@/Store";

const ProfessionalBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3>{ShowWorksText(language, "text4")}</h3>
      <p>{ShowWorksText(language, "text5")}</p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myWorks
          .filter((work) => work.type === "professional")
          .map((work) => (
            <WorksCard key={work.name} work={work} />
          ))}
      </div>
    </div>
  );
};

export default ProfessionalBoard;
