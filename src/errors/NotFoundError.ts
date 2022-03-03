import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(public errors: string[]) {
    super("Rota não encontrada");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err };
    });
  }
}
