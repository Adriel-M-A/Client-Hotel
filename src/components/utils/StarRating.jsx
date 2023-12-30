import { useState } from "react";
import Icon from "./Icon";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(5);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
    onChange(clickedRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      onClick={() => handleStarClick(index + 1)}
      className="cursor-pointer text-2xl"
    >
      <Icon
        name={index < rating ? "starFilled" : "starEmpty"}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
