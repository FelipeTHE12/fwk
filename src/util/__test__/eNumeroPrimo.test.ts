import { eNumeroPrimo } from "../eNumeroPrimo";
import { NumPrimosAte100 } from "../../test/data/NumPrimosAte100";

describe("eNumeroPrimo", () => {
  describe("Verifica lógica do método", () => {
    test("Verifica se os seguintes números primos de 1 até 100 vão retornar true", () => {
      let countNumerosPrimos = 0;
      let counNumerosNaoPrimos = 0;

      let arrayPrimos = [];
      let arrayNaoPrimos = [];

      for (let i = 1; i <= 100; i++) {
        if (eNumeroPrimo(i) === true) {
          countNumerosPrimos++;
          arrayPrimos.push(i);
        } else {
          counNumerosNaoPrimos++;
          arrayNaoPrimos.push(i);
        }
      }

      expect(arrayPrimos).toEqual(NumPrimosAte100);
      expect(countNumerosPrimos).toEqual(NumPrimosAte100.length);
      expect(100 - NumPrimosAte100.length).toEqual(arrayNaoPrimos.length);
    });
  });

  describe("Verificar se número é valido", () => {
    test("Se o número for maior que 1.000.000 deve retornar undefined", () => {
      const divisoresTest = eNumeroPrimo(1000001);
      expect(divisoresTest).toEqual(undefined);
    });

    test("Deve retornar undefined quando receber o valor 0", () => {
      const divisoresTest = eNumeroPrimo(0);
      expect(divisoresTest).toEqual(undefined);
    });

    test("Deve retornar undefined quando receber um valor menor que 0", () => {
      const divisoresTest = eNumeroPrimo(-1);
      expect(divisoresTest).toEqual(undefined);
    });

    test("Deve retornar undefined quando receber um valor float/decimal", () => {
      const divisoresTest = eNumeroPrimo(30.4);
      expect(divisoresTest).toEqual(undefined);
    });

    test("Deve retornar undefined quando receber um valor float/decimal", () => {
      const divisoresTest = eNumeroPrimo(null);
      expect(divisoresTest).toEqual(undefined);
    });
  });
});
