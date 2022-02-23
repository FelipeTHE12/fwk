import { calcularNumerosDivisores } from "../calcularNumerosDivisores";

describe("Calcular Numeros Divisores", () => {
  test("Deve retornar os divisores corretos", () => {
    const divisoresDe45 = [1, 3, 5, 9, 15, 45];

    const divisoresTest = calcularNumerosDivisores(45);

    expect(divisoresTest).toEqual(divisoresDe45);
  });

  test("Deve retornar 1 quando receber o valor 1", () => {
    const divisoresTest = calcularNumerosDivisores(1);

    expect(divisoresTest).toEqual([1]);
  });

  test("Deve retornar undefined quando receber o valor 0", () => {
    const divisoresTest = calcularNumerosDivisores(0);

    expect(divisoresTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber string", () => {
    const divisoresTest = calcularNumerosDivisores("dauifhadsiuhfiau");

    expect(divisoresTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber boolean", () => {
    const divisoresTest = calcularNumerosDivisores("dauifhadsiuhfiau");

    expect(divisoresTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber um valor float/decimal", () => {
    const divisoresTest = calcularNumerosDivisores(30.4);

    expect(divisoresTest).toEqual(undefined);
  });
});
