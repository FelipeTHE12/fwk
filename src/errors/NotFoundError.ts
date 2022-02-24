import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Rota não encontrada");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string }[] {
    return [{ message: "Rota não encontrada, tente '/' ou /calcular." }];
  }
}
