import { Router } from "express";

import { productsRoutes } from "@/routes/productsRoutes.js";
import { tablesRoutes } from "./tablesRoutes.js";
import { tablesSessionsRoutes } from "./tablesSessionsRoutes.js";
import { ordersRoutes } from "./ordersRoutes.js";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/orders", ordersRoutes);

export { routes };
