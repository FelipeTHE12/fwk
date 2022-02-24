import { CalculoService } from "../CalculoService";

const calculoService = new CalculoService();

describe("CalculoService", () => {
  test("Recebendo valores VÁLIDOS, de números primos e primitivos, deve voltar um objeto com o mesmo", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(45);
    const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
    expect(numerosDivisores).toStrictEqual([1, 3, 5, 9, 15, 45]);
    expect(numerosPrimos).toStrictEqual([3, 5]);
  });

  test("Recebendo valores VÁLIDOS, de números primos e primitivos, deve voltar um objeto sem REPETIÇÔES", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(45);
    const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
    const numerosPrimosNaoRepetidos = new Set(numerosPrimos);
    const numerosDivisoresNaoRepetidos = new Set(numerosDivisores);

    expect(numerosPrimos.length).toEqual(numerosPrimosNaoRepetidos.size);
    expect(numerosDivisores.length).toEqual(numerosDivisoresNaoRepetidos.size);
  });

  test("Recebendo número 0 deve retornar divisor com apenas o número 1 e primos vazio", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(1);
    const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
    expect(numerosDivisores).toStrictEqual([1]);
    expect(numerosPrimos).toStrictEqual([]);
  });

  test("Recebendo um número menor que 0 deve retornar undefined", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(-1);
    expect(resultadoOperacoes).toBe(undefined);
  });

  test("Recebendo número  0 deve retornar undefined", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(-1);
    expect(resultadoOperacoes).toBe(undefined);
  });

  test("Recebendo número  flutuante deve retornar undefined", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(3.011111);
    expect(resultadoOperacoes).toBe(undefined);
  });

  test("Recebendo número  maior que 1.000.000 deve retornar undefined", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(1000001);
    expect(resultadoOperacoes).toBe(undefined);
  });

  test("Recebendo número  null deve retornar undefined", async () => {
    const resultadoOperacoes =
      await calculoService.calcularNumerosPrimosEDivisores(null);
    expect(resultadoOperacoes).toBe(undefined);
  });
});
