import { NextFunction, Request, Response } from "express";
import { NumberNotValidError } from "../errors/NumberNotValidError";
import { CalculoService } from "../service/CalculoService";

export class CalculoController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const calculoService = new CalculoService();
    try {
      const { numero } = request.body;

      const resultado = await calculoService.calcularNumerosPrimosEDivisores(
        numero
      );

      if (!resultado) {
        throw new NumberNotValidError(["Numero fornecido não é valido"]);
      }

      response.json(resultado);
    } catch (error) {
      next(error);
    }
  }
}
