function Mosaico({
  habitaciones,
  paquetes,
  temporadas,
  tarifas,
  vendedores,
  ventas,
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
      <div className="">
        <habitaciones />
      </div>
      <div className="">
        <paquetes />
      </div>
      <div className="">
        <temporadas />
      </div>
      <div className="">
        <tarifas />
      </div>
      <div className="">
        <vendedores />
      </div>
      <div className="">
        <ventas />
      </div>
    </div>
  );
}

export default Mosaico;

/**
 * Este mosaico esta pensado para la pagina del hotel (admin, vendedor)
 * donde se motraran todas las lista del contenido del hotel
 */
