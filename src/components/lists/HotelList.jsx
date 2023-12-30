import HotelCard from "../cards/HotelCard";
import Grid from "../layout/Grid";
import { useHoteles } from "../../hooks/useHoteles";
import Loading from "../ui/Loading";
import { useExpandableList } from "../../hooks/useExpandableList";

const HotelesList = () => {
  const { hoteles, loading, error } = useHoteles("mid");
  const { handleItemClick, isExpanded } = useExpandableList();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error al cargar los hoteles</div>;
  }

  return (
    <Grid>
      {hoteles.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          isExpanded={isExpanded(hotel.id)}
          onClick={() => handleItemClick(hotel.id)}
        />
      ))}
    </Grid>
  );
};

export default HotelesList;
