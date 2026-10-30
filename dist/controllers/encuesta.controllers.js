"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEncuesta = exports.actualizarEncuesta = exports.crearEncuesta = exports.obtenerEncuestaPorId = exports.obtenerEncuestas = void 0;
const encuesta_model_1 = require("../models/encuesta.model");
const obtenerEncuestas = async (req, res, next) => {
    try {
        const encuestas = await encuesta_model_1.EncuestaModel.obtenerTodas();
        res.status(200).json(encuestas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerEncuestas = obtenerEncuestas;
const obtenerEncuestaPorId = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const encuesta = await encuesta_model_1.EncuestaModel.obtenerPorId(id);
        if (!encuesta) {
            return res.status(404).json({ message: 'Encuesta no encontrada' });
        }
        res.status(200).json(encuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerEncuestaPorId = obtenerEncuestaPorId;
const crearEncuesta = async (req, res, next) => {
    try {
        const nuevaEncuesta = await encuesta_model_1.EncuestaModel.crear(req.body);
        res.status(201).json(nuevaEncuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.crearEncuesta = crearEncuesta;
const actualizarEncuesta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const encuesta = await encuesta_model_1.EncuestaModel.actualizar(id, req.body);
        if (!encuesta) {
            return res.status(404).json({ message: 'Encuesta no encontrada' });
        }
        res.status(200).json(encuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.actualizarEncuesta = actualizarEncuesta;
const eliminarEncuesta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const eliminado = await encuesta_model_1.EncuestaModel.eliminar(id);
        if (!eliminado) {
            return res.status(404).json({ message: 'Encuesta no encontrada' });
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.eliminarEncuesta = eliminarEncuesta;
//# sourceMappingURL=encuesta.controllers.js.map