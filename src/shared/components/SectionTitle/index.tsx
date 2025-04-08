"use client";

import {
  defaultAnimeteMotion,
  defaultInitialMotion,
  defaultTransitionMotion,
} from "@/constants";
import { motion } from "framer-motion";

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <motion.h2
      className="text-4-title-size"
      initial={defaultInitialMotion}
      animate={defaultAnimeteMotion}
      transition={defaultTransitionMotion}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
