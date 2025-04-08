"use client";

import { myTechnologies, ShowWorksText } from "@/constants";
import { IWorks } from "@/shared/interfaces";
import { useLanguageStore } from "@/Store";
import { useState } from "react";
import WorksModal from "../WorksModal";
import { APP_IMAGES } from "@/assets";
import { motion } from "framer-motion";

interface Props {
  work: IWorks;
}

const WorksCard = ({ work }: Props) => {
  const { language } = useLanguageStore();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <WorksModal work={work} open={openModal} setOpen={setOpenModal} />

      <motion.div
        className="bg-default-board hover:bg-default-hover-board p-5 rounded-2xl cursor-pointer relative"
        onClick={handleClickOpen}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 1 }}
      >
        <div className="flex justify-center items-center bg-white w-[250px] h-[150px] rounded-sm">
          <img
            className={`w-[${work.imageW}px] max-w-[${work.imageW}px] h-[${work.imageH}px] max-h-[${work.imageH}px] rounded-xs`}
            src={work.image}
            alt={`logo-${work.name}`}
            width={work.imageW}
            height={work.imageH}
          />
        </div>
        <h3 className="text-center">{work.name}</h3>
        {work.cmmi && (
          <div className="absolute right-5 top-[53%]">
            <img
              src={APP_IMAGES.cmmiLogo}
              className="rounded-full"
              alt="cmmi-logo"
              width={50}
              height={50}
            />
          </div>
        )}
        <div className="mt-5">
          <h3>{ShowWorksText(language, "text8")}</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {work.technologiesIndexList.map((tec) => (
              <img
                key={tec}
                src={myTechnologies[tec].image}
                title={myTechnologies[tec].name}
                alt={`logo-${myTechnologies[tec].name}`}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorksCard;
