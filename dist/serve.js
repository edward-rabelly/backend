"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_config_1 = require("./config/database.config");
const PORT = process.env.PORT || 3000;
async function startServer() {
    // 1. Probamos la conexión a la base de datos primero
    await (0, database_config_1.testConnection)();
    // 2. Si la conexión es exitosa, levantamos el servidor
    app_1.default.listen(PORT, () => {
        console.log(` API ejecutándose en http://localhost:${PORT}`);
    });
}
startServer();
//# sourceMappingURL=serve.js.map