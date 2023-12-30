const Icon = ({ name, className }) => {
  const icons = {
    starFilled: "icon-[material-symbols--star-rate-rounded]",
    starEmpty: "icon-[material-symbols--star-outline-rounded]",
    starHalf: "icon-[material-symbols--star-half-rounded]",
    priceIncrease:
      "icon-[streamline--money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart]",
    priceDecrease:
      "icon-[streamline--money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart]",
  };

  const iconName = icons[name] || "";

  if (!iconName) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <span className={`${iconName} ${className || ""}`}></span>;
};

export default Icon;
