"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pregunta_controllers_1 = require("../controllers/pregunta.controllers");
const router = (0, express_1.Router)();
router.get('/', pregunta_controllers_1.obtenerPreguntas);
router.get('/:id', pregunta_controllers_1.obtenerPreguntaPorId);
router.get('/encuesta/:idEncuesta', pregunta_controllers_1.obtenerPreguntasPorEncuesta); // Ruta extra
router.post('/', pregunta_controllers_1.crearPregunta);
router.put('/:id', pregunta_controllers_1.actualizarPregunta);
router.delete('/:id', pregunta_controllers_1.eliminarPregunta);
exports.default = router;
//# sourceMappingURL=pregunta.router.js.map