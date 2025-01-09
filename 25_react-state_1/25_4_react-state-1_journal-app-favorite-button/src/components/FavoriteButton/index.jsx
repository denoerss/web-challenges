import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setIsFavourite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavourite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
