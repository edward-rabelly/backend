export interface Encuesta {
    id_encuesta?: number;
    codigo: string;
    descripcion: string;
}
export declare class EncuestaModel {
    static obtenerTodas(): Promise<Encuesta[]>;
    static obtenerPorId(id: number): Promise<Encuesta | null>;
    static crear(encuesta: Encuesta): Promise<Encuesta>;
    static actualizar(id: number, encuesta: Partial<Encuesta>): Promise<Encuesta | null>;
    static eliminar(id: number): Promise<boolean>;
}
//# sourceMappingURL=encuesta.model.d.ts.map