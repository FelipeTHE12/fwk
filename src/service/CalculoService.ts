import { calcularNumerosPrimos } from "../util/calcularNumerosPrimos";
import { calcularNumerosDivisores } from "../util/calcularNumerosDivisores";
import { isValidNumber } from "../util/isValidNumber";

export class CalculoService {
  async calcularNumerosPrimosEDivisores(numero: number): Promise<Object> {
    if (!isValidNumber(numero)) {
      return;
    }

    if (numero === 1) {
      return [{ numerosPrimos: [], numerosDivisores: [1] }];
    }

    const numerosPrimos: number[] = await calcularNumerosPrimos(numero);
    const numerosDivisores: number[] = await calcularNumerosDivisores(numero);

    if (!numerosPrimos && !numerosDivisores) {
      return;
    }

    return [
      {
        numerosPrimos,
        numerosDivisores,
      },
    ];
  }
}
