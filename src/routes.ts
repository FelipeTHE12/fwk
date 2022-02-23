import { Router } from "express";
import { IsNumberValidRequest } from "./middlewares/IsNumberValidRequest";
import { CalculoController } from "./controllers/CalculoController";
const router = Router();
//Colocar not found
const isNumberValidRequest = new IsNumberValidRequest();
const calculoController = new CalculoController();

router.get("/", isNumberValidRequest.handler, calculoController.handle);

export { router };
