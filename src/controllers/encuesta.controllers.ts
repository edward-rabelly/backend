import { Request, Response, NextFunction } from 'express';
import { EncuestaModel } from '../models/encuesta.model';

export const obtenerEncuestas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const encuestas = await EncuestaModel.obtenerTodas();
    res.status(200).json(encuestas);
  } catch (error) {
    next(error);
  }
};

export const obtenerEncuestaPorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const encuesta = await EncuestaModel.obtenerPorId(id);
    if (!encuesta) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(200).json(encuesta);
  } catch (error) {
    next(error);
  }
};

export const crearEncuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevaEncuesta = await EncuestaModel.crear(req.body);
    res.status(201).json(nuevaEncuesta);
  } catch (error) {
    next(error);
  }
};

export const actualizarEncuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const encuesta = await EncuestaModel.actualizar(id, req.body);
    if (!encuesta) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(200).json(encuesta);
  } catch (error) {
    next(error);
  }
};

export const eliminarEncuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const eliminado = await EncuestaModel.eliminar(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Encuesta no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};