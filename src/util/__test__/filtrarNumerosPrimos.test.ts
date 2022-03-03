import { filtrarNumerosPrimos } from "../filtrarNumerosPrimos";
import { NumPrimosAte100 } from "../../test/data/NumPrimosAte100";
import { logger } from "../../config/Winston";

describe("filtrarNumerosPrimos", () => {
  describe("Verificar lógica do método", () => {
    let arrayAte100 = [];

    for (let i = 1; i <= 100; i++) {
      arrayAte100.push(i);
    }

    expect(arrayAte100.length).toEqual(100);
    const novoArray = filtrarNumerosPrimos(arrayAte100);
    expect(novoArray.length).toEqual(NumPrimosAte100.length);
    expect(novoArray).toEqual(NumPrimosAte100);
  });

  describe("Verificar filtro de valores invalidos", () => {
    test("Vai retirar valor nulo do array e so achar os primos", () => {
      const array = [2, 3, 5, null, 11];
      const novoArray = filtrarNumerosPrimos(array);
      expect(novoArray).toEqual([2, 3, 5, 11]);
    });

    test("Vai retirar valor 0 do array e so achar os primos", () => {
      const array = [2, 3, 5, 0, 11];
      const novoArray = filtrarNumerosPrimos(array);
      expect(novoArray).toEqual([2, 3, 5, 11]);
    });

    test("Vai retirar valor -1 do array e so achar os primos", () => {
      const array = [2, 3, 5, -1, 11];
      const novoArray = filtrarNumerosPrimos(array);
      expect(novoArray).toEqual([2, 3, 5, 11]);
    });

    test("Vai retirar valor 1.000.001 do array e so achar os primos", () => {
      const array = [2, 3, 5, 1000001, 11];
      const novoArray = filtrarNumerosPrimos(array);
      expect(novoArray).toEqual([2, 3, 5, 11]);
    });

    test("Vai retirar valor float/decimal do array e so achar os primos", () => {
      const array = [2, 3, 5, 33.4, 11];
      const novoArray = filtrarNumerosPrimos(array);
      expect(novoArray).toEqual([2, 3, 5, 11]);
    });
  });
});
