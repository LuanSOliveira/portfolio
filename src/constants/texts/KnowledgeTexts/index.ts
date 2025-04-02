import { TLanguage } from "@/shared/types";

const knowledgeText = {
  text1: {
    pt: "Meus Conhecimentos",
    en: "My Knowledge",
  },
  text2: {
    pt: "favoritos",
    en: "favorites",
  },
  text3: {
    pt: "outros",
    en: "others",
  },
  text4: {
    pt: "Tecnologias Favoritas",
    en: "Favorite Technologies",
  },
  text5: {
    pt: "Aqui estão listadas as tecnologias que mais utilizo no meu dia a dia.",
    en: "Here are the technologies I use the most in my daily life.",
  },
  text6: {
    pt: "Outras Tecnologias",
    en: "Other Technologies",
  },
  text7: {
    pt: "Aqui estão listadas as tecnologias que já utilizei ou utilizo com menor frequência.",
    en: "Here are the technologies I have used or use less frequently.",
  },
  text8: {
    pt: "O quanto gosto:",
    en: "How much I like:",
  },
  text9: {
    pt: "O quanto utilizei:",
    en: "How much I have used:",
  },
};

type KnowledgeText = keyof typeof knowledgeText;

export function ShowKnowledgeText(
  language: TLanguage,
  text: KnowledgeText
): string {
  return knowledgeText[text][language] || "";
}
