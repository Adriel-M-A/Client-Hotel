import Card from "../layout/Card";
import Estrellas from "../utils/Estrellas";

function HotelCard({ hotel }) {
  return (
    <Card>
      <h5 className="mb-2 text-xl font-medium ">{hotel.nombre}</h5>
      <Estrellas numero={hotel.categoria.estrellas} />
    </Card>
  );
}

export default HotelCard;
