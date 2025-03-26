import { TLanguage } from "@/shared/types";

const presentationText = {
  text1: {
    pt: "Olá! Me chamo Luan.",
    en: "Hello! I'm Luan.",
  },
  text2: {
    pt: "<Desenvolvedor Front-End/>",
    en: "<Front-End Developer/>",
  },
  text3: {
    pt: "Transformando ideias em interfaces intuitivas e eficientes.",
    en: "Turning ideas into intuitive and efficient interfaces.",
  },
  text4: {
    pt: "Sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes. Com foco em performance, acessibilidade e design responsivo, transformo conceitos em interfaces funcionais e visualmente atraentes, garantindo uma navegação fluida e intuitiva para os usuários.",
    en: "I am a front-end developer passionate about creating engaging digital experiences. With a focus on performance, accessibility, and responsive design, I turn concepts into functional and visually appealing interfaces, ensuring a smooth and intuitive user experience.",
  },
};

type PresentationText = keyof typeof presentationText;

export function ShowPresentationText(
  language: TLanguage,
  text: PresentationText
): string {
  return presentationText[text][language] || "";
}

// type PresentationText = "text1" | "text2" | "text3" | "text4";

// export function ShowPresentationText(
//   language: TLanguage,
//   text: PresentationText
// ): string {
//   if (language !== "en") {
//     if (text === "text1") {
//       return presentationText.text1.pt;
//     } else if (text === "text2") {
//       return presentationText.text2.pt;
//     } else if (text === "text3") {
//       return presentationText.text3.pt;
//     } else if (text === "text4") {
//       return presentationText.text4.pt;
//     } else {
//       return "";
//     }
//   } else {
//     if (text === "text1") {
//       return presentationText.text1.en;
//     } else if (text === "text2") {
//       return presentationText.text2.en;
//     } else if (text === "text3") {
//       return presentationText.text3.en;
//     } else if (text === "text4") {
//       return presentationText.text4.en;
//     } else {
//       return "";
//     }
//   }
// }
