import { Request, Response } from "express";
import { CalculoService } from "../service/CalculoService";

export class CalculoController {
  async handle(request: Request, response: Response) {
    try {
      const calculoService = new CalculoService();
      const a = await calculoService.execute();
      response.send(a).status(200);
      console.log(a);
    } catch (error) {
      console.log(error);
    }
  }
}
