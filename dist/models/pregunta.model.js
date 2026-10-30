"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreguntaModel = void 0;
const database_config_1 = require("../config/database.config");
class PreguntaModel {
    static async obtenerTodas() {
        const result = await database_config_1.pool.query('SELECT * FROM preguntas ORDER BY id_pregunta ASC');
        return result.rows;
    }
    static async obtenerPorId(id) {
        const result = await database_config_1.pool.query('SELECT * FROM preguntas WHERE id_pregunta = $1', [id]);
        return result.rows[0] || null;
    }
    // Extra: obtener preguntas por encuesta
    static async obtenerPorEncuesta(idEncuesta) {
        const result = await database_config_1.pool.query('SELECT * FROM preguntas WHERE id_encuesta = $1', [idEncuesta]);
        return result.rows;
    }
    static async crear(pregunta) {
        const query = `
      INSERT INTO preguntas (descripcion, tipo, id_encuesta)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
        const values = [pregunta.descripcion, pregunta.tipo, pregunta.id_encuesta];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0];
    }
    static async actualizar(id, pregunta) {
        const query = `
      UPDATE preguntas 
      SET descripcion = $1, tipo = $2, id_encuesta = $3
      WHERE id_pregunta = $4
      RETURNING *
    `;
        const values = [pregunta.descripcion, pregunta.tipo, pregunta.id_encuesta, id];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0] || null;
    }
    static async eliminar(id) {
        const result = await database_config_1.pool.query('DELETE FROM preguntas WHERE id_pregunta = $1', [id]);
        return result.rowCount !== null && result.rowCount > 0;
    }
}
exports.PreguntaModel = PreguntaModel;
//# sourceMappingURL=pregunta.model.js.map