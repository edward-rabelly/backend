"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaUsuarioModel = void 0;
const database_config_1 = require("../config/database.config");
class EncuestaUsuarioModel {
    static async obtenerTodas() {
        const result = await database_config_1.pool.query('SELECT * FROM encuesta_usuario ORDER BY id_respuesta ASC');
        return result.rows;
    }
    static async obtenerPorId(id) {
        const result = await database_config_1.pool.query('SELECT * FROM encuesta_usuario WHERE id_respuesta = $1', [id]);
        return result.rows[0] || null;
    }
    // Extra: obtener respuestas de un usuario en una encuesta
    static async obtenerPorUsuarioYEncuesta(idUsuario, idEncuesta) {
        const result = await database_config_1.pool.query('SELECT * FROM encuesta_usuario WHERE id_usuario = $1 AND id_encuesta = $2', [idUsuario, idEncuesta]);
        return result.rows;
    }
    static async crear(registro) {
        const query = `
      INSERT INTO encuesta_usuario (id_usuario, id_encuesta, id_pregunta, respuesta, fecha)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *
    `;
        const values = [registro.id_usuario, registro.id_encuesta, registro.id_pregunta, registro.respuesta];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0];
    }
    static async actualizar(id, registro) {
        const query = `
      UPDATE encuesta_usuario 
      SET id_usuario = $1, id_encuesta = $2, id_pregunta = $3, respuesta = $4
      WHERE id_respuesta = $5
      RETURNING *
    `;
        const values = [registro.id_usuario, registro.id_encuesta, registro.id_pregunta, registro.respuesta, id];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0] || null;
    }
    static async eliminar(id) {
        const result = await database_config_1.pool.query('DELETE FROM encuesta_usuario WHERE id_respuesta = $1', [id]);
        return result.rowCount !== null && result.rowCount > 0;
    }
}
exports.EncuestaUsuarioModel = EncuestaUsuarioModel;
//# sourceMappingURL=encuesta-usuario.model.js.map