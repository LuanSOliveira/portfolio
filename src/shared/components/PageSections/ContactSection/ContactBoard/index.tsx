"use client";

import { Email, LocalPhone } from "@mui/icons-material";

const ContactBoard = () => {
  return (
    <div>
      <h3 className="text-2-title-size">Contatos:</h3>
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
