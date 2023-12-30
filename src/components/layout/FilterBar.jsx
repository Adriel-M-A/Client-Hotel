import StarRating from "../utils/StarRating";
import PriceFilter from "../utils/PriceFilter";

function FilterBar() {
  const handlePriceOrderChange = (selectedOrder) => {
    // Lógica para manejar el cambio de orden de precio
    console.log(
      `Seleccionaste orden de precio: ${
        selectedOrder === "lowToHigh" ? "Bajo a alto" : "Alto a bajo"
      }`
    );
  };

  const handleStarChange = (selectedStars) => {
    // Lógica para manejar el cambio de estrellas seleccionadas
    console.log(`Seleccionaste ${selectedStars} estrellas`);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded shadow-md mb-4">
      <StarRating onChange={handleStarChange} />
      <div className="mx-4"></div> {/* Agregado espacio en blanco */}
      <PriceFilter onChange={handlePriceOrderChange} />
    </div>
  );
}

export default FilterBar;
