import SearchBar from "../components/layout/SearchBar";
import FilterBar from "../components/layout/FilterBar";
import HotelList from "../components/ui/lists/HotelList";

function HotelesPage() {
  return (
    <div>
      <div className="flex justify-between">
        <SearchBar />
        <FilterBar />
      </div>
      <HotelList />
    </div>
  );
}

export default HotelesPage;
