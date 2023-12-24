import { useState, useEffect } from "react";
import API from "../services";

export const useHoteles = () => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        // Retraso de 3 segundos (3000 milisegundos) Solo es para pruebas
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await API.hoteles.getAll();
        setHoteles(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoteles();
  }, []);

  return { hoteles, loading, error };
};
