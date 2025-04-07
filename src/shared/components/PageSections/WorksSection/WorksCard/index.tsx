"use client";

import { myTechnologies, ShowWorksText } from "@/constants";
import { IWorks } from "@/shared/interfaces";
import { useLanguageStore } from "@/Store";
import { useState } from "react";
import WorksModal from "../WorksModal";

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

      <div
        className="bg-default-board hover:bg-default-hover-board p-5 rounded-2xl cursor-pointer"
        onClick={handleClickOpen}
      >
        <div className="flex justify-center items-center bg-white w-[250px] h-[150px] rounded-sm">
          <img
            src={work.image}
            alt={`logo-${work.name}`}
            width={work.imageW}
            height={work.imageH}
          />
        </div>
        <h3 className="text-center">{work.name}</h3>
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
      </div>
    </>
  );
};

export default WorksCard;
