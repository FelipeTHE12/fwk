import { NextFunction, Request, Response } from "express";
import { IsNumberValidRequest } from "../IsNumberValidRequest";
import { NumberNotValidError } from "../../errors/NumberNotValidError";
import { NotFoundError } from "../../errors/NotFoundError";

describe("IsNumberValidRequest", () => {
  const isNumberValidRequest = new IsNumberValidRequest();

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

  test("Deve chamar a função next 1 vez com parametro de erro, Quando não fornecido QueryParams", async () => {
    isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 vez sem parametro, fornecido um QueryParams com numero válido", async () => {
    mockRequest = {
      query: {
        numero: "45",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith();
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "asfdafsdfads",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "true",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "false",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "0",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "-1",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "1000001",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "3.00001",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "null",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });

  test("Deve chamar a função next 1 com argumento de erro, fornecido um QueryParams com uma string nao número", async () => {
    mockRequest = {
      query: {
        numero: "",
      },
    };

    await isNumberValidRequest.handler(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toBeCalledTimes(1);
    expect(nextFunction).toBeCalledWith(new NumberNotValidError([""]));
  });
});
