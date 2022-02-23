import { CustomError } from "./CustomError";

export class NumberNotValidError extends CustomError {
  statusCode = 400;

  constructor(public errors: string[]) {
    super("Erro de validação dos parametros");
    //extending a built in class
    Object.setPrototypeOf(this, NumberNotValidError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err };
    });
  }
}
