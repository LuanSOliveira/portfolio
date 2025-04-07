"use client";

import { myWorks, ShowWorksText } from "@/constants";
import { useLanguageStore } from "@/Store";
import WorksCard from "../../WorksCard";

const PersonalBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3>{ShowWorksText(language, "text6")}</h3>
      <p>{ShowWorksText(language, "text7")}</p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myWorks
          .filter((work) => work.type === "personal")
          .map((work) => (
            <WorksCard key={work.name} work={work} />
          ))}
      </div>
    </div>
  );
};

export default PersonalBoard;
