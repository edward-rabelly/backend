"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Importamos los routers
const usuario_router_1 = __importDefault(require("./router/usuario.router"));
const encuesta_router_1 = __importDefault(require("./router/encuesta.router"));
const pregunta_router_1 = __importDefault(require("./router/pregunta.router"));
const encuesta_usuario_router_1 = __importDefault(require("./router/encuesta-usuario.router"));
// import encuestaRouter from './router/encuesta.router'; // (Lo descomentaremos después)
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Importante para leer el JSON del body
// Rutas
app.use('/api/usuarios', usuario_router_1.default);
app.use('/api/encuestas', encuesta_router_1.default);
app.use('/api/preguntas', pregunta_router_1.default);
app.use('/api/respuestas', encuesta_usuario_router_1.default);
exports.default = app;
//este archivo es para verificar las rutas de mis archivos, es un gestor pero solo de eso para verificar no para meter algo de informacion porque para eso estan todos los demas 
// archivos
//# sourceMappingURL=app.js.map