import { number } from "yup/lib/locale";
import { calcularNumerosDivisores } from "../util/calcularNumerosDivisores";
import { calcularNumerosPrimos } from "../util/calcularNumerosPrimos";

export class CalculoService {
  async execute(numero: number): Promise<Object> {
    try {
      const numerosPrimos: number[] = await calcularNumerosPrimos(numero);
      const numerosDivisores: number[] = await calcularNumerosDivisores(numero);

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
