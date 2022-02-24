import { Request, Response, NextFunction } from "express";
import { logger } from "../config/Winston";
import { CustomError } from "../errors/CustomError";

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    logger.info(`Erro customizado => ${err.message}`);
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  logger.info(`Erro inesperado`);
  res.status(500).send({
    errors: [{ message: "Um erro aconteceu, favor contatar administradores." }],
  });
};
