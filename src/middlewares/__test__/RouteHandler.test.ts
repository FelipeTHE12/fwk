import request from "supertest";
import { app } from "../../app";
import { RouteHandler } from "../RouteHandler";
import { Request, NextFunction, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";

describe("RouteHandler", () => {
  const routeHandler = new RouteHandler();

  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
    nextFunction = jest.fn();
  });

  test("Deve retornar 404 em rotas não usadas", async () => {
    const response = await request(app).get(`/*`).expect(404);
  });

  test("Deve retornar a mensagem padrão quando é uma rota não usada", async () => {
    const response = await request(app).get(`/*`).expect(404);
    const { errors } = response.body;
    expect(errors).toEqual([
      { message: "Rota não encontrada, tente '/' ou /calcular." },
    ]);
  });

  test("Deve retornar status diferente de 404 em uma rota usada", async () => {
    const response = await request(app).get(`/calcular`);
    expect(response.status != 404).toBeTruthy;
  });

  test("A nextFunction deve ser chamada apenas uma/1 vez", async () => {
    routeHandler.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
  });

  test("A nextFunction deve ser chamada com o NotFoundError como parametro", async () => {
    routeHandler.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toHaveBeenCalledWith(new NotFoundError([]));
  });
});
