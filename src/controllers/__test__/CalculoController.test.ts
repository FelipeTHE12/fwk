import request from "supertest";
import { app } from "../../app";
import { eNumeroPrimo } from "../../util/eNumeroPrimo";
import { NextFunction, Request, Response } from "express";
import { CalculoController } from "../CalculoController";
import { NumberNotValidError } from "../../errors/NumberNotValidError";

describe("CalculoController", () => {
  describe("Valida funcionamento do controller", () => {
    test("Deve retornar 200 quando iserido valores válidos - 45", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${45}`)
        .expect(200);

      const { numerosPrimos, numerosDivisores } = response.body[0];
      expect(numerosDivisores).toStrictEqual([1, 3, 5, 9, 15, 45]);
      expect(numerosPrimos).toStrictEqual([3, 5]);
    });

    test("Deve retornar 200 quando iserido valores válidos - 100", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${100}`)
        .expect(200);

      const { numerosPrimos, numerosDivisores } = response.body[0];
      expect(numerosDivisores).toStrictEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
      expect(
        numerosPrimos.forEach((num) => {
          expect(eNumeroPrimo(num)).toBe(true);
        })
      );
    });

    test("Não deve ter valores repetidos e retornar 200 quando iserido valores válidos", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${45}`)
        .expect(200);

      const { numerosPrimos, numerosDivisores } = response.body[0];
      const numerosPrimosNaoRepetidos = new Set(numerosPrimos);
      const numerosDivisoresNaoRepetidos = new Set(numerosDivisores);

      expect(numerosPrimos.length).toEqual(numerosPrimosNaoRepetidos.size);
      expect(numerosDivisores.length).toEqual(
        numerosDivisoresNaoRepetidos.size
      );
    });
  });

  describe("Valida excecoes no controller", () => {
    const calculoController = new CalculoController();

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

    test("Se o controller receber um número não válido, deve throw NumberNotValid", async () => {
      mockRequest = {
        query: {
          numero: "DASIHDAISHDIASHui",
        },
      };

      await calculoController.handle(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toBeCalledTimes(1);
      expect(nextFunction).toBeCalledWith(new NumberNotValidError([]));
    });
  });

  describe("Valida dados da Request", () => {
    test("Deve retornar 400 quando receber 0 como número", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${0}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com um número abaixo de 0", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${-1}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com um número maior que 1.000.000", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${1000001}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com com um numero em forma de string", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${"1000001"}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de  boolean", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${false}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de  boolean", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${true}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de array", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${[]}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma objeto", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${{}}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com pontos flutuantes", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${33.00001}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com valor null", async () => {
      const response = await request(app)
        .get(`/calcular?numero=${null}`)
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com valor vazio", async () => {
      const response = await request(app).get(`/calcular?numero=`).expect(400);
    });
  });
});
