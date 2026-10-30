import { Request, Response, NextFunction } from 'express';
export declare const obtenerPreguntas: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const obtenerPreguntaPorId: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const obtenerPreguntasPorEncuesta: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const crearPregunta: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const actualizarPregunta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const eliminarPregunta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=pregunta.controllers.d.ts.map