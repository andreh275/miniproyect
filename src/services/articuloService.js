import axios from 'axios';

const API_URL = 'http://localhost:3000/api/Articulos';

export const obtenerArticulos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearArticulo = async (articulo) => {
  const response = await axios.post(API_URL, articulo);
  return response.data;
};

export const actualizarArticulo = async (id, articulo) => {
  const response = await axios.put(`${API_URL}/${id}`, articulo);
  return response.data;
};

export const eliminarArticulo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
