"use client";

import { myTechnologies } from "@/constants";
import TechnologiesCard from "../../TechnologiesCard";

const OthersBoard = () => {
  return (
    <div>
      <h3>Outras Tecnologias</h3>
      <p>
        Aqui estão listadas as tecnologias que já utilizei ou utilizo com menor
        frequência.
      </p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myTechnologies
          .filter((tec) => tec.section === "other")
          .map((tec) => (
            <TechnologiesCard key={tec.name} technology={tec} />
          ))}
      </div>
    </div>
  );
};

export default OthersBoard;
