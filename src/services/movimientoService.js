const API_URL = 'http://localhost:3000/api/Movimientos';

export const obtenerMovimientos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearMovimiento = async (movimiento) => {
  const response = await axios.post(API_URL, movimiento);
  return response.data;
};

export const actualizarMovimiento = async (id, movimiento) => {
  const response = await axios.put(`${API_URL}/${id}`, movimiento);
  return response.data;
};

export const eliminarMovimiento = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
