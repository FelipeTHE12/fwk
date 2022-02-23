import { numberSchema } from "../validations/IsNumberValidaton";
import { NextFunction, Request, Response } from "express";

export class IsNumberMiddleware {
  handler(request: Request, response: Response, next: NextFunction) {
    console.log("Entrou no middlware");
    response.send({});
    return;
  }
}
