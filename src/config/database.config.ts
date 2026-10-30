import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Usamos la URL completa que configuramos en Render
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ ERROR CRÍTICO: No se encontró la variable de entorno DATABASE_URL');
  process.exit(1); // Detiene el servidor si falta la URL
}

export const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false // OBLIGATORIO para conexiones a Neon desde Render
  }
});

export const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado exitosamente a Neon (PostgreSQL)');
    client.release();
  } catch (error) {
    console.error('❌ Error de conexión a la base de datos:', error);
    throw error;
  }
};