import { TTechnologiesSections } from "@/shared/types";
import { IDescription } from "../Description";

export interface ITechnologies {
  name: string;
  image: string;
  section: TTechnologiesSections;
  description: IDescription;
  like: number;
  level: number;
}
