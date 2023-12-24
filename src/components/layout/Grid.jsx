function Grid({ children }) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}

export default Grid;

/**
 * Este grid es pensado para todas las listas (admin, vendedor)
 * - Hoteles
 * - Vendedores
 * - Clientes
 *
 * El hijo (children) que recibe por parametro tiene que ser la lista de tarjetas  (card)
 * de los elementos que se visualizaran en esta "matriz"
 */
