"use client";

import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  like: number;
  level: number;
}

const TechnologiesRateBoard = ({ like, level }: Props) => {
  return (
    <div className="mt-2">
      <div>
        <p className="text-mini-size">O quanto gosto:</p>
        <Rating
          size="small"
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          value={like}
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
          value={level}
          readOnly
          sx={{
            "& .MuiRating-iconEmpty": {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default TechnologiesRateBoard;
