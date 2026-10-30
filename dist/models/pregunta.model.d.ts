export interface Pregunta {
    id_pregunta?: number;
    descripcion: string;
    tipo: string;
    id_encuesta: number;
}
export declare class PreguntaModel {
    static obtenerTodas(): Promise<Pregunta[]>;
    static obtenerPorId(id: number): Promise<Pregunta | null>;
    static obtenerPorEncuesta(idEncuesta: number): Promise<Pregunta[]>;
    static crear(pregunta: Pregunta): Promise<Pregunta>;
    static actualizar(id: number, pregunta: Partial<Pregunta>): Promise<Pregunta | null>;
    static eliminar(id: number): Promise<boolean>;
}
//# sourceMappingURL=pregunta.model.d.ts.map