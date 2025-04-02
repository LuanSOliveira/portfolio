import { TLanguage } from "@/shared/types";

const worksText = {
  text1: {
    pt: "Meus Trabalhos",
    en: "My Works",
  },
  text2: {
    pt: "profissional",
    en: "professional",
  },
  text3: {
    pt: "pessoal",
    en: "personal",
  },
  text4: {
    pt: "Trabalhos Profissionais",
    en: "Professional Works",
  },
  text5: {
    pt: "Aqui estão listados os projetos onde atuei profissionalmente.",
    en: "Here are the projects where I have worked professionally.",
  },
  text6: {
    pt: "Trabalhos Pessoais",
    en: "Personal Works",
  },
  text7: {
    pt: "Aqui estão listadas os projetos que desenvolvi para uso pessoal ou estudo.",
    en: "Here are the projects I developed for personal use or study.",
  },
  text8: {
    pt: "Tecnologias Utilizadas:",
    en: "Technologies Used:",
  },
};

type TWorksText = keyof typeof worksText;

export function ShowWorksText(language: TLanguage, text: TWorksText): string {
  return worksText[text][language] || "";
}
