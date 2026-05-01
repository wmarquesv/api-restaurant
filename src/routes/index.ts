import { Router } from "express";

import { productsRoutes } from "@/routes/productsRoutes.js";
import { tablesRoutes } from "./tablesRoutes.js";
import { tablesSessionsRouter } from "./tablesSessionsRoutes.js";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRouter);

export { routes };
