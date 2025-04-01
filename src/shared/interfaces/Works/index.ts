import { TWorksType } from "@/shared/types";
import { IDescription } from "../Description";

export interface IWorks {
  name: string;
  description: IDescription;
  image: string;
  imageW: number;
  imageH: number;
  type: TWorksType;
  technologiesIndexList: number[];
  link?: string;
}
