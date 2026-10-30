export interface EncuestaUsuario {
    id_respuesta?: number;
    id_usuario: number;
    id_encuesta: number;
    id_pregunta: number;
    respuesta: string;
    fecha?: Date;
}
export declare class EncuestaUsuarioModel {
    static obtenerTodas(): Promise<EncuestaUsuario[]>;
    static obtenerPorId(id: number): Promise<EncuestaUsuario | null>;
    static obtenerPorUsuarioYEncuesta(idUsuario: number, idEncuesta: number): Promise<EncuestaUsuario[]>;
    static crear(registro: EncuestaUsuario): Promise<EncuestaUsuario>;
    static actualizar(id: number, registro: Partial<EncuestaUsuario>): Promise<EncuestaUsuario | null>;
    static eliminar(id: number): Promise<boolean>;
}
//# sourceMappingURL=encuesta-usuario.model.d.ts.map