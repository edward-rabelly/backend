import express from 'express';
import cors from 'cors';

// Importamos los routers
import usuarioRouter from './router/usuario.router';
import encuestaRouter from './router/encuesta.router';
import preguntaRouter from './router/pregunta.router';
import encuestaUsuarioRouter from './router/encuesta-usuario.router';
// import encuestaRouter from './router/encuesta.router'; // (Lo descomentaremos después)

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Importante para leer el JSON del body

// Rutas
app.use('/api/usuarios', usuarioRouter);
app.use('/api/encuestas', encuestaRouter);
app.use('/api/preguntas', preguntaRouter);
app.use('/api/respuestas', encuestaUsuarioRouter);

export default app;

//este archivo es para verificar las rutas de mis archivos, es un gestor pero solo de eso para verificar no para meter algo de informacion porque para eso estan todos los demas 
// archivos