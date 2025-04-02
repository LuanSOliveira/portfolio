"use client";

import { ShowContactText } from "@/constants";
import { useLanguageStore } from "@/Store";
import { Email, LocalPhone } from "@mui/icons-material";

const ContactBoard = () => {
  const { language } = useLanguageStore();
  return (
    <div>
      <h3 className="text-2-title-size">
        {ShowContactText(language, "text3")}
      </h3>
      <div className="flex gap-5 items-center">
        <LocalPhone />
        <span>(85) 98547-9902</span>
      </div>
      <div className="flex gap-5 items-center">
        <Email />
        <span>luanso.frontdev@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactBoard;
