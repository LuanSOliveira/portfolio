import { TWorksType } from "@/shared/types";
import { IDescription } from "../Description";

export interface IWorks {
  id: number;
  name: string;
  description: IDescription;
  image: string;
  imageW: number;
  imageH: number;
  type: TWorksType;
  technologiesIndexList: number[];
  link?: string;
}
