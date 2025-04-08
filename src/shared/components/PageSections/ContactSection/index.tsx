"use client";

import { useLanguageStore } from "@/Store";
import SectionContainer from "../../Container/SectionContainer";
import ContactBoard from "./ContactBoard";
import LinksBoard from "./LinksBoard";
import LocalityBoard from "./LocalityBoard";
import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
  ShowContactText,
} from "@/constants";
import { motion } from "framer-motion";
import SectionTitle from "../../SectionTitle";

const ContactSection = () => {
  const { language } = useLanguageStore();
  return (
    <SectionContainer itemCenter>
      <div className="w-full min-h-[85%]">
        <SectionTitle>{ShowContactText(language, "text1")}</SectionTitle>
        <motion.div
          className="flex justify-between w-full"
          initial={defaultInitialMotion}
          animate={defaultAnimeteMotion}
          transition={defaultTransitionMotion}
        >
          <div className="flex flex-col gap-10">
            <LinksBoard />
            <ContactBoard />
            <LocalityBoard />
          </div>
          <img src="/avatar_2.png" alt="avatar_2" className="w-[500px]" />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
