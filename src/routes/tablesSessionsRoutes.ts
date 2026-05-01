import Router from "express";

import { TablesSessionsController } from "../controllers/tablesSessionsController.js";

const tablesSessionsRouter = Router();
const tablesSessionsController = new TablesSessionsController();

tablesSessionsRouter.post("/", tablesSessionsController.create);

export { tablesSessionsRouter };
