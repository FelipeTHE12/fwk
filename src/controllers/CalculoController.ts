import { NextFunction, Request, Response } from "express";
import { NumberNotValidError } from "../errors/NumberNotValidError";
import { CalculoService } from "../service/CalculoService";

export class CalculoController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const calculoService = new CalculoService();

    try {
      const { numero } = request.query;

      const resultado = await calculoService.calcularNumerosPrimosEDivisores(
        Number(numero)
      );

      if (resultado instanceof NumberNotValidError) {
        throw resultado;
      }

      response.json(resultado);
    } catch (error) {
      next(error);
    }
  }
}
