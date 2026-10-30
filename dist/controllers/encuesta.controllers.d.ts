import { Request, Response, NextFunction } from 'express';
export declare const obtenerEncuestas: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const obtenerEncuestaPorId: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const crearEncuesta: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const actualizarEncuesta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const eliminarEncuesta: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=encuesta.controllers.d.ts.map