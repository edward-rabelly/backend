export interface Usuario {
    id_usuario?: number;
    nombre: string;
    tipo_documento: string;
    numero_documento: string;
    email: string;
    edad: number;
    genero: string;
    contrasena: string;
}
export declare class UsuarioModel {
    /**
     * Obtiene la lista completa de usuarios.
     * @returns Promesa con un arreglo de todos los usuarios.
     */
    static obtenerTodos(): Promise<Usuario[]>;
    /**
     * Busca un usuario específico por su ID.
     * @param id - El identificador único del usuario a buscar.
     * @returns El objeto Usuario si se encuentra, o null si no existe.
     */
    static obtenerPorId(id: number): Promise<Usuario | null>;
    /**
     * Crea un nuevo usuario y lo guarda en la base de datos PostgreSQL.
     * @param usuario - Los datos del usuario enviados desde el frontend.
     * @returns El objeto Usuario completo ya guardado con su nuevo ID.
     */
    static crear(usuario: Usuario): Promise<Usuario>;
    /**
     * Actualiza los datos de un usuario existente.
     * @param id - El ID del usuario a actualizar.
     * @param usuario - Los nuevos datos a mezclar con los existentes.
     * @returns El usuario actualizado o null si no se encontró el ID.
     */
    static actualizar(id: number, usuario: Partial<Usuario>): Promise<Usuario | null>;
    /**
     * Elimina un usuario de la base de datos por su ID.
     * @param id - El ID del usuario a eliminar.
     * @returns true si se eliminó correctamente, false si no se encontró.
     */
    static eliminar(id: number): Promise<boolean>;
    static obtenerHistorial(id_usuario: number): Promise<any[]>;
}
//# sourceMappingURL=usuario.model.d.ts.map