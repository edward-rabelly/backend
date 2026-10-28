import { pool } from '../config/database.config';

export interface Encuesta {
  id_encuesta?: number;
  codigo: string;
  descripcion: string;
}

export class EncuestaModel {
  static async obtenerTodas(): Promise<Encuesta[]> {
    const result = await pool.query('SELECT * FROM encuestas ORDER BY id_encuesta ASC');
    return result.rows;
  }

  static async obtenerPorId(id: number): Promise<Encuesta | null> {
    const result = await pool.query('SELECT * FROM encuestas WHERE id_encuesta = $1', [id]);
    return result.rows[0] || null;
  }

  static async crear(encuesta: Encuesta): Promise<Encuesta> {
    const query = `
      INSERT INTO encuestas (codigo, descripcion)
      VALUES ($1, $2)
      RETURNING *
    `;
    const values = [encuesta.codigo, encuesta.descripcion];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async actualizar(id: number, encuesta: Partial<Encuesta>): Promise<Encuesta | null> {
    const query = `
      UPDATE encuestas 
      SET codigo = $1, descripcion = $2
      WHERE id_encuesta = $3
      RETURNING *
    `;
    const values = [encuesta.codigo, encuesta.descripcion, id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async eliminar(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM encuestas WHERE id_encuesta = $1', [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }
}