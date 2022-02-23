import { calcularNumerosDivisores } from "../calcularNumerosDivisores";

describe("Calcular Numeros Divisores", () => {
  test("Deve retornar os divisores corretos", () => {
    const divisoresDe45 = [1, 3, 5, 9, 15, 45];

    const divisoresTest = calcularNumerosDivisores(45);

    expect(divisoresTest).toEqual(divisoresDe45);
  });

  test("Não pode retornar números repetidos", () => {
    const divisoresTest = calcularNumerosDivisores(100).length;
    const divisoresComSet = new Set(calcularNumerosDivisores(100)).size;

    expect(divisoresTest).toBe(divisoresComSet);
  });

  test("Deve retornar 1 quando receber o valor 1", () => {
    const divisoresTest = calcularNumerosDivisores(1);

    expect(divisoresTest).toEqual([1]);
  });

  test("Se o número for maior que 1.000.000 deve retornar undefined", () => {
    const divisoresTest = calcularNumerosDivisores(1000001);

    expect(divisoresTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber o valor 0", () => {
    const divisoresTest = calcularNumerosDivisores(0);

    expect(divisoresTest).toEqual(undefined);
  });

  test("Deve retornar undefined quando receber um valor float/decimal", () => {
    const divisoresTest = calcularNumerosDivisores(30.4);

    expect(divisoresTest).toEqual(undefined);
  });
});
