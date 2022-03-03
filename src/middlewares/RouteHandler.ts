import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFoundError";

export class RouteHandler {
  async handler(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    next(new NotFoundError(["Rota não encontrada, tente '/' ou /calcular."]));
  }
}
