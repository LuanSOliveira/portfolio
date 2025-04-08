"use client";

import { TLanguage } from "@/shared/types";
import { useLanguageStore } from "@/Store";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoHome, IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
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
        <Button variant="text" color="inherit" onClick={() => router.push("/")}>
          <IoHome size={30} />
        </Button>
        <Button variant="text" color="inherit" onClick={handleClick}>
          <IoLanguage size={30} />
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          className="w-[130px] h-[30px]"
          variant="contained"
          color="success"
          onClick={() => router.push("/sobre")}
        >
          Sobre
        </Button>
        <Button
          className="w-[130px] h-[30px]"
          variant="contained"
          color="success"
          onClick={() => router.push("/tecnologias")}
        >
          Tecnologias
        </Button>
        <Button
          className="w-[130px] h-[30px]"
          variant="contained"
          color="success"
          onClick={() => router.push("/projetos")}
        >
          Projetos
        </Button>
        <Button
          className="w-[130px] h-[30px]"
          variant="contained"
          color="success"
          onClick={() => router.push("/contatos")}
        >
          Contatos
        </Button>
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
