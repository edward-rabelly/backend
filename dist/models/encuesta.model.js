"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaModel = void 0;
const database_config_1 = require("../config/database.config");
class EncuestaModel {
    static async obtenerTodas() {
        const result = await database_config_1.pool.query('SELECT * FROM encuestas ORDER BY id_encuesta ASC');
        return result.rows;
    }
    static async obtenerPorId(id) {
        const result = await database_config_1.pool.query('SELECT * FROM encuestas WHERE id_encuesta = $1', [id]);
        return result.rows[0] || null;
    }
    static async crear(encuesta) {
        const query = `
      INSERT INTO encuestas (codigo, descripcion)
      VALUES ($1, $2)
      RETURNING *
    `;
        const values = [encuesta.codigo, encuesta.descripcion];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0];
    }
    static async actualizar(id, encuesta) {
        const query = `
      UPDATE encuestas 
      SET codigo = $1, descripcion = $2
      WHERE id_encuesta = $3
      RETURNING *
    `;
        const values = [encuesta.codigo, encuesta.descripcion, id];
        const result = await database_config_1.pool.query(query, values);
        return result.rows[0] || null;
    }
    static async eliminar(id) {
        const result = await database_config_1.pool.query('DELETE FROM encuestas WHERE id_encuesta = $1', [id]);
        return result.rowCount !== null && result.rowCount > 0;
    }
}
exports.EncuestaModel = EncuestaModel;
//# sourceMappingURL=encuesta.model.js.map