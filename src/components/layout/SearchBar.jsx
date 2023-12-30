function SearchBar() {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded border border-gray-300">
      <div className="flex items-center border-r pr-2">
        <span className="mr-2">
          <i className="fas fa-search text-gray-500"></i>
        </span>
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="outline-none bg-transparent"
        />
      </div>
      <div className="flex items-center pl-2">
        <span className="mr-2">
          <i className="fas fa-map-marker-alt text-gray-500"></i>
        </span>
        <input
          type="text"
          placeholder="Buscar por ubicación"
          className="outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default SearchBar;
