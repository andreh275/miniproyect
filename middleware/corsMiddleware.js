// middlewares/corsMiddleware.js

import cors from 'cors';

// Configuración del middleware de CORS
const corsOptions = {
  origin: 'http://localhost:8080',  // Cambia esta URL por la de tu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware de CORS
const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
