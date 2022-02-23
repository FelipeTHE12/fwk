import { numberSchema } from "../validations/IsNumberValidaton";
import { NextFunction, Request, Response } from "express";
import { NumberNotValidError } from "../errors/NumberNotValidError";

export class IsNumberValidRequest {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      await numberSchema.validate(request.body);
      next();
    } catch (err) {
      next(new NumberNotValidError(err.errors));
    }
  }
}
