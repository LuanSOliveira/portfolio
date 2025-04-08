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

const BoardDescriptionText = ({ children }: Props) => {
  return (
    <motion.h3
      initial={defaultInitialMotion}
      animate={defaultAnimeteMotion}
      transition={defaultTransitionMotion}
    >
      {children}
    </motion.h3>
  );
};

export default BoardDescriptionText;
