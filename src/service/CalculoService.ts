import { NumberNotValidError } from "../errors/NumberNotValidError";
import { calcularNumerosDivisores } from "../util/calcularNumerosDivisores";
import { calcularNumerosPrimos } from "../util/calcularNumerosPrimos";

export class CalculoService {
  async calcularNumerosPrimosEDivisores(numero: number): Promise<Object> {
    try {
      const numerosPrimos: number[] = await calcularNumerosPrimos(numero);
      const numerosDivisores: number[] = await calcularNumerosDivisores(numero);

      if (!numerosPrimos || !numerosDivisores) {
        throw new NumberNotValidError(["Número fornecido não é valido"]);
      }

      return {
        numerosPrimos: numerosPrimos,
        numerosDivisores: numerosDivisores,
      };
    } catch (error) {
      //Logar
    }
    //Verificar
  }
}
