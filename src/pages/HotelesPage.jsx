import SearchBar from "../components/layout/SearchBar";
import FilterBar from "../components/layout/FilterBar";
import HotelList from "../components/lists/HotelList";
import ListaGridSwitcher from "../components/otros/ListaGridSwitcher";

function HotelesPage() {
  return (
    <div className="bg-gray-200 p-4 w-full">
      <div className=" flex items-center justify-between bg-white p-4 rounded shadow-md mb-4">
        <SearchBar />
        <FilterBar />
        <ListaGridSwitcher />
      </div>
      <HotelList />
    </div>
  );
}

export default HotelesPage;
