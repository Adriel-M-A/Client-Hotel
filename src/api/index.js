import api from "./client";

// Definimos los endpoints de la API
const apiEndpoints = (path) => ({
  get: (id, view = "") => api.get(`/${path}/${id}/${view}`).catch(handleError),
  getAll: () => api.get(`/${path}/`).catch(handleError),
  create: (data) => api.post(`/${path}/`, data).catch(handleError),
  update: (id, data) => api.put(`/${path}/${id}`, data).catch(handleError),
  delete: (id) => api.delete(`/${path}/${id}`).catch(handleError),
  find: (data) => api.get(`/${path}/`, data).catch(handleError),
});

// Definimos los modelos de nuestra aplicación
const MODELS = {
  core: [
    "paises",
    "provincias",
    "ciudades",
    "direcciones",
    "categorias",
    "vendedores",
    "encargados",
    "clientes",
    "tiposhabitaciones",
    "servicios",
  ],
  hotel: ["hoteles", "habitaciones"],
  venta: ["alquileres"],
};

const API = {};

// Asignamos los endpoints a cada modelo
for (let app in MODELS) {
  MODELS[app].forEach((model) => {
    API[model] = apiEndpoints(`${app}/${model}`);
  });
}

// Funciones extras
API.hoteles.disponibilidad = (id) => api.get(`/hotel/hoteles/${id}/disponibilidad/`).catch(handleError);

// Función para manejar los errores
function handleError(error) {
  if (error.response) {
    // La solicitud se realizó y el servidor respondió con un código de estado
    // que cae fuera del rango de 2xx
    console.error('Detalles del error:', error.response.data);
    console.error('Código de estado:', error.response.status);
    console.error('Encabezados:', error.response.headers);
  } else if (error.request) {
    // La solicitud se realizó pero no se recibió ninguna respuesta
    console.error('No se recibió ninguna respuesta:', error.request);
  } else {
    // Algo sucedió en la configuración de la solicitud que provocó un error
    console.error('Error', error.message);
  }
  console.error(error.config);
}

export default API;
