function FilterBar() {
  return (
    <div className="flex justify-between">
      <select className="mr-2">
        <option value="">Filtrar por estrellas</option>
        <option value="1">1 estrella</option>
        <option value="2">2 estrellas</option>
        <option value="3">3 estrellas</option>
        <option value="4">4 estrellas</option>
        <option value="5">5 estrellas</option>
      </select>
      <select>
        <option value="">Filtrar por precio</option>
        <option value="low">Bajo a alto</option>
        <option value="high">Alto a bajo</option>
      </select>
    </div>
  );
}

export default FilterBar;
