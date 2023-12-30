import { useState } from "react";
import Icon from "./Icon";

const PriceFilter = ({ onChange }) => {
  const [order, setOrder] = useState("lowToHigh");

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    onChange(newOrder);
  };

  return (
    <div className="flex items-center">
      <span
        onClick={() => handleOrderChange("lowToHigh")}
        className={`cursor-pointer mr-2 ${
          order === "lowToHigh" ? "text-green-500" : "text-gray-300"
        }`}
      >
        <Icon name="priceIncrease" />
      </span>
      <span
        onClick={() => handleOrderChange("highToLow")}
        className={`cursor-pointer ${
          order === "highToLow" ? "text-red-500" : "text-gray-300"
        }`}
      >
        <Icon name="priceDecrease" />
      </span>
    </div>
  );
};

export default PriceFilter;
