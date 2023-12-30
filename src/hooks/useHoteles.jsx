import { useState, useEffect } from "react";
import API from "../services";

export const useHoteles = (view = "") => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        // Retraso de 1 segundos (1000 milisegundos) Solo es para pruebas
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await API.hoteles.getAll(view);
        setHoteles(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoteles();
  }, [view]);

  return { hoteles, loading, error };
};
