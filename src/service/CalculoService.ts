import { filtrarNumerosPrimos } from "../util/filtrarNumerosPrimos";
import { calcularNumerosDivisores } from "../util/calcularNumerosDivisores";
import { eNumeroValido } from "../util/eNumeroValido";
import { NumberNotValidError } from "../errors/NumberNotValidError";

export class CalculoService {
  async calcularNumerosPrimosEDivisores(numero: number): Promise<Object> {
    if (!eNumeroValido(numero)) {
      return new NumberNotValidError(["Número fornecido não é valido."]);
    }

    if (numero === 1) {
      return [{ numerosPrimos: [], numerosDivisores: [1] }];
    }

    const numerosDivisores: number[] = await calcularNumerosDivisores(numero);
    //Filtrar os numeros primos que vieram do array de devisores
    const numerosPrimos: number[] = await filtrarNumerosPrimos(
      numerosDivisores
    );

    return [
      {
        numerosPrimos,
        numerosDivisores,
      },
    ];
  }
}
