import { Request, Response, NextFunction } from 'express';
export declare const obtenerUsuarios: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const obtenerUsuarioPorId: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const crearUsuario: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const actualizarUsuario: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const eliminarUsuario: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const obtenerHistorialUsuario: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=usuario.controllers.d.ts.map