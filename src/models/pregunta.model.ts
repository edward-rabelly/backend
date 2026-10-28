import { pool } from '../config/database.config';

export interface Pregunta {
  id_pregunta?: number;
  descripcion: string;
  tipo: string;
  id_encuesta: number;
}

export class PreguntaModel {
  static async obtenerTodas(): Promise<Pregunta[]> {
    const result = await pool.query('SELECT * FROM preguntas ORDER BY id_pregunta ASC');
    return result.rows;
  }

  static async obtenerPorId(id: number): Promise<Pregunta | null> {
    const result = await pool.query('SELECT * FROM preguntas WHERE id_pregunta = $1', [id]);
    return result.rows[0] || null;
  }

  // Extra: obtener preguntas por encuesta
  static async obtenerPorEncuesta(idEncuesta: number): Promise<Pregunta[]> {
    const result = await pool.query('SELECT * FROM preguntas WHERE id_encuesta = $1', [idEncuesta]);
    return result.rows;
  }

  static async crear(pregunta: Pregunta): Promise<Pregunta> {
    const query = `
      INSERT INTO preguntas (descripcion, tipo, id_encuesta)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [pregunta.descripcion, pregunta.tipo, pregunta.id_encuesta];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async actualizar(id: number, pregunta: Partial<Pregunta>): Promise<Pregunta | null> {
    const query = `
      UPDATE preguntas 
      SET descripcion = $1, tipo = $2, id_encuesta = $3
      WHERE id_pregunta = $4
      RETURNING *
    `;
    const values = [pregunta.descripcion, pregunta.tipo, pregunta.id_encuesta, id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM preguntas WHERE id_pregunta = $1', [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }
}