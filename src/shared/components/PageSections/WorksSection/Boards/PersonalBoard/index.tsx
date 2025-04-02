"use client";

import { ShowWorksText } from "@/constants";
import { useLanguageStore } from "@/Store";

const PersonalBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3>{ShowWorksText(language, "text6")}</h3>
      <p>{ShowWorksText(language, "text7")}</p>
      <div className="flex gap-5 flex-wrap mt-5"></div>
    </div>
  );
};

export default PersonalBoard;
