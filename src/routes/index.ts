import { Router } from "express";

import { productsRoutes } from "@/routes/productsRoutes.js";
import { tablesRoutes } from "./tablesRoutes.js";
import { tablesSessionsRoutes } from "./tablesSessionsRoutes.js";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);

export { routes };
