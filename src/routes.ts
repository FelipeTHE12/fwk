import { Router } from "express";
import { IsNumberMiddleware } from "./middlewares/IsNumberValidMiddlware";
import { CalculoController } from "./controllers/CalculoController";
const router = Router();

const isNumberMiddleware = new IsNumberMiddleware();
const calculoController = new CalculoController();

router.get("/", isNumberMiddleware.handler, calculoController.handle);

export { router };
