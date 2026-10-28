import { pool } from '../config/database.config';

export interface EncuestaUsuario {
  id_respuesta?: number;
  id_usuario: number;
  id_encuesta: number;
  id_pregunta: number;
  respuesta: string;
  fecha?: Date;
}

export class EncuestaUsuarioModel {
  static async obtenerTodas(): Promise<EncuestaUsuario[]> {
    const result = await pool.query('SELECT * FROM encuesta_usuario ORDER BY id_respuesta ASC');
    return result.rows;
  }

  static async obtenerPorId(id: number): Promise<EncuestaUsuario | null> {
    const result = await pool.query('SELECT * FROM encuesta_usuario WHERE id_respuesta = $1', [id]);
    return result.rows[0] || null;
  }

  // Extra: obtener respuestas de un usuario en una encuesta
  static async obtenerPorUsuarioYEncuesta(idUsuario: number, idEncuesta: number): Promise<EncuestaUsuario[]> {
    const result = await pool.query(
      'SELECT * FROM encuesta_usuario WHERE id_usuario = $1 AND id_encuesta = $2', 
      [idUsuario, idEncuesta]
    );
    return result.rows;
  }

  static async crear(registro: EncuestaUsuario): Promise<EncuestaUsuario> {
    const query = `
      INSERT INTO encuesta_usuario (id_usuario, id_encuesta, id_pregunta, respuesta, fecha)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *
    `;
    const values = [registro.id_usuario, registro.id_encuesta, registro.id_pregunta, registro.respuesta];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async actualizar(id: number, registro: Partial<EncuestaUsuario>): Promise<EncuestaUsuario | null> {
    const query = `
      UPDATE encuesta_usuario 
      SET id_usuario = $1, id_encuesta = $2, id_pregunta = $3, respuesta = $4
      WHERE id_respuesta = $5
      RETURNING *
    `;
    const values = [registro.id_usuario, registro.id_encuesta, registro.id_pregunta, registro.respuesta, id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM encuesta_usuario WHERE id_respuesta = $1', [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }
}