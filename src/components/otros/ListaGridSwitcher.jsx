import { useState } from "react";

const ListaGridSwitcher = ({ onListaClick, onGridClick }) => {
  const [vistaLista, setVistaLista] = useState(true);

  const cambiarVista = () => {
    setVistaLista((prevState) => !prevState);
    if (vistaLista) {
      onGridClick();
    } else {
      onListaClick();
    }
  };

  return (
    <div>
      {vistaLista ? (
        <span
          className="icon-[material-symbols--menu-rounded]"
          onClick={cambiarVista}
          style={{ cursor: "pointer" }}
        ></span>
      ) : (
        <span
          className="icon-[mynaui--grid]"
          onClick={cambiarVista}
          style={{ cursor: "pointer" }}
        ></span>
      )}
    </div>
  );
};

export default ListaGridSwitcher;
