"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerHistorialUsuario = exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.obtenerUsuarioPorId = exports.obtenerUsuarios = void 0;
const usuario_model_1 = require("../models/usuario.model");
const obtenerUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuario_model_1.UsuarioModel.obtenerTodos();
        res.status(200).json(usuarios);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuarioPorId = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const usuario = await usuario_model_1.UsuarioModel.obtenerPorId(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
const crearUsuario = async (req, res, next) => {
    try {
        const nuevoUsuario = await usuario_model_1.UsuarioModel.crear(req.body);
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        next(error);
    }
};
exports.crearUsuario = crearUsuario;
const actualizarUsuario = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const usuario = await usuario_model_1.UsuarioModel.actualizar(id, req.body);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    }
    catch (error) {
        next(error);
    }
};
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const eliminado = await usuario_model_1.UsuarioModel.eliminar(id);
        if (!eliminado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.eliminarUsuario = eliminarUsuario;
const obtenerHistorialUsuario = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const historial = await usuario_model_1.UsuarioModel.obtenerHistorial(id);
        // Si no tiene historial, devolvemos un arreglo vacío en lugar de error 404
        res.status(200).json(historial || []);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerHistorialUsuario = obtenerHistorialUsuario;
// tener algo conceptual a algo de codigo. No las ejecuta pero si las gestiona
//# sourceMappingURL=usuario.controllers.js.map