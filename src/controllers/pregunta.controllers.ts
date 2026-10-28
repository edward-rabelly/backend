import { Request, Response, NextFunction } from 'express';
import { PreguntaModel } from '../models/pregunta.model';

export const obtenerPreguntas = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const preguntas = await PreguntaModel.obtenerTodas();
    res.status(200).json(preguntas);
  } catch (error) {
    next(error);
  }
};

export const obtenerPreguntaPorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const pregunta = await PreguntaModel.obtenerPorId(id);
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' });
    }
    res.status(200).json(pregunta);
  } catch (error) {
    next(error);
  }
};

// Extra: obtener preguntas por encuesta
export const obtenerPreguntasPorEncuesta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idEncuesta = Number(req.params.idEncuesta);
    const preguntas = await PreguntaModel.obtenerPorEncuesta(idEncuesta);
    res.status(200).json(preguntas);
  } catch (error) {
    next(error);
  }
};

export const crearPregunta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevaPregunta = await PreguntaModel.crear(req.body);
    res.status(201).json(nuevaPregunta);
  } catch (error) {
    next(error);
  }
};

export const actualizarPregunta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const pregunta = await PreguntaModel.actualizar(id, req.body);
    if (!pregunta) {
      return res.status(404).json({ message: 'Pregunta no encontrada' });
    }
    res.status(200).json(pregunta);
  } catch (error) {
    next(error);
  }
};

export const eliminarPregunta = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const eliminado = await PreguntaModel.eliminar(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Pregunta no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};