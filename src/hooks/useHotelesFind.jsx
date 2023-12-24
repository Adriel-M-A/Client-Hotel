import { useState, useEffect } from "react";
import API from "../services";

export const useHotelesFind = (pais, provincia, ciudad) => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const response = await API.hoteles.find({ pais, provincia, ciudad });
        setHoteles(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoteles();
  }, [pais, provincia, ciudad]);

  return { hoteles, loading, error };
};

/**
 * este hook esta pensado para obtener las lista de todos los hoteles segun los filtros enviados.
 * faltan agregar filtros, por ahora solo tiene la ubicacion.
 */
