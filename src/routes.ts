import { Router } from "express";
import { IsNumberValidRequest } from "./middlewares/IsNumberValidRequest";
import { CalculoController } from "./controllers/CalculoController";
import { RouteHandler } from "./middlewares/RouteHandler";

const router = Router();

const isNumberValidRequest = new IsNumberValidRequest();
const calculoController = new CalculoController();
const routeHandler = new RouteHandler();

router.get("/calcular", isNumberValidRequest.handler, calculoController.handle);

router.all("*", routeHandler.handler);

export { router };
