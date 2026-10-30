import dotenv from 'dotenv';
dotenv.config();

import app from './app'; // <-- Se importa PRIMERO
import { testConnection } from './config/database.config';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // 1. Probamos la conexión a la base de datos primero
    await testConnection();

    // 2. Si la conexión es exitosa, levantamos el servidor
    app.listen(PORT, () => {
      console.log(`✅ Servidor ejecutándose en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error fatal al conectar a la base de datos:', error);
    process.exit(1); // Detiene el servidor si falla la conexión
  }
}

startServer();