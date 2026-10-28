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

git init
git add .
git commit -m "Backend inicial"
git branch -M main
git remote add origin https://github.com/edward-rabelly/backend.git
git push -u origin main