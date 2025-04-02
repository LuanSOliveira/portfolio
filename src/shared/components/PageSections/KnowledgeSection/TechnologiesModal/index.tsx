"use client";

import { ITechnologies } from "@/shared/interfaces";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect } from "react";
import TechnologiesRateBoard from "../TechnologiesRateBoard";
import { useLanguageStore } from "@/Store";

interface Props {
  technology: ITechnologies;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const TechnologiesModal = ({ technology, open, setOpen }: Props) => {
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
        {technology.name}
      </DialogTitle>
      <DialogContent>
        <div className="flex gap-5">
          <img
            src={technology.image}
            alt={`icon-${technology.name}`}
            width={110}
            height={110}
          />
          <TechnologiesRateBoard
            like={technology.like}
            level={technology.level}
          />
        </div>
        <p className="mt-2 text-justify text-default-size">
          {language !== "en"
            ? technology.description.pt
            : technology.description.en}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default TechnologiesModal;
