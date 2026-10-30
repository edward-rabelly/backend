"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPregunta = exports.actualizarPregunta = exports.crearPregunta = exports.obtenerPreguntasPorEncuesta = exports.obtenerPreguntaPorId = exports.obtenerPreguntas = void 0;
const pregunta_model_1 = require("../models/pregunta.model");
const obtenerPreguntas = async (req, res, next) => {
    try {
        const preguntas = await pregunta_model_1.PreguntaModel.obtenerTodas();
        res.status(200).json(preguntas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerPreguntas = obtenerPreguntas;
const obtenerPreguntaPorId = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const pregunta = await pregunta_model_1.PreguntaModel.obtenerPorId(id);
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(pregunta);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerPreguntaPorId = obtenerPreguntaPorId;
// Extra: obtener preguntas por encuesta
const obtenerPreguntasPorEncuesta = async (req, res, next) => {
    try {
        const idEncuesta = Number(req.params.idEncuesta);
        const preguntas = await pregunta_model_1.PreguntaModel.obtenerPorEncuesta(idEncuesta);
        res.status(200).json(preguntas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerPreguntasPorEncuesta = obtenerPreguntasPorEncuesta;
const crearPregunta = async (req, res, next) => {
    try {
        const nuevaPregunta = await pregunta_model_1.PreguntaModel.crear(req.body);
        res.status(201).json(nuevaPregunta);
    }
    catch (error) {
        next(error);
    }
};
exports.crearPregunta = crearPregunta;
const actualizarPregunta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const pregunta = await pregunta_model_1.PreguntaModel.actualizar(id, req.body);
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(pregunta);
    }
    catch (error) {
        next(error);
    }
};
exports.actualizarPregunta = actualizarPregunta;
const eliminarPregunta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const eliminado = await pregunta_model_1.PreguntaModel.eliminar(id);
        if (!eliminado) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.eliminarPregunta = eliminarPregunta;
//# sourceMappingURL=pregunta.controllers.js.map