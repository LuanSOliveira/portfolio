"use client";

import { ShowNavbarText } from "@/constants";
import { APP_ROUTE } from "@/constants/routes";
import { TLanguage } from "@/shared/types";
import { useLanguageStore } from "@/Store";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoHome, IoLanguage } from "react-icons/io5";

interface INavbutton {
  id: number;
  text: "text1" | "text2" | "text3" | "text4";
  route: string;
}

const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const navButtonList: INavbutton[] = [
    { id: 0, text: "text1", route: APP_ROUTE.about },
    { id: 1, text: "text2", route: APP_ROUTE.tecnologies },
    { id: 2, text: "text3", route: APP_ROUTE.works },
    { id: 3, text: "text4", route: APP_ROUTE.contact },
  ];
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
      <div className="flex gap-3 items-center">
        <Button
          variant="text"
          color="inherit"
          onClick={() => router.push(APP_ROUTE.home)}
        >
          <IoHome size={30} />
        </Button>
        <Button variant="text" color="inherit" onClick={handleClick}>
          <IoLanguage size={30} />
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        {navButtonList.map((button) => (
          <Button
            key={button.id}
            className="w-[130px] h-[30px]"
            sx={{
              fontFamily: "VT323, monospace",
              fontSize: 22,
            }}
            variant="contained"
            color="success"
            onClick={() => router.push(button.route)}
          >
            {ShowNavbarText(language, button.text)}
          </Button>
        ))}
      </div>

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
  );
};

export default Navbar;
