import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const encuestaConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Septiembre13#',
  database: process.env.DB_NAME || 'EncuestaDB',
  port: parseInt(process.env.DB_PORT || '5432'),
};

export const pool = new Pool(encuestaConfig);

export const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado a PostgreSQL - Base de datos: EncuestaDB');
    client.release();
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
};