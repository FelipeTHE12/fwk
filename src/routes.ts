import { Router } from "express";
import { IsNumberValidMiddlware } from "./middlewares/IsNumberValid";
import { CalculoController } from "./controllers/CalculoController";
const router = Router();

const isNumberValidMiddlware = new IsNumberValidMiddlware();
const calculoController = new CalculoController();

router.get("/", isNumberValidMiddlware.handler, calculoController.handle);

export { router };
