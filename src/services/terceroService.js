const API_URL = 'http://localhost:3000/api/Terceros';

export const obtenerTerceros = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearTercero = async (tercero) => {
  const response = await axios.post(API_URL, tercero);
  return response.data;
};

export const actualizarTercero = async (id, tercero) => {
  const response = await axios.put(`${API_URL}/${id}`, tercero);
  return response.data;
};

export const eliminarTercero = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
