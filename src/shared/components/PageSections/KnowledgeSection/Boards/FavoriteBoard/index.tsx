"use client";

import { myTechnologies } from "@/constants";
import TechnologiesCard from "../../TechnologiesCard";

const FavoriteBoard = () => {
  return (
    <div>
      <h3>Tecnologias Favoritas</h3>
      <p>
        Aqui estão listadas as tecnologias que mais utilizo no meu dia a dia.
      </p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myTechnologies
          .filter((tec) => tec.section === "hard")
          .map((tec) => (
            <TechnologiesCard key={tec.name} technology={tec} />
          ))}
      </div>
    </div>
  );
};

export default FavoriteBoard;
