"use client";

import SectionContainer from "../../Container/SectionContainer";
import ContactBoard from "./ContactBoard";
import LinksBoard from "./LinksBoard";
import LocalityBoard from "./LocalityBoard";

const ContactSection = () => {
  return (
    <SectionContainer>
      <div className="w-full min-h-[85%]">
        <h2 className="text-4-title-size">Onde Me Encontrar</h2>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-10">
            <LinksBoard />
            <ContactBoard />
            <LocalityBoard />
          </div>
          <img src="/avatar_2.png" alt="avatar_2" className="w-[500px]" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
