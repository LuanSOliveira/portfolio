"use client";

import { Public } from "@mui/icons-material";

const LovalityBoard = () => {
  return (
    <div>
      <h3 className="text-2-title-size">Localidade:</h3>
      <div className="flex gap-5 items-center">
        <Public />
        <span>Fortaleza - CE, Brasil</span>
      </div>
    </div>
  );
};

export default LovalityBoard;
