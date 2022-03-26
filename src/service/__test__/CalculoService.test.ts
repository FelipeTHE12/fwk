import { CalculoService } from "../CalculoService";
import { eNumeroPrimo } from "../../util/eNumeroPrimo";
import { NumberNotValidError } from "../../errors/NumberNotValidError";

describe("CalculoService", () => {
  const calculoService = new CalculoService();

  describe("Logica do metodo", () => {
    test("Recebendo valores VÁLIDOS, de números primos e primitivos, deve voltar um objeto com o mesmo", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(45);
      const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
      expect(numerosDivisores).toStrictEqual([1, 3, 5, 9, 15, 45]);
      expect(numerosPrimos).toStrictEqual([3, 5]);
    });

    test("Recebendo valor 100, deve voltar de acordo com os valores referencia", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(100);
      const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
      expect(numerosDivisores).toStrictEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
      expect(
        numerosPrimos.forEach((num) => {
          expect(eNumeroPrimo(num)).toBe(true);
        })
      );
    });
  });

  describe("Validações do campo numero", () => {
    test("Se o array de divisores ou de primos, qualquer um dos dois for vazio, deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(45);
      const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
      const numerosPrimosNaoRepetidos = new Set(numerosPrimos);
      const numerosDivisoresNaoRepetidos = new Set(numerosDivisores);

      expect(numerosPrimos.length).toEqual(numerosPrimosNaoRepetidos.size);
      expect(numerosDivisores.length).toEqual(
        numerosDivisoresNaoRepetidos.size
      );
    });

    test("Recebendo número 1 deve retornar divisor com apenas o número 1 e primos vazio", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(1);
      const { numerosPrimos, numerosDivisores } = resultadoOperacoes[0];
      expect(numerosDivisores).toStrictEqual([1]);
      expect(numerosPrimos).toStrictEqual([]);
    });

    test("Recebendo um número menor que 0 deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(-1);
      expect(resultadoOperacoes).toEqual(
        new NumberNotValidError(["Número fornecido não é valido."])
      );
    });

    test("Recebendo número  0 deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(-1);
      expect(resultadoOperacoes).toEqual(
        new NumberNotValidError(["Número fornecido não é valido."])
      );
    });

    test("Recebendo número  flutuante deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(3.011111);
      expect(resultadoOperacoes).toEqual(
        new NumberNotValidError(["Número fornecido não é valido."])
      );
    });

    test("Recebendo número  maior que 1.000.000 deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(1000001);
      expect(resultadoOperacoes).toEqual(
        new NumberNotValidError(["Número fornecido não é valido."])
      );
    });

    test("Recebendo número  null deve retornar undefined", async () => {
      const resultadoOperacoes =
        await calculoService.calcularNumerosPrimosEDivisores(null);
      expect(resultadoOperacoes).toEqual(
        new NumberNotValidError(["Número fornecido não é valido."])
      );
    });
  });
});
