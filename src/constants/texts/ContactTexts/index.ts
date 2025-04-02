import { TLanguage } from "@/shared/types";

const contactText = {
  text1: {
    pt: "Onde Me Encontrar",
    en: "Where to Find Me",
  },
  text2: {
    pt: "Redes:",
    en: "Links:",
  },
  text3: {
    pt: "Contatos:",
    en: "Contacts:",
  },
  text4: {
    pt: "Localidade:",
    en: "Location:",
  },
  text5: {
    pt: "Fortaleza - CE, Brasil",
    en: "Fortaleza - CE, Brazil",
  },
};

type TContactText = keyof typeof contactText;

export function ShowContactText(
  language: TLanguage,
  text: TContactText
): string {
  return contactText[text][language] || "";
}
