"use client";

import { myWorks } from "@/constants";
import WorksCard from "../../WorksCard";

const ProfessionalBoard = () => {
  return (
    <div>
      <h3>Trabalhos Profissionais</h3>
      <p>Aqui estão listados os projetos onde atuei profissionalmente.</p>
      <div className="flex gap-5 flex-wrap mt-5">
        {myWorks
          .filter((work) => work.type === "professional")
          .map((work) => (
            <WorksCard key={work.name} work={work} />
          ))}
      </div>
    </div>
  );
};

export default ProfessionalBoard;
