import { NextFunction, Router, Request, Response, response } from "express";
import { IsNumberValidRequest } from "./middlewares/IsNumberValidRequest";
import { CalculoController } from "./controllers/CalculoController";
import { NotFoundError } from "./errors/NotFoundError";

const router = Router();

const isNumberValidRequest = new IsNumberValidRequest();
const calculoController = new CalculoController();

router.get("/", () => response.send("").status(200));

router.get("/calcular", isNumberValidRequest.handler, calculoController.handle);

router.all("*", (request: Request, response: Response, next: NextFunction) => {
  throw new NotFoundError();
});

export { router };
