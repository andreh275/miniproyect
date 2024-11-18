// routers/tercerosRoutes.js
import express from 'express';
import { getTerceros, postTercero, putTercero, deleteTercero } from '../controllers/tercerosController.js';

const router = express.Router();

router.get('/', getTerceros);  // Obtener todos los terceros
router.post('/', postTercero); // Crear un nuevo tercero
router.put('/:id', putTercero); // Actualizar un tercero
router.delete('/:id', deleteTercero); // Eliminar un tercero

export default router;
