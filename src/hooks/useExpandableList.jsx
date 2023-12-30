import { useState } from "react";

export const useExpandableList = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemId) => {
    setExpandedItem(itemId !== expandedItem ? itemId : null);
  };

  const isExpanded = (itemId) => itemId === expandedItem;

  return { handleItemClick, isExpanded };
};
