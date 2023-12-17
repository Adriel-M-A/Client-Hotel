import HotelCard from "../cards/HotelCard";

function HotelList() {
  // Lista de hoteles de prueba
  const hoteles = [
    { id: 1, nombre: "Hotel 1" },
    { id: 2, nombre: "Hotel 2" },
    { id: 3, nombre: "Hotel 3" },
    { id: 4, nombre: "Hotel 4" },
    { id: 5, nombre: "Hotel 5" },
    { id: 6, nombre: "Hotel 6" },
    { id: 7, nombre: "Hotel 7" },
    { id: 8, nombre: "Hotel 8" },
    { id: 9, nombre: "Hotel 9" },
    { id: 10, nombre: "Hotel 10" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {hoteles.map((hotel) => (
        <HotelCard key={hotel.id} nombre={hotel.nombre} />
      ))}
    </div>
  );
}

export default HotelList;
