"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = require("../controllers/usuario.controllers");
const router = (0, express_1.Router)();
router.get('/', usuario_controllers_1.obtenerUsuarios);
router.get('/:id', usuario_controllers_1.obtenerUsuarioPorId);
router.get('/:id/historial', usuario_controllers_1.obtenerHistorialUsuario);
router.post('/', usuario_controllers_1.crearUsuario);
router.put('/:id', usuario_controllers_1.actualizarUsuario);
router.delete('/:id', usuario_controllers_1.eliminarUsuario);
exports.default = router;
//esto tiene las rutas que necesitan todos los usuarios de la pagina para que muestre algo, algunas tiene por obligacion /id donde dependiendo lo va a mandar a 
//actualizar su usuario, eliminar, o obtener toda la informacion de este
//GET Leer
//POST Crear
//PUT Actualizar completo
//PATCH Actualizar parcial
//DELETE Eliminar
//# sourceMappingURL=usuario.router.js.map