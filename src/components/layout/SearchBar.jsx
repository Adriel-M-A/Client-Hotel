function SearchBar() {
  return (
    <div className="flex justify-between">
      <input type="text" placeholder="Buscar por nombre" className="mr-2" />
      <input type="text" placeholder="Buscar por ubicación" />
    </div>
  );
}

export default SearchBar;
