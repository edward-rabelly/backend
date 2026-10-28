import { Router } from 'express';
import { 
  obtenerUsuarios, 
  obtenerUsuarioPorId, 
  crearUsuario, 
  actualizarUsuario, 
  eliminarUsuario,
  obtenerHistorialUsuario
} from '../controllers/usuario.controllers';

const router = Router();

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarioPorId);
router.get('/:id/historial', obtenerHistorialUsuario);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;

//esto tiene las rutas que necesitan todos los usuarios de la pagina para que muestre algo, algunas tiene por obligacion /id donde dependiendo lo va a mandar a 
//actualizar su usuario, eliminar, o obtener toda la informacion de este

//GET Leer
//POST Crear
//PUT Actualizar completo
//PATCH Actualizar parcial
//DELETE Eliminar