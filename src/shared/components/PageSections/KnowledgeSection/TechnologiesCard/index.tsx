"use client";

import { ITechnologies } from "@/shared/interfaces";
import { useState } from "react";
import TechnologiesModal from "../TechnologiesModal";
import TechnologiesRateBoard from "../TechnologiesRateBoard";

interface Props {
  technology: ITechnologies;
}

const TechnologiesCard = ({ technology }: Props) => {
  const [openModal, setOpenModal] = useState(false);

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

      <div
        className="bg-default-board hover:bg-default-hover-board p-5 rounded-2xl cursor-pointer"
        onClick={handleClickOpen}
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
      </div>
    </>
  );
};

export default TechnologiesCard;
