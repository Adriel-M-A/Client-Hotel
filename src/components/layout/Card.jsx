import Icon from "../utils/Icon";

function Card({ children, onClick, isExpanded }) {
  return (
    <div
      className={`bg-slate-500 p-4 relative ${
        isExpanded ? "grid-span-2 grid-span-2" : ""
      }`}
      style={{
        gridRow: isExpanded ? "span 2" : "auto",
        gridColumn: isExpanded ? "span 2" : "auto",
      }}
      onClick={onClick}
    >
      {children}
      <span className="cursor-pointer absolute top-0 right-0 p-2">
        <Icon
          name={isExpanded ? "contract" : "expand"}
          className="text-white"
        />
      </span>
    </div>
  );
}

export default Card;
