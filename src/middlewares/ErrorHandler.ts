import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/CustomError";

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log("oh yeah");
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(500).send({
    errors: [{ message: "Um erro aconteceu, favor contatar administradores." }],
  });
};
