import { calcularNumerosPrimos } from "../calcularNumerosPrimos";

describe("Calcular Numeros Primos", () => {
  test("Deve retornar os divisores corretos", () => {
    const divisoresDe45 = [3, 5];

    const numPrimosTest = calcularNumerosPrimos(45);

    expect(numPrimosTest).toEqual(divisoresDe45);
  });

  test("Não pode retornar números repetidos", () => {
    const numPrimosTest = calcularNumerosPrimos(100).length;
    const numPrimosComSet = new Set(calcularNumerosPrimos(100)).size;

    expect(numPrimosTest).toBe(numPrimosComSet);
  });

  test("Deve retornar undefined quando receber valor 1", () => {
    const numPrimosTest = calcularNumerosPrimos(1);

    expect(numPrimosTest).toEqual(undefined);
  });

  test("Se o número for maior que 1.000.000 deve retornar undefined", () => {
    const numPrimosTest = calcularNumerosPrimos(1000001);

    expect(numPrimosTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber o valor 0", () => {
    const numPrimosTest = calcularNumerosPrimos(0);

    expect(numPrimosTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber um valor menor que 0", () => {
    const numPrimosTest = calcularNumerosPrimos(-1);

    expect(numPrimosTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber um valor float/decimal", () => {
    const numPrimosTest = calcularNumerosPrimos(30.4);

    expect(numPrimosTest).toEqual(undefined);
  });
});
