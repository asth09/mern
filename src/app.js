import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import clientesRoutes from "./routes/clientes.routes.js";
import produtosRoutes from "./routes/productos.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import entradaRoutes from "./routes/entrada.routes.js";
import salidaRoutes from "./routes/salida.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", clientesRoutes);
app.use("/api", produtosRoutes);
app.use("/api", proveedorRoutes);
app.use("/api", entradaRoutes);
app.use("/api", salidaRoutes);


export default app;