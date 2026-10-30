"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuesta_controllers_1 = require("../controllers/encuesta.controllers");
const router = (0, express_1.Router)();
router.get('/', encuesta_controllers_1.obtenerEncuestas);
router.get('/:id', encuesta_controllers_1.obtenerEncuestaPorId);
router.post('/', encuesta_controllers_1.crearEncuesta);
router.put('/:id', encuesta_controllers_1.actualizarEncuesta);
router.delete('/:id', encuesta_controllers_1.eliminarEncuesta);
exports.default = router;
//# sourceMappingURL=encuesta.router.js.map