import { TTechnologiesSections } from "@/shared/types";

interface ITechnologiesDescription {
  pt: string;
  en: string;
}

export interface ITechnologies {
  name: string;
  image: string;
  section: TTechnologiesSections;
  description: ITechnologiesDescription;
  like: number;
  level: number;
}
