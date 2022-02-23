import { NumberNotValidError } from "../errors/NumberNotValidError";
import { calcularNumerosDivisores } from "../util/calcularNumerosDivisores";
import { calcularNumerosPrimos } from "../util/calcularNumerosPrimos";

export class CalculoService {
  async calcularNumerosPrimosEDivisores(numero: number): Promise<Object> {
    const numerosPrimos: number[] = await calcularNumerosPrimos(numero);
    const numerosDivisores: number[] = await calcularNumerosDivisores(numero);

    if (!numerosPrimos || !numerosDivisores) {
      return;
    }

    return {
      numerosPrimos,
      numerosDivisores,
    };
  }
}
