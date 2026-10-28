import { Request, Response, NextFunction } from 'express';
import { EncuestaUsuarioModel } from '../models/encuesta-usuario.model';

export const obtenerRespuestas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const respuestas = await EncuestaUsuarioModel.obtenerTodas();
    res.status(200).json(respuestas);
  } catch (error) {
    next(error);
  }
};

export const obtenerRespuestaPorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const respuesta = await EncuestaUsuarioModel.obtenerPorId(id);
    if (!respuesta) {
      return res.status(404).json({ message: 'Respuesta no encontrada' });
    }
    res.status(200).json(respuesta);
  } catch (error) {
    next(error);
  }
};

// Extra: obtener respuestas de un usuario en una encuesta
export const obtenerRespuestasPorUsuarioYEncuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idUsuario = Number(req.params.idUsuario);
    const idEncuesta = Number(req.params.idEncuesta);
    const respuestas = await EncuestaUsuarioModel.obtenerPorUsuarioYEncuesta(idUsuario, idEncuesta);
    res.status(200).json(respuestas);
  } catch (error) {
    next(error);
  }
};

export const crearRespuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevaRespuesta = await EncuestaUsuarioModel.crear(req.body);
    res.status(201).json(nuevaRespuesta);
  } catch (error) {
    next(error);
  }
};

export const actualizarRespuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const respuesta = await EncuestaUsuarioModel.actualizar(id, req.body);
    if (!respuesta) {
      return res.status(404).json({ message: 'Respuesta no encontrada' });
    }
    res.status(200).json(respuesta);
  } catch (error) {
    next(error);
  }
};

export const eliminarRespuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const eliminado = await EncuestaUsuarioModel.eliminar(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Respuesta no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
// Los controllers son los que hablan con la base de datos (con archivos, con otras APIs, con el sistema de archivos, etc.). Puden tardar tiempo en recorrer
// todas las funciones o operaciones por eso se usa async que le dice al archivo o quien le pida esta funcion que puede seguir en otra 
//mientras soluciona esta