import { Request, Response, NextFunction } from 'express';
export declare const obtenerRespuestas: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const obtenerRespuestaPorId: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const obtenerRespuestasPorUsuarioYEncuesta: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const crearRespuesta: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const actualizarRespuesta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const eliminarRespuesta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=encuesta-usuario.controllers.d.ts.map