import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { testConnection } from './config/database.config';

const PORT = process.env.PORT || 3000;

async function startServer() {
  // 1. Probamos la conexión a la base de datos primero
  await testConnection();

  // 2. Si la conexión es exitosa, levantamos el servidor
  app.listen(PORT, () => {
    console.log(` API ejecutándose en http://localhost:${PORT}`);
  });
}

startServer();
