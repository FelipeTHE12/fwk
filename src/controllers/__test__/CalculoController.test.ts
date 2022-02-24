import request from "supertest";
import { app } from "../../app";
import { CalculoController } from "../CalculoController";
import { NextFunction, Request, Response } from "express";

describe("CalculoController", () => {
  describe("Valida funcionamento do controller", () => {
    test("Deve retornar 200", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: 45 })
        .expect(200);

      const { numerosPrimos, numerosDivisores } = response.body[0];
      expect(numerosDivisores).toStrictEqual([1, 3, 5, 9, 15, 45]);
      expect(numerosPrimos).toStrictEqual([3, 5]);
    });
  });

  describe("Valida dados da Request", () => {
    test("Deve retornar 400 quando receber 0 como número", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: 0 })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com um número abaixo de 0", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: -1 })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com um número maior que 1.000.000", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: 1000001 })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com com um numero em forma de string", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: "1000001" })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de  boolean", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: false })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de  boolean", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: true })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma de array", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: [] })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero em forma objeto", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: {} })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com pontos flutuantes", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: 33.00001 })
        .expect(400);
    });

    test("Deve retornar 400 quando receber o campo numero com valor null", async () => {
      const response = await request(app)
        .get("/")
        .send({ numero: null })
        .expect(400);
    });
  });
});
