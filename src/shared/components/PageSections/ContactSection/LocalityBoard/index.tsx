"use client";

import { ShowContactText } from "@/constants";
import { useLanguageStore } from "@/Store";
import { Public } from "@mui/icons-material";

const LovalityBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3 className="text-2-title-size">
        {" "}
        {ShowContactText(language, "text4")}
      </h3>
      <div className="flex gap-5 items-center">
        <Public />
        <span> {ShowContactText(language, "text5")}</span>
      </div>
    </div>
  );
};

export default LovalityBoard;
