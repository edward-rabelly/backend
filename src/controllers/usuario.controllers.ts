import { Request, Response, NextFunction } from 'express';
import { UsuarioModel } from '../models/usuario.model';

export const obtenerUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await UsuarioModel.obtenerTodos();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const obtenerUsuarioPorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const usuario = await UsuarioModel.obtenerPorId(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const crearUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevoUsuario = await UsuarioModel.crear(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    next(error);
  }
};

export const actualizarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const usuario = await UsuarioModel.actualizar(id, req.body);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const eliminarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const eliminado = await UsuarioModel.eliminar(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const obtenerHistorialUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const historial = await UsuarioModel.obtenerHistorial(id);
    
    // Si no tiene historial, devolvemos un arreglo vacío en lugar de error 404
    res.status(200).json(historial || []);
  } catch (error) {
    next(error);
  }

};

// tener algo conceptual a algo de codigo. No las ejecuta pero si las gestiona