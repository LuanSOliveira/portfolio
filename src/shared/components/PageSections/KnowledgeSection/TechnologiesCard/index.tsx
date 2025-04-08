"use client";

import { ITechnologies } from "@/shared/interfaces";
import { useState } from "react";
import TechnologiesModal from "../TechnologiesModal";
import TechnologiesRateBoard from "../TechnologiesRateBoard";
import { motion } from "framer-motion";

interface Props {
  technology: ITechnologies;
}

const TechnologiesCard = ({ technology }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const cardVariants = {
    offscreen: {
      x: -100,
      rotateY: 90,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  return (
    <>
      <TechnologiesModal
        technology={technology}
        open={openModal}
        setOpen={setOpenModal}
      />

      <motion.div
        className="bg-default-board hover:bg-default-hover-board p-5 rounded-2xl cursor-pointer"
        onClick={handleClickOpen}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-center">
          <img
            src={technology.image}
            alt={`icon-${technology.name}`}
            width={60}
            height={60}
          />
        </div>
        <p className="text-center">{technology.name}</p>
        <TechnologiesRateBoard
          like={technology.like}
          level={technology.level}
        />
      </motion.div>
    </>
  );
};

export default TechnologiesCard;
