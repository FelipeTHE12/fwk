import { numberSchema } from "../validations/IsNumberValidaton";
import { NextFunction, Request, Response } from "express";
import { NumberNotValidError } from "../errors/NumberNotValidError";

export class IsNumberValidRequest {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const { numero } = request.query;
      await numberSchema.validate({ numero: numero });
      next();
    } catch (err) {
      next(new NumberNotValidError(err.errors));
    }
  }
}
