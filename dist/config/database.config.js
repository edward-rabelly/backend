"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.pool = exports.encuestaConfig = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.encuestaConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'Septiembre13#',
    database: process.env.DB_NAME || 'EncuestaDB',
    port: parseInt(process.env.DB_PORT || '5432'),
};
exports.pool = new pg_1.Pool(exports.encuestaConfig);
const testConnection = async () => {
    try {
        const client = await exports.pool.connect();
        console.log('✅ Conectado a PostgreSQL - Base de datos: EncuestaDB');
        client.release();
    }
    catch (error) {
        console.error('❌ Error de conexión:', error);
    }
};
exports.testConnection = testConnection;
//# sourceMappingURL=database.config.js.map