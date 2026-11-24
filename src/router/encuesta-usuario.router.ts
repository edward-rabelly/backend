import { Router } from 'express';
import { 
  obtenerRespuestas, 
  obtenerRespuestaPorId,
  obtenerRespuestasPorUsuarioYEncuesta,
  crearRespuesta, 
  actualizarRespuesta, 
  eliminarRespuesta, 
  obtenerRespuestasPorUsuario // 👈 Importado correctamente
} from '../controllers/encuesta-usuario.controllers';

const router = Router();

// 1. RUTA NUEVA: Debe ir ANTES de las rutas genéricas con :id
router.get('/usuario/:id_usuario', obtenerRespuestasPorUsuario);

// 2. RUTAS EXISTENTES
router.get('/', obtenerRespuestas);
router.get('/:id', obtenerRespuestaPorId);
router.get('/usuario/:idUsuario/encuesta/:idEncuesta', obtenerRespuestasPorUsuarioYEncuesta);
router.post('/', crearRespuesta);
router.put('/:id', actualizarRespuesta);
router.delete('/:id', eliminarRespuesta);



export default router;

//estas rutas son obligatorias para cada usuario que mire sus respuestas o que este haciendo el cuestionario y que el servidor sepa donde enviar esas respuestas