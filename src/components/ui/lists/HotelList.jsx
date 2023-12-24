import HotelCard from "../cards/HotelCard";
import Grid from "../../layout/Grid";
import { useHoteles } from "../../../hooks/useHoteles";
import Loading from "../Loading";

const HotelesList = () => {
  const { hoteles, loading, error } = useHoteles();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error al cargar los hoteles</div>;
  }

  return (
    <Grid>
      {hoteles.map((hotel) => (
        <HotelCard key={hotel.id} nombre={hotel.nombre} />
      ))}
    </Grid>
  );
};

export default HotelesList;
