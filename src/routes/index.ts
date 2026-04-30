import { Router } from "express";

import { productsRoutes } from "@/routes/productsRoutes.js";
import { tablesRoutes } from "./tablesRoutes.js";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);

export { routes };
