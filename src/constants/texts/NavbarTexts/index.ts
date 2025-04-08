import { TLanguage } from "@/shared/types";

const navbarText = {
  text1: {
    pt: "Sobre",
    en: "About",
  },
  text2: {
    pt: "Tecnologias",
    en: "Technologies",
  },
  text3: {
    pt: "Projetos",
    en: "Projects",
  },
  text4: {
    pt: "Contatos",
    en: "Contacts",
  },
};

type NavbarText = keyof typeof navbarText;

export function ShowNavbarText(language: TLanguage, text: NavbarText): string {
  return navbarText[text][language] || "";
}
