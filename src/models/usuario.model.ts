import { pool } from '../config/database.config';

// 1. Actualizamos la interfaz para que coincida EXACTAMENTE con las columnas de tu tabla en PostgreSQL
export interface Usuario {
  id_usuario?: number;        // Opcional porque la BD lo genera automáticamente
  nombre: string;
  tipo_documento: string;
  numero_documento: string;
  email: string;
  edad: number;
  genero: string;
  contrasena: string;
}

// 2. Mantenemos tu clase, pero cambiamos la lógica interna por consultas SQL
export class UsuarioModel {
  
  /**
   * Obtiene la lista completa de usuarios.
   * @returns Promesa con un arreglo de todos los usuarios.
   */
  static async obtenerTodos(): Promise<Usuario[]> {
    const result = await pool.query('SELECT * FROM usuarios ORDER BY id_usuario ASC');
    return result.rows;
  }

  /**
   * Busca un usuario específico por su ID.
   * @param id - El identificador único del usuario a buscar.
   * @returns El objeto Usuario si se encuentra, o null si no existe.
   */
  static async obtenerPorId(id: number): Promise<Usuario | null> {
    const result = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id]);
    return result.rows[0] || null;
  }

  /**
   * Crea un nuevo usuario y lo guarda en la base de datos PostgreSQL.
   * @param usuario - Los datos del usuario enviados desde el frontend.
   * @returns El objeto Usuario completo ya guardado con su nuevo ID.
   */
  static async crear(usuario: Usuario): Promise<Usuario> {
    const query = `
      INSERT INTO usuarios (nombre, tipo_documento, numero_documento, email, edad, genero, contrasena)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    
    const values = [
      usuario.nombre,
      usuario.tipo_documento,
      usuario.numero_documento,
      usuario.email,
      usuario.edad,
      usuario.genero,
      usuario.contrasena
    ];

    const result = await pool.query(query, values);
    return result.rows[0]; // RETURNING * nos devuelve el usuario ya creado con su id_usuario
  }

  /**
   * Actualiza los datos de un usuario existente.
   * @param id - El ID del usuario a actualizar.
   * @param usuario - Los nuevos datos a mezclar con los existentes.
   * @returns El usuario actualizado o null si no se encontró el ID.
   */
  static async actualizar(id: number, usuario: Partial<Usuario>): Promise<Usuario | null> {
    // Nota: Usamos los valores del usuario o dejamos los que ya tenía si no se envían (manejo básico)
    // Para una actualización completa (PUT), se esperan todos los campos.
    const query = `
      UPDATE usuarios 
      SET nombre = $1, tipo_documento = $2, numero_documento = $3, email = $4, edad = $5, genero = $6, contrasena = $7
      WHERE id_usuario = $8
      RETURNING *
    `;

    const values = [
      usuario.nombre,
      usuario.tipo_documento,
      usuario.numero_documento,
      usuario.email,
      usuario.edad,
      usuario.genero,
      usuario.contrasena,
      id
    ];

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  /**
   * Elimina un usuario de la base de datos por su ID.
   * @param id - El ID del usuario a eliminar.
   * @returns true si se eliminó correctamente, false si no se encontró.
   */
  static async eliminar(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [id]);
    // rowCount nos dice cuántas filas se eliminaron. Si es > 0, fue exitoso.
    return result.rowCount !== null && result.rowCount > 0;
  }
  static async obtenerHistorial(id_usuario: number): Promise<any[]> {
    const query = `
      SELECT 
        e.codigo as "codigoEncuesta",
        TO_CHAR(eu.fecha, 'YYYY-MM-DD') as fecha,
        'Completada' as estado,
        json_agg(
          json_build_object(
            'pregunta', p.descripcion,
            'respuesta', eu.respuesta
          )
        ) as respuestas
      FROM encuesta_usuario eu
      JOIN encuestas e ON eu.id_encuesta = e.id_encuesta
      JOIN preguntas p ON eu.id_pregunta = p.id_pregunta
      WHERE eu.id_usuario = $1
      GROUP BY e.codigo, eu.fecha
      ORDER BY eu.fecha DESC
    `;
    const result = await pool.query(query, [id_usuario]);
    return result.rows;
  }
}




//el modelo se divide en dos una parte de vista que me dice como debe quedar y la otra es una parte de logica, en las logicas esta esto "||" es un o