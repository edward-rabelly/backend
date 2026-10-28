import { Router } from 'express';
import { 
  obtenerRespuestas, 
  obtenerRespuestaPorId,
  obtenerRespuestasPorUsuarioYEncuesta,
  crearRespuesta, 
  actualizarRespuesta, 
  eliminarRespuesta 
} from '../controllers/encuesta-usuario.controllers';

const router = Router();

router.get('/', obtenerRespuestas);
router.get('/:id', obtenerRespuestaPorId);
router.get('/usuario/:idUsuario/encuesta/:idEncuesta', obtenerRespuestasPorUsuarioYEncuesta);
router.post('/', crearRespuesta);
router.put('/:id', actualizarRespuesta);
router.delete('/:id', eliminarRespuesta);

export default router;

//estas rutas son obligatorias para cada usuario que mire sus respuestas o que este haciendo el cuestionario y que el servidor sepa donde enviar esas respuestas