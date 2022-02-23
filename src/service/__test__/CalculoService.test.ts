import { CalculoService } from "../CalculoService";

const calculoService = new CalculoService();

describe("Service calculo", () => {
  test("Recebendo valores VÁLIDOS, de números primos e primitivos, deve voltar um objeto com o mesmo", async () => {
    const result = await calculoService.calcularNumerosPrimosEDivisores(45);
    const { numerosPrimos, numerosDivisores } = result[0];
    expect(numerosDivisores).toStrictEqual([1, 3, 5, 9, 15, 45]);
    expect(numerosPrimos).toStrictEqual([3, 5]);
  });

  test("Recebendo número 0 deve retornar divisor com apenas o número 1 e primos vazio", async () => {
    const result = await calculoService.calcularNumerosPrimosEDivisores(1);
    const { numerosPrimos, numerosDivisores } = result[0];
    expect(numerosDivisores).toStrictEqual([1]);
    expect(numerosPrimos).toStrictEqual([]);
  });

  test("Recebendo um número menor que 0 deve retornar undefined", async () => {
    const result = await calculoService.calcularNumerosPrimosEDivisores(-1);
    expect(result).toBe(undefined);
  });

  test("Recebendo número  0 deve retornar undefined", async () => {
    const result = await calculoService.calcularNumerosPrimosEDivisores(-1);
    expect(result).toBe(undefined);
  });

  test("Recebendo número  maior que 1.000.000 deve retornar undefined", async () => {
    const result = await calculoService.calcularNumerosPrimosEDivisores(
      1000001
    );
    expect(result).toBe(undefined);
  });
});
