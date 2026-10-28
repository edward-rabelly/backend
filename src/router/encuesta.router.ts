import { Router } from 'express';
import { 
  obtenerEncuestas, 
  obtenerEncuestaPorId, 
  crearEncuesta, 
  actualizarEncuesta, 
  eliminarEncuesta 
} from '../controllers/encuesta.controllers';

const router = Router();

router.get('/', obtenerEncuestas);
router.get('/:id', obtenerEncuestaPorId);
router.post('/', crearEncuesta);
router.put('/:id', actualizarEncuesta);
router.delete('/:id', eliminarEncuesta);

export default router;