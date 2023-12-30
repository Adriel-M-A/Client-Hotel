import Card from "../layout/Card";
import Estrellas from "../utils/Estrellas";

function HotelCard({ hotel, onClick, isExpanded }) {
  return (
    <Card onClick={onClick} isExpanded={isExpanded}>
      <div className="flex">
        <h5 className="mb-2 text-xl font-medium">{hotel.nombre}</h5>
        <Estrellas numero={hotel.categoria.estrellas} />
      </div>
      {isExpanded && <p>Descripción: {hotel.descripcion}</p>}
    </Card>
  );
}

export default HotelCard;
