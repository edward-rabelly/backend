import { Router } from 'express';
import { 
  obtenerPreguntas, 
  obtenerPreguntaPorId,
  obtenerPreguntasPorEncuesta,
  crearPregunta, 
  actualizarPregunta, 
  eliminarPregunta 
} from '../controllers/pregunta.controllers';

const router = Router();

router.get('/', obtenerPreguntas);
router.get('/:id', obtenerPreguntaPorId);
router.get('/encuesta/:idEncuesta', obtenerPreguntasPorEncuesta); // Ruta extra
router.post('/', crearPregunta);
router.put('/:id', actualizarPregunta);
router.delete('/:id', eliminarPregunta);

export default router;