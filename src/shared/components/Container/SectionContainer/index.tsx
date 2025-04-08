import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  itemCenter?: boolean;
}

const SectionContainer = ({ children, itemCenter }: Props) => {
  return (
    <section
      className={`pt-24 pb-2 px-[10%] flex justify-center ${
        itemCenter && "items-center"
      } w-screen min-h-screen`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
