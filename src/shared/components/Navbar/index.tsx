"use client";

import { TLanguage } from "@/shared/types";
import { useLanguageStore } from "@/Store";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = (language: TLanguage) => {
    setLanguage(language);
    handleClose();
  };

  return (
    <div className="w-full py-5 px-10 bg-black/60 backdrop-blur-md fixed top-0 left-0 z-50 flex justify-between">
      <img src="/avatar_3.png" alt="avatar_2" className="w-[45px]" />
      <div className="flex justify-end">
        <Button variant="text" color="inherit" onClick={handleClick}>
          <IoLanguage size={30} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={() => handleSelectLanguage("pt")}>
            {language !== "en" ? "Português" : "Portuguese"}
          </MenuItem>
          <MenuItem onClick={() => handleSelectLanguage("en")}>
            {language !== "en" ? "Inglês" : "English"}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
