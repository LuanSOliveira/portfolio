"use client";

import { myTechnologies, ShowWorksText } from "@/constants";
import { IWorks } from "@/shared/interfaces";
import { useLanguageStore } from "@/Store";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect } from "react";

interface Props {
  work: IWorks;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const WorksModal = ({ work, open, setOpen }: Props) => {
  const { language } = useLanguageStore();

  useEffect(() => {
    if (open) {
      const handleScroll = (event: WheelEvent) => {
        setOpen(false);
      };

      window.addEventListener("wheel", handleScroll);

      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableScrollLock
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(0, 36, 7, 0.699)",
          backdropFilter: "blur(12px)",
          color: "#FFFFFF",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          fontFamily: "'VT323', monospace",
        }}
      >
        {work.name}
      </DialogTitle>
      <DialogContent>
        <div className="flex gap-5 items-start">
          <div className="flex justify-center items-center bg-white w-[250px] h-[150px] rounded-sm">
            <img
              src={work.image}
              alt={`icon-${work.name}`}
              width={110}
              height={110}
            />
          </div>
          <div>
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
        <p className="mt-2 text-justify text-default-size">
          {language !== "en" ? work.description.pt : work.description.en}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WorksModal;
