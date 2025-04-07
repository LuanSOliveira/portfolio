import { APP_IMAGES } from "@/assets";
import { IWorks } from "@/shared/interfaces";

export const myWorks: IWorks[] = [
  {
    name: "PPA",
    description: {
      pt: "Sistema desenvolvido para o controle de gastos anuais distribuídos para os municípios do estado do Acre.",
      en: "System developed to control annual expenses distributed to municipalities in the state of Acre.",
    },
    image: APP_IMAGES.ppaLogo,
    imageW: 100,
    imageH: 100,
    type: "professional",
    technologiesIndexList: [3, 5, 7],
    id: 0,
  },
  {
    name: "DETRAN|ES",
    description: {
      pt: "Sistema desenvolvido para o DETRAN do estado do Espírito Santo com o objetivo de unificar outros sistemas internos melhorando a usabilidade dos usuários do órgão público.",
      en: "System developed for DETRAN of the state of Espírito Santo with the objective of unifying other internal systems, improving usability for users of the public body.",
    },
    image: APP_IMAGES.detranLogo,
    imageW: 150,
    imageH: 100,
    type: "professional",
    technologiesIndexList: [3, 5, 7],
    id: 1,
  },
  {
    name: "HUB",
    description: {
      pt: "Projeto interno desenvolvido para controle de alocação de horas de funcionários da equipe de desenvolvimento e gestão de perfil técnico.",
      en: "Internal project developed to control the allocation of hours for employees in the development team and technical profile management.",
    },
    image: APP_IMAGES.hubLogo,
    imageW: 150,
    imageH: 100,
    type: "professional",
    technologiesIndexList: [3, 5, 7, 24],
    id: 2,
  },
  {
    name: "VINTDESK",
    description: {
      pt: "Projeto interno desenvolvido para controle de agendamento de mesas para funcionários dos setores da empresa.",
      en: "Internal project developed to control table scheduling for employees in the company's sectors.",
    },
    image: APP_IMAGES.vintLogo,
    imageW: 100,
    imageH: 100,
    type: "professional",
    technologiesIndexList: [3, 5, 6, 10],
    id: 3,
  },
  {
    name: "SGC",
    description: {
      pt: "Projeto interno desenvolvido para gestão de LNC de funcionários.",
      en: "Internal project developed for employee LNC management.",
    },
    image: APP_IMAGES.sgcLogo,
    imageW: 100,
    imageH: 100,
    type: "professional",
    technologiesIndexList: [3, 5, 8],
    id: 4,
  },
];
