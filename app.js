import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // Importa el paquete CORS
import articulosRoutes from './routers/articulosRoutes.js';
import categoriasRoutes from './routers/categoriasRoutes.js';
import tercerosRoutes from './routers/tercerosRoutes.js';



import movimientosRoutes from './routers/movimientosRoutes.js';


dotenv.config(); // Asegúrate de que esté al principio del archivo

const app = express();

// Configura CORS para permitir solicitudes desde ciertos orígenes
const corsOptions = {
  origin: 'http://localhost:8080',  // Cambia esto por la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Aplica CORS globalmente en el servidor
app.use(cors(corsOptions)); 

app.use(express.json());

// Rutas
app.use("/api/articulos", articulosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use('/api/terceros', tercerosRoutes);
app.use("/api/movimientos", movimientosRoutes);

const port = process.env.PORT || 3000;
const mongoURI = process.env.CNX_MONGO;

if (!port) {
  console.error("La variable de entorno PORT no está definida.");
  process.exit(1);
}

if (!mongoURI) {
  console.error("La variable de entorno CNX_MONGO no está definida.");
  process.exit(1);
}

// Conecta a MongoDB sin las opciones deprecated
mongoose.connect(mongoURI)
  .then(() => console.log('¡Conectado a MongoDB!'))
  .catch((error) => console.error('Error de conexión a MongoDB:', error));

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
