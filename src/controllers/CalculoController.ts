import { Request, Response } from "express";
import { CalculoService } from "../service/CalculoService";

export class CalculoController {
  async handle(request: Request, response: Response) {
    try {
      const {request.body} = number;
      const calculoService = new CalculoService();
      const a = await calculoService.execute();
      response.json()
    } catch (error) {
      //Logar
    }
    //Verificar
  }
}
