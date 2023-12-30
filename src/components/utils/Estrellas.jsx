const Estrellas = ({ numero }) => {
  // Redondea hacia abajo para obtener la parte entera del número
  const estrellasLlenas = Math.floor(numero);

  // Obtiene la parte decimal del número y asigna 0.5 si es mayor o igual a 0.5
  const mediaEstrella = numero % 1 >= 0.5 ? 0.5 : 0;

  // Calcula las estrellas vacías restando las llenas y la media del total de estrellas
  const estrellasVacias = Math.floor(5 - estrellasLlenas - mediaEstrella);

  return (
    <div>
      {[...Array(estrellasLlenas)].map((_, index) => (
        <span
          key={index}
          className="icon-[material-symbols--star-rate-rounded] text-3xl text-yellow-500"
        ></span>
      ))}
      {mediaEstrella > 0 && (
        <span className="icon-[material-symbols--star-half-rounded] text-3xl text-yellow-500"></span>
      )}
      {[...Array(estrellasVacias)].map((_, index) => (
        <span
          key={index}
          className="icon-[material-symbols--star-outline-rounded] text-3xl text-yellow-500"
        ></span>
      ))}
    </div>
  );
};

export default Estrellas;
