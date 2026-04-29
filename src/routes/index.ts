import { Router } from "express";

import { productsRoutes } from "@/routes/productsRoutes.js";

const routes = Router();
routes.use("/products", productsRoutes);

export { routes };
