"use client";

import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ITechnologies } from "@/shared/interfaces";

interface Props {
  technology: ITechnologies;
}

const TechnologiesCard = ({ technology }: Props) => {
  return (
    <div className="bg-default-board p-5 rounded-2xl">
      <div className="flex justify-center">
        <img
          src={technology.image}
          alt={`icon-${technology.name}`}
          width={60}
          height={60}
        />
      </div>
      <p className="text-center">{technology.name}</p>
      <div className="mt-2">
        <div>
          <p className="text-mini-size">O quanto gosto:</p>
          <Rating
            size="small"
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            value={technology.like}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#ff6d75",
              },
              "& .MuiRating-iconEmpty": {
                color: "white",
              },
            }}
          />
        </div>
        <div>
          <p className="text-mini-size">O quanto utilizei:</p>
          <Rating
            size="small"
            value={technology.level}
            readOnly
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "white",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
