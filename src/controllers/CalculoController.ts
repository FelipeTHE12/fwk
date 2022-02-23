import { Request, Response } from "express";
import { CalculoService } from "../service/CalculoService";

export class CalculoController {
  async handle(request: Request, response: Response) {
    try {
      const { numero } = request.body;
      const calculoService = new CalculoService();
      const a = await calculoService.calcularNumerosPrimosEDivisores(numero);
      response.json();
    } catch (error) {
      //Logar
    }
    //Verificar
  }
}
