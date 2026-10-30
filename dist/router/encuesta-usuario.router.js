"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuesta_usuario_controllers_1 = require("../controllers/encuesta-usuario.controllers");
const router = (0, express_1.Router)();
router.get('/', encuesta_usuario_controllers_1.obtenerRespuestas);
router.get('/:id', encuesta_usuario_controllers_1.obtenerRespuestaPorId);
router.get('/usuario/:idUsuario/encuesta/:idEncuesta', encuesta_usuario_controllers_1.obtenerRespuestasPorUsuarioYEncuesta);
router.post('/', encuesta_usuario_controllers_1.crearRespuesta);
router.put('/:id', encuesta_usuario_controllers_1.actualizarRespuesta);
router.delete('/:id', encuesta_usuario_controllers_1.eliminarRespuesta);
exports.default = router;
//estas rutas son obligatorias para cada usuario que mire sus respuestas o que este haciendo el cuestionario y que el servidor sepa donde enviar esas respuestas
//# sourceMappingURL=encuesta-usuario.router.js.map