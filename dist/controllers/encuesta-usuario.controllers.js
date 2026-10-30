"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarRespuesta = exports.actualizarRespuesta = exports.crearRespuesta = exports.obtenerRespuestasPorUsuarioYEncuesta = exports.obtenerRespuestaPorId = exports.obtenerRespuestas = void 0;
const encuesta_usuario_model_1 = require("../models/encuesta-usuario.model");
const obtenerRespuestas = async (req, res, next) => {
    try {
        const respuestas = await encuesta_usuario_model_1.EncuestaUsuarioModel.obtenerTodas();
        res.status(200).json(respuestas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerRespuestas = obtenerRespuestas;
const obtenerRespuestaPorId = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const respuesta = await encuesta_usuario_model_1.EncuestaUsuarioModel.obtenerPorId(id);
        if (!respuesta) {
            return res.status(404).json({ message: 'Respuesta no encontrada' });
        }
        res.status(200).json(respuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerRespuestaPorId = obtenerRespuestaPorId;
// Extra: obtener respuestas de un usuario en una encuesta
const obtenerRespuestasPorUsuarioYEncuesta = async (req, res, next) => {
    try {
        const idUsuario = Number(req.params.idUsuario);
        const idEncuesta = Number(req.params.idEncuesta);
        const respuestas = await encuesta_usuario_model_1.EncuestaUsuarioModel.obtenerPorUsuarioYEncuesta(idUsuario, idEncuesta);
        res.status(200).json(respuestas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerRespuestasPorUsuarioYEncuesta = obtenerRespuestasPorUsuarioYEncuesta;
const crearRespuesta = async (req, res, next) => {
    try {
        const nuevaRespuesta = await encuesta_usuario_model_1.EncuestaUsuarioModel.crear(req.body);
        res.status(201).json(nuevaRespuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.crearRespuesta = crearRespuesta;
const actualizarRespuesta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const respuesta = await encuesta_usuario_model_1.EncuestaUsuarioModel.actualizar(id, req.body);
        if (!respuesta) {
            return res.status(404).json({ message: 'Respuesta no encontrada' });
        }
        res.status(200).json(respuesta);
    }
    catch (error) {
        next(error);
    }
};
exports.actualizarRespuesta = actualizarRespuesta;
const eliminarRespuesta = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const eliminado = await encuesta_usuario_model_1.EncuestaUsuarioModel.eliminar(id);
        if (!eliminado) {
            return res.status(404).json({ message: 'Respuesta no encontrada' });
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.eliminarRespuesta = eliminarRespuesta;
// Los controllers son los que hablan con la base de datos (con archivos, con otras APIs, con el sistema de archivos, etc.). Puden tardar tiempo en recorrer
// todas las funciones o operaciones por eso se usa async que le dice al archivo o quien le pida esta funcion que puede seguir en otra 
//mientras soluciona esta
//# sourceMappingURL=encuesta-usuario.controllers.js.map