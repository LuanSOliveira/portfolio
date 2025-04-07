"use client";

import { APP_IMAGES } from "@/assets";
import { myTechnologies, ShowWorksText } from "@/constants";
import { IWorks } from "@/shared/interfaces";
import { useLanguageStore } from "@/Store";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
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

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
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
        {work.cmmi && (
          <div className="flex gap-5 items-center mb-5">
            <img
              src={APP_IMAGES.cmmiLogo}
              className="rounded-full"
              alt="cmmi-logo"
              width={50}
              height={50}
            />
            <span>{ShowWorksText(language, "text9")}</span>
          </div>
        )}
        <div className="flex gap-5 items-start">
          <div className="flex justify-center items-center bg-white w-[250px] h-[150px] rounded-sm">
            <img
              className={`w-[${work.imageW}px] max-w-[${work.imageW}px] h-[${work.imageH}px] max-h-[${work.imageH}px] rounded-xs`}
              src={work.image}
              alt={`logo-${work.name}`}
              width={work.imageW}
              height={work.imageH}
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
        <p className="my-2 text-justify text-default-size">
          {language !== "en" ? work.description.pt : work.description.en}
        </p>
        <div className="flex gap-5 items-center justify-end">
          {work.link && (
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() => handleOpenLink(work?.link ? work.link : "")}
            >
              {ShowWorksText(language, "text10")}
            </Button>
          )}
          {work.repository && (
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() =>
                handleOpenLink(work?.repository ? work.repository : "")
              }
            >
              {ShowWorksText(language, "text11")}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorksModal;
